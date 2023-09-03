import { Header } from "../../components/navbar/header";
import style from "./characters.module.css";
import { Personaje } from "../../components/personajes/personajes.jsx";
export function Characters() {
  return (
    <>
      <Header />
      <></>
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
