export default function SearchPage ({
  searchParams
}: {
  searchParams: Record<string, string | string[] | undefined>
}) {
  console.log(searchParams)

  return (
    <>
      <h1>Search page</h1>
    </>
  )
}
