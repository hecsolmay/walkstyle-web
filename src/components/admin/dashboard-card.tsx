import { cn } from '@/utils/cn'

interface DashboardCardProps {
  title: string
  info: string
  children?: React.ReactNode
  className?: string
}

export default function DashboardCard ({ info, title, className, children }: DashboardCardProps) {
  return (
    <div className={cn(' rounded-sm bg-white px-4 py-5 shadow-lg', className)}>
      <div className="flex flex-col gap-2">
        {children}
        <p className="mt-3 text-sm font-semibold text-slate-400">{title}</p>
        <p className="text-3xl font-bold">{info}</p>
      </div>

    </div>
  )
}
