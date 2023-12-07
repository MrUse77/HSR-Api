import { useParams } from "react-router-dom";
import personajesService from "../../service/personajes";
import { useEffect, useState } from "react";
import { Header } from "../../components/navbar/header";
import style from "./character.module.css";
import { idPjImg } from "../../components/personajes/personajes";

const urlsDriveTipos = [
  "https://drive.google.com/file/d/19npGXQ2kxhV2iNdYjfZsfqIEwjgl1dwG/view?usp=drive_link",
  "https://drive.google.com/file/d/1BHd-BDh2PMdoPEFHkgAmEYndg7KNGQIj/view?usp=drive_link",
  "https://drive.google.com/file/d/1l8QTx3NuMvJxSF9v_x9IBKoP2M5ncETv/view?usp=drive_link",
  "https://drive.google.com/file/d/1FducEs_Hed740YU7bFLE5nEUgRuS5rWJ/view?usp=drive_link",
  "https://drive.google.com/file/d/1BVJ5I5iaewuxFaLlIB88qqZA8t_JMMp1/view?usp=drive_link",
  "https://drive.google.com/file/d/1yvzdUfTlzcrkEwV9a8CNl13okA-zGD5V/view?usp=drive_link",
  "https://drive.google.com/file/d/1L2sinD-iowFXNf6zdtI1a71lximMAlgd/view?usp=drive_link",
];
const urlsDriveVias = [
  "https://drive.google.com/file/d/10_yr1LFoIVsxjlxLLxOKEVFavp71J6-r/view?usp=drive_link",
  "https://drive.google.com/file/d/1rECGd202xw62gvZkCEixvcDsOCqLNsus/view?usp=drive_link",
  "https://drive.google.com/file/d/1X-3QLQSN_3Idp9bXuWuCcD_1OwuAVnHh/view?usp=drive_link",
  "https://drive.google.com/file/d/1hoCGZ__Km5WTlfWCIY-nz1-sjjJbsI5-/view?usp=drive_link",
  "https://drive.google.com/file/d/1BDKni29fNmFpJlc3tH8HHFNHICALKsxG/view?usp=drive_link",
  "https://drive.google.com/file/d/1oevoBay3JLfcgRtbmIa_66e2Fg7BepjG/view?usp=drive_link",
  "https://drive.google.com/file/d/1JC1i5o-GycbuGa85brI7kb2DL5r64k0P/view?usp=drive_link",
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
