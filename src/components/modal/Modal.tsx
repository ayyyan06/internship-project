import React from "react";
import styles from "./modal.module.scss";

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  position: string;
}

interface ModalProps {
  item: DataType;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, onClose }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modalBox}>
        <button className={styles.close} onClick={onClose}>&times;</button>
        <div className={styles.info}>
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="" />
          <div><strong>id:</strong> {item.key}</div>
          <div><strong>Name:</strong> {item.name}</div>
          <div><strong>Age:</strong> {item.age}</div>
          <div><strong>Address:</strong> {item.address}</div>
          <div><strong>Position:</strong> {item.position}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
