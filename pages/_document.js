// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#8936FF" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
