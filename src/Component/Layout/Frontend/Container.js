import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'


const Container = ({children}) => {
  return (
    <div>
    <div className ="wrapper">
    <Sidebar/>
    <Header/>  
    
    <div class="content-wrapper">
    {/* <div section class="col-lg-7 connectedSortable"> */}
       {children} 
{/* </div> */}
</div>
    <Footer/>
  </div>
  </div>
  )
}

export default Container
