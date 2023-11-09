const Months = Object.freeze([
  'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
  'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
]
)
export function getFormatedDate (date: string | Date) {
  if (typeof date === 'string') {
    date = new Date(Date.parse(date))
  }

  const day = date.getDate()
  const month = Months[date.getMonth()]
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}

export function getDateQueryFormat (date: string | Date) {
  if (typeof date === 'string') {
    date = new Date(Date.parse(date))
  }

  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${year}-${month}-${day}`
}
