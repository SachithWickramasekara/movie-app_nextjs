import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

export default function Home({results}) {
  return (
    <div>
      <Head>
        <title>HULU</title>
        <link rel="icon" href="/FLIX.png" />
      </Head>

    {/*Header*/}
      <Header/>
    {/* Nav */}
      <Nav/>
    {/* Results */}
      <Results results={results}/>
    </div>
  )
}

//Server side render
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json());

  return {
    props: {
      results: request.results,
    },
  };
}