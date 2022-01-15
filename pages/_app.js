import { ThemeProvider } from "styled-components";
import GlobalStyles from './../src/styles/GlobalStyle'
import Layout from "./../src/components/Layouts/Layout";
import theme from './../src/styles/ThemeConfig'



function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
          <Layout>
            <Component {...pageProps} />
          </Layout>
      </>
    </ThemeProvider>
  );
}

export default MyApp;
