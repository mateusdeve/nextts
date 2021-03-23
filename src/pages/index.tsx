import Head from 'next/head'
import styled from 'styled-components'
import { Divisor, Title } from './users'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Divisor>
        <Title>teste</Title>
        <Link href="/users"><a>Página de Users</a></Link>
      </Divisor>
    </>
  )
}
