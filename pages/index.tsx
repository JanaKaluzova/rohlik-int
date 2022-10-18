import { useState } from 'react'
import { Header } from '../components/Header'
import { Store } from '../components/Store'

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <>
      <Header
        onSearch={(text) => {
          setSearchQuery(text)
        }}
      />
      <Store searchText={searchQuery} />
    </>
  )
}
