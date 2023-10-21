'use client'

import { Check } from 'lucide-react'
import * as Select from '@radix-ui/react-select'

type SelectItemProps = Select.SelectItemProps & {
  text: string
}

export function SelectItem({ text, ...rest }: SelectItemProps) {
  return (
    <Select.Item
      className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:cursor-pointer data-[highlighted]:bg-violet-50"
      {...rest}
    >
      <Select.ItemText className="text-black">{text}</Select.ItemText>

      <Select.ItemIndicator>
        <Check className="h-4 w-4 text-violet-500" />
      </Select.ItemIndicator>
    </Select.Item>
  )
}