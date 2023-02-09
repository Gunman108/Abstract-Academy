import styles, { layout } from "../style";
import readyPDF from "../assets/Are_you_ready.pdf";

const FAQ = () =>  (
  <section id="faq" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Frequently Asked Questions
      </h2>
      <h3 className={`${styles.heading3} mt-7`}>
      Why math AND programming?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        At Abstract we believe that leveraging both Math <b>and</b> Programming in tandem provides our students with a stronger grasp and knowledge base in both diciplines, a grasp even stronger than if they focused exclusively on one or the other.
      </p>
      <h3 className={styles.heading3}>
      What makes us qualified?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        While we may be young, we've been teaching for a combined 10 years and pride ourselves on our skills in tailoring a personalized learning experience though our abilities to connect with a younger age demographic.
      </p>
      <h3 className={styles.heading3}>
      What is the return policy?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        We offer a 90% return policy within the first three days of attendence.
      </p>
      <h3 className={styles.heading3}>
      What is the referral bonus?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        If you refer a friend to our program, both you and they will receive $100 off the curriculum fee.
      </p>
      <h3 className={styles.heading3}>
      How do I know I’m ready for Abstract Academy?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        As long as you feel like you <i>could</i> solve at least half of the problems listed in the <a href={readyPDF} target="_blank" rel="noopener noreferrer" ><span class="text-gumbaOrange">Are You Ready</span></a> document, you will be more than ready to start the program.
      </p>
      <h3 className={styles.heading3}>
      What materials do I need for Abstract Academy?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        A stable internet connection, a laptop, some scratch paper, and a working brain :)
      </p>
      <h3 className={styles.heading3}>
      Where does this all take place?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        We offer all our classes in zoom meetings. Outside of lessons, we field questions, give feedback, and facilitate discussions in our community discord server.
      </p>
      <h3 className={styles.heading3}>
        Do you offer scholarships?
      </h3>
      <p className={`${styles.paragraph} ml-10 my-5`}>
        We offer partial and full scholarships to students who fill out the optional scholarship essay.
      </p>
    </div>
  </section>
);
export default FAQ;
