import styles from "./loader.module.css"

const Loader = () => {
    return (

      <div className={styles["loader-wrapper"]}>
   <div
        className={styles.loader}
        data-test-id="loader"
      ></div>
      </div>
   
    );
}

export { Loader };