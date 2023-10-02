import { TBody, TH, THead, TR, Table } from '@/components/table'

interface ProductsTableProps {
  headers: string[]
  children?: React.ReactNode
}

export function AdminTable ({ headers, children }: ProductsTableProps) {
  return (
    <Table>
      <THead>
        <TR className='bg-gray-200'>
          {headers.map(title => (
            <TH key={title}>{title}</TH>
          ))}
        </TR>
      </THead>

      <TBody>
        {children}
      </TBody>
    </Table>
  )
}
