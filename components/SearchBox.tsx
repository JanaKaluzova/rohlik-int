import React, { useEffect, useState } from 'react'
import { NavItem } from 'react-bootstrap'
import { useProducts } from '../hooks/useProducts'
import { StoreItemProps } from '../types/types'
import { StoreItem } from './StoreItem'

type Props = {
  onSearch: (results: StoreItemProps[]) => void
}

export const SearchBox: React.FC<Props> = ({ onSearch }) => {
  const [query, setQuery] = useState('')
  const { data, error } = useProducts()

  const search = () => {
    // const keys = ['name', 'price']

    return data?.filter((item) => item.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())) ?? []
  }

  useEffect(() => {
    const results = search()
    onSearch(results)
  }, [query])

  return (
    <div>
      <input
        type="search"
        placeholder="search..."
        className="border border-secondary rounded p-2"
        style={{ height: '40px', width: '300px', opacity: '50%' }}
        onChange={(event) => {
          setQuery(event.target.value)
        }}
      />
    </div>
  )
}
