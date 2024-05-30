import { useEffect, useState } from "react";

// import About from "@/scenes/about";
// import Careers from "@/scenes/careers";
// import Contact from "@/scenes/contact";
// import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import { SelectedPage } from "@/shared/types";

// import Services from "@/scenes/services";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {/* <Home setSelectedPage={setSelectedPage} />
      <About setSelectedPage={setSelectedPage} />
      <Services setSelectedPage={setSelectedPage} />
      <Careers setSelectedPage={setSelectedPage} />
      <Contact /> */}
    </div>
  );
}

export default App;
