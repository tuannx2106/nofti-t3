import React from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <script src="https://cdn.onesignal.com/sdks/OneSignalSDK.js" async />
          {/* eslint-disable-next-line react/no-danger */}
          <script dangerouslySetInnerHTML={{
            __html: `
              window.OneSignal = window.OneSignal || [];
              OneSignal.push(function() {
                OneSignal.SERVICE_WORKER_PARAM = { scope: '/nofti-t3/' };
                OneSignal.SERVICE_WORKER_PATH = 'nofti-t3/OneSignalSDKWorker.js'
                OneSignal.SERVICE_WORKER_UPDATER_PATH = 'nofti-t3/OneSignalSDKUpdaterWorker.js'
                OneSignal.init({
                  appId: "5b8f0a2c-3710-44e1-af6c-1918cc381c6d",
                  notifyButton: {
                    enable: true,
                  },
                  allowLocalhostAsSecureOrigin: true,
                });
              });`,
          }}
          />
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
