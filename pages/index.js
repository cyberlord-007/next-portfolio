import About from '../components/About'
import Hero from '../components/Hero'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <About/>
      </Layout>
    </div>
  )
}
