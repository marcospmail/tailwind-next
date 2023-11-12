'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type RootProps = ComponentProps<'div'>

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[], multiple: boolean) => void
}

const FileInputContext = createContext({} as FileInputContextType)

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  function handleOnFilesSelected(files: File[], multiple: boolean) {
    if (multiple) {
      setFiles((v) => [...v, ...files])
    } else {
      setFiles(files)
    }
  }

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected: handleOnFilesSelected }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  )
}

export function useFileInput() {
  return useContext(FileInputContext)
}
