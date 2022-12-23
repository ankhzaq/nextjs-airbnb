import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Head from 'next/head';
import Header from '../components/Header';
import SmallCard from '../components/SmallCard';
import MediumCard from '../components/MediumCard';
import LargeCard from '../components/LargeCard';

const mockupExploreData = [{"img":"","location":"London","distance":"45-minute drive"},{"img":"","location":"Manchester","distance":"4.5-hour drive"},{"img":"","location":"Liverpool","distance":"4.5-hour drive"},{"img":"","location":"York","distance":"4-hour drive"},{"img":"","location":"Cardiff","distance":"45-minute drive"},{"img":"","location":"Birkenhead","distance":"4.5-hour drive"},{"img":"","location":"Newquay","distance":"6-hour drive"},{"img":"","location":"Hove","distance":"2-hour drive"}];
const mockupCardsData = [{"img":"","title":"Outdoor getaways"},{"img":"","title":"Unique stays"},{"img":"","title":"Entire homes"},{"img":"","title":"Pet allowed"}];
export default function Home(props: any) {
  const { cardsData, exploreData } = (props || {})
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData && exploreData.map(({ img, location, distance }: any) => (
              <SmallCard img={img} location={location} distance={distance} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img=""
          title="The Greated Outdoors"
          description="Whislists curated by Airbnb."
          buttonText="Get Inspired"
        />

      </main>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  // const exploreData = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
  const exploreData = mockupExploreData;
  // const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  const cardsData = mockupCardsData;
  return {
    props: {
      cardsData,
      exploreData
    }
  }
}
