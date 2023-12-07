import styles from "./personajes.module.css";
export const idPjImg = (path) => {
  //recortar el path desde la izquierda y desde la derecha
  //para obtener el id de la imagen
  const id = path.split("/");
  const img = `https://drive.google.com/uc?export=view&id=${id[5]}`;
  return img;
};
export function Personajes({ personajes }) {
  const { name } = personajes;
  const img = idPjImg(personajes.img);
  let nameUrl;
  // reemplazar si tiene espacios por %20
  if (name.includes(" ")) {
    nameUrl = name.replaceAll(" ", "%20");
  } else {
    nameUrl = name;
  }
  console.log(nameUrl);
  // pasar de mayuscula a minuscula
  const url = `/characters/${nameUrl}`;

  return (
    <>
      <a href={url}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <img src={img} alt="image" className={styles.img} />
            <h1 className={styles.cardTitle}>{name}</h1>
          </div>
        </div>
      </a>
    </>
  );
}
