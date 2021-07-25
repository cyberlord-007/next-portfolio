import About from '../components/About'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Work from '../components/Work'

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <About/>
        <Skills/>
        <Work />
      </Layout>
    </div>
  )
}
