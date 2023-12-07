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

export function Character() {
  return (
    <>
      <Header />
      <section className={`${style.container} ${style.row}`}>
        <div className={`${style.pj} ${style.col}`}>
          <Personaje />
        </div>
        <div className={`${style.row2} ${style.info}`}>
          <section className={style.stats}>
            <h1>Silver Wolf</h1>
          </section>
          <section className={style.stats}>
            <div>
              <h3>Cuantico</h3>
            </div>
            <div>
              <h3>Nihilidad</h3>
            </div>
            <div>
              <h3>5 estrellas</h3>
            </div>
          </section>
          <section className={style.stats2}>
            <div className={style.lvl}>
              <h3>LVL</h3>
              <h5>Barra</h5>
            </div>
            <div className={style.stats3}>
              <div className={style.stats4}>
                <h3>PV</h3>
                <h3>100</h3>
              </div>
              <div className={style.stats4}>
                <h3>ATQ</h3>
                <h3>100</h3>
              </div>
              <div className={style.stats4}>
                <h3>DEF</h3>
                <h3>100</h3>
              </div>
              <div className={style.stats4}>
                <h3>SPD</h3>
                <h3>100</h3>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className={style.container}></section>
    </>
  );
}
