import { useContext } from "react";
import GithubButton from "../components/githubButton.jsx";
import SplitText from "../components/SplitText/SplitText.jsx";
import UploadButton from "../components/uploadButton.jsx";
import { UploadContext } from "../context/uploadFile.jsx";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Home = () => {
  const { url } = useContext(UploadContext);
  const [parent] = useAutoAnimate();

  return (
    <div className="min-h-[60dvh] flex items-center justify-center px-4 py-2 flex-col gap-45">
      <section className="flex flex-col gap-10" ref={parent}>
        <SplitText
          text="Share Files. Instantly!"
          className="text-2xl font-semibold text-center"
          delay={20}
          ease="elastic.out(1,1)"
          duration={1.7}
          splitType="chars"
          threshold={0.1}
          rootMargin="-400px"
          textAlign="center"
        />
        <UploadButton />

        {url && (
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative px-6 py-4 bg-black rounded-lg leading-none flex items-center">
              <div className="flex items-center space-x-3">
                <svg
                  className="w-5 h-5 text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400 font-medium">
                    File URL
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-white font-mono break-all">
                      {url}
                    </span>
                    <button
                      onClick={() => navigator.clipboard.writeText(url)}
                      className="ml-2 p-1 hover:bg-gray-700 rounded transition-colors duration-200"
                      title="Copy URL"
                    >
                      <svg
                        className="w-4 h-4 text-gray-400 hover:text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default Home;
