import { useContext, useEffect, useState } from "react";
//
import gifyService from "app/core/services/api/GifyService";
import { GifContext } from "app/modules/gifs/contexts/GifContext";

export default function useGifDetail({ id }) {
  const { findById } = useContext(GifContext);
  const [gif, setGif] = useState(findById(id));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!gif) {
      setIsLoading(true);
      gifyService.detail(id).then((gifResponse) => {
        setGif(gifResponse);
        setIsLoading(false);
      });
    }
  }, [gif, id]);

  return {
    gif,
    isLoading,
  };
}
