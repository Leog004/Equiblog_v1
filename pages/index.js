import Head from 'next/head'
import { Featured, FeaturedBlogs, Header, Hero, Subscribe } from '../components'
import { getBrands } from '../services';

export default function Home({brands}) {
  return (
    <main style={{backgroundColor: '#F8F8F8'}}>
      <Hero/>
      <Featured brands={brands} />
      <FeaturedBlogs/>
      <Subscribe/>
    </main>
  )
}


// Fetch data at build time
export async function getStaticProps() {
  const brands = (await getBrands()) || [];
  return {
    props: { brands },
  };
}
