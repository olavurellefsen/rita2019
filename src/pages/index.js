import React from 'react';

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
            Í ár verður lært at forrita í{' '}
            <a href="https://blockly.games/?lang=fo">blokkaspælinum</a>, sum er
            á føroyskum
          </p>
          <p>Tiltakið er 9.-13. desember 2019</p>
          <p>
            <Scroll type="id" element="three">
              <a href="#three">Skrásetið tykkum</a>
            </Scroll>
            , forritið í ein tíma og vinnið ein biograftúr til allan flokkin.
          </p>
          <ul className="actions">
            <li>
              <Scroll type="id" element="one">
                <a href="#one" className="button">
                  Hvat er tað?
                </a>
              </Scroll>
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
              <h2>Hvat er tað?</h2>
              <p>
                Rita1tíma er eitt tiltak, har næmingar læra um forritan við at
                loysa avbjóðingar í blokkaspælinum, sum er umsett til føroyskt.
                Neyðugt er at næmingarnir hava atgongd til teldu ella teldil.
                Tiltakið er ætlað at taka ein skúlatíma.
              </p>
              <ul className="actions">
                <li>
                  <Scroll type="id" element="three">
                    <a href="#three" className="button">
                      Skrásetið tykkum
                    </a>
                  </Scroll>
                </li>
                <li>
                  <a href="https://blockly.games/?lang=fo" className="button">
                    Blokkaspælið
                  </a>
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
              <h2>Hvussu skipa vit tað í flokkinum?</h2>
              <p>
                Lærarar skipa fyri tiltakinum í flokkinum - møguliga hjálptir av
                KT-fólki uttanifrá. Blokkaspælið er gjørt soleiðis, at tað ber
                til hjá næmingunum sjálvum at loysa avbjóðingarnar. Lærararnir
                skipa fyri, seta í gongd, vegleiða og taka samanum.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://hourofcode.com/us/how-to" className="button">
                    Vegleiðing til lærarar
                  </a>
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
              <h2>Hvat fáa næmingarnir burtur úr?</h2>
              <p>
                Við at royna at forrita í blokkaspælinum fáa næmingarnir eina
                fyrstu fatan av, hvat forritan er og hvussu tú forritar. Tað
                sigur seg sjálvt, at tú gerst ikki serfrøðingur eftir einum
                tíma, men vónandi verður hugurin kveiktur at læra meira.
              </p>
              <ul className="actions">
                <li>
                  <a href="https://blockly.games/?lang=fo" className="button">
                    Blokkaspælið
                  </a>
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
            Tiltakið #rita1tíma verður á skúlum kring landið í døgunum 9. til
            13. desember 2019. Síðani 2016 hevur KT-felagið skipað fyri
            #rita1tíma. Tiltakið er samskipað við altjóða átakið{' '}
            <a href="https://hourofcode.org">Hour of Code</a>.
          </p>
          <p>
            Endamálið er at kveikja áhugan fyri forritan millum ung. KT-felagið
            ynskir, at øll fáa eina grundleggjandi fatan av forritan, soleiðis
            at vit kunnu stýra teldunum heldur enn at lata teldurnar stýra
            okkum.
          </p>
          <div className="features">
            <section>
              <span className="icon major fa-laptop" />
              <h3>Hvat krevst?</h3>
              <p>
                Fyri at luttaka er neyðugt at hava teldu ella teldil við
                internetsambandi.
              </p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Ber til at luttaka uttan internet?</h3>
              <p>
                Ja, tað ber til at{' '}
                <a href="https://github.com/google/blockly-games/raw/offline/generated/blockly-games-fr.zip">
                  taka Blokkaspælið niður
                </a>{' '}
                og forrita uttan internetsamband.
              </p>
            </section>
            <section>
              <span className="icon major fa-money" />
              <h3>Kostar tað nakað?</h3>
              <p>Tað er ókeypis at luttaka í #rita1tíma.</p>
            </section>
            <section>
              <span className="icon major fa-cog" />
              <h3>Kunnu vit fáa hjálp?</h3>
              <p>
                Tankin er, at lærarar sjálvir fyriskipa tiltakið í einstøku
                flokkunum. Tó ber til at heita á KT-felagið (sí niðanfyri) um at
                seta tykkum í samband við KT-fólk, ið kunnu hjálpa ókeypis.
              </p>
            </section>
            <section>
              <span className="icon major fa-address-book" />
              <h3>Hvør kann luttaka?</h3>
              <p>
                Allir flokkar frá 1. flokki til og við miðnámsskúla kunnu
                luttaka.
              </p>
            </section>
            <section>
              <span className="icon major fa-code" />
              <h3>
                Eru aðrar uppgávur enn{' '}
                <a href="https://blockly.games/?lang=fo">blokkaspælið</a>?
              </h3>
              <p>
                Ja, inni á{' '}
                <a href="https://hourofcode.com/us/learn">hourofcode.org</a> er
                ein langur listi við øðrum avbjóðingum.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section id="three" className="wrapper style1 fade-up">
        <div className="inner">
          <h2>Skráset flokkin</h2>
          <p>
            KT-felagið skipar fyri lutakasti millum allar skúlaflokkar, sum
            luttaka í #rita1tíma. Tit skráseta tykkum her og forrita síðani í
            ein tíma millum 9. og 13. desember 2019. Vinningurin er ein túrur í
            biograf fyri allan flokkin.
          </p>
          <p>
            Lutakastið millum luttakandi flokkarnar verður í Vinnuhúsinum
            mánadagin 16. desember.
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
                  <div className="field half">
                    <label htmlFor="name">Tal av næmingum</label>
                    <input type="text" name="luttakarar" id="luttakarar" />
                  </div>
                  <div className="field half">
                    <label htmlFor="name">Fartelefon</label>
                    <input type="text" name="fartelefon" id="fartelefon" />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Viðmerking</label>
                    <textarea name="message" id="message" rows="3" />
                  </div>
                  <div data-netlify-recaptcha="true"></div>
                </div>
                <ul className="actions">
                  <li>
                    <button type="submit" className="button submit">
                      Skráset flokkin
                    </button>
                  </li>
                </ul>
              </form>
            </section>
            <section>
              <ul className="contact">
                <li>
                  <h3>Kontaktpersónur</h3>
                  <span>
                    Marius Thomassen
                    <br />
                    samskipari, KT-felagið
                  </span>
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
