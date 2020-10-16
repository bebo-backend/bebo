import React from 'react'

import Header from './navigation/header'
import Footer from './navigation/footer'

import PropTypes from 'prop-types'
import Head from 'next/head'

const Layout = ({ title,children,tag }) => (
  <>
  <Head>
    <title>{title ? title+ " @ beBO" :"Buy, Sell, Rent or Exchange items @ beBO"}</title>

    <meta name="robots" content="index" />
    <meta name="robots" content="follow" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <meta name="description" content={title+ ' Get Electronics, Fashions, Home Appliances | beBO'} /> 


    </Head>
    <Header tag={tag} />
    <main>
      <div className="flex-col bg-gray-100 w-full m-0  pt-2 px-2">{children}</div>
    </main>

    <Footer />
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
  title:PropTypes.string
}