

// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

// const navbar = () => {
//   return <nav className="mb-20 flex items-center justify-between py-6">
//     <div className="flex flex-shrink-0 items-center">
  
//     </div>
//     <div className="m-8 flex items-center justify-center gap-5 text-2xl">
//         <FaGithub/>
//         <FaLinkedin/>
//         <FaInstagram/>
//     </div>
    
//   </nav>
    
  
// }

// export default navbar
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
      
      </div>
      <div className="m-8 flex items-center justify-center gap-5 text-2xl">
        <a href="https://github.com/yokvj" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yashwanth-kumar-k-284a3829a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
