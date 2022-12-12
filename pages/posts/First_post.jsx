import Link from 'next/link'
import React from 'react'
import Head from 'next/head'
import Layout from '../components/Layout'

const First_post = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href='/'>Back to home</Link>
      </h2>
    </Layout>
  )
}

export default First_post