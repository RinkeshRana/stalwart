import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider enableColorScheme attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
