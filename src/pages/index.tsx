import Head from 'next/head'
import { GetServerSideProps } from 'next';
import axios from 'axios'
import {Container, Content} from '../components/styled'
import Profile from '../components/Profile'
import About from '../components/About'
import { User } from '../api/User';
import Study from '../components/Study';
import Tech from '../components/Tech';

export interface UsersProps {
  user?: User
}

function Home({user}: UsersProps) {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Content>
          <Profile user={user} />
          <About user={user} />
          <Study />
          <Tech />
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