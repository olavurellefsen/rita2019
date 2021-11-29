import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import pic1 from '../images/programming-593312_438.jpg';
import pic2 from '../images/startup-594090_438.jpg';
import pic3 from '../images/work-731198_438.jpg';
import Sidebar from '../components/Sidebar';
import ScrollableAnchor from 'react-scrollable-anchor';

const IndexPage = () => (
  <Layout>
    <Sidebar />
    <div id="wrapper">
      <ScrollableAnchor id={'intro'}>
        <section id="intro" className="wrapper style1 fullscreen fade-up">
          <div className="inner">
            <h1>#rita1tíma</h1>
            <p>
              Í ár læra vit at forrita í{' '}
              <Link to="/about">blokkaspølunum</Link>, sum eru á føroyskum
            </p>
            <p>Tiltakið verður 6.-17. desember 2021</p>
            <p>
              Lutakast verður millum teir luttakandi flokkarnar, og tríggir hepnir flokkar
              skúla vinna ein biograftúr til allan flokkin.
            </p>
            <ul className="actions">
              <li>
                <a href="/#hvat" className="button">
                  Hvat er tað?
                </a>
              </li>
            </ul>
          </div>
        </section>
      </ScrollableAnchor>
      <ScrollableAnchor id={'hvat'}>
        <section id="hvat" className="wrapper style2 spotlights">
          <section>
            <a href="/#" className="image" alt="image">
              <img src={pic1} alt="" data-position="center center" />
            </a>
            <div className="content" id="hvat2">
              <div className="inner">
                <h2>Hvat er tað?</h2>
                <p>
                  Rita1tíma er eitt tiltak, har næmingar læra um forritan við at
                  loysa avbjóðingar í blokkaspølunum, sum eru umsett til
                  føroyskt. Neyðugt er, at næmingarnir hava atgongd til teldu
                  ella teldil. Tiltakið er ætlað at taka ein skúlatíma.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#skraset" className="button">
                      Skrásetið tykkum
                    </a>
                  </li>
                  <li>
                    <Link to="/about" className="button">
                      Blokkaspølini
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
                <h2>Hvussu skipa vit tað í flokkinum?</h2>
                <p>
                  Lærarar skipa fyri tiltakinum í flokkinum - møguliga hjálptir
                  av KT-fólki uttanifrá. Blokkaspølini eru gjørd soleiðis, at
                  tað ber til hjá næmingunum sjálvum at loysa avbjóðingarnar.
                  Lærararnir skipa fyri, seta í gongd, vegleiða og taka samanum.
                </p>
                <ul className="actions">
                  <li>
                    <a
                      href="https://hourofcode.com/us/how-to"
                      className="button"
                    >
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
                  Við at royna at forrita í blokkaspølunum fáa næmingarnir eina
                  fyrstu fatan av, hvat forritan er og hvussu tú forritar. Tað
                  sigur seg sjálvt, at tú gerst ikki serfrøðingur eftir einum
                  tíma, men vónandi verður hugurin kveiktur at læra meira.
                </p>
                <ul className="actions">
                  <li>
                    <Link to="/about" className="button">
                      Blokkaspølini
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </section>
      </ScrollableAnchor>
      <ScrollableAnchor id={'um'}>
        <section id="um" className="wrapper style3 fade-up">
          <div className="inner">
            <h2>Um #rita1tíma</h2>
            <p>
              Tiltakið #rita1tíma er á skúlum kring landið í døgunum 6. til 17.
              desember 2021. Síðani 2016 hevur KT-felagið skipað fyri
              #rita1tíma. Tiltakið er samskipað við altjóða átakið{' '}
              <a href="https://hourofcode.org">Hour of Code</a>.
            </p>
            <p>
              Endamálið er at kveikja áhugan fyri forritan millum ung.
              KT-felagið ynskir, at øll fáa eina grundleggjandi fatan av
              forritan, soleiðis at vit kunnu stýra teldunum heldur enn at lata
              teldurnar stýra okkum.
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
                  <a href="https://github.com/google/blockly-games/raw/offline/generated">
                    taka Blokkaspølini niður
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
                  flokkunum. Tó ber til at heita á KT-felagið (sí niðanfyri) um
                  at seta tykkum í samband við KT-fólk, ið kunnu hjálpa ókeypis.
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
                  Eru aðrar uppgávur enn <Link to="/about">blokkaspølini</Link>?
                </h3>
                <p>
                  Ja, inni á{' '}
                  <a href="https://hourofcode.com/us/learn">hourofcode.org</a>{' '}
                  er ein langur listi við øðrum avbjóðingum.
                </p>
              </section>
            </div>
          </div>
        </section>
      </ScrollableAnchor>
      <ScrollableAnchor id={'samband'}>
        <section id="samband" className="wrapper style1 fade-up">
          <div className="inner">
            <h2>Kontakta okkum</h2>
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
          </div>
        </section>
      </ScrollableAnchor>
    </div>

    <Footer />
  </Layout>
);

export default IndexPage;
