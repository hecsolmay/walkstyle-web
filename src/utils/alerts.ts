import Swal from 'sweetalert2'

interface WarnignAlertProps {
  title?: string
  text?: string
  confirmButtonText?: string
  cancelButtonText?: string
}

const DEFAULT_WARNING_ALERT: WarnignAlertProps = {
  title: 'Estas seguro?',
  text: 'No podras revertir esta accion',
  confirmButtonText: 'Si',
  cancelButtonText: 'No'
}

export async function WarningAlert ({
  title, cancelButtonText, confirmButtonText, text
}: WarnignAlertProps = DEFAULT_WARNING_ALERT) {
  const result = await Swal.fire({
    title,
    text,
    confirmButtonText,
    cancelButtonText,
    icon: 'warning',
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    showCancelButton: true
  })

  return result.isConfirmed
}
