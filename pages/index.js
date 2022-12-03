import { Typography } from '@mui/material'
import Head from 'next/head'


export default function Home() {
  return (
    <div >
      <Head>
        <title>Ecommerce</title>
        <meta name="description" content="Ecommerce criado com next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <Typography component="h1" varient="h1">
        Ecommerce com next
      </Typography>
    </div>
  )
}
