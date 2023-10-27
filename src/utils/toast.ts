import { toast } from 'sonner'

export function toastError (text: string) {
  toast.error(text)
}

export function toastSuccess (text: string) {
  toast.success(text)
}
