import Image from "next/image";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import CTA from "./components/CTA";
import { createClient } from "contentful";
import Testimonial from "./components/Testimonial";
import { use } from "react";
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const session = use(getData());
  // console.log(session.items, "session");
  return (
    <>
      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <HeroSection />
        <AboutSection projects={session.items} />
        <ProjectsSection />
        <Testimonial comments={session.items} />
        <CTA />
      </main>
    </>
  );
}
const client = createClient({
  space: "s1o7l246mufa",
  accessToken: "nvLPI6v2c7F0OMgBAHZDuJXBBtcjQD80SeUmVjOvjvk",
});

export async function getData() {
  return await client.getEntries();
}
