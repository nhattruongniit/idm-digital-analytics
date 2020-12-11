import React from 'react';
import { Portal } from 'react-portal';
import { Modal } from 'carbon-components-react';

const DeleteDocumentModal = ({ isShowing, sizeModal, cancelFn, confirmFn }) => (
  <Portal>
    <Modal
      open={isShowing}
      danger
      primaryButtonText="Delete"
      secondaryButtonText="Cancel"
      modalHeading="Are you sure?"
      onRequestClose={cancelFn}
      onRequestSubmit={confirmFn}
      size={sizeModal}
    >
      <p>
        Selected document(s) will be permanently deleted from your account.
      <br />
      <br />
      <strong>Caution:</strong> This cannot be undone.
      </p>
    </Modal>
  </Portal>
);

export default DeleteDocumentModal;
