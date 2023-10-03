import { LinkButton } from '@/components/link-button'
import { TextButton } from '@/components/text-button'

export function TotalToPay () {
  return (
    <div className="mb-5 ml-6 h-[565px] w-full bg-slate-200 md:my-6 md:mr-4 md:max-w-[334px]">
      <div className="flex flex-col gap-4 bg-slate-200 p-3 pt-12 text-lg font-semibold text-slate-600">
        <div className="flex justify-between border-t border-black px-4 py-2 pt-5">
          <p>Subtotal</p>
          <p>$10,000,00</p>
        </div>
        <div className="flex justify-between border-t border-black px-4 py-2 pt-5">
          <p>Descuento</p>
          <p>$0.00</p>
        </div>
        <div className="flex justify-between border-t border-black px-4 py-2 pt-5 font-bold text-black">
          <p>Total</p>
          <p>$10,000,00</p>
        </div>
      </div>
      <div className="mt-32">
        <div className="flex flex-col justify-between gap-4 bg-slate-200 p-2">
          <TextButton className="h-11 bg-teal-500" text="Finalizar compra" />
          <LinkButton className="h-11 bg-black" text="Seguir Explorando" href="/cart" />
        </div>
      </div>

    </div>

  )
}
