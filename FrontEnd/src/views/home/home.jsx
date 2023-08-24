import { Header } from "../../components/navbar/header";
import styles from "./home.module.css";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import { NewsComp } from "../../components/newsComp/newsComp";
import { Personajes } from "../../components/personajes/personajes";

export function Home() {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    // Después de 2 segundos, mostrar la imagen
    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 1000);

    // Limpieza del timeout cuando el componente se desmonta
    return () => clearTimeout(timeout);
  }, []);

  const fadeIn = useSpring({
    opacity: showImage ? 1 : 0,
    transform: showImage ? "translateY(0)" : "translateY(50px)",
  });
  return (
    <>
      <Header />
      <main>
        <div className={styles.container2} id="sections">
          <animated.div className={styles.hsrLogo} style={fadeIn}>
            {showImage && (
              <img
                src="/assets/hsr-icon.png"
                alt="logo"
                className={styles.hsrLogo}
              />
            )}
          </animated.div>
          <section className={styles.sections}>
            <div className={styles.newsTitle}>
              <h1 className={styles.title}>Noticias</h1>
            </div>
            <div className={styles.news}>
              <NewsComp />
            </div>
          </section>
          <section className={styles.sections}>
            <div className={styles.newsTitle}>
              <h1 className={styles.title}>Personajes</h1>
            </div>
            <div className={styles.pj}>
              <Personajes />
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
