import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  return (
    <section
      id="contact"
      className=" py-20 px-6"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Have a project in mind or just want to say hi?  
            I’m always open to discussing new ideas and opportunities.
          </p>

          <div className="space-y-5">
            <div className="flex items-center gap-4">
              <FiMail className="text-indigo-400 text-xl" />
              <span className="text-slate-300">nishantmathur572@email.com</span>
            </div>

            <div className="flex items-center gap-4">
              <FiPhone className="text-indigo-400 text-xl" />
              <span className="text-slate-300">+91 63760 73082</span>
            </div>

            <div className="flex items-center gap-4">
              <FiMapPin className="text-indigo-400 text-xl" />
              <span className="text-slate-300">Jaipur (Rajasthan)</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="bg-[#020617]/80 backdrop-blur rounded-2xl p-8 shadow-lg space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full bg-transparent border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-indigo-500"
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 transition rounded-lg py-3 font-medium text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
