import Head from 'next/head'
import { GetServerSideProps } from 'next';
import axios from 'axios'
import {Container, Content} from '../components/styled'
import Profile from '../components/Profile'
import About from '../components/About'
import { User } from '../api/User';

export interface UsersProps {
  user?: User
}

function Home({user}: UsersProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta property="og:url" content="https://nextts-ten.vercel.app/" />
        <meta property="og:description" content="description of your website/webpage" />
        <meta property="og:image" content='../../public/images/logo-yoursite.jpg'/>
        <meta property="og:type" content="article" />
        <meta name="description" content="Página inicial" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Content>
          <Profile user={user} />
          <About user={user} />
        </Content>
      </Container>
    </>
  )
  
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try{
    const response = await axios.get("https://api.github.com/users/mateusdeve")
    const {data} = response;
    
    return{
      props: {user: data}
    }
  }catch(e){
    console.log("Error");
    return{
      props: {user: {}}
    }
  }
}

export default Home;