import React, { useState } from 'react';
import Modal from './modal/Modal';
import CreateButton from './create/CreateButton';

const ProductCreationContainer = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <Modal visible={modalOpen} onClose={handleCloseModal} title="Product Creation"></Modal>
      <CreateButton onClick={handleOpenModal}/>
    </div>
  );
};

export default ProductCreationContainer;
