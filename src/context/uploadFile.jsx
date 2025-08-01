import { createContext, useState } from "react";

const UploadContext = createContext();

const UploadProvider = ({ children }) => {
  const [url, setUrl] = useState("");

  return (
    <UploadContext.Provider value={{ url, setUrl }}>
      {children}
    </UploadContext.Provider>
  );
};

export { UploadContext, UploadProvider };
