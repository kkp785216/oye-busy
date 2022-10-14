import Head from 'next/head'
import About from '../components/About';
import HeroSection from '../components/HeroSection';
import Container from '../components/Layout';
import WhyChoose from '../components/WhyChoose';

export default function Home(props) {
  const { city } = props;

  return (
    <div>
      <Head>
        <title>Oye Busy Technologies Private Limited</title>
        <meta name="description" content="Oye Busy Technologies Private Limited" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        <HeroSection city={city[0]} />
      </Container>

      <Container>
        <WhyChoose />
      </Container>

      <Container>
        <About city={city[0]}/>
      </Container>
    </div>
  )
}


export async function getServerSideProps({ req }) {
  const resp = await fetch(`http://${req.headers.host}/api/city`);
  const data = await resp.json();
  return {
    props: { // will be passed to the page component as props
      city: data
    },
  }
}