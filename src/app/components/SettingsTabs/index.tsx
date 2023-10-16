'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { TabItem } from './TabItem'
import { useState } from 'react'

export function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
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
        <TabItem value="team" title="Team" selected={currentTab === 'team'} />
        <TabItem value="plan" title="Plan" selected={currentTab === 'plan'} />
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
    </Tabs.Root>
  )
}
