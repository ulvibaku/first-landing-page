type SectionHeadingProps = {
  title: string
  description: string
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-2xl space-y-3">
      <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
      <p className="text-base text-slate-300 sm:text-lg">{description}</p>
    </div>
  )
}
