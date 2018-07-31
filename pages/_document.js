/*
In production the stylesheet is compiled to .next/static/style.css and served from /_next/static/style.css

You have to include it into the page using either next/head or a custom _document.js, as is being done in this file.
*/

import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  componentDidMount() {
    (adsbygoogle = window.adsbygoogle || []).push({
      google_ad_client: "ca-pub-9169116196998945",
      enable_page_level_ads: true
    });
  }

  render () {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css" integrity="sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp" crossOrigin="anonymous" />
          <script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
          <script
            dangerouslySetInnerHTML={{ __html:
              '(adsbygoogle = window.adsbygoogle || []).push({ \
                google_ad_client: "ca-pub-9169116196998945", \
                enable_page_level_ads: true \
              });'
            }}
          />
          <title>Atomic Stats</title>
        </Head>
        <body style={{margin: "0 0 0 0", padding: "0px 0px 0px 0px"}}>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
