import Head from 'next/head'
import styled from 'styled-components'
import { Divisor, Title } from './users'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Divisor>
        <Title>teste</Title>
      </Divisor>
    </>
  )
}
