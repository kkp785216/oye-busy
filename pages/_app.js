import '../styles/globals.css'
import { useRouter } from 'next/router'
import Header from '../components/Header';

const Layout = ({ children }) => {
  const router = useRouter();

  switch (router.pathname) {
    case '/':
      return (<>
        <Header />
        {children}
      </>)

    default:
      return (<>
        <Header />
        {children}
      </>)
  }
}

function MyApp({ Component, pageProps }) {
  return (<div className='font-["Mulish",sans-seri]'>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </div>)
}

export default MyApp
