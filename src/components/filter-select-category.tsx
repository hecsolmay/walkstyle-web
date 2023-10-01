// Reemplaza con el ícono que desees utilizar

export function ProductFilter () {
  return (
    <div className="flex items-center">
      <label className="mr-2 text-cyan-500">
        Ordenar Por:
      </label>
      <div className="normal-case">
        <select
          className=" cursor-pointer bg-transparent text-cyan-500"
        >
          <option value="recientes">Recientes</option>
          <option value="mayorAMenor">Mayor a Menor precio</option>
          <option value="menorAMayor">Menor a Mayor precio</option>
          <option value="AZ">A-Z</option>
          <option value="ZA">Z-A</option>
        </select>

      </div>
    </div>
  )
}
