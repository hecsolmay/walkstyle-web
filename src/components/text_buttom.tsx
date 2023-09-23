'use client'

interface TextButtomProps {
  text: string
  className?: string
  onClick?: () => void
}

export function TextButtom ({
  text,
  className,
  onClick
}: TextButtomProps) {
  return (
    <div className="flex items-center justify-center">
      <button
        className={`flex h-12 w-96 items-center justify-center rounded-sm bg-black  text-white ${className}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}
