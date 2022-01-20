import ContentSection from "../components/ContentSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Main from "../components/Main";
import Navbar from "../components/Navbar";
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Best Pet Insurance Companies of 2022 | InsuranceRanked</title>
      </Head>
      <Navbar />
      <Hero />
      <Main />
      <ContentSection />
      <Footer />
    </>
  )
}
