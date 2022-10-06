import useSWR from 'swr'
import { StoreItemProps } from '../components/StoreItem'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export const useProducts = () => {
  const { data, error } = useSWR<StoreItemProps[]>('/api/staticdata', fetcher)

  return {
    data,
    error,
  }
}
