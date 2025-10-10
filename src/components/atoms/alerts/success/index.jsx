import Swal from "sweetalert2";

const SuccessAlert = (title) => {
  Swal.fire({
    title,
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export default SuccessAlert;
