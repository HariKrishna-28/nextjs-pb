import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/Nav'
import NavBar from '../components/NavBar'
import Hello from '../components/Hello'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <div>
      <div>
        <div>
          <NavBar />
          <div className='p-7'>
            <Hello />
          </div>
          {/* <Nav /> */}

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home
