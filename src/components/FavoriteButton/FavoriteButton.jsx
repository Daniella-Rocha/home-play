import { FaHeart, FaRegHeart } from "react-icons/fa";

import './FavoriteButton.css';

const FavoriteButton = ({toFavorite, isFav}) => {

    return (
        <button
            onClick={toFavorite}
            className={isFav ? `favorite-button favorite-button-active` : `favorite-button`}
            value={'curtir'}
        >
            {isFav ? <FaHeart /> : <FaRegHeart />}
        </button>
    )
}

export default FavoriteButton
