import styles from "./footer.module.css"

const Footer = () => {
    return (
      <>
        <footer className={styles.footer}>
          <span className={styles.footer__text}>
            © 2025, from
            <a
              className={styles.footer__link}
              href="https://binary-studio.com"
              target="_blank"
            >
              binary studio
            </a>
            with
            <img
              className={styles.footer__icon}
              src="/images/heart.svg"
              alt="heart"
            />
          </span>
        </footer>
      </>
    );
}

export {Footer}