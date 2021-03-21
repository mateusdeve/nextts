import {useEffect, useState} from 'react'
import axios from 'axios'
import { User } from '../api/User';
import { GetServerSideProps } from 'next';
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

export interface UsersProps {
  users?: User[]
}

function Users({users}: UsersProps){
  return (
    <div>
      {users && users.map(user => (
        <Title key={user.id}>{user.name}</Title>
      ))}
    </div>
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