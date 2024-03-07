import { m, LazyMotion, domAnimation } from "framer-motion";
import SectionTitle from "../Pages/SectionTitle";
import ContactServices from "../Pages/ContactServices";
import ContactForm from "../components/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full overflow-hidden-web flex flex-col items-center"
    >
      <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
        <div className="w-full">
          <SectionTitle title="CONTACT" subtitle="Get in touch" />
        </div>
        <div className="w-full flex justify-center items-center">
          <LazyMotion features={domAnimation} strict>
            <m.div
              initial={{ x: 200 }}
              whileInView={{ x: 0 }}
              transition={{ duration: 0.6, type: "spring" }}
              className="w-full sm:w-[90%] md:w-[80%] sm:h-[600px] rounded-xl border-4 border-primary-400 p-4 flex flex-col sm:flex-row gap-4"
            >
              <ContactServices />
              <ContactForm />
            </m.div>
          </LazyMotion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
