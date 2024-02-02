import './SignUp.css'
import { Helmet } from 'react-helmet-async';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const SignUp = () => {
  return (
    <main>
      <Helmet>
        <title> سجل  </title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
      <div className='container sign d-flex  flex-column justify-content-center align-items-center flex-wrap'>
        <p>لانشاء حساب الرجاء قم بملئ الابيانات التالية : </p>
        <div>
          <Form className=" container d-flex align-items-center justify-content-center flex-column ">
              <Form.Group className="mb-3" controlId="formBasictext">
                <Form.Label> الاسم</Form.Label>
                <Form.Control type="text" placeholder="الاسم "/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>البريد الالكتروني</Form.Label>
                <Form.Control type="email" placeholder="البريد الالكتروني" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>كلمة السر</Form.Label>
                <Form.Control type="password" placeholder="كلمة السر" />
              </Form.Group>
              <Button variant="primary mt-3" type="submit">
                ارسل
              </Button>
            </Form>
        </div>
      </div>
      
      
      </main>
  )
}

export default SignUp