import { LogOut } from 'lucide-react'
import { Button } from '../Form/Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <img
        src="https://github.com/marcospmail.png"
        alt=""
        className="h-10 w-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sinz-700 text-sm font-semibold dark:text-zinc-100">
          Marcos Paulo
        </span>
        <span className="truncate text-sm text-zinc-500 dark:text-zinc-400">
          example@email.com
        </span>
      </div>
      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}
