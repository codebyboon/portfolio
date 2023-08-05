import About from "@/components/About";
import Link from "next/link";
import Skills from "@/components/Skills"
import CardsContainer from "@/components/Cards/CardsContainer";

export default function Home() {
  return (
    
      <section className="flex-start flex-col paddings mt-20">
        <About />
        {/* <CardsContainer /> */}
        <h1>Experiences</h1>
        <Link href={"/project"}>Project </Link>
        <h1>Contact</h1>
      </section>
    
  )
}
