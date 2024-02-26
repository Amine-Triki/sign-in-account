import './Header.css'
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/config'
import {  signOut } from "firebase/auth";

const Header = ({ pageColor }) => {

  const [user, loading, error] = useAuthState(auth);





  return (
    <> 
    {!user && <nav  className={`navbar navbar-expand-lg sticky-top   ${pageColor}`}> 
          <div className="container">
            <Link  to="/" className="navbar-brand" ><h1 className={`${pageColor}`}>أمين التريكي</h1></Link>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#main" 
            aria-controls="main" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ps-3">
                <li className="nav-item ">
                  <Link  to="/" className="nav-link   p-3 p-lg-4">القرآن الكريم</Link>
                </li>
                <li className="nav-item ">
                  <Link  to="/About" className="nav-link  p-3 p-lg-4">عني</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/projects" className="nav-link  p-3 p-lg-4">مشاريعي</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/contact" className="nav-link  p-3 p-lg-4">تواصل معي</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/sign-in" className="nav-link  p-3 p-lg-4"> تسجيل الدخول</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/sign-up" className="nav-link  p-3 p-lg-4"> سجل</Link>
                </li>
              </ul>
            
            </div>
            
          </div>
    </nav> } 
    {user && <nav  className={`navbar navbar-expand-lg sticky-top   ${pageColor}`}> 
          <div className="container">
            <Link  to="/" className="navbar-brand" ><h1 className={`${pageColor}`}>أمين التريكي</h1></Link>
            <button className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#main" 
            aria-controls="main" 
            aria-expanded="false" 
            aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="main">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ps-3">
                <li className="nav-item ">
                  <Link  to="/Profile" className="nav-link   p-3 p-lg-4">الملف الشخصي</Link>
                </li>
                <li className="nav-item ">
                  <Link  to="/" className="nav-link   p-3 p-lg-4">القرآن الكريم</Link>
                </li>
                <li className="nav-item ">
                  <Link  to="/Prayer-Times" className="nav-link   p-3 p-lg-4">أوقات الصلاة</Link>
                </li>
                <li className="nav-item ">
                  <Link  to="/About" className="nav-link  p-3 p-lg-4">عني</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/projects" className="nav-link  p-3 p-lg-4">مشاريعي</Link>
                </li>
                <li className="nav-item ">
                  <Link to="/contact" className="nav-link  p-3 p-lg-4">تواصل معي</Link>
                </li>
                <li className="nav-item ">
                  <Link onClick={() => {
                    signOut(auth).then(() => {
                      // Sign-out successful.
                    }).catch((error) => {
                      // An error happened.
                    });
                  }} to="/" className="nav-link  p-3 p-lg-4"> تسجيل الخروج</Link>
                </li>
                
              </ul>
            
            </div>
            
          </div>
    </nav> }

    </>
  )
}

Header.propTypes = {
  pageColor: PropTypes.string.isRequired, 
};

export default Header