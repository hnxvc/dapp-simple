import React, { createContext, useState, useEffect, useCallback } from 'react'
import styled from 'styled-components'

export const ModalContext = createContext({
  onPresent: () => {},
  onDismiss: () => {}
})

function ModalProvider({ children }) {

  const [showModal, setShowModal] = useState(true)
  const [modalContent, setModalContent] = useState('')

  const handlePresent = (modalContent) => {
    setShowModal(true)
    setModalContent(modalContent)
  }

  const handleDisMiss = useCallback(() => {
    setShowModal(false)
    setModalContent(null)
  }, [setShowModal, setModalContent])

  const handleEscape = useCallback((e) => {
    if (e.code === 'Escape') {
      handleDisMiss()
    }
  }, [handleDisMiss])

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keyup',handleEscape)
    } else {
      window.removeEventListener('keyup', handleEscape)
    }
  }, [handleEscape, showModal])

  return (
    <ModalContext.Provider
      value={{
        onPresent: handlePresent,
        onDismiss: handleDisMiss
      }}
    >
      {children}
      {
        showModal && <StyledWrapModal>
          <StyledBackground onClick={handleDisMiss} />
          <StyledModal>
            {modalContent} xxx
          </StyledModal>
        </StyledWrapModal> 
      }

    </ModalContext.Provider>
  )
}

const StyledWrapModal = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  left: 0;
  height: 100%;
  display: flex;
  align-items: center;
  z-index: 4;
`

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`

const StyledModal = styled.div`
  max-width: 500px;
  width: 500px;
  min-height: 300px;
  border-radius: ${(props) => props.theme.radius}px;
  background: ${(props) => props.theme.bgColor};
  color: ${(props) => props.theme.textColor};
  margin: 0 auto;
  z-index: 3;
  padding: 15px;
`

export default ModalProvider
