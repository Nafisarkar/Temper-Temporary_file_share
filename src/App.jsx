import { Route, Routes } from "react-router";
import Home from "./pages/home";
import Notfound from "./pages/notfound";
import Navbar from "./components/navbar";
import About from "./pages/about";
import DarkVeil from "./components/DarkVeil/DarkVeil";

const App = () => {
  return (
    <div className=" w-full relative">
      <div className="fixed inset-0 z-0">
        <DarkVeil
          speed={0.4}
          hueShift={38}
          noiseIntensity={0.04}
          warpAmount={2.92}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <div className="flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            // not found page
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};
export default App;
