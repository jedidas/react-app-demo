import { useCallback, useState } from "react";

export default function useFilter({ sort_by, callback }) {
  const [stateFilter, setstateFilter] = useState({
    sort_by,
  });

  const handleChange = useCallback(
    (event) => {
      let { name, value } = event.target;
      if (name === "include_adult") {
        value = event.target.checked;
      }
      callback({ name, value });
      setstateFilter((prevState) => ({ ...prevState, [name]: value }));
    },
    [callback]
  );
  //
  return {
    stateFilter,
    setstateFilter,
    handleChangeFilter: handleChange,
  };
}
