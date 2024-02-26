import "./SignUp.css";
import { Helmet } from "react-helmet-async";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

import { auth } from "../../firebase/config";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  return (
    <main>
      <Helmet>
        <title> سجل </title>
        <link rel="icon" type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
      <div className="container sign d-flex  flex-column justify-content-center align-items-center flex-wrap">
        <p>لانشاء حساب الرجاء قم بملئ الابيانات التالية : </p>
        <div>
          <Form className=" container d-flex align-items-center justify-content-center flex-column ">
            <Form.Group className="mb-3" controlId="formBasictext">
              <Form.Label> الاسم</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="الاسم "
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>البريد الالكتروني</Form.Label>
              <Form.Control
                type="email"
                required
                placeholder="البريد الالكتروني"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>كلمة السر</Form.Label>
              <Form.Control
                type="password"
                required
                placeholder="كلمة السر"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Form.Group>
            <Button
              onClick={(e) => {
                e.preventDefault();

                createUserWithEmailAndPassword(auth, email, password)
                  .then((userCredential) => {
                    // Signed up
                    const user = userCredential.user;
                    // ...
                    updateProfile(auth.currentUser, {
                      displayName: name,
                    })
                      .then(() => {
                        // Profile updated!
                        // ...

                        navigate("/");
                      })
                      .catch((error) => {
                        // An error occurred
                        // ...
                      });
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                  });
              }}
              variant="primary mt-3"
              type="submit"
            >
              ارسل
            </Button>
          </Form>
        </div>
      </div>
    </main>
  );
};

export default SignUp;
