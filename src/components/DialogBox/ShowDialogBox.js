import Swal from 'sweetalert2';

const ShowDialogBox = (options) => {
  if (!options) {
    // Handle the case where options is not provided
    return Promise.reject('Options not provided');
  }

  const {
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonColor,
    cancelButtonColor,
    confirmButtonText,
    cancelButtonText,
    successTitle,
    successText,
  } = options;

  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton,
    confirmButtonColor,
    cancelButtonColor,
    confirmButtonText,
    cancelButtonText,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: successTitle,
        text: successText,
        icon: 'success',
      });
    }

    return result; // Return the result object
  });
};

export default ShowDialogBox;
