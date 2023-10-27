import { validateFileList, validateFileLength, isValidExtentionFile, isCorrectSize, ERROR_MESSAGES } from '@/utils/validate'
import { z } from 'zod'

export const bannerAndImageShema = z.object({
  name: z.string().trim().toUpperCase().min(1, { message: 'Se esperaba un nombre valido' }),
  banner: z.custom<FileList>()
    .refine((banner) => {
      const isFileList = validateFileList(banner)
      const isCorrectLength = validateFileLength(banner)
      return isFileList && isCorrectLength
    }, { message: ERROR_MESSAGES.invalidLength })
    .refine((banner) => isCorrectSize(banner), {
      message: ERROR_MESSAGES.invalidSize
    })
    .refine((banner) => isValidExtentionFile(banner), {
      message: ERROR_MESSAGES.invalidExtention
    }),
  image: z.custom<FileList>()
    .refine((image) => {
      const isFileList = validateFileList(image)
      const isCorrectLength = validateFileLength(image)
      return isFileList && isCorrectLength
    }, { message: ERROR_MESSAGES.invalidLength })
    .refine((image) => isCorrectSize(image), {
      message: ERROR_MESSAGES.invalidSize
    })
    .refine((image) => isValidExtentionFile(image), {
      message: ERROR_MESSAGES.invalidExtention
    })
})

export const bannerAndImagePartialShema = z.object({
  name: z.string().trim().toUpperCase().min(1, { message: 'Se esperaba un nombre valido' })
    .optional(),
  banner: z.custom<FileList>()
    .refine((banner) => {
      if (banner.length === 0) return true
      const isFileList = validateFileList(banner)
      const isCorrectLength = validateFileLength(banner)
      return isFileList && isCorrectLength
    }, { message: ERROR_MESSAGES.invalidLength })
    .refine((banner) => banner.length === 0 || isCorrectSize(banner), {
      message: ERROR_MESSAGES.invalidSize
    })
    .refine((banner) => banner.length === 0 || isValidExtentionFile(banner), {
      message: ERROR_MESSAGES.invalidExtention
    }),
  image: z.custom<FileList>()
    .refine((image) => {
      if (image.length === 0) return true
      const isFileList = validateFileList(image)
      const isCorrectLength = validateFileLength(image)
      return isFileList && isCorrectLength
    }, { message: ERROR_MESSAGES.invalidLength })
    .refine((image) => image.length === 0 || isCorrectSize(image), {
      message: ERROR_MESSAGES.invalidSize
    })
    .refine((image) => image.length === 0 || isValidExtentionFile(image), {
      message: ERROR_MESSAGES.invalidExtention
    })

})
