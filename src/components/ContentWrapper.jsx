import React from 'react'
import Footer from './Footer'
import Topbar from './Topbar'
import ContentRowTop from './ContentRowTop'
import '../assets/css/app.css'


export default function ContentWrapper(){
  return (
    <div id="content-wrapper" className="d-flex flex-column">

    <div id="content">
      
        <Topbar />
        <ContentRowTop />
        <Footer />
    </div>
    </div>
  )
}

