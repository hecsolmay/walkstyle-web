export default function AdminLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header><nav><ul><li>Link admin</li></ul></nav></header>
      <main >{children}</main>
    </>
  )
}
