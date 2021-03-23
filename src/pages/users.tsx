import {useEffect, useState} from 'react'
import axios from 'axios'
import { User } from '../api/User';
import { GetServerSideProps } from 'next';
import styled from 'styled-components'



const Divisor = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const Title = styled.p`
  font-size: 20px;
  color: ${({theme}) => theme.colors.primary}
`

export interface UsersProps {
  users?: User[]
}

function Users({users}: UsersProps){
  return (
    <Divisor>
      {users && users.map(user => (
        <Title key={user.id}>{user.name}</Title>
      ))}
    </Divisor>
    )
}

export const getServerSideProps: GetServerSideProps =  async(context) => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = await response.data; 
  return {
    props: {users: data}
  }
}

export default Users;