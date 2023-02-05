import { apple, gunner, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="about" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={gunner} alt="billing" className="w-auto h-auto relative z-[5] rounded-2xl" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Gunner Peterson <br className="sm:block hidden" />
      </h2>
      <h3 className={styles.heading3}>
        Programming Tutor
      </h3>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
      Gunner loves to code. Whether it’s as a Junior Software Engineer at <a href = "https://www.patch.tech/" target="_blank"><span class="text-gumbaOrange">Patch</span></a>, building websites and algorithms 
      for his High School, or working on <a href = "https://gpeterson.page/#portfolio" target="_blank"><span class="text-gumbaOrange">freelance passion projects</span></a>, Gunner is committed to using industry standards 
      tools and employing a variety of problem solving techniques to achieve his goals. But more than coding for himself,
      he is even more committed to teaching these techniques to others. At <a href = "https://www.codeninjas.com/" target="_blank"><span class="text-gumbaOrange">Code Ninjas</span></a>, Gunner taught and designed curricula
      in video game development and coding syntax to 7-14 year olds for three years. At his high school, Gunner worked as a
      mentor and leader for the computer science department as head of the Programming Club. At <a href = "https://www.berkeleycodingacademy.com/" target="_blank"><span class="text-gumbaOrange">Berkeley Coding Academy</span></a>,
      he has been teaching advanced Python and Machine Learning at the Middle and High School level, in both large classroom
      and 1-1 settings. Holding an interest in logic and Philosophy, his teaching emphasizes the thinking skills and logical
      backbone necessary for programmatic thinking. Gunner is eager to bring industry practice and theoretical understanding
      together at Abstract Academy. Gunner is studying Computer Science and Philosophy at Brown University.
      </p>

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
      </div>
    </div>
  </section>
);

export default Billing;
