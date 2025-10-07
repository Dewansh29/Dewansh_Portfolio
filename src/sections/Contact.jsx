import { useState } from "react";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mgvnlkyr", { // <-- YOUR URL IS NOW HERE
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({ name: "", email: "", message: "" });
        showAlertMessage("success", "Your message has been sent successfully!");
      } else {
        throw new Error("Something went wrong with the submission.");
      }
    } catch (error) {
      console.log(error);
      showAlertMessage("danger", "Something went wrong! Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative flex items-center justify-center c-space section-spacing" id="contact">
      <Particles className="absolute inset-0" quantity={100} ease={80} color={"#ffffff"} refresh />
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center w-full max-w-md p-8 mx-auto border border-white/10 rounded-2xl bg-midnight/50 backdrop-blur-sm">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Let's Talk</h2>
          <p className="font-normal text-neutral-400">
            Whether you're looking to build a new project, improve an existing platform, or just want to connect, I'm here to help.
          </p>
        </div>
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="mb-5">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Full Name</label>
            <input id="name" name="name" type="text" className="w-full p-3 text-white border rounded-md bg-white/5 border-white/10 focus:ring-cyan-500 focus:border-cyan-500" placeholder="John " value={formData.name} onChange={handleChange} required />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Email</label>
            <input id="email" name="email" type="email" className="w-full p-3 text-white border rounded-md bg-white/5 border-white/10 focus:ring-cyan-500 focus:border-cyan-500" placeholder="john@gmail.com" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full p-3 text-white border rounded-md bg-white/5 border-white/10 focus:ring-cyan-500 focus:border-cyan-500" placeholder="Share your thoughts..." value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="w-full px-4 py-3 text-lg font-bold text-center text-white rounded-md cursor-pointer bg-cyan-600 hover:bg-cyan-500 disabled:bg-gray-600" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;