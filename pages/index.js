import Head from 'next/head'
import { Featured, FeaturedBlogs, Header, Hero, Subscribe } from '../components'
import { getBlogFeatures, getBrands, getNewBlogs } from '../services';

export default function Home({newBlogs, brands, featuredBlogs}) {
  return (
    <main style={{backgroundColor: '#F8F8F8'}}>
      <Hero/>
      <Featured newBlogs={newBlogs} brands={brands} />
      <FeaturedBlogs featuredBlogs={featuredBlogs} />
      <Subscribe/>
    </main>
  )
}


// Fetch data at build time
export async function getStaticProps() {
  const brands = (await getBrands()) || [];
  const newBlogs = (await getNewBlogs()) || [];
  const featuredBlogs = (await getBlogFeatures()) || [];
  return {
    props: { 
      newBlogs,
      brands, 
      featuredBlogs 
    },
  };
}
