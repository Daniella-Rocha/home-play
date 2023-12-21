import { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import './FavoriteButton.css';

const FavoriteButton = ({ movie }) => {
    const [isFav, setIsFav] = useState(false);

    const handleClick = () => {
        setIsFav(!isFav);
    };

    return (
        <button
            onClick={handleClick}
            className={isFav ? "favorite-button-active" : "favorite-button"}
            value={'curtir'}
        >
            {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>
    )
}

export default FavoriteButton
