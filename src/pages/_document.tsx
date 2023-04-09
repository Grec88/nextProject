
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(): JSX.Element {

  return (
    <Html lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
