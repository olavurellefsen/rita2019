import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/programming-593312_438.jpg';
import pic2 from '../images/startup-594090_438.jpg';
import pic3 from '../images/work-731198_438.jpg';
import Sidebar from '../components/Sidebar';
import Scroll from '../components/Scroll';

const IndexPage = () => (
  <Layout>
    <Sidebar />

    <div id="wrapper">
      <section id="intro" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h1>#rita1tíma</h1>
          <p>
            Lær at forrita við{' '}
            <a href="https://blockly.games/?lang=fo">blokkaspæli á føroyskum</a>{' '}
            og vinn ein biograftúr til allan flokkin.
          </p>
          <p>
            <Scroll type="id" element="three">
              <a href="#three">Skráset flokkin</a>
            </Scroll>{' '}
            og send mynd til KT-felagið.
          </p>
          <ul className="actions">
            <li>
              <a href="https://blockly.games/?lang=fo" className="button">
                Blokkaspæl
              </a>
            </li>
          </ul>
        </div>
      </section>

      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="/#" className="image" alt="image">
            <img src={pic1} alt="" data-position="center center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Hvussu</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Lær meira
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic2} alt="" data-position="top center" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Feugiat consequat</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Lær meira
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <a href="/#" className="image">
            <img src={pic3} alt="" data-position="25% 25%" />
          </a>
          <div className="content">
            <div className="inner">
              <h2>Ultricies aliquam</h2>
              <p>
                Phasellus convallis elit id ullamcorper pulvinar. Duis aliquam
                turpis mauris, eu ultricies erat malesuada quis. Aliquam
                dapibus.
              </p>
              <ul className="actions">
                <li>
                  <Link className="button" to="/generic">
                    Lær meira
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>

      <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2>Um #rita1tíma</h2>
          <p>
            KT-felagið skipar fyri #rita1tíma fyri at kveikja áhugan fyri
            forritan millum ung. Endamálið er at øll skulu fáa eina
            grundleggjandi fatan av forritan, so at tey kunnu stýra teldunum
            heldur enn at lata teldurnar stýra teimum.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-code" />
              <h3>Lorem ipsum amet</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-lock" />
              <h3>Aliquam sed nullam</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Sed erat ullam corper</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-desktop" />
              <h3>Veroeros quis lorem</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-chain" />
              <h3>Urna quis bibendum</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
            <section>
              <span className="icon major fa-diamond" />
              <h3>Aliquam urna dapibus</h3>
              <p>
                Phasellus convallis elit id ullam corper amet et pulvinar. Duis
                aliquam turpis mauris, sed ultricies erat dapibus.
              </p>
            </section>
          </div>
          <ul className="actions">
            <li>
              <Link className="button" to="/generic">
                Lær meira
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Skráset flokkin</h2>
          <p>
            KT-felagið skipar fyri kapping millum allar skúlaflokkar, sum
            luttaka í #rita1tíma. Fyri at luttaka mugu tit skráseta tykkum her,
            og síðani senda KT-felagnum (marius@industry.fo) eina ella fleiri
            myndir frá tí tímanum, sum tit forrita. Vinningurin er ein túrur í
            biograf fyri allan flokkin.
          </p>
          <p>
            Seinasta freist at senda myndir inn er sunnudagin 15. desember.
            Lutakastið er í Vinnuhúsinum mánadagin 16. desember.
          </p>
          <div className="split style1">
            <section>
              <form
                name="rita1timaflokkar"
                method="post"
                netlify-honeypot="bot-field"
                data-netlify="true"
              >
                <input type="hidden" name="bot-field" />{' '}
                <div className="fields">
                  <div className="field half">
                    <label htmlFor="name">Skúli</label>
                    <input type="text" name="skuli" id="skuli" />
                  </div>
                  <div className="field half">
                    <label htmlFor="name">Flokkur</label>
                    <input type="text" name="flokkur" id="flokkur" />
                  </div>
                  <div className="field half">
                    <label htmlFor="name">Lærari</label>
                    <input type="text" name="name" id="name" />
                  </div>
                  <div className="field half">
                    <label htmlFor="email">Teldupostur</label>
                    <input type="email" name="email" id="email" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Viðmerking</label>
                    <textarea name="message" id="message" rows="3" />
                  </div>
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <ul className="actions">
                  <li>
                    <a href="/#" className="button submit">
                      Send Message
                    </a>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Kontaktpersónur</h3>
                  <span>Marius Thomassen</span>
                </li>

                <li>
                  <h3>Bústaður</h3>
                  <span>
                    Óðinshædd 2
                    <br />
                    FO-100 Tórshavn
                    <br />
                    Føroyar
                  </span>
                </li>
                <li>
                  <h3>Teldupostur</h3>
                  <a href="mailto:marius@industry.fo">marius@industry.fo</a>
                </li>
                <li>
                  <h3>Fartelefon</h3>
                  <span>+298 739905</span>
                </li>
                <li>
                  <h3>Sosialir miðlar</h3>
                  <ul className="icons">
                    <li>
                      <a
                        href="https://twitter.com/rita1tima"
                        className="fa-twitter"
                      >
                        <span className="label">Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://facebook.com/rita1tima"
                        className="fa-facebook"
                      >
                        <span className="label">Facebook</span>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
