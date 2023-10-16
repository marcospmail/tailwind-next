import { Search } from 'lucide-react'
import { ComponentProps } from 'react'

type PrefixProps = ComponentProps<'div'>

export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type InputRootProps = ComponentProps<'div'>

function Root(props: InputRootProps) {
  return (
    <div
      className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}

type InputControlProps = ComponentProps<'input'>

function Control(props: InputControlProps) {
  return (
    <input
      className=" flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      placeholder="Search"
      {...props}
    />
  )
}

const Input = {
  Root,
  Control,
  Prefix,
}

export { Input }
