import React from 'react';
import { Portal } from 'react-portal';
import { Modal } from 'carbon-components-react';

const DeleteViewModal = ({ isShowing, cancelFn, confirmFn, sizeModal }) => (
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
        Selected views will be permanently deleted from your account.
      <br />
      <br />
      <strong>Caution:</strong> This cannot be undone.
      </p>
    </Modal>
  </Portal>
);

export default DeleteViewModal;
