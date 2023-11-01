import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import axios from 'axios';

async function request() {
  const response = await axios.get('https://4e52-2405-9800-b660-6706-a0bf-3946-1fef-d3c0.ngrok-free.app/hello')
  console.log(response.data);
}
export default function Home() {
  request()
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
