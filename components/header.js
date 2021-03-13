import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  const [isAuthed, setAuthStatus] = useState(false);

  useEffect(() => {
    fetch("./api/getUser")
      .then((response) => response.json())
      .then((result) => {
        setAuthStatus(result.user && result.user.role === "authenticated");
      });
  }, []);

  const signOutUser = async () => {
    const res = await fetch(`/api/logout`);
    if (res.status === 200) setAuthStatus(false);
    // redirect to homepage when logging out users
    if (window.location !== "/") router.push("/");
    // console.log(res);
  };

  return (
    <>
      <nav>
   
        <p className="description">NextJS Supabase Protected Routes Example</p>
        <div className="actions">
          {isAuthed ? (
            <span onClick={signOutUser}>
              <h3>Sign Out &rarr;</h3>
            </span>
          ) : (
            <>
              {" "}
              <Link href="/signup">
                <h3>Sign Up &rarr;</h3>
              </Link>
              <Link href="/login">
                <h3>Login &rarr;</h3>
              </Link>
            </>
          )}
        </div>
      </nav>

     

      <style jsx>{`

        nav {
          box-sizing: border-box;
          margin: 0;
          min-width: 100vw;
          border-bottom: 5px solid #f7da8f;
          background-color: #f3f0ff;
          margin-bottom: 2em;
          padding-left: 8px;
          padding-right: 8px;
          align-items: center;
          display: flex;
          position: fixed;
          top: 0;
        }
        .description {
          color: #3a2e69;
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1rem;
          margin-left: 1em;
        }

        .actions {
          display: flex;
          flex-direction: row;
          position: absolute;
          right: 10px;
        }
        .actions h3 {
          margin-right: 1em;
        }
        @media (max-width: 600px) {
          .description {
            display: none;
          }
        }
      `}</style>
    </>
  );
}
