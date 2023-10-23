import { FILE_SIZE_NUMBER, MAX_FILE_SIZE, VALID_IMAGE_EXTENSION, VALID_IMAGE_TYPES } from '@/contants'
import { z } from 'zod'

export const bannerAndImageShema = z.object({
  name: z.string().trim().toUpperCase().min(1, { message: 'Se esperaba un nombre en la categoria' }),
  banner: z.custom<FileList>()
    .refine((banner) => Array.from(banner).every((banner: any) => banner instanceof File), {
      message: 'Archivo inválido'
    })
    .refine((banner) => banner.length > 0, {
      message: 'Se esperaba un archivo'
    })
    .refine((banner) => banner.length <= 1, {
      message: 'Se esperaba un maximo de 1 archivos'
    })
    .refine((banner) => Array.from(banner).every((banner) => VALID_IMAGE_TYPES.includes(banner.type)), {
      message: `Se esperaba un archivo de bannern con el formato ${VALID_IMAGE_EXTENSION.join(', ')}`
    })
    .refine((banner) => Array.from(banner).every((banner) => banner.size <= MAX_FILE_SIZE), {
      message: `Tamaño maximo de archivo excedido (maximo de ${FILE_SIZE_NUMBER}MB)`
    }),
  image: z.custom<FileList>()
    .refine((image) => Array.from(image).every((image: any) => image instanceof File), {
      message: 'Archivo inválido'
    })
    .refine((image) => image.length > 0, {
      message: 'Se esperaba un archivo'
    })
    .refine((image) => image.length <= 1, {
      message: 'Se esperaba un maximo de 1 archivos'
    })
    .refine((image) => Array.from(image).every((image) => VALID_IMAGE_TYPES.includes(image.type)), {
      message: `Se esperaba un archivo de imagen con el formato ${VALID_IMAGE_EXTENSION.join(', ')}`
    })
    .refine((image) => Array.from(image).every((image) => image.size <= MAX_FILE_SIZE), {
      message: `Tamaño maximo de archivo excedido (maximo de ${FILE_SIZE_NUMBER}MB)`
    })
})
