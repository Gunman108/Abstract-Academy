import React, {useState } from "react";
import emailjs from "emailjs-com";
import readyPDF from "../assets/Are_you_ready.pdf";

export default function MyModal({visible, onClose}){

    if (!visible) return null;

    const [details, setDetails] = useState({
        parent_name: "",
        parent_email: "",
        about: "",
        ref: "",
        student_name: "",
        student_email: "",
        ready: false,
        essay: ""
    });

    function sendEmail(){
        var templateParams = {
            parent_name: details.parent_name,
            parent_email: details.parent_email,
            about: details.about,
            referral: details.ref,
            student_name: details.student_name,
            student_email: details.student_email,
            essay: details.essay
        }

        emailjs.send("service_dr75p4n", "abstract_template", templateParams, "Gi1gU2WUmTIvzNelm")
        .then((result) => {
            alert("We have received your registration information, and will get in touch shortly.")
            setDetails({ ...details, parent_name: "", parent_email:"", about: "",ref:"",student_name:"",student_email:"",essay:"" })
        }, (error) => {
           alert("There was a problem, please try again")
        });
    }

    function register() {
        if (details.parent_name == "") {
          alert("Enter name");
          // window.location.reload(false);
          return false;
        } else if (
          details.parent_email == ""
        ) {
          alert("Enter valid email");
          // window.location.reload(false);
          return false;
        } else if (details.student_name == "") {
          alert("Enter student name");
          // window.location.reload(false);
          return false;
        } else if (!details.ready) {
          alert("Please instruct your child to read the \"Are You Ready\" document");
          // window.location.reload(false);
          return false;
        } else {
            sendEmail();
        }
      }


    return <div className="overflow-y-auto z-10 pt-60 pb-10 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
    <div className="bg-white p-2 rounded">
        
        <button onClick={onClose}>X</button>
        <h1 className="font-semibold text-center text-xl mb-5 text-gray-700">
        Abstract Academy Summer 2023 Session
        </h1>
        <div className="flex flex-col">
            <label>Parent/Guardian Name</label>
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            onChange={(e) =>
                setDetails({ ...details, parent_name: e.target.value })
            }
              value={details.parent_name}
            placeholder="First Last"
          />
          <label>Parent/Guardian Email</label>
          <input
            type="email"
            className="border border-gray-700 p-2 rounded mb-5"
            onChange={(e) =>
                setDetails({ ...details, parent_email: e.target.value })
            }
            value={details.parent_email}
            placeholder="email@example.com"
          />
          <label>Where did you hear about us?</label>
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            onChange={(e) =>
                setDetails({ ...details, about: e.target.value })
            }
            value={details.about}
            placeholder="Facebook, Word of Mouth, School, Etc."
          />
          <label>If someone referred you to our program, please name that person here.</label>
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            onChange={(e) =>
                setDetails({ ...details, ref: e.target.value })
            }
            value={details.ref}
            placeholder=""
          />
          <label>Student Name</label>
          <input
            type="text"
            className="border border-gray-700 p-2 rounded mb-5"
            onChange={(e) =>
                setDetails({ ...details, student_name: e.target.value })
            }
            value={details.student_name}
            placeholder="First Last"
          />
          <label>Student Email</label>
          <input
            type="email"
            className="border border-gray-700 p-2 rounded mb-5"
            onChange={(e) =>
                setDetails({ ...details, student_email: e.target.value })
            }
            value={details.student_email}
            placeholder="email@example.com"
          />
          <label>
            <input
            className="mb-5 mr-2 mt-5 scale-1.5"
            onChange={(e) =>           
                setDetails({ ...details, ready: e.target.checked })
            }
            type="checkbox"></input>
            I verify my child has read the <a href={readyPDF} target="_blank" rel="noopener noreferrer"><span class="text-gumbaOrange">Are You Ready document</span></a>.</label>
          
          <label>Scholarship Essay, optional:<br/>What do you love about Math, why do you want to learn programming, and how would this scholarship help you.</label>
          <textarea 
            rows="4" cols="60" 
            className="border border-gray-700 p-2 rounded mb-5" 
            onChange={(e) =>
                setDetails({ ...details, essay: e.target.value })
            }
            value={details.essay}
            placeholder="(300 words max)">
            </textarea>
        </div>
        <div className="text-center">
          <button
            onClick={() => {
            register();
            }}
            className="px-5 py-2 bg-gray-700 mb-5 text-white rounded">
            Register
          </button>
        </div>
    </div>
    
    </div>;
}