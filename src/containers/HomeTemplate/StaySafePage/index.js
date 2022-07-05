import React from "react";
import "./StaySafePage.scss";
import Image from "@/components/Image"

export default function StaySafePage() {
  return (
    <div id="stay-safe-page">
      <div className="stay-safe__poster">
        <Image
          src="https://media.finnkino.fi/files/images/Turvallisesti_yhdess%C3%A4_Turvallisuus1920X650%20copy%202.jpg"
          alt="Finnkinon turvallisuus"
        />
      </div>
      <div className="stay-safe__content container">
        <section>
          <h3 className="stay-safe__content-title">Covid-19 passport</h3>
          <p className="stay-safe__content-text">
            With the new regulations, the use of the COVID-19 passport has been
            suspended in all our theaters. A passport is not required for
            participants in normal or private screenings.
          </p>
        </section>

        <section>
          <h3 className="stay-safe__content-title">Stay safe together</h3>
          <p className="stay-safe__content-text">
            We adhere to regional restrictions in cinemas to ensure your safety
            and comfort. Please come to the movies healthy. <br /> Screening
            start times are staggered to avoid queues.
            <br /> Our staff is happy to help with safety issues.
          </p>
          <Image
            className="stay-safe__content-image"
            src="https://media.finnkino.fi/files/turvallisuus/turvallisuus_ostaturvallisesti_900x350.jpg"
            alt="Finnkino osta turvallisesti"
          />
          <div className="stay-safe__content-list">
            <p>Buy safely</p>
            <ul>
              <li>
                Buy tickets online in advance to reduce contacts at the cinema.
              </li>
              <li>
                We do not accept cash at our cash registers. You can pay at the
                checkout with payment cards and other culture benefit, as well
                as serial tickets and delicacy and cultural vouchers. Read more
                about payment methods here.
              </li>
              <li>Our theaters have a contactless ticket office.</li>
              <li>
                Our theaters sell a selection of pre-packed snacks and drinks.
              </li>
            </ul>
          </div>
        </section>

        <section>
          <Image
            className="stay-safe__content-image"
            src="https://media.finnkino.fi/files/turvallisuus/turvallisuus_tehostettusiivoaminen_900x350.jpg"
            alt="Finnkino tehostettu siivoaminen"
          />
          <h3 className="stay-safe__content-title">Enhanced cleaning</h3>
          <div className="stay-safe__content-list">
            <ul>
              <li>Increased cleaning intervals and thorough cleaning.</li>
              <li>
                Particular attention is paid to the cleanliness of the toilets.
              </li>
              <li>You will find disinfection points in our theaters.</li>
            </ul>
          </div>
        </section>

        <section>
          <Image
            className="stay-safe__content-image"
            src="https://media.finnkino.fi/files/turvallisuus/turvallisuus_osaavahenkil%C3%B6kunta_900x350.jpg"
            alt="Finnkino osaava henkilökunta"
          />
          <h3 className="stay-safe__content-title">Skilled staff</h3>
          <div className="stay-safe__content-list">
            <ul className="stay-safe__content-list">
              <li>
                All our employees are trained to follow safety and hygiene
                measures.
              </li>
              <li>
                If necessary, we use protective equipment such as masks and
                gloves.
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
