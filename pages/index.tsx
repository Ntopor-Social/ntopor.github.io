import Head from "next/head";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
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

const Index: NextPageWithLayout = ({
  ip,
}: InferGetServerSidePropsType<typeof getServerSideProps>): JSX.Element => {
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
        <Events />
        <Bills />
        <Testimonial />
        <Blog />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  let ip = req.headers["x-real-ip"];
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (req.headers["x-forwarded-for"]) {
    ip = req.headers["x-forwarded-for"].toString().split(",")[0];
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  } else if (req.headers["x-real-ip"]) {
    ip = req.socket.remoteAddress;
  } else {
    ip = req.socket.remoteAddress;
  }

  // const result = await Promise.all([items]).then(([items]) => {
  //   return { items };
  // });

  return {
    props: {
      // items: result.items,
      ip,
    },
  };
};

// Index.getLayout = function getLayout(page: ReactElement) {
//   return <div>{page}</div>;
// };

export default Index;
