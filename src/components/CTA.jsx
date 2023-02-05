import styles from "../style";
import Button from "./Button";

const CTA = ({click}) => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Sign Up Today!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Got questions? Feel free to email us at contact.abstract.academy@gmail.com.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button click={click}/>
    </div>
  </section>
);

export default CTA;
