import Image from "next/image";
export default async function Home() {

  return (
    <main>
      <section className="home section" id="home">
        <div className="container">
          <div className="intro">
            <Image
              src="/imgs/alsiam.png"
              alt="Al Siam Profile"
              className="shadow-dark"
            />
            <h1>Leung Jun Rui</h1>
            <p>Blockchain Engineer</p>
            <div className="social-links">
              <a href="" target="_blank">
                <i className="fa fa-twitter" />
              </a>
              <a href="" target="_blank">
                <i className="fa fa-facebook" />
              </a>
              <a href="https://github.com/passion0714" target="_blank">
                <i className="fa fa-github" />
              </a>
              <a href="" target="_blank">
                <i className="fa fa-instagram" />
              </a>
              <a href="" target="_blank">
                <i className="fa fa-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
