import { Modal } from "antd";

const ModalConfirmation = ({
  title,
  text,
  openModal,
  actionOk,
  actionCancel,
}) => {
  return (
    <>
      <Modal
        title={title}
        open={openModal}
        onOk={actionOk}
        onCancel={actionCancel}
        okText="Yes"
        cancelText="No"
        centered
      >
        {text}
      </Modal>
    </>
  );
};

export default ModalConfirmation;
