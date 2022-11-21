import { useContext, useEffect, useState } from "react";
import SearchContext from "../../context/SearchContext";
import axios from "axios";
const useHome = () => {
  const { data } = useContext(SearchContext);
  const [movies, setMovies] = useState([]);
  // console.log(movies); ,
  useEffect(() => {
    (async function () {
      try {
        const { data: movieValue } = await axios.get(
          `https://fake-movie-database-api.herokuapp.com/api?s=${data}`
        );
        setMovies(movieValue.Search);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [data]);

  return { movies };
};

export default useHome;
