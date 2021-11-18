import Head from 'next/head'
import { Featured, FeaturedBlogs, Header, Hero, Subscribe } from '../components'

export default function Home() {
  return (
    <main style={{backgroundColor: '#F8F8F8'}}>
      <Hero/>
      <Featured/>
      <FeaturedBlogs/>
      <Subscribe/>
    </main>
  )
}
