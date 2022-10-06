
import { useMemo } from "react";

function useMoviesSearch(movies, localShortCheck, localSearchValue) {
    return useMemo(() => movies.filter((movie) => {

        const values = localSearchValue.toLowerCase();

        if (localShortCheck && movie.duration > 30) {
            return false;
        };

        const nameRU = movie.nameRU;
        const nameEN = movie.nameEN;

        if (nameEN?.toLowerCase().includes(values) || nameRU?.toLowerCase().includes(values)) {
            return true;
        };

        return false;
    }), [localShortCheck, localSearchValue, movies])
}

const filterOnlyShort = (movies) => {
    return movies.filter((movie) => movie.duration < 30);
}

export { useMoviesSearch, filterOnlyShort };