import React from "react";
import SplitText from "../components/SplitText/SplitText.jsx";
import GithubButton from "../components/githubButton.jsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const About = () => {
  const [parent] = useAutoAnimate();

  return (
    <div className="min-h-[70dvh] flex items-center justify-center px-4 py-2 flex-col gap-10">
      <section
        className="flex flex-col gap-8 max-w-4xl mx-auto text-center"
        ref={parent}
      >
        <SplitText
          text="About Temper"
          className="text-4xl font-bold text-center mb-4"
          delay={30}
          ease="elastic.out(1,1)"
          duration={1.5}
          splitType="chars"
          threshold={0.1}
          rootMargin="-400px"
          textAlign="center"
        />

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Lightning Fast
            </h3>
            <p className="text-gray-400 text-sm">
              Upload and share files in seconds with our optimized
              infrastructure.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Secure</h3>
            <p className="text-gray-400 text-sm">
              Your files are protected with enterprise-grade security measures.
            </p>
          </div>

          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6 border border-gray-800 hover:border-pink-500/50 transition-all duration-300">
            <div className="w-12 h-12 bg-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Simple</h3>
            <p className="text-gray-400 text-sm">
              Clean, intuitive interface that anyone can use without confusion.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div className="mt-16">
          <SplitText
            text="Built With"
            className="text-2xl font-semibold text-center mb-8"
            delay={100}
            ease="power3.out"
            duration={1.0}
            splitType="chars"
            threshold={0.1}
            rootMargin="-200px"
            textAlign="center"
          />

          <div className="flex flex-wrap justify-center gap-4">
            {["React", "Vite", "Tailwind CSS", "GSAP", "Node.js"].map(
              (tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-indigo-600/20 to-purple-600/10 border border-indigo-500/30 rounded-full text-sm text-indigo-300 font-medium backdrop-blur-sm"
                  style={{ animationDelay: `${150 + index * 100}ms` }}
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
