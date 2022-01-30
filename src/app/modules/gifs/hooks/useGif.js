import { useCallback, useContext, useEffect, useState } from "react";
//
import gifyService from "app/core/services/api/GifyService";
import { GifContext } from "../contexts/GifContext";

const INITIAL_PAGE = 0;

export default function useGif({ keyboard } = { keyboard: null }) {
  //
  const [isLoading, setLoading] = useState(false);
  const { gifs, setGifs } = useContext(GifContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  //
  const keywordToSearch = keyboard || localStorage.getItem("lastKeyboard") || "random";

  const callApiRequest = useCallback(
    (query, merge = false) => {
      gifyService.search(query).then((gifsResponse) => {
        if (merge) {
          setGifs((previewGifs) => previewGifs.concat(gifsResponse));
        } else {
          setGifs(gifsResponse);
        }
        setLoading(false);
        localStorage.setItem("lastKeyboard", keywordToSearch);
      });
    },
    [keywordToSearch, setGifs]
  );

  //
  useEffect(() => {
    //
    if (gifs.length > 0 && keyboard === null) {
      return;
    }
    setLoading(true);
    callApiRequest({ keyboard: keywordToSearch });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboard, keywordToSearch, setGifs, callApiRequest]);

  //
  useEffect(() => {
    if (page === INITIAL_PAGE) {
      return;
    }
    //
    setLoading(true);
    callApiRequest({ keyboard: keywordToSearch, offset: page }, true);

  }, [keywordToSearch, setGifs, page, callApiRequest]);

  return {
    isLoading,
    gifs,
    setPage,
  };
}
