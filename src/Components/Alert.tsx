import Swal from 'sweetalert2';

export const AlertNow = () => Swal.fire({
    position: 'center',
    icon: 'success',
    title: `Your have sucessfully SignUp`,
    showConfirmButton: false,
    timer: 1500
  })