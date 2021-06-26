import About from '../components/About'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Layout>
        <Hero/>
        <About/>
        <Skills/>
      </Layout>
    </div>
  )
}
