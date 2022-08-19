import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import NavBar from '../components/NavBar'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div>
      <div className='bg-black text-font' style={{ height: "100%" }}>
        <div>
          <NavBar />
          {/* <Nav /> */}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home
