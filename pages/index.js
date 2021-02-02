import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>Testrack</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <img src="/testrack.svg" alt="Testrack" className="p-4"/>
    </div>
  )
}
