import TimeOfDay from './TimeOfDay'
import VerticalDivider from './VerticalDivider'

export default function TimeOfDayContainer() {
  return (
    <div className="flex flex-col md:flex-row justify-between pt-6">
      <TimeOfDay index='1' title="morning" />
      <VerticalDivider />
      <TimeOfDay index='2' title="afternoon" />
      <VerticalDivider />

      <TimeOfDay index='3' title="evening" />
      <VerticalDivider />

      <TimeOfDay index='4' title="night" />
    </div>
  )
}
