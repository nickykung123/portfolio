import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my projects, skills, and experiences as a web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Social Media Section */}
      <section className="icon">
        <div className="icon-wrapper">
          <a
            aria-label="true"
            href="https://www.facebook.com/nickykung123/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaFacebook className="social-icon facebook" />
            <span className="icon-label">Facebook</span>
          </a>
        </div>
        <div className="icon-wrapper">
          <a
            aria-label="true"
            href="https://www.instagram.com/nickykung123/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaInstagram className="social-icon instagram" />
            <span className="icon-label">Instagram</span>
          </a>
        </div>
        <div className="icon-wrapper">
          <a
            aria-label="true"
            href="https://github.com/nickykung123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="corlor-black" />
            <span className="icon-label">Github</span>
          </a>
        </div>
      </section>

      {/* Home Section */}
      <section className="home">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, projects, and skills.</p>
        <a href="#projects" className="cta-button">
          View Projects
        </a>
      </section>

      {/* About Section */}
      <h2>About Me</h2>
      <section className="about">
        <h3>Student ID: 66026000</h3>
        <h3>Name: Kittisak Wongraja</h3>
        <h3>NickName: Nicky</h3>
        <h3>Gernder: Male</h3>
        <h3>Center name: Phayao</h3>
        <h3>Level: Normal colon</h3>
        <h3>
          Faculty name: Faculty of Information and Communication Technology
        </h3>
        <h3>
          Doctorate degree: [210706165] Bachelor of Engineering field of study.
          Engineering curriculum
        </h3>
      </section>

      {/* Projects Section */}
      <section>
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <h3>Project 1</h3>
            <a href="https://melodytune.vercel.app/">
              <img src="/images/MELODYTUNE.png" alt="Project 1"></img>
            </a>
          </div>
          <div className="project-item">
            <h3>Project 2</h3>
            <a href="">
              <img src="/images/Jobhouse.png" alt="Project 2"></img>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          background: #ffffff;
        }

        .icon-wrapper {
          position: relative;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          transition: transform 0.5s ease-in-out;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #f4f4f4;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: background 0.3s ease, box-shadow 0.3s ease;
          color: black;
        }

        .social-link:hover {
          background: #000000;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
          color: white
        }
        
        

        .icon-label {
          position: absolute;
          bottom: -1.2rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.9rem;
          color: #000;
          opacity: 0;
          transition: opacity 0.5s;
        }

        .social-link:hover .icon-label {
          opacity: 1;
        }

        .home {
          text-align: center;
          padding: 2rem;
          background: #f4f4f4;
          border-radius: 2rem
        }

        .home h1 {
          font-size: 2.5rem;
        }

        .home p {
          font-size: 1.2rem;
        }


        .cta-button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          background: #000000;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background 0.5s;
        }

        .cta-button:hover {
          background: #FFFFFF;
          color: #000000; 
      }
      
        .about{
          text-align: center;
          padding: 2rem;
          background: #f4f4f4;
          border-radius: 2rem
        }
        .about,
        .projects
         {
          padding: 2rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .project-item {
          padding: 1rem;
          background: #f4f4f4;
          border-radius: 2rem;
          text-align: center;
        }

        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
