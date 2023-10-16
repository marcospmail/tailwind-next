import { SettingsTabs } from './components/SettingsTabs/index'
import * as Tabs from '@radix-ui/react-tabs'
import { TabletSmartphone } from 'lucide-react'
import { title } from 'process'

export default function Page() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900">Settings</h1>

      <SettingsTabs />
    </>
  )
}
