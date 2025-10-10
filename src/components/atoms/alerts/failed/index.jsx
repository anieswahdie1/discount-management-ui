import Swal from "sweetalert2";

const FailedAlerts = (title) => {
  Swal.fire({
    title,
    icon: "error",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

export default FailedAlerts;
