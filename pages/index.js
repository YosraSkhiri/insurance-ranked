import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <ContentSection />
      <Footer />
    </>
  )
}
