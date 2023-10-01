import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../../components/Header'
import LotteryEntrance from '../../components/LotteryEntrance'
// import ManualHeader from '../../components/ManualHeader'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SMART CONTRACT LOTTERY</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ManualHeader /> */}
      <Header />
      <LotteryEntrance />

    </>
  )
}
