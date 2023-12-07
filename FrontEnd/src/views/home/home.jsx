import { Header } from "../../components/navbar/header";
import styles from "./home.module.css";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";
import { Personajes } from "../../components/personajes/personajes";
import personajesService from "../../service/personajes";

export function Home() {
  const [showImage, setShowImage] = useState(false);
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    const fetchPersonajes = async () => {
      try {
        const pj = await personajesService.getPersonajes();
        setPersonajes(pj);
      } catch (error) {
        console.error("Error fetching personajes:", error);
      }
    };

    const timeout = setTimeout(() => {
      setShowImage(true);
    }, 2000);

    fetchPersonajes();
    console.log(personajes);

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
              <h1 className={styles.title}>Personajes</h1>
            </div>
            <div className={styles.sectionPJ}>
              {personajes.length > 1 ? (
                personajes.map((pjs) => (
                  <div className={styles.pj}>
                    <Personajes personajes={pjs} />
                  </div>
                ))
              ) : personajes.length === 1 ? (
                <div className={styles.pj}>
                  <Personajes personajes={personajes[0]} />
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </main>
      <footer></footer>
    </>
  );
}
