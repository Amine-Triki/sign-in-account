import './Quran.css'
import { Helmet } from 'react-helmet-async';

import {  QuranLive , QuranLecture } from '../../components/index'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config'
const Quran = () => {
  const [user, loading, error] = useAuthState(auth);


  return (
    <>
    { user && <main>
      <Helmet>
        <title>سمع القرآن الكريم</title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>

      <QuranLecture className='container' />
      <QuranLive className='container' />
      
    </main > }
    { !user && <main className='d-flex align-items-center justify-content-center '>
      <Helmet>
        <title>سمع القرآن الكريم</title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
        <p className='plz'  > الرجاء قم بتسجيل  الدخول لعرض محتوى الصفحة</p>
    </main> }
    </>
  )
}

export default Quran