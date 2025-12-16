import React from "react";
import Modal from "../Modal";

function EditFlashCardModal({ ...delegated }) {
  return <Modal {...delegated} heading='Edit your card'></Modal>;
}

export default EditFlashCardModal;
