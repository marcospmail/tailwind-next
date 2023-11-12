'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'
import * as ScrollArea from '@radix-ui/react-scroll-area'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200 dark:border-zinc-700">
            <TabItem
              value="my-details"
              title="My Detail"
              selected={currentTab === 'my-details'}
            />
            <TabItem
              value="profile"
              title="Profile"
              selected={currentTab === 'profile'}
            />
            <TabItem
              value="password"
              title="Password"
              selected={currentTab === 'password'}
            />
            <TabItem
              value="team"
              title="Team"
              selected={currentTab === 'team'}
            />
            <TabItem
              value="plan"
              title="Plan"
              selected={currentTab === 'plan'}
            />
            <TabItem
              value="billing"
              title="Billing"
              selected={currentTab === 'billing'}
            />
            <TabItem
              value="email"
              title="Email"
              selected={currentTab === 'email'}
            />
            <TabItem
              value="notifications"
              title="Notifications"
              selected={currentTab === 'notifications'}
            />

            <TabItem
              value="integrations"
              title="Integrations"
              selected={currentTab === 'integrations'}
            />
            <TabItem value="api" title="API" selected={currentTab === 'api'} />
          </Tabs.List>

          <ScrollArea.Scrollbar
            className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col"
            orientation="horizontal"
          >
            <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
          </ScrollArea.Scrollbar>
        </ScrollArea.Viewport>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
