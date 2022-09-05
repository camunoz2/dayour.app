import TimeOfDay from './TimeOfDay'
import VerticalDivider from './VerticalDivider'

export default function TimeOfDayContainer() {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-6">
      <TimeOfDay title="morning" />
      <VerticalDivider />
      <TimeOfDay title="afternoon" />
      <VerticalDivider />

      <TimeOfDay title="evening" />
      <VerticalDivider />

      <TimeOfDay title="night" />
    </div>
  )
}
