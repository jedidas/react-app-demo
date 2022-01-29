import { useContext, useEffect, useState } from "react";
//
import gifyService from "app/core/services/api/GifyService";
import { GifContext } from "app/modules/gifs/contexts/GifContext";

export default function useGifDetail({ id }) {
  const { findById } = useContext(GifContext);
  const [gif, setGif] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const foundedGif = findById(id);
    if (foundedGif !== null) {
      setGif(foundedGif);
      return;
    }

    setIsLoading(true);

    gifyService.detail(id).then((gifResponse) => {
      setGif(gifResponse);
      setIsLoading(false);
    });
  }, [findById, id]);

  return {
    gif,
    isLoading,
  };
}
