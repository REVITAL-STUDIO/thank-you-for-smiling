import React from "react";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
import Development from "@/components/development";
import Donate from "@/components/donate";
import Testimonies from "@/components/testimonies";
import FAQ from "@/components/faq";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Development />
      {/* <Book /> */}
      <FAQ />
    </main>
  );
}
