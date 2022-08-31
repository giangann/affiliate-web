import { atom, useAtom } from 'jotai'
import { useAtomCallback, useAtomValue, useUpdateAtom } from 'jotai/utils'
import { userAtom } from '../auth'

const useAuth = () => {
  const [user] = useAtom(userAtom)

  return { user }
}

export { useAuth }
