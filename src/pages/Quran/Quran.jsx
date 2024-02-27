import './Quran.css'
import { Helmet } from 'react-helmet-async';
import Button from "react-bootstrap/Button";

import {  QuranLive , QuranLecture } from '../../components/index'

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config'
import {  sendEmailVerification } from "firebase/auth";


const Quran = () => {
const [user, loading, error] = useAuthState(auth);



  if (loading) {
    return (
      <div>
        <p className=" profile container sign d-flex  flex-column justify-content-center align-items-center flex-wrap">
          في طور التحميل
        </p>
      </div>
    );
  }
  if (!user) {
    return (
      <main className='d-flex align-items-center justify-content-center '>
      <Helmet>
        <title>سمع القرآن الكريم</title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
        <p className='plz'  > الرجاء قم بتسجيل  الدخول لعرض محتوى الصفحة</p>
    </main>
    )
  }

if(user){
  if(user.emailVerified){
    return (
    
      <main>
       <Helmet>
         <title>سمع القرآن الكريم</title>
         <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
       </Helmet>
 
       <QuranLecture className='container' />
       <QuranLive className='container' />
       
     </main > 
    
     
   )
 }

 if(!user.emailVerified){
  return (
  
    <main  className='container  d-flex  flex-column justify-content-center align-items-center flex-wrap '>
     <Helmet>
       <title>سمع القرآن الكريم</title>
       <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
     </Helmet>

     <p className="profile"> مرحبا : {user.displayName} </p>
     <p className="profile"> الرجاء قم بتثبيت بريدك الالكتروني </p>
     <Button
                onClick={() => {
                 

                  sendEmailVerification(auth.currentUser)
  .then(() => {
    // Email verification sent!
    // ...
  });

                   }}
                  variant="primary mt-3"
                  type="submit"
              >
              ارسل مرة أخرى  
              </Button>
   </main > 
  
   
 )
}

  }

  if (error) {
    return (
      <div>
        <p className=" profile container sign d-flex  flex-column justify-content-center align-items-center flex-wrap">
          خطأ في التحميل {error}
        </p>
      </div>
    );
  }


}


 

export default Quran