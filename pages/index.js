import About from '../components/About'
import Hero from '../components/Hero'
import Layout from '../components/Layout'
import Skills from '../components/Skills'
import Work from '../components/Work'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Head from 'next/head'



export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:title" content="Akash Chaudhary | Portfolio" />
        <meta property="og:url" content="https://cyberlord007.tech" />
        <meta
          property="og:image"
          content="https://avatars0.githubusercontent.com/u/58812239?s=460&u=d76d991637905dc0ad668a5923810bdd1875a733&v=4"
        />
        <meta
          name="og:description"
          content="Hey, there folks! Check out my portfolio here..."
        />
        <title>Akash Chaudhary | Full Stack Developer</title>
      </Head>
      <Layout>
        <Hero/>
        <About/>
        <Skills/>
        <Work />
        <Projects />
        <Contact />
      </Layout>
    </div>
  )
}


