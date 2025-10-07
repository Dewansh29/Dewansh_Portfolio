import { mySocials } from "../constants";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-8 py-8 text-sm text-neutral-400 c-space">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
      <div className="flex flex-col items-center w-full gap-8 sm:flex-row sm:justify-between">
        <p>© {new Date().getFullYear()} Dewansh Jha. All rights reserved.</p>
        <div className="flex gap-4">
          {mySocials.map((social, index) => (
            <a 
              href={social.href} 
              key={index} 
              target="_blank" 
              rel="noopener noreferrer"
              className="transition-transform duration-300 hover:scale-110"
            >
              <img src={social.icon} className="w-6 h-6" alt={social.name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;