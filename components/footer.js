export default function Footer() {
  return (
    <>
      <footer>
        NextJS Supabase Protected Routes Example by{" "}
        <a href="https://www.aboutmonica.com/">Monica Powell</a>
      
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          background-color: #3a2e69;
          color: #f3f0ff;
          font-size: 0.8em;
          padding: 5em;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          color: #f3f0ff;
          font-weight: bold;
          text-decoration: none;
          background-image: linear-gradient(
            to top,
            rgba(180, 170, 255, 0.4) 0%,
            rgba(180, 170, 255, 0.4) 30%,
            transparent 40%,
            transparent 100%
          );
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .logo {
          height: 8em;
          padding: 1em;
        }
      `}</style>
    </>
  );
}
