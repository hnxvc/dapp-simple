import { useContext } from 'react';
import { ModalContext } from '../contexts/ModalProvider';

const useModal = (modalContent) => {
  const { onDismiss, onPresent } = useContext(ModalContext);

  const handlePresent = () => {
    onPresent(modalContent);
  };

  return [handlePresent, onDismiss];
};

export default useModal;
