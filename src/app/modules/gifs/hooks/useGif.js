import { useContext, useEffect, useState } from "react";
//
import gifyService from "app/core/services/api/GifyService";
import { GifContext } from "../contexts/GifContext";

export default function useGif({ keyboard } = { keyboard: null }) {
  const [isLoading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  const totalLength = gifs.length;

  useEffect(() => {
    if (keyboard === null && totalLength > 0) {
      return;
    }

    setLoading(true);
    //
    const keywordToSearch =
      keyboard || localStorage.getItem("lastKeyboard") || "random";
    //
    gifyService.search({ keyboard: keywordToSearch }).then((gifsResponse) => {
      setGifs(gifsResponse);
      setLoading(false);
      localStorage.setItem("lastKeyboard", keywordToSearch);
    });
  }, [keyboard, setGifs, totalLength]);

  return {
    isLoading,
    gifs,
  };
}
