import { Header } from "../../components/navbar/header";
import personajesService from "../../service/personajes";
import { Personajes } from "../../components/personajes/personajes";
import { useEffect, useState } from "react";
import style from "./characters.module.css";

export function Characters() {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    const fetchPersonajes = async () => {
      const response = await personajesService.getPersonajes();
      setPersonajes(response);
    };
    fetchPersonajes();
  }, []);
  return (
    <>
      <Header />
      <div className={style.body}>
        <h1>Personajes</h1>
        <section className={style.sectionPJ}>
          {personajes.length > 1 ? (
            personajes.map((pjs) => (
              <div className={style.character}>
                <Personajes personajes={pjs} />
              </div>
            ))
          ) : personajes.length === 1 ? (
            <div className={style.character}>
              <Personajes personajes={personajes[0]} />
            </div>
          ) : null}
        </section>
      </div>
    </>
  );
}
