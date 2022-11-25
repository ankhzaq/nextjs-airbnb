import Banner from '../components/Banner';
import Head from 'next/head';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';

export default function Home(props: any) {
  const { exploreData } = (props || {})
  return (
    <div className="">
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      {/* Header */}
      {/* Banner */}
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {exploreData && exploreData.map((item: any) => (
            <SmallCard />
          ))}
        </section>
      </main>
      <h1>Lets build Airbnb</h1>
    </div>
  )
}
/*
export async function getStaticProps() {
  console.log("prop1")
  const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
  console.log("prop2")
  return {
    props: {
      exploreData
    }
  }
}
*/
