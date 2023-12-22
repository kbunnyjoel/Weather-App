import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head >
        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAoFUij9oJskNDc4opPGuYyquMmuDbFeGk&libraries=places&callback=Function.prototype"></script>
        <style>
            {`
            *, html, body {
                padding: 0;
                margin: 0;
            }
            `}
        </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument