import '../styles/globals.css'

// グローバルスタイルはこのファイルに読み込まれる
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
