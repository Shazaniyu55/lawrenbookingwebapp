import { Html, Head, Main, NextScript } from 'next/document'
import {Inter} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })


export default function Document() {
  return (
    <Html lang="en">
     

      <Head>
      <title>Lawrencegebäudereinigung</title>
      <meta name="Lawrencegebäudereinigung logo" content="Lawrencegebäudereinigung offers professional home cleaning services with a focus on people, technologies, and possibilities. Contact us for a sparkling clean home."/>
      <link rel="Lawrencegebäudereinigung logo" href="/favicon.ico" />
      </Head>
      

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
