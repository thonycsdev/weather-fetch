import Swal, { SweetAlertIcon } from "sweetalert2";

const errorAlert = () =>
    Swal.fire({
        title: "Error!",
        text: "An error has occurred!",
        icon: "error",
        confirmButtonText: "Ok...",
    });

const successAlert = () =>
    Swal.fire({
        title: "Error!",
        text: "An error has occurred!",
        icon: "success",
        confirmButtonText: "Ok...",
    });
const notFoundAlert = () =>
    Swal.fire({
        title: "Location not found!",
        text: "Type again or try another location",
        icon: "question",
        confirmButtonText: "Ok",
    });
const genericAlert = (
    title: string,
    text: string,
    icon: SweetAlertIcon,
    confirmationButtonText: string
) =>
    Swal.fire({ title, text, icon, confirmButtonText: confirmationButtonText });

export { errorAlert, successAlert, notFoundAlert, genericAlert };
