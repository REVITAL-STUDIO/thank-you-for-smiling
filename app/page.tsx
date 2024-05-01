import React from "react";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import About from "@/components/about";
import Development from "@/components/development";
import Donate from "@/components/donate";
import Testimonies from "@/components/testimonies";
import Book from "@/components/book";
import FAQ from "@/components/faq";
import Nav from "@/components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Development />
      <Donate />
      <Testimonies />
      <Book />
      <FAQ />
      <Footer />
    </main>
  );
}
