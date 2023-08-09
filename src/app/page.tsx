import About from "@/components/About";
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Skills from "@/components/Skills";

export default function Home() {
  return (
    
      <section className="flex-start flex-col paddings mt-20">
        <About />
        <Experience />
        <Skills />
        <Contact />
      </section>
    
  )
}
