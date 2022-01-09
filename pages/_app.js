import { ThemeProvider } from "styled-components";
import GlobalStyles from './../src/styleConfig/GlobalStyle'
import Layout from "./../src/components/Layouts/Layout";
import theme from './../src/styleConfig/ThemeConfig'



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
