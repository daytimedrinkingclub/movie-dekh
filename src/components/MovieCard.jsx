import { lazy, useState } from "react";

function MovieCard({ movie }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-[300px] h-[150px]">
            <img src="https://image.tmdb.org/t/p/original//tbgIhYwQ5IAgNaFU1SBBxxNXCmm.jpg" height={200} width={200} alt='something' className="w-full h-full object-cover" />
            <p className="text-white text-center text-2xl font-bold">movie</p>
        </div>
    )
}

export default MovieCard;