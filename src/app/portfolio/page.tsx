import type { NextPage } from "next";

const Portfolio: NextPage = () => {
  return (
    <div>
      <section className="portfolio section" id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title padd-15">
              <h2>Portfolio</h2>
            </div>
          </div>
          <div className="row">
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/img-1.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>I played a crucial role in developing smart contracts
                  and supporting both backend and frontend integrations</h4>
                  <div className="icon">
                    <a target="_blank" href="https://pioneerlegends.com/"><i className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/img-2.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>I've integrated advanced blockchain functionalities such
                        as NFT collections, on-chain storage for in-game
                        progress, and secure transactions.</h4>
                  <div className="icon">
                    <a target="_blank" href="https://reavers.xyz/"><i className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/img-9.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>We've made it easier for users to interact with the
                        platform, whether they're looking to trade NFTs,
                        contribute to liquidity pools, or simply explore the
                        vast array of NFT collections available.</h4>
                  <div className="icon">
                    <a target="_blank" href="https://www.snippool.xyz/"><i className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div
              className="portfolio-item padd-15"
              data-category="graphics-design"
            >
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/img-3.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>To bring these features to life, we've worked closely
                        with the IOTA EVM toolset, utilizing Solidity for smart
                        contract development</h4>
                  <div className="icon">
                    <a target="_blank" href="https://launchpad.iotaevm.snippool.xyz/"><i className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="wordpress">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/img-4.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <p>From the ground up, I contributed to the technical
                        development of MetaGame. This included writing smart
                        contracts using Solidity, ensuring they were secure and
                        efficient.</p>
                  <div className="icon">
                    <a target="_blank" href="https://enter.metagame.wtf/"><i className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
            {/* Portfolio Item */}
            <div className="portfolio-item padd-15" data-category="web-design">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src="/imgs/portfolio/img-6.jpg" alt="portfolio" />
                </div>
                <div className="portfolio-info">
                  <h4>Led the development process of a poker platform & fixed
                  issues in the codebase.</h4>
                  <div className="icon">
                    <a target="_blank" href="https://goalpost.gg/"><i className="fa fa-search" /></a>
                  </div>
                </div>
              </div>
            </div>
            {/* Portfolio Item End*/}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
