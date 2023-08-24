import styles from "./newsComp.module.css";

export function NewsComp() {
  return (
    <>
      <a type="button" className={styles.card}>
        <div className={styles.cardBody}>
          <img
            src="https://starrailstation.com/82f7db865a4014b2ad069bb636125c5a.png"
            alt="image"
            className={styles.img}
          />
          <h1 className={styles.cardTitle}>Noticia 1</h1>
          <p className={styles.cardText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sit
            repellat delectus vero minima odio aliquid, nisi cumque nobis harum
            dolore ipsam in optio unde natus a saepe facilis repellendus?
          </p>
        </div>
      </a>
    </>
  );
}
