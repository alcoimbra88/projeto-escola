import React from 'react';
import {
  HomeContainer,
  AboutUs,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  Metodology,
} from './style';
import ContinueLink from '../../components/ContinueLink';

export default function Home() {
  return (
    <div>
      <FirstContainer id="firstContainer">
        <HomeContainer>
          <h1> Logotipo </h1>
          <div id="textHome">
            Lorem ipsum dolor sit amet. Sed esse dolor est ipsum corrupti sed
            illo autem. Et corrupti dolorem non vero corporis a enim ex galisum
            autem eos dolores temporibus ea earum vero qui doloribus rerum. Aut
            expedita ducimus cum autem distinctio et ullam corrupti ut internos
            eveniet. ut error corporis et possimus velit! Vel error error est
            voluptatum nisi aut voluptatem consectetur. Quo galisum sapiente vel
            sint voluptatem ut mollitia dolore et velit ipsa sed dolor incidunt
            in molestiae perspiciatis 33 fuga praesentium. Sed distinctio error
            et nisi tenetur ut labore eaque eum doloremque expedita id quasi
            maiores. Vel eius dolorem et rerum nobis ut dolor esse. Eos nisi
            vero et consequatur consequatur 33 ullam enim qui magni laboriosam
            non doloremque eaque sit soluta fuga non ratione internos.
          </div>
        </HomeContainer>
        <ContinueLink />
      </FirstContainer>

      <SecondContainer>
        <AboutUs id="aboutUs">
          <div id="containterAboutUs">
            <div id="textAboutUs">
              <h1 id="titleAboutUs">Sobre Nós</h1>
              <p>
                Lorem ipsum dolor sit amet. Sed esse dolor est ipsum corrupti
                sed illo autem. Et corrupti dolorem non vero corporis a enim ex
                galisum autem eos dolores temporibus ea earum vero qui doloribus
                rerum. Aut expedita ducimus cum autem distinctio et ullam
                corrupti ut internos eveniet. ut error corporis et possimus
                velit! Vel error error est voluptatum nisi aut voluptatem
                consectetur. Quo galisum sapiente vel sint voluptatem ut
                mollitia dolore et velit ipsa sed dolor incidunt in molestiae
                perspiciatis 33 fuga praesentium. Sed distinctio error et nisi
                tenetur ut labore eaque eum doloremque expedita id quasi
                maiores. Vel eius dolorem et rerum nobis ut dolor esse. Eos nisi
                vero et consequatur consequatur 33 ullam enim qui magni
                laboriosam non doloremque eaque sit soluta fuga non ratione
                internos.
              </p>
            </div>
            <h1 id="image">Imagem</h1>
          </div>
        </AboutUs>
        <ContinueLink />
      </SecondContainer>

      <ThirdContainer>
        <Metodology>
          <div id="metodContainer">
            <h1>Imagem</h1>
            <div id="textMetod">
              <h1 id="titleMetod">Nossa Metodologia</h1>
              <p>
                Lorem ipsum dolor sit amet. Sed esse dolor est ipsum corrupti
                sed illo autem. Et corrupti dolorem non vero corporis a enim ex
                galisum autem eos dolores temporibus ea earum vero qui doloribus
                rerum. Aut expedita ducimus cum autem distinctio et ullam
                corrupti ut internos eveniet. ut error corporis et possimus
                velit! Vel error error est voluptatum nisi aut voluptatem
                consectetur. Quo galisum sapiente vel sint voluptatem ut
                mollitia dolore et velit ipsa sed dolor incidunt in molestiae
                perspiciatis 33 fuga praesentium. Sed distinctio error et nisi
                tenetur ut labore eaque eum doloremque expedita id quasi
                maiores. Vel eius dolorem et rerum nobis ut dolor esse. Eos nisi
                vero et consequatur consequatur 33 ullam enim qui magni
                laboriosam non doloremque eaque sit soluta fuga non ratione
                internos.
              </p>
            </div>
          </div>
        </Metodology>
        <ContinueLink />
      </ThirdContainer>
    </div>
  );
}
