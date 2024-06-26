import './SignIn.css'
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useState } from 'react'
import './popForm.css'
import { RiCloseCircleLine } from "react-icons/ri";

import { auth } from '../../firebase/config'
import {  signInWithEmailAndPassword , sendPasswordResetEmail } from "firebase/auth";

import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const [email , setEmail] =useState("")
  const [resetpass , setResetpass] =useState("")
  const [password , setPassword] =useState("")
  const [hasError , setHasError] =useState(false)
  const [firebaseError , setFirebaseError] =useState("")
  const [showSendEmail , setShowSendEmail] =useState(false)
  const [shwoform , setShwoform] =useState("")
  
  const navigate = useNavigate();

  return (
    <main>
      <Helmet>
        <title> تسجيل الدخول  </title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
  

      <div className='container sign d-flex  flex-column justify-content-center align-items-center flex-wrap'>

      <Form className={`popUp container  d-flex align-items-center justify-content-center flex-column ${shwoform}`}>
              <div className='closePopUp' onClick={() => {
                setShwoform("");
              }} >
                <RiCloseCircleLine /></div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className='text-dark'>البريد الالكتروني</Form.Label>
                <Form.Control onChange={(e) => {
                  setResetpass(e.target.value)
                }} type="email" required placeholder="البريد الالكتروني" />
              </Form.Group>
              
              
              <Button onClick={(e) => {
                e.preventDefault();
               

                sendPasswordResetEmail(auth, resetpass)
                 .then(() => {
                  setShowSendEmail(true)
                    
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                  });
                
              }} variant="primary mt-3"  type="submit">
               إعادة تعيين كلمة المرور
              </Button>
              { showSendEmail && <p className='check-mail'>الرجاء التثبت من البريد الالكتروني لإعادة تعيين كلمة المرور</p>}
              
          </Form>



        <p>تسجيل الدخول : </p>
        <div>
          
            <Form className="container  d-flex align-items-center justify-content-center flex-column ">
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control onChange={(e) => {
                  setEmail(e.target.value)
                }} type="email" required placeholder="البريد الالكتروني" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>كلمة السر</Form.Label>
                <Form.Control  onChange={(e) => {
                  setPassword(e.target.value)
                }}type="password" required placeholder="كلمة السر" />
              </Form.Group>
              
              <Button onClick={(e) => {
                e.preventDefault();

                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                  // Signed in 
                  const user = userCredential.user;
                  // ...
                  navigate("/");
                })
                .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setHasError(true)

                  switch(errorCode) {
                    case 'auth/invalid-email':
                      setFirebaseError('القيمة المقدمة لخاصية مستخدم email غير صالحة. يجب أن يكون عنوان بريد إلكتروني متسلسلًا.')
                      break;
                    case 'auth/invalid-email-verified':
                      setFirebaseError('القيمة المقدمة لخاصية المستخدم emailVerified غير صالحة. يجب أن تكون منطقية.')
                      break;
                    case 'auth/invalid-password' :
                      setFirebaseError('القيمة المقدمة لخاصية مستخدم password غير صالحة. ويجب أن تكون سلسلة تحتوي على ستة أحرف على الأقل.')
                      break;
                    case 'auth/user-not-found':
                      setFirebaseError('لا يوجد سجل مستخدم موجود يتوافق مع المعرف المقدم.')
                      break;    
                    default:
                      setFirebaseError('تثبت من بريدك و كلمت المرور')
                  }

                });

              }} variant="primary mt-3"  type="submit">
                ارسل
              </Button>
              <p className='mt-3'> ليس لديك حساب  قم بانشاء حساب من     <Link to="/sign-up" > هنا</Link> </p>
              <p className='mt-3'><b>{ hasError &&  firebaseError}  </b> </p>
              <p className='forgetPass' onClick={() => {
                setShwoform("showForm")
              }}>هل نسيت كلمة المرور ؟</p>
          </Form>
        </div>
      </div>


    </main>
  )
  
}

export default SignIn