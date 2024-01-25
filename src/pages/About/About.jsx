import './About.css'
import { Helmet } from 'react-helmet-async';

import AmineTrikiImg from "../../assets/amine triki.webp"

import { RiGithubFill } from "react-icons/ri";
import { RiLinkedinFill } from "react-icons/ri";
import { RiFacebookCircleFill } from "react-icons/ri";
import { RiYoutubeFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

function About() {
  return (
    <main>
      <Helmet>
        <title>من أنا</title>
        <link rel="icon"  type="image/png" href="../../assets/logo.webp"></link>
      </Helmet>
      <section className="landing ">
        <div className="container  d-flex justify-content-center align-items-center flex-wrap align-content-between">
          <div>
            <h2 className="pt-3">مرحبا , أنا أمين التريكي</h2>
            <h3 className="mt-3">مطور واجهة أمامية مبتدئ</h3>
            <h3 className="mt-3">
            أنا أقوم بإنشاء مواقع ناجحة تكون سريعة وسهلة الاستخدام ومبنية بممارسات متقدمة.
            </h3>
            <h3 className="mt-3">
            أستخدم HTML، CSS، Sass، Tailwind CSS، Bootstrap، JavaScript، و React؛
أنا محرر  WordPress.
            </h3>
            <a
              className="btn  rounded-pill main-btn  mt-3 fs-4"
              href="https://mega.nz/file/KVdmTQLY#NJKIZHSzCZRdakg2wS0iwpEvSRSIJmgZHbH5GS3f_Ow"
              target="_blank"
              rel="noreferrer"
              style={{ backgroundColor: "#ffc0cb" }}
            >
              تحميل السيرة الذاتية
            </a>
            <div className="mt-4 ">
              <a
                href="https://github.com/Amine-Triki"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill className="display-2 " />
              </a>
              <a
                href="https://www.linkedin.com/in/amine-triki-tn/"
                target="_blank"
                rel="noreferrer"
              >
                <RiLinkedinFill className="display-2  " />
              </a>
              <a
                href="https://www.facebook.com/amine.triki.1998"
                target="_blank"
                rel="noreferrer"
              >
                <RiFacebookCircleFill className="display-2 " />
              </a>
              <a
                href="https://www.youtube.com/@aminetrikitv"
                target="_blank"
                rel="noreferrer"
              >
                <RiYoutubeFill className="display-2 " />
              </a>
              <a
                href="https://www.instagram.com/mr_amine_triki/"
                target="_blank"
                rel="noreferrer"
              >
                <RiInstagramFill className="display-2 " />
              </a>
            </div>
          </div>
          <img
            className="image mt-5 mb-5 "
            src={AmineTrikiImg}
            alt="Amine Triki"
            title="Amine Triki"
          />
        </div>
      </section>
    </main>
  )
}

export default About