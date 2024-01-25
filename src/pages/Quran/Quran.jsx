import './Quran.css'
import { Helmet } from 'react-helmet-async';

import {  QuranLive , QuranLecture } from '../../components/index'

const Quran = () => {
  return (
    <main>
      <Helmet>
        <title>سمع القرآن الكريم</title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>

      <QuranLecture className='container' />
      <QuranLive className='container' />
      
    </main>
  )
}

export default Quran