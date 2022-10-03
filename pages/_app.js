import '../styles/globals.css'
import { useRouter } from 'next/router'
import Header from '../components/Header';

const Layout = ({ children }) => {
  const router = useRouter();
  console.log(router)

  switch (router.pathname) {
    case '/':
      return (<>
        <Header />
        {children}
      </>)
  }
}

function MyApp({ Component, pageProps }) {
  return (<>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>)
}

export default MyApp
