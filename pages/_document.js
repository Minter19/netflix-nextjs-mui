import React from "react";
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document{
 render(){
    return (
        <Html>
            <Head lang="er">
                <link rel="shotcut icon" href="/nficon2016.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
 }
}

export default MyDocument;