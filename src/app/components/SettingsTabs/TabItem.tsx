import * as Tabs from '@radix-ui/react-tabs'

interface SettingsTabsProps {
  value: string
  title: string
  selected: boolean
}

export function TabItem({ value, title, selected }: SettingsTabsProps) {
  return (
    <Tabs.Trigger
      value={value}
      className=" data-[state=active] relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700"
    >
      <span>{title}</span>

      {selected && (
        <div className="absolute -bottom-px left-0 right-0 h-0.5 bg-violet-700" />
      )}
    </Tabs.Trigger>
  )
}
