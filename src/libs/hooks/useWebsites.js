import { atom, useAtom } from 'jotai'
import { useAtomCallback, useAtomValue, useUpdateAtom } from 'jotai/utils'
import { websitesAtom } from '../auth'

const useWebsites = () => {
  const [websites] = useAtom(websitesAtom)

  return { websites }
}

export { useWebsites }
