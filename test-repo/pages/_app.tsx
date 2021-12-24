
 import { AppProps } from "next/app";
 import Head from "next/head";
 import { appWithTranslation } from "next-i18next";

 const App = ({ Component, pageProps }: AppProps) => {
   return (
     <>
       <Head>
         <meta name="viewport" content="initial-scale=1, width=device-width" />
          {/* //dont forget to add icons to the project */}
         <link
           rel="apple-touch-icon"
           sizes="180x180"
           href="/apple-touch-icon.png"
         />
         <link
           rel="icon"
           type="image/png"
           sizes="32x32"
           href="/favicon-32x32.png"
         />
         <link
           rel="icon"
           type="image/png"
           sizes="16x16"
           href="/favicon-16x16.png"
         />
         <link rel="manifest" href="/site.webmanifest" />
         <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#d44245" />
         <meta name="msapplication-TileColor" content="#ffffff" />
         <meta name="theme-color" content="#ffffff"></meta>
       </Head>
           <Component {...pageProps}></Component>

     </>
   );
 };
 
 export default appWithTranslation(App);
