'use client'

import { FileItem } from './FileItem'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import { useFileInput } from './Root'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate()

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="complete"
        />
      ))}
    </div>
  )
}
