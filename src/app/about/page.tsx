import type { NextPage } from "next";

const About: NextPage = () => {
  return (
    <main>
      <section className="about section" id="about">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>About Me</h2>
            </div>
          </div>
          <div className="row">
            <div className="about-content padd-15">
              <div className="row">
                <div className="about-text padd-15">
                  <h2>
                    I am Leung Jun Rui <span>Blockchain Engineer</span>
                  </h2>
                  <p>
                  Hello, I'm Leung Jun Rui, a seasoned Blockchain Engineer With 8 years of experience in blockchain development, I've had the privilege of working on several projects involving smart contracts, decentralized finance (DeFi), and crypto trading bots. <br/>I'm passionate about leveraging blockchain technology to create innovative solutions that empower investors and contribute to the growth of the crypto ecosystem
                  </p>
                </div>
              </div>
              <div className="row">
                <div className="personal-info padd-15">
                  <div className="row">
                    <div className="info-item padd-15">
                      <p>
                        Website : <span>www.leungjunrui.vercel.app</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Email : <span>successdev777@gmail.com</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Degree : <span>Master Degree Computer Science</span>
                      </p>
                    </div>
                    {/* <div className="info-item padd-15">
                      <p>
                        Phone : <span>+818084710263</span>
                      </p>
                    </div> */}
                    <div className="info-item padd-15">
                      <p>
                        City : <span>Petaling Jaya, Malaysia</span>
                      </p>
                    </div>
                    <div className="info-item padd-15">
                      <p>
                        Freelance : <span>Available</span>
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="buttons padd-15">
                      <a
                        href="/assets/docs/resume.pdf"
                        target="_target"
                        className="btn"
                      >
                        Download CV
                      </a>
                      <a
                        href="#contact"
                        data-section-index={0}
                        className="btn hire-me"
                      >
                        Hire Me
                      </a>
                    </div>
                  </div>
                </div>
                <div className="skills padd-15">
                  <div className="row">
                    <div className="skill-item padd-15">
                      <h5>Solidity</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "91%" }} />
                        <div className="skill-percent">91%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Rust</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>Python</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "90%" }} />
                        <div className="skill-percent">50%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>JavaScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>TypeScript</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "95%" }} />
                        <div className="skill-percent">95%</div>
                      </div>
                    </div>
                    <div className="skill-item padd-15">
                      <h5>C, C++</h5>
                      <div className="progress">
                        <div className="progress-in" style={{ width: "92%" }} />  
                        <div className="skill-percent">92%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="education padd-15">
                  <h3 className="title">Education</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2014 to 2016
                          </h6>
                          <h4 className="timeline-title">
                            University Malaya
                          </h4>
                          <p className="timeline-text">
                            Bachelor degree of Computer Science
                          </p>
                        </div>
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 2016 to 2017
                          </h6>
                          <h4 className="timeline-title">
                            University Malaya
                          </h4>
                          <p className="timeline-text">
                            Master degree of Computer Science
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="experience padd-15">
                  <h3 className="title">Experience</h3>
                  <div className="row">
                    <div className="timeline-box padd-15">
                      <div className="timeline shadow-dark">
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 12/2022 – 07/2024
                          </h6>
                          <h4 className="timeline-title">Senior Blockchain Engineer & Project Manager</h4>
                          <p className="timeline-text">
                            - Developed and maintained multiple websites using HTML, CSS, and JavaScript<br/>
                            - Collaborated with designers and project managers to ensure websites met client requirements<br/>
                            - Implemented responsive design to ensure websites were mobile-friendly<br/>
                            - Utilized React and Angular frameworks to improve website functionality
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 08/2019 – 10/2022
                          </h6>
                          <h4 className="timeline-title">Blockchain engineer</h4>
                          <p className="timeline-text">
                          - Smart Contract Development: Spearheaded the design and implementation of smart contracts using Solidity for Ethereum-based projects, resulting in a 90% increase in transaction efficiency and security. <br />
                          - Decentralized Application (DApp) Architecture: Designed and optimized DApp architectures, leading to a 80% improvement in system performance and scalability, supporting over 500 concurrent users seamlessly.<br />
                          - Tokenization & DeFi Projects: Implemented proof-of-concept (PoC) projects for tokenization of real-world assets and decentralized finance (DeFi) smart contracts, unlocking liquidity worth $5M and driving investment opportunities.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                        {/* Timeline Item */}
                        <div className="timeline-item">
                          <div className="circle-dot" />
                          <h6 className="timeline-date">
                            <i className="fa fa-calendar" /> 05/2017 – 07/2019
                          </h6>
                          <h4 className="timeline-title">Full-stack engineer</h4>
                          <p className="timeline-text">
                            - Web Application Development: Led the design and implementation of responsive web applications using ReactJS for the front-end and Node.js for the back-end, enhancing user experience and improving site performance by 80%. <br />
                            - Performance Optimization: Optimized application performance by implementing efficient algorithms and database queries, resulting in a 90% reduction in load times and improved overall efficiency<br />
                            - Blockchain Integration: Spearheaded the integration of blockchain technology into existing systems to secure transactions and data integrity, leveraging Ethereum smart contracts and IPFS for decentralized storage solutions.<br />
                            - Engineered scalable server-side solutions with Node.js, Express.js, and managed databases like MongoDB or PostgreSQL.
                          </p>
                        </div>
                        {/* Timeline Item end */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
