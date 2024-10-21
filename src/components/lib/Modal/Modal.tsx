import React from "react";
import Button from "../Button/Button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}
const Modal: React.FC<ModalProps> = ({isOpen, onClose, children}) => {
    return isOpen ? (
        <div>
            <Button onClick={onClose} label="Close"></Button>
            {children}
        </div>
    ) : null
}

export default Modal;
