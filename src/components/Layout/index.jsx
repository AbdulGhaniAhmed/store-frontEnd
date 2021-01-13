import React from 'react'
import Header from '../Header'
import MenueHeader from '../MenueHeader'

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
    <Header/>
    <MenueHeader/>
    {props.children}
    </>
   )
  }


export default Layout