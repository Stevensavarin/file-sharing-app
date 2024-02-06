import Head from 'next/head';
import Image from 'next/image';
import Header from './_components/Header';
import Hero from './_components/Hero';

export default function Home() {
  return (
    <div>
      <Head>
        <script src="/adsense.js" async></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: '${process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID}',
                enable_page_level_ads: true
              });
            `,
          }}
        ></script>
      </Head>
      <Header />
      <Hero />
    </div>
  );
}
