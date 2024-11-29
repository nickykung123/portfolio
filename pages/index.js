import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";



export default function Home({}) {
  return (
    <Layout home>
      <Head>
      <header  className="navbar">
        <nav className="navbar-container">
          <a href="#" className="navbar-logo">
            My Portfolio
          </a>
          <ul className="navbar-links margin-narbar">
          <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </nav>
      </header>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="A portfolio showcasing my projects, skills, and experiences as a web developer."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Social Media Section */}
      <h2 id="contact">_______________________________________</h2>
      <h2>Contact</h2>
      <section className="icon">
        <div className="icon-wrapper">
          <a
            aria-label="true"
            href="https://www.facebook.com/nickykung123/"
            target="_blank"
            rel=""
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
            rel=""
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
            rel=""
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
        <h4>
        Hello, today I'm going to present my portfolio. My Portfolio will consist of contact , about me and Projects.
        </h4>
        <h4>
        Contact Information - you can reach me.
        </h4>
        <h4>
          About Me - a glimpse into my background.
        </h4>
        <h4>
        Projects - the work I'm most proud of.
        </h4>
        <section className="flex">
        <a href="#contact" className="cta-button">
          View Contact
        </a>
        <a href="#about" className="cta-button">
          View About Me
        </a>
        <a href="#projects" className="cta-button">
          View Projects
        </a>
        </section>
        
        </section>

      {/* About Section */}
      <h2 id="about">_______________________________________</h2>
      <h2 >About Me</h2>
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
      <h2 id="projects">_______________________________________</h2>
      <section>
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-item">
            <a aria-label="true" href="https://melodytune.vercel.app/" target="_blank" className="no-underline">
            <h3>Project 1</h3>
              <img className="radius" src="/images/MELODYTUNE.png" alt="Project 1"></img>
            </a>
          </div>
          <div className="project-item">
          <a aria-label="true" href="https://jobhouse-supabase.vercel.app/" target="_blank"
            className="no-underline">
            <h3>Project 2</h3>
              <img className="radius" src="/images/Jobhouse.png" alt="Project 2"></img>
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .icon {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          padding: 1rem;
          background: #f4f4f4;
          border-radius: 2rem;
          margin-bottom: 2rem;
          font-size: 5rem; /* เพิ่มขนาดฟอนต์ของไอคอน */
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
        
        .flex {
          display: grid;
          display: flex;
          gap: 1rem;
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

        .radius {
          border-radius: 0.5rem
        }

        .home h1 {
          font-size: 2.5rem;
        }

        .home p {
          font-size: 1.2rem;
        }


        .cta-button {
          display: inline-block;
          padding: 1rem 1.5rem;
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
          background: #000000;
          border-radius: 2rem;
          text-align: center;
          color: #ffffff;

        }
        .project-item:hover {
          background: #f4f4f4;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: background 0.3s ease, box-shadow 0.3s ease;
          color: #000000;
          
          
        }
        a.no-underline {
          text-decoration: none;
          color: inherit;
        }
      
        a.no-underline:hover {
          text-decoration: none;
        }
        .navbar {
          width: 100%;
          background: #000000;
          padding: 1rem 2rem;
          position: fixed;
          top: 0;
          height: 50px;
          z-index: 1000;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          background: rgba(0, 0, 0, 0.7);
        }


        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: auto;
          margin-top: -1.5rem;
        }

        .navbar-logo {
          color: #ffffff;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
         
          
        }
        .navbar-logo:hover {
          color: #BEBEBE;
        }

        .navbar-links {
          list-style: none;
          display: flex;
          gap: 1.5rem;
        }

        .navbar-links li {
          display: inline-block;
        }

        .navbar-links a {
          text-decoration: none;
          color: #ffffff;
          font-size: 1rem;
          transition: color 0.3s;
        }

        .navbar-links a:hover {
          color: #BEBEBE;
        }

        @media (max-width: 768px) {
          .navbar-links {
            flex-direction: column;
            background: #000000;
            position: absolute;
            top: 100%;
            right: 0;
            padding: 1rem;
            border-radius: 0 0 5px 5px;
            display: none;
          
          }

          .navbar-links.show {
            display: flex;
          }

          .navbar-logo {
            cursor: pointer;
          }

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
