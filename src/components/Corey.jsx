import { corey } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Corey Predella <br className="sm:block hidden" />
      </h2>
      <h3 className={styles.heading3}>
        Math Tutor
      </h3>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
      Ever since Corey started writing computer programs in 5th grade, he fell in love with the creative problem solving process. 
      During his first year of high school, Corey was among the first hires at <a href = "https://www.codeninjas.com/" target="_blank"><span class="text-gumbaOrange">Code Ninjas</span></a> in Medfield, where he taught kids ages 7-14 
      video game creation and algorithmic thinking skills for four years. He founded the competitive programming team at his high school,
      in which he wrote nearly 250 pages of original math and coding curricula and delivered 300 hours of lectures, winning him the Faculty
      Prize. Passionate about math education in the US, Corey gave a <a href = "https://www.youtube.com/watch?v=MrlZ89Uc4A0" target="_blank"><span class="text-gumbaOrange ">TEDx talk</span></a> about how schools must  shift the paradigm in mathematics 
      pedagogy. This year, Corey has taken his passion for teaching to the high school classroom. At his teaching position at the <a href = "https://www.nuvuschool.org/" target="_blank">
      <span class="text-gumbaOrange ">NUVU innovation school</span></a>, Corey has been the author of an original problem solving seminar and the co-coach to creative thinking and
      design classes in around math and programming. Corey has taught over 200 kids, and believes he found success in his teaching due to his 
      ability to relate to kids, fostering a prosperous, personalized, and successful learning environment. <b>Corey is studying pure mathematics 
      at Carnegie Mellon University.</b>
      </p>

    </div>

    <div className={layout.sectionImg}>
      <img src={corey} alt="billing" className="w-auto h-auto relative z-[5] rounded-2xl" />
    </div>
  </section>
);

export default CardDeal;
