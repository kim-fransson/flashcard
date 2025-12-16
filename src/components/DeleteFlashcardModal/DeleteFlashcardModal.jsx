import React from "react";
import Modal from "../Modal";

function DeleteFlashCardModal({ ...delegated }) {
  return <Modal {...delegated} heading='Delete this card?'></Modal>;
}

export default DeleteFlashCardModal;
