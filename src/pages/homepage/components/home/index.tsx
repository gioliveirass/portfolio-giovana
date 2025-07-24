import Button from "../../../../shared/components/button";
import "./index.scss";
import { useMediaQuery } from "react-responsive";

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <section id="home-container">
      {!isMobile && (
        <div className="images">
          <img src="./src/assets/images/flowers.svg" alt="Desenho de flores" />
        </div>
      )}

      <div className="content">
        <main>
          <h1>Giovana Oliveira</h1>
          <h2>Front-end Developer</h2>
          <p>
            Desenvolvedora Front-end Pleno com 3 anos de experiência na criação
            de aplicações web responsivas, adaptadas a diferentes perfis de
            clientes.
          </p>
          <Button label="+ Saber mais" />
        </main>

        <img
          src={
            isDesktop
              ? "./src/assets/images/me-01.svg"
              : "./src/assets/images/me-01-mobile.svg"
          }
          alt="A imagem apresenta uma fotografia de Giovana: uma mulher sentada em uma cadeira de encosto azul, posicionada em frente a uma mesa reflexiva dourada com talheres. Ela tem pele clara, cabelos ondulados castanhos com mechas verdes e franja. Usa uma blusa regata preta com textura e uma saia ou calça com cinto de ilhoses. Seu braço esquerdo está apoiado na mesa, revelando tatuagens visíveis no antebraço. Ela olha para o lado esquerdo da imagem com expressão confiante. Ao fundo, há uma parede clara com espelhos e vitrais com molduras douradas, sugerindo um ambiente sofisticado e histórico."
        />
      </div>

      {!isMobile && (
        <div className="images inverted">
          <img src="./src/assets/images/flowers.svg" alt="Desenho de flores" />
        </div>
      )}
    </section>
  );
};

export default Home;
