import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Dialog, Header } from './styles';
import { IconClose } from '../Icons';

const Modal = ({ isOpen, onClose, children }) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialogNode = dialogRef.current;

        if (isOpen) {
            dialogNode.showModal();
        } else {
            dialogNode.close();
        }

        const handleClose = () => onClose();

        dialogNode.addEventListener('close', handleClose);

        return () => {
            dialogNode.removeEventListener('close', handleClose);
        };
    }, [isOpen, onClose]);

    return (
        <Dialog ref={dialogRef}>
            <Header>
                <button onClick={() => dialogRef.current.close()}>
                    <IconClose />
                </button>
            </Header>
            {children}
        </Dialog>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
};

export default Modal;