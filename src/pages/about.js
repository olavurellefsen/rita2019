import React from 'react';
import Layout from '../components/layout';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import puzzle from '../images/puzzle.png';
import maze from '../images/maze.png';
import bird from '../images/bird.png';
import turtle from '../images/turtle.png';
import movie from '../images/movie.png';
import music from '../images/music.png';
import pondTutor from '../images/pond-tutor.png';
import pondDuck from '../images/pond-duck.png';

const AboutPage = () => (
  <Layout>
    <Sidebar />
    <div id="wrapper">
      <section id="main" className="wrapper style1 fullscreen fade-up">
        <div className="inner">
          <h2>Um Blokkaspølini</h2>
          <p>
            <a href="https://blockly.games/?lang=fo">Blokkaspølini</a> eru ein
            røð av námsfrøðiligum spølum, ið læra teg at forrita. Tey eru ætlað
            til børn, ið ikki hava nakrar royndir innan forritan. Tá tú er komin
            gjøgnum spølini, er tú til reiðar at brúka vanlig forritanarmál
            grundað á tekst.
          </p>
          <ul className="actions">
            <li>
              <a href="https://blockly.games/?lang=fo" className="button">
                Royn Blokkaspølini
              </a>
            </li>
          </ul>

          <table>
            <tbody>
              <tr>
                <td>
                  <img src={puzzle} alt="Putlispæl" />
                </td>
                <td>
                  Putlispæl er ein skjót innleiðing til skapini hjá blokkaspølum
                  og hvussu blokkarnir hoyra saman.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={maze} alt="Villiniborg" />
                </td>
                <td>
                  Villiniborg er ein innleiðing til endurtøkur og treytan. Tað
                  er lætt í byrjanini, men hvørt stig verður torførari enn tað
                  fyrra.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={bird} alt="Fuglur" />
                </td>
                <td>
                  Fuglur er ein nærgranskan av treytan. Gongdin í forritinum
                  verður stýrd av alsamt fløktari treytum.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={turtle} alt="Skjaldbøka" />
                </td>
                <td>
                  Skjaldbøka er ein nærgranskan av endurtøkum. Nýt skipaðar
                  endurtøkur at mála eina mynd. Aftaná kanst tú leggja tína list
                  út, so at allur heimurin kann síggja hana.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={movie} alt="Filmur" />
                </td>
                <td>
                  Filmur er ein innleiðing til støddfrøðiligar líkningar. Nýt
                  støddfrøði til at at gera ein teknifilm. Aftaná kanst tú geva
                  tín film út, so at allur heimurin kann síggja hann.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={music} alt="Tónleikur" />
                </td>
                <td>
                  Tónleikur er ein innleiðing til funkur. Nýt funkur at gera
                  tónleik. Aftaná kanst tú geva tín tónleik út, so at allur
                  heimurin kann hoyra hann.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={pondTutor} alt="Tjørn Vegleiðari" />
                </td>
                <td>
                  Tjørn Vegleiðari byrjar við forritan grunda á tekst. Stigini
                  skifta aftur og fram millum blokkar og veruliga JavaScript í
                  einum ritli til tekst.
                </td>
              </tr>
              <tr>
                <td>
                  <img src={pondDuck} alt="Tjørn" />
                </td>
                <td>
                  Tjørn er ein opin kapping um at forrita ta klókastu dunnuna.
                  Nýt annaðhvørt blokkar ella JavaScript.
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            <a href="https://blockly.games/?lang=fo">Blokkaspølini</a> er ein
            verkætlan hjá Google, sum er ætlað at eggja framtíðar forritarum.
            Spølini eru sniðgivin soleiðis, at tú setir sína egnu ferð og lærir
            sjálv ella sjálvur. Tú ert vælkomin til at nýta{' '}
            <a href="https://blockly.games/?lang=fo">Blokkaspølini</a> bæði í og
            uttanfyri flokshøli. Øll forrit eru open source, sí{' '}
            <a href="https://github.com/google/blockly-games/wiki">
              heimasíðuna hjá mennarunum
            </a>{' '}
            fyri meira kunning ella fyri at taka zip fílur niður til at brúka
            uttan netsamband.
          </p>
          <p>
            Mennarar, lærarar og foreldur eru vælkomin at{' '}
            <a href="https://groups.google.com/forum/#!forum/blockly-games">
              eftirmeta
            </a>{' '}
            meðan vit halda áfram at vaksa.
          </p>
        </div>
      </section>
    </div>

    <Footer />
  </Layout>
);

export default AboutPage;
