import {useRouter} from 'next/router'
import Head from 'next/head'

import Header from '../../components/header'



export default function Mint() {
  const router = useRouter()
  const result = router.query.tokenId

  const tokenId:number = parseInt(result as string, 10)

  while(isNaN(tokenId)){

    return (
        <h1>Loading</h1>
        //Show Loading Page for 1 Second
        //After that Error Page
    )
  }
  
  if(tokenId <0 || tokenId >100){
    return (
        <h1>Error Token existiert nicht!</h1>
        //Show Error Page: "Token existiert nicht"
        //Token wurde noch nicht geminted
    )
  }
  return (
    <>
      <Head>
        <title>Swarmtrust | Mint </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <Header/>
            <h1>TokenID: {tokenId}</h1>

        
      </main>
    </>
  )
}
