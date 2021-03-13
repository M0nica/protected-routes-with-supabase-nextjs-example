import Header from "./header";
import Footer from "./footer";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>NextJS Supabase Protected Routes Example ✨</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="NextJS Supabase Protected Routes Example" />
       
      </Head>

      <Header />
      {children}
      <Footer />
    </div>
  );
}
