import React from 'react'
import Header from '../components/home/header'
import Sale from '../components/discover/sale'
import Nfts from '../components/discover/nfts'
import Mortam from '../components/discover/mortam'
import Roadmap from '../components/discover/roadmap'
import Footer from "../components/home/footer"
import saleBackground from "../assets/saleBackground.png"
const Discover = () => {
  let bgImage = `url(${saleBackground})`;
  return (
    <>
     <div>
   
    <div
      style={{
        paddingTop: "10px",
        background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)",
      }}
      className="bg-slate-800"
    >
       <div style={{
      backgroundImage: bgImage,
     }}>
      <div>
      <Header />
      <Sale/>
      </div>
      </div>
    </div>
    </div>
      <Nfts />
      <Mortam />
      <Roadmap />
      <Footer />
    </>
  )
}

export default Discover