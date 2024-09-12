import { useState, useEffect } from "react";

function PrefferedMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, []);
}