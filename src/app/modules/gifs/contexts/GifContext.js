import react, { useState } from "react";

export const GifContext = react.createContext({});

export default function GifContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
  const findById = (id) => gifs.find((gif) => gif.id === id) || null;

  return (
    <GifContext.Provider value={{ gifs, setGifs, findById }}>
      {children}
    </GifContext.Provider>
  );
}
