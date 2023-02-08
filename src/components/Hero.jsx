import styles from "../style";
import { discount, robot, main } from "../assets";
import GetStarted from "./GetStarted";
import { useEffect, useRef } from "react";
import { init } from "ityped";


const Hero = ({click}) => {

  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Thinkers", "Mathmaticians", "Programmers", "Students", "Puzzlers"],
    });
  }, []);

  
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">-$100</span> Referral Bonus{" "}
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            We Build Better <br className="sm:block hidden" />{" "}
            <span className="text-gradient" ref={textRef}></span>{" "}
          </h1>
          
        </div>
        
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
      
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our signature curriculum is designed to unlock beginner to intermediate programming skills
        through strengthening mathematics and problem solving abilities. We build more 
        creative problem solvers ready to take their knowledge to their future school and workplace.  <br/> <br/> 
        </p>
        <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted click={click}/>
        </div>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={main} alt="billing" className="w-auto h-auto ml-50 relative z-[5] mr-12 rounded-2xl" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted click={click}/>
      </div>
    </section>
  );
};

export default Hero;
