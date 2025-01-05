import type { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <>
        <section className="service section" id="services">
  <div className="container">
    <div className="row">
      <div className="section-title padd-15">
        <h2>Our Services</h2>
      </div>
    </div>
    <div className="row">
      {/* Service Item 1: Logo Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-cog" /></div>
          <h4>Decentralized Applications (DApps) Development</h4>
          <p>Design and deploy DApps that leverage blockchain for decentralized operations, offering transparency and security in various sectors such as finance, supply chain, and healthcare</p>
        </div>
      </div>
      {/* Service Item 1 End */}
      {/* Service Item 2: Web Design */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-database" /></div>
          <h4>Smart Contract Engineering</h4>
          <p>Create smart contracts using Solidity or similar languages, tailored to specific business needs, ensuring legal compliance and operational efficiency.
          </p>
        </div>
      </div>
      {/* Service Item 2 End */}
      {/* Service Item 3: laptop-phone */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-laptop" /></div>
          <h4>Cryptocurrency and Tokenization Services</h4>
          <p>Offer consulting and development services for cryptocurrency projects, including token creation, ICO/IEO setup, and smart contract auditing.</p>
        </div>
      </div>
      {/* Service Item 3 End */}
      {/* Service Item 4: Web Development */}
      <div className="service-item padd-15">
        <div className="service-item-inner">
          <div className="icon"><i className="fa fa-code" /></div>
          <h4>Machine Learning Model Deployment on Blockchain</h4>
          <p>Host machine learning models on blockchain platforms, enabling decentralized access and execution of AI-powered functionalities.</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  );
};

export default Service;
