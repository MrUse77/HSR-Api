import styles from "./personajes.module.css";
export function Personajes() {
  return (
    <>
      <a href="">
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <img
              src="https://drive.google.com/uc?export=view&id=11q0ESFR4QUjROs5J-KzkqUv9eTwjcQ8n"
              alt="image"
              className={styles.img}
            />
            <h1 className={styles.cardTitle}>Silver Wolf</h1>
          </div>
        </div>
      </a>
    </>
  );
}
