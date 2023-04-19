import Layout from "@/components/Layout";
import "@/styles/globals.css";
import QuizContextProvider from '@/context/quizContext'


export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <QuizContextProvider>
        <Component {...pageProps} />
      </QuizContextProvider>
    </Layout>
  );
}
