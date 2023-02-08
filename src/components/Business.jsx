import { features } from "../constants";
import styles, { layout } from "../style";
import Button from "./Button";
import {GrDocumentText} from  "react-icons/gr";


const FeatureCard = ({ title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] cursor-pointer ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-blue-gradient`}>
    <GrDocumentText size={40}/>
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = ({click}) =>  (
  <section id="curriculum" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Our Program
      </h2>
      <h3 className={`${styles.heading3} max-w-[470px] mt-5`}>
      $1,500
      </h3>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      40 Hours
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Ages 12-18
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      SESSION ALPHA: July 3 - July 14 2023, Weekdays <br />
      SESSION BETA: July 17 - July 28 2023, Weekdays <br />
      SESSION GAMMA: July 31 - August 11 2023, Weekdays <br />
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Math Session: 10:00AM - 12:00PM EST, Online <br/>
        Coding Session: 1:00PM - 3:00PM EST, Online
      </p>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Gain access to 20 custom handouts, 1-1 help sessions, practice problems, coding notebooks, a learning forum, and more! 
        Click the document links on the right for more information.
      </p>
      <Button styles={`mt-10`} click={click}/>
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <a href={feature.link} target="_blank" rel="noopener noreferrer"><FeatureCard key={feature.id} {...feature} index={index} /> </a>
      ))}
    </div>
  </section>
);
export default Business;
