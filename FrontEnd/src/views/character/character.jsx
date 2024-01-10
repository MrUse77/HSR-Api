import { useParams } from "react-router-dom";
import personajesService from "../../service/personajes";
import { useEffect, useState } from "react";
import { Header } from "../../components/navbar/header";
import style from "./character.module.css";
import { idPjImg } from "../../components/personajes/personajes";

const urlsDriveTipos = [
  "https://www.dropbox.com/scl/fi/56aal0v6jr3iqcd2h7u6m/Hielo.png?rlkey=ftrqagt3841zv4a7eo9ternlf&dl=0",
  "https://www.dropbox.com/scl/fi/8ab0jsrpvlh6kvsl5g47v/Rayo.png?rlkey=dzn9wp9wb1i6c8ujte83damv8&dl=0",
  "https://www.dropbox.com/scl/fi/79pg2qa97th01y1o6zeim/Viento.png?rlkey=jsy9wveyem8smpe7i1ltl1kkx&dl=0",
  "https://www.dropbox.com/scl/fi/uupnwa9admn6j0fxflb3b/Cuantico.png?rlkey=jdbntjhwmnb6zsi6wgtawzpv7&dl=0",
  "https://www.dropbox.com/scl/fi/pgkdlghsd5kv1e9p6hsxu/Imaginario.png?rlkey=brloqmhgeofj6u60u69s4lnik&dl=0",
  "https://www.dropbox.com/scl/fi/ld1sczz43lkqa276qi3nz/Fisico.png?rlkey=ffjdsxqk5xlx2houperthxuug&dl=0",
  "https://www.dropbox.com/scl/fi/mxa26wo6sqgjp67jrwa3e/Fuego.png?rlkey=3j2zsy8h4e4ljy8v7o8vouofk&dl=0",
];
const urlsDriveVias = [
  "https://www.dropbox.com/scl/fi/jhv2huq0i8hvmnpvamqjb/Armonia.png?rlkey=s2dq6h7b3rudcqvlh3tsty4f8&dl=0",
  "https://www.dropbox.com/scl/fi/5baqlfrorrurxy4fhf9hi/Conservacion.png?rlkey=qpyqnyruxdvli88an297yh33h&dl=0",
  "https://www.dropbox.com/scl/fi/b3i8f21h8kdmt4b6artsz/Abundancia.png?rlkey=t2hzsbq2y0qpjh4jtvjd8rs93&dl=0",
  "https://www.dropbox.com/scl/fi/flfrq3f6f61yb3iovp6u7/Caceria.png?rlkey=ogpmwwbqb3s30fnwyq2xx4m0r&dl=0",
  "https://www.dropbox.com/scl/fi/ewpdt5gzln1j5q4x4h2ct/Destruccion.png?rlkey=fzxrfs5orue2gv98alvlk44rl&dl=0",
  "https://www.dropbox.com/scl/fi/w031n6o9h5ylfyes8p4lc/Nihilidad.png?rlkey=fvsju3hdpk75tlbzkmihc9kje&dl=0",
  "https://www.dropbox.com/scl/fi/46e5ln3zrgfmw922hldwh/Erudicion.png?rlkey=3i6tsbcq8aph3svxye9rc52j6&dl=0",
];

export function Character() {
  const { id } = useParams();
  const [personaje, setPersonaje] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [via, setVia] = useState([]);
  const tiposDrive = urlsDriveTipos.map((url) => {
    const img = idPjImg(url);
    return img;
  });
  const viaDrive = urlsDriveVias.map((url) => {
    const img = idPjImg(url);
    return img;
  });
  const info = async (id) => {
    const data = await personajesService.getByParams(id);
    data.img = idPjImg(data.img);
    return data;
  };
  useEffect(() => {
    const tiposPj = (personaje) => {
      switch (personaje.type[0]) {
        case "Hielo":
          setTipos(tiposDrive[0]);
          break;
        case "Rayo":
          setTipos(tiposDrive[1]);
          break;
        case "Viento":
          setTipos(tiposDrive[2]);
          break;
        case "Cuántico":
          setTipos(tiposDrive[3]);
          break;
        case "Imaginario":
          setTipos(tiposDrive[4]);
          break;
        case "Físico":
          setTipos(tiposDrive[5]);
          break;
        case "Fuego":
          setTipos(tiposDrive[6]);
          break;
        default:
          setTipos("");
          break;
      }
    };
    const viaPj = (personaje) => {
      switch (personaje.via[0]) {
        case "Armonía":
          setVia(viaDrive[0]);
          break;
        case "Conservación":
          setVia(viaDrive[1]);
          break;
        case "Abundancia":
          setVia(viaDrive[2]);
          break;
        case "Cacería":
          setVia(viaDrive[3]);
          break;
        case "Destrucción":
          setVia(viaDrive[4]);
          break;
        case "Nihilidad":
          setVia(viaDrive[5]);
          break;
        case "Erudición":
          setVia(viaDrive[6]);
          break;
        default:
          setVia("");
          break;
      }
    };
    const fetchData = async () => {
      const data = await info(id);
      setPersonaje(data);
      tiposPj(data);
      viaPj(data);
      console.log(tipos);
      console.log(via);
    };
    fetchData();
  }, [id]);

  return (
    <>
      <Header />
      <div className={style.main}>
        <section className={style.profile}>
          <img src={personaje.img} alt="profile" />
        </section>
        <section className={style.info}>
          <div>
            <h2>{personaje.name}</h2>
          </div>
          <div className={style.infoContainer}>
            {tipos !== "" ? (
              <div>
                <img className={style.type} src={tipos} alt="tipo" />
                <h2>{personaje.type}</h2>
              </div>
            ) : null}
            {via !== "" ? (
              <div>
                <img className={style.type} src={via} alt="tipo" />
                <h2>{personaje.via}</h2>
              </div>
            ) : null}
          </div>
          <div className={style.details}>
            <p>{personaje.info}</p>
            <h4>Detalles</h4>
            <p>{personaje.details}</p>
          </div>
        </section>
      </div>
    </>
  );
}
