import { FILE_SIZE_NUMBER, MAX_FILES_QUANTITY, MAX_FILE_SIZE, VALID_IMAGE_EXTENSION, VALID_IMAGE_TYPES } from '@/contants'
import { GENDER } from '@/types/enums'
import { z } from 'zod'

export const productCreateSchema = z.object({
  name: z.string({
    invalid_type_error: 'Nombre no valido',
    required_error: 'Nombre no valido'
  }).trim().toUpperCase().min(1, { message: 'Nombre no valido' }),
  price: z.number({
    invalid_type_error: 'El precio debe ser valido',
    required_error: 'El precio debe ser'
  }).gte(0, { message: 'Se esperaba un numero positivo' }),
  size: z.number({
    invalid_type_error: 'Talla no valida',
    required_error: 'Talla no valida'
  }).gte(0, { message: 'Se esperaba un numero positivo' }),
  stock: z.number({
    invalid_type_error: 'La cantidad disponible no es valida',
    required_error: 'La cantidad disponible no es valida'
  }).int().gte(0, { message: 'Se esperaba un numero positivo' }),
  extraPrice: z.number({
    invalid_type_error: 'Se esperaba un numero para el precio extra',
    required_error: 'Se esperaba un numero para el precio extra'
  }).gte(0, { message: 'Se esperaba un numero positivo' }).optional().default(0),
  details: z.string({
    invalid_type_error: 'Se esperaba un detalle en el producto',
    required_error: 'Se esperaba un detalle en el producto'
  }).trim().toLowerCase().min(1, { message: 'Los detalles no pueden estar vacios' }).optional().default(''),
  gender: z.nativeEnum(GENDER, {
    invalid_type_error: 'Se esperaba un genero',
    required_error: 'Se esperaba un genero'
  }),
  categories: z.array(z.string({
    invalid_type_error: 'Se esperaba una categoria',
    required_error: 'Se esperaba una categoria'
  }), {
    required_error: 'Se esperaba al menos una categoria'
  }),
  brandId: z.string({
    invalid_type_error: 'Se esperaba una marca',
    required_error: 'Se esperaba una marca'
  }),
  images: z.custom<FileList>()
    .refine((images) => Array.from(images).every((image: any) => image instanceof File), {
      message: 'Archivo inválido'
    })
    .refine((images) => images.length > 0, {
      message: 'Se esperaba un archivo'
    })
    .refine((images) => images.length <= MAX_FILES_QUANTITY, {
      message: `Se esperaba un maximo de ${MAX_FILES_QUANTITY} archivos`
    })
    .refine((images) => Array.from(images).every((image) => VALID_IMAGE_TYPES.includes(image.type)), {
      message: `Se esperaba un archivo de imagesn con el formato ${VALID_IMAGE_EXTENSION.join(', ')}`
    })
    .refine((images) => Array.from(images).every((image) => image.size <= MAX_FILE_SIZE), {
      message: `Tamaño maximo de archivo excedido (maximo de ${FILE_SIZE_NUMBER}MB)`
    })
}).refine((data) => {
  return data.gender !== undefined && data.brandId !== undefined
})
