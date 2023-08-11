import About from "@/components/About";
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    
      <section className="flex-start flex-col paddings mt-20">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </section>
    
  )
}
