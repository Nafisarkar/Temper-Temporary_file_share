import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import Navbar from "./components/navbar";
import About from "./pages/about";
import DarkVeil from "./components/DarkVeil/DarkVeil";
import { useEffect, useState } from "react";
import Loading from "./pages/loading";
import GithubButton from "./components/githubButton";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [routesParent] = useAutoAnimate({
    duration: 300,
    easing: "ease-in-out",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className=" w-full relative">
      <Loading isVisible={isLoading} />
      <div
        className={` w-full transition-opacity duration-1000 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="fixed inset-0 z-0">
          <DarkVeil
            speed={0.4}
            hueShift={8}
            noiseIntensity={0.04}
            warpAmount={2.92}
          />
        </div>
        <div className="relative z-10">
          <Navbar />
          <div className="flex items-center justify-center" ref={routesParent}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              // not found page
              <Route path="*" element={<Notfound />} />
            </Routes>
          </div>
          <section className="flex flex-row justify-center my-10">
            <GithubButton />
          </section>
        </div>
      </div>
    </div>
  );
};
export default App;
