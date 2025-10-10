import { Modal } from "antd";

const ModalViewDetail = ({ title, text, openModal, actionClose }) => {
  return (
    <>
      <Modal
        open={openModal}
        onCancel={actionClose}
        centered
        footer={null}
        title={title}
      >
        {text}
      </Modal>
    </>
  );
};

export default ModalViewDetail;
