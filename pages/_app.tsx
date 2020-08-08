import { AppProps } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        a, abbr, acronym, address, applet, b, big, blockquote, body, button, caption, center, cite, code, dd, del, dfn, div, dl, dt, em, fieldset, font, footer, form, h1, h2, h3, h4, h5, h6, header, html, i, iframe, img, ins, kbd, label, legend, li, nav, object, ol, p, pre, q, s, samp, section, small, span, strike, strong, sub, sup, table, tbody, td, tfoot, th, thead, title, tr, tt, u, ul, var {
          margin: 0;
          padding: 0;
          border: 0;
          outline: 0;
          vertical-align: baseline;
          background: 0 0;
        }
        body {
          font-size: 10px;
          font-family: Arial,Helvetica,sans-serif;
        }
    `}</style>
    </>
  )
}
