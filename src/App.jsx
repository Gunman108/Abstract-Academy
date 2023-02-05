import styles from "./style";
import { Gunner, Business, Corey,  CTA, Footer, Navbar,  Testimonials, Hero, FAQ, SignupForm } from "./components";
import React, {useState} from "react";



export default function App() {

  const [showSignup, setShowSignup] = useState(false);

  const handleOnClose = () => setShowSignup(false);

  return(
<div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero click={() => setShowSignup(true)}/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Business click={() => setShowSignup(true)}/>
        <Gunner />
        <Corey />
        <Testimonials />
        <FAQ/>
        <CTA click={() => setShowSignup(true)}/>
        <Footer />
      </div>
      <SignupForm onClose={handleOnClose} visible={showSignup}/>
    </div>
  </div>
  )
}
