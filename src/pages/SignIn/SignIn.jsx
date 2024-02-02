import './SignIn.css'
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <main>
      <Helmet>
        <title> تسجيل الدخول  </title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
  
      <div className='container sign d-flex  flex-column justify-content-center align-items-center flex-wrap'>
        <p>تسجيل الدخول : </p>
        <div>
          <Form className="container  d-flex align-items-center justify-content-center flex-column ">
              
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control type="email" placeholder="البريد الالكتروني" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>كلمة السر</Form.Label>
                <Form.Control type="password" placeholder="كلمة السر" />
              </Form.Group>
              <p> </p>
              <p> ليس لديك حساب  قم بانشاء حساب من     <Link to="/sign-up" > هنا</Link> </p>
              <Button variant="primary mt-2" type="submit">
                ارسل
              </Button>
            </Form>
        </div>
      </div>





    </main>
  )
}

export default SignIn