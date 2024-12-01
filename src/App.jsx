// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/About";
// import Project from "./components/project";
// import Projects from "./components/projects";
// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-red-300 selection:text-red-300">
//       <div className="fixed top-0 left-0 -z-10 h-full w-full">
//       <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
        
//       </div>
//       </div>
     
//       <div className="container mx-auto px-8">
//         <Navbar />
//         <Hero />
//         <About/>
//         <Project/>
//         <Projects/>
//       </div>
//     </div>
//   );
// };

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from "./components/navbar";
// import Hero from "./components/hero";
// import About from "./components/About";
// import Project from "./components/project";
// import Projects from "./components/projects";
// import PropertyHub from "./components/properthub"; 

// const App = () => {
//   return (
//     <Router> 
//       <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-red-300 selection:text-red-300">
//         <div className="fixed top-0 left-0 -z-10 h-full w-full">
//           <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
//           </div>
//         </div>
        
//         <div className="container mx-auto px-8">
//           <Navbar />
//           <Hero />
//           <About />
//           <Project />
//           <Routes>
//             <Route path="/" element={<Projects />} />
//             <Route path="/properthub" element={<PropertyHub />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/About";
import Project from "./components/project";
import Projects from "./components/projects";
import PropertyHub from "./components/properthub"; 
import Cloth from "./components/cloth"; 
import Book from "./components/bookshop"; 
import Criket from "./components/criketdash"; 
import RESEARCHPROJECTS from "./components/research"; 
import Contact from "./components/contact"; 

const HomePage = () => (
  <div>
    <Hero />
    <About />
    <Project />
    <Projects />
    <RESEARCHPROJECTS/>
    <Contact/>
  </div>
);

const App = () => {
  return (
    <Router>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-red-300 selection:text-red-300">
        <Navbar />
        <div className="fixed top-0 left-0 -z-10 h-full w-full">
          <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
          </div>
        </div>
        
        <div className="container mx-auto px-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/properthub" element={<PropertyHub />} />
            <Route path="/cloth" element={<Cloth />} />
            <Route path="/bookshop" element={<Book />} />
            <Route path="/criketdash" element={<  Criket />} />
            
          
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
