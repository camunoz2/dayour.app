export default function DateComponent() {

  const monthNames = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC',
  ]

  const date = new Date()
  const currentDay = date.getDate()
  const currentMonth = monthNames[date.getMonth()]

  return (
    <div className="flex flex-col items-center my-4">
      <h2 className="font-display font-bold text-4xl">{currentDay}</h2>
      <p>{currentMonth}</p>
    </div>
  )
}
