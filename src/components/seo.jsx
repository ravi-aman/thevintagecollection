import Head from "next/head";

const SEO = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle
          ? `${pageTitle} - The Vintage Collection | Antique & Home Decor`
          : "The Vintage Collection | Home Decor & Antique Store"}
      </title>

      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      <meta
        name="description"
        content="The Vintage Collection offers premium antique pieces, timeless home decor, rustic furniture, wall art, and collectibles to elevate your space with elegance."
      />
      <meta
        name="keywords"
        content="vintage decor, antique furniture, home decoration, rustic style, boho home, wall art, candles, vases, rugs, traditional Indian decor, vintage store online"
      />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content="The Vintage Collection | Home Decor & Antique Shop" />
      <meta
        property="og:description"
        content="Shop premium vintage home decor, antique items, and unique handcrafted pieces that add timeless charm to your space."
      />
      <meta property="og:image" content="/banner-home-preview.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://thevintagecollection.vercel.app" />

      {/* Favicon */}
      <link rel="icon" href="../../public/assets/img/logo/favicon.png" />
    </Head>
  </>
);

export default SEO;
