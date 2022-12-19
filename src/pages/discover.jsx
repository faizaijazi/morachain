import React from 'react'
import Header from '../components/home/header'
import Sale from '../components/discover/sale'
import Nfts from '../components/discover/nfts'
import Mortam from '../components/discover/mortam'
import Roadmap from '../components/discover/roadmap'
import Footer from "../components/home/footer"
const Discover = () => {
  return (
    <>
     <div className="bg-slate-500 ">
     <div
      style={{
        paddingTop: "10px",
        background: "linear-gradient(90deg,#e1b646,#925a06,#e1b646)",
        backgroundImage:
          "linear-gradient(90deg, rgb(225, 182, 70), rgb(146, 90, 6), rgb(225, 182, 70))",
      }}
      className="bg-slate-800"
    >
      <div>
      <Header />
      <Sale/>
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