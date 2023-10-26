import { FILE_SIZE_NUMBER, MAX_FILE_SIZE, VALID_IMAGE_EXTENSION, VALID_IMAGE_TYPES } from '@/contants'

export const ERROR_MESSAGES = {
  invalidExtention: `Se esperaba un archivo de imagen con el formato ${VALID_IMAGE_EXTENSION.join(', ')}`,
  invalidSize: `Tamaño maximo de archivo excedido (maximo de ${FILE_SIZE_NUMBER}MB)`,
  invalidLength: 'Se esperaba 1 archivo',
  default: 'Archivo inválido'
}

export function isFileInstance (file: any) {
  return file instanceof File
}

export function validateFileList (fileList: any) {
  return Array.from(fileList).every(isFileInstance)
}

export function validateFileLength (fileList: FileList, maxLength = 1) {
  return fileList?.length > 0 && fileList.length <= maxLength
}

export function isCorrectSize (fileList: FileList) {
  const file = fileList[0]
  return file?.size <= MAX_FILE_SIZE
}

export function isValidExtentionFile (fileList: FileList) {
  const file = fileList[0]
  return VALID_IMAGE_TYPES.includes(file?.type)
}
