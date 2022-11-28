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
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {exploreData && exploreData.map(({ img, location, distance }: any) => (
              <SmallCard img={img} location={location} distance={distance} />
            ))}
          </div>
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
