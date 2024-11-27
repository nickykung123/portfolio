import Head from 'next/head';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { FaFacebook, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Home({ allPostsData }) {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'your-email@example.com';

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
            aria-label="Facebook"
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
            aria-label="Instagram"
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
            aria-label="Instagram"
            href="https://github.com/nickykung123"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <FaGithub className="social-icon github" />
            <span className="icon-label">Github</span>
          </a>
        </div>
      </section>

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>Discover my work, projects, and skills.</p>
        <a href="#projects" className="cta-button">
          View Projects
        </a>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Me</h2>
        <h3>Student ID: 66026000</h3>
        <h3>Name: Kittisak Wongraja</h3>
        <h3>NickName: Nicky</h3>
        <h3>Gernder: Male</h3>
        <h3>Center name: Phayao</h3>
        <h3>Level: Normal colon</h3>
        <h3>Faculty name: Faculty of Information and Communication Technology</h3>
        <h3>Doctorate degree: [210706165] Bachelor of Engineering field of study. Engineering curriculum</h3>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-grid">
          {allPostsData.map(({ id, title, description }) => (
            <div key={id} className="project-item">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
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
          transition: transform 0.3s ease-in-out;
        }

        .social-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          position: relative;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #e4e4e4;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .social-link:hover {
          background: #f0f0f0;
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
        }

        .social-icon {
          font-size: 2rem;
          color: #000; /* Default color black */
          transition: transform 0.3s ease, color 0.3s ease;
        }

        .social-icon:hover {
          transform: scale(1.2); /* Scale on hover */
          color: #888; /* Color gray on hover */
        }

        .facebook:hover {
          color: #3b5998; /* Facebook color on hover */
        }

        .instagram:hover {
          color: #e4405f; /* Instagram color on hover */
        }

        .icon-label {
          position: absolute;
          bottom: -1.5rem;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.9rem;
          color: #000;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .social-link:hover .icon-label {
          opacity: 1;
        }

        .hero {
          text-align: center;
          padding: 2rem;
          background: #f4f4f4;
        }

        .hero h1 {
          font-size: 2.5rem;
        }

        .hero p {
          font-size: 1.2rem;
        }

        .cta-button {
          display: inline-block;
          margin-top: 1rem;
          padding: 0.5rem 1.5rem;
          background: #0070f3;
          color: #fff;
          text-decoration: none;
          border-radius: 5px;
          transition: background 0.3s;
        }

        .cta-button:hover {
          background: #005bb5;
        }

        .about,
        .projects,
        .contact {
          padding: 2rem;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .project-item {
          padding: 1rem;
          background: #e9e9e9;
          border-radius: 8px;
          text-align: center;
        }

        .contact-button {
          display: inline-block;
          padding: 0.5rem 1rem;
          background: #0070f3;
          color: #fff;
          border-radius: 5px;
          text-decoration: none;
          transition: background 0.3s;
        }

        .contact-button:hover {
          background: #005bb5;
        }

        @media (max-width: 600px) {
          .hero h1 {
            font-size: 1.8rem;
          }

          .hero p {
            font-size: 1rem;
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
