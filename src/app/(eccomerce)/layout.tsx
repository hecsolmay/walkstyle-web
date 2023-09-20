export default function EcommerceLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <header className="text-2xl"><nav><ul><li>Link e-commerce</li></ul></nav></header>
      <main >{children}</main>
    </>
  )
}
