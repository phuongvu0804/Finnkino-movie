import React from "react";
import "./HomePage.scss";
import Image from "@/components/Image"

function HomePage() {
  return (
    <div id="home-page">
      <div className="container">
        <div className="carousel mt-5 mb-4">
          <a
            href="https://www.finnkino.fi/thor?itm_source=FKM&itm_medium=desktop_paraati&itm_campaign=OCG_Partnership_Thor&itm_content=23062022"
            target="_blank"
          >
            <Image src="https://tpc.googlesyndication.com/simgad/7142289620709067449" alt="img_ad"/>
          </a>
        </div>
        <div className="news">
          <h3 className="mt-5 mb-3">Finnkino news</h3>
          <div className="row news-list">
            <div className="col-lg-6 col-md-6 news-item">
              <Image src="https://media.finnkino.fi/1012/news/6496/BTS-PTD_1920_.jpg" alt="News'image"/>
              <a
                target="_blank"
                href="https://www.finnkino.fi/en/news/Top-Ajankohtaista/2022-02-22/6496/BTS-Permission-to-Dance-eng/"
              >
                BTS: Permission to Dance eng
              </a>
            </div>
            <div className="col-lg-6 col-md-6 news-item">
              <Image src="https://media.finnkino.fi/1012/news/6129/Kulttuuriedut_444x300.jpg?width=458" alt="News'image"/>
              <a
                target="_blank"
                href="https://www.finnkino.fi/en/news/Top-Ajankohtaista/2022-02-22/6496/BTS-Permission-to-Dance-eng/"
              >
                Cultural benefits have been added to payment methods in the web
                shop: ePassi, Edenred, Smartum Pay and Eazybreak
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage
