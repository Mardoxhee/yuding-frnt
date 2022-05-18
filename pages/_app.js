import { ThemeProvider } from "styled-components";
import "../styles/globals.css";
import GlobalStyles from "../styles/GlobalStyle";
import Layout from "./../src/components/Layouts/Layout";
import theme from "./../styles/ThemeConfig";
import { Helmet } from "react-helmet";
import { Provider } from "react-redux";
import { store } from "../app/store";
import { useState } from "react";

function MyApp({ Component, pageProps }) {
  switch (Component.name) {
    case "Signup":
    case "Login":
    case "Resetpassword":
    case "CreationRestaurant":
      return <Component {...pageProps} />;
    default:
      return (
        <ThemeProvider theme={theme}>
          <>
            <GlobalStyles />
            <Helmet>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                rel="stylesheet"
              />
            </Helmet>
            <Provider store={store}>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Provider>
          </>
        </ThemeProvider>
      );   
  }
}

export default MyApp;
