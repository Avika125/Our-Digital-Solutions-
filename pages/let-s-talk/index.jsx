import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";

import { fadeIn } from "../../variants";
import { useState } from "react";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedServices, setSelectedServices] = useState([]);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target;
    const formData = new FormData(myForm);

    // Add selected services to formData
    formData.append("selected_services", selectedServices.join(", "));

    fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then((res) => {
        if (res.status === 200) {
          alert("Thank you. I will get back to you ASAP.");
          setSelectedServices([]);
          myForm.reset();
        } else {
          console.log(res);
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen bg-primary/30 py-32">
      <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center">
        {/* Title */}
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 font-marker mb-12"
        >
          Let's do this
        </motion.h2>

        <form onSubmit={handleSubmit} className="w-full max-w-5xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left: Input descriptions */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex-1 flex flex-col gap-y-12"
            >
              <div className="border-b border-white/10 pb-4">
                <label className="text-white/40 block mb-2 uppercase text-xs tracking-widest font-grandHotel">My project is...</label>
                <textarea
                  name="project_description"
                  className="w-full bg-transparent outline-none text-2xl font-marker resize-none"
                  placeholder="Describe your vision"
                  rows={2}
                  required
                ></textarea>
              </div>
              <div className="border-b border-white/10 pb-4">
                <label className="text-white/40 block mb-2 uppercase text-xs tracking-widest font-grandHotel">My name is...</label>
                <input
                  name="name"
                  className="w-full bg-transparent outline-none text-2xl font-marker"
                  placeholder="Your name"
                  type="text"
                  required
                />
              </div>
              <div className="border-b border-white/10 pb-4">
                <label className="text-white/40 block mb-2 uppercase text-xs tracking-widest font-grandHotel">My email is...</label>
                <input
                  name="email"
                  className="w-full bg-transparent outline-none text-2xl font-marker"
                  placeholder="Your email address"
                  type="email"
                  required
                />
              </div>
            </motion.div>

            {/* Right: Help Options */}
            <motion.div
              variants={fadeIn("left", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="w-full lg:w-[320px]"
            >
              <p className="text-white/40 uppercase text-xs tracking-widest mb-6">I need help with a:</p>
              <div className="flex flex-col gap-y-4">
                {[
                  "website",
                  "mobile app",
                  "digital strategy",
                  "banner campaign",
                  "brand design",
                  "video",
                  "digital newsletter",
                  "not sure, help!",
                ].map((item) => {
                  const isSelected = selectedServices.includes(item);
                  return (
                    <div
                      key={item}
                      onClick={() => toggleService(item)}
                      className="flex items-center gap-x-4 group cursor-pointer"
                    >
                      <div className={`w-4 h-4 border transition-all duration-300 ${isSelected ? 'bg-accent border-accent' : 'border-white/20 group-hover:border-accent'}`}></div>
                      <span className={`text-2xl font-marker transition-all duration-300 ${isSelected ? 'text-accent' : 'group-hover:text-accent'}`}>
                        {item}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Submit */}
          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mt-20 flex flex-col items-center"
          >
            <button
              type="submit"
              disabled={isLoading}
              className="group flex items-center gap-x-4 text-4xl font-marker hover:text-accent disabled:opacity-50 transition-all duration-300"
            >
              {isLoading ? "Sending..." : "Send it our way"}
              {!isLoading && <BsArrowRight className="group-hover:translate-x-4 transition-all duration-300" />}
            </button>
          </motion.div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
