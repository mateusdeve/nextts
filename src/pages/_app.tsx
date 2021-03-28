import { createGlobalStyle, ThemeProvider } from 'styled-components'
import type { AppProps } from 'next/app'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    background: linear-gradient(to bottom, #7BF1A8 0%,#7BF1A8 30%, #7BF1A8 30%,#121212 30%,#121212 100%);
  }
`

const theme = {
  colors: {
    primary: 'rgb(32, 32, 36)',
    secondary: 'rgb(18, 18, 20)'
  },
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
/*
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export const getStaticProps: GetStaticProps = async (context) => {
  // ...
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // ...
}

*/
