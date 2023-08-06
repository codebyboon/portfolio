import About from "@/components/About";
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    
      <section className="flex-start flex-col paddings mt-20">
        <About />
        <Experience />
        <Contact />
      </section>
    
  )
}
