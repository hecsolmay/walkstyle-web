interface SectionEccomerceProps {
  title: string
  children?: React.ReactNode
}

export default function SectionEccomerce ({ children, title }: SectionEccomerceProps) {
  return (
    <section className="flex flex-col gap-6">
      <div className="relative inset-x-0 -z-30 flex">
        <span className="absolute inset-x-0 top-1/2 h-px w-full border-0 bg-gray-400" />
        <h3 className="z-[1] mx-6 border border-slate-400 bg-white px-2 py-1 uppercase md:mx-8 lg:mx-12">{title}</h3>
      </div>

      {children}
    </section>
  )
}
