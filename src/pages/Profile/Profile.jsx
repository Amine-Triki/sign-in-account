import "./Profile.css";
import { useEffect } from "react";

import { Helmet } from "react-helmet-async";

import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

// import Moment from "react-moment";

const Profile = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }
  });

  if (loading) {
    return (
      <div>
        <p className=" profilecontainer sign d-flex  flex-column justify-content-center align-items-center flex-wrap">
          
          في طور التحميل
        </p>
      </div>
    );
  }
  if (error) {
    return (
      <div>
        <p className=" profilecontainer sign d-flex  flex-column justify-content-center align-items-center flex-wrap">
          خطأ في التحميل {error}
        </p>
      </div>
    );
  }

  if (user) {
    return (
      <main>
        <Helmet>
          <title>الملف الشخصي</title>
          <link
            rel="icon"
            type="image/png"
            href="../../assets/logo.webp"
          ></link>
        </Helmet>
        <div className="alg container sign  pe-5 d-flex  flex-column justify-content-center align-items-start flex-wrap">
          <p className="profile">اسم المستخدم : {user.displayName} </p>
          <p className="profile">البريد الالكتروني : {user.email} </p>
          <p className="profile">
            آخر مرة قمت بتجسيل الدخول : {user.metadata.lastSignInTime}
          </p>
          <p className="profile">
            تاريخ إنشاء الحساب : {user.metadata.creationTime}
          </p>
        </div>
      </main>
    );
  }
};

export default Profile;
