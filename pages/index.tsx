import type { NextPage } from 'next'
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {/* Header */}
      {/* Banner */}
      <h1>Lets build Airbnb</h1>
    </div>
  )
}

export default Home
