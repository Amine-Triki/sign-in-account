import './Contact.css'

import { FaUserLarge } from "react-icons/fa6";
import { RiMailLine } from "react-icons/ri";
import { RiMapPinLine } from "react-icons/ri";
import { Helmet } from 'react-helmet-async';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
   
  };

  return (
    
    <main>
      <Helmet>
        <title>تواصل معي</title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet> 
      <section className=" text-center pt-5 pb-5" id="Contact">
        <div className="container">
          <div className="main-title mt-5 mb-5 position-relative">
            <h2>تواصل معي </h2>
            <p>ابقى على اتصال</p>
          </div>
          <div id="flex" className="d-flex  justify-content-center ">
            <div id="touch">
                <div className="text-start mt-4">
                  <h3>
                      ابقى على اتصال 
                  </h3>
                  <p className="mt-4 text-end">
                  إذا كان لديك أي أسئلة أو اقتراحات، يمكنك ببساطة الكتابة إلينا.<br/> سوف نجيبك فى اسرع وقت ممكن.
                  </p>
              </div>
              <div className="text-start d-flex justify-content-start align-items-center mt-4">
                <FaUserLarge   />
                  <div  className="head me-1">
                      <span><b>الاسم و اللقب :</b></span>
                      <span>أمين التريكي</span>
                  </div>
              </div>
              <div className="text-start d-flex justify-content-start align-items-center mt-4">
                <RiMapPinLine />
                  <div className="head me-1">
                      <span><b>العنوان :</b></span>
                      <span>ساقية الزيت , صفاقس , تونس</span>
                  </div>
              </div>
              <div className="text-start d-flex justify-content-start align-items-center mt-4">
                <RiMailLine />
                  <div  className="head me-1">
                      <span><b>البريد الإلكتروني :</b></span>
                      <span>Contact@aminetriki.com.tn</span>
                  </div>
              </div>
            </div>
      
            <form className="container mb-5  mt-4 text-end" onSubmit={handleSubmit} >
              <div className="row  mb-4">
                <div className="col">
                  <label htmlFor="first-name">الاسم</label>
                  <input type="text" className="form-control" id="first-name" placeholder="الاسم"/>
                </div>
                <div className="col">
                  <label htmlFor="last-name">اللقب</label>
                  <input type="text" className="form-control" id="last-name" placeholder="اللقب"/>
                </div>
              </div>
              <div className="form-group mb-4">
                  <label htmlFor="inputEmail4">البريد الإلكتروني</label>
                  <input type="email" className="form-control" id="inputEmail4" placeholder="البريد الإلكتروني"/>
                </div>
              <div className="form-group mb-4">
                <label htmlFor="subject">الموضوع </label>
                <input type="text" className="form-control" id="subject" placeholder="الموضوع"/>
              </div>
              <button type="submit" className="btn mb-4" style={{ backgroundColor: '#AA7A82' , cursor:'default' }} >ابعث</button>
            
            
            </form>
      
          </div>
        </div>
      </section>
    </main>
    
  )
}

export default Contact