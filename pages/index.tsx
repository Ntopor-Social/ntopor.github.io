import Head from "next/head";
import { NextPageWithLayout } from "./_app";
import NavBar from "@/components/navbar/navbar.component";
import Header from "@/section/Header/header.section";
import { UseScrollPosition } from "@/utils/UseScrollPosition";
import Download from "@/section/Download/download.section";
import Benefits from "@/section/Benefits/benefits.section";
import Demo from "@/section/Demo/demo.section";
import Events from "@/section/Events/event.section";
import HowItWorks from "@/section/HowItWorks/howItWorks.section";
import Features from "@/section/Features/features.section";
import Blog from "@/section/Blog/blog.section";
import Footer from "@/section/Footer/footer.section";
import FAQ from "@/section/FAQ/faq.section";
import Bills from "@/section/Bills/bills.section";
import Testimonial from "@/section/Testimonials/testimonials.section";

const Index: NextPageWithLayout = (): JSX.Element => {
  const position = UseScrollPosition();
  return (
    <div>
      <Head>
        <title>Ntopor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <NavBar position={position} />
        <Header />
        <Download />
        <Benefits />
        <Demo />
        <Features />
        <HowItWorks />
        {/* <Events />
        <Bills />
        <Testimonial />
        <Blog />
        <FAQ />
        <Footer /> */}
      </main>
    </div>
  );
};

export default Index;
