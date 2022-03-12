import React from 'react'
import NavBar from './general_components/NavBar';


const Layout = ({ children }:any) => (
  <div>
    <NavBar />
    {children}
    {/* <Footer /> */}
  </div>
);


export default Layout