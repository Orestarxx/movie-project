'use client'
import React, {FC} from "react";


type Props = {
    rating:number
}
const StarRatings:FC<Props> = ({rating}) => {

    const maxStars = 10
    const stars = Array.from({ length: maxStars }, (_, index) => index + 1);

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            {stars.map((star) => (
                <span
                    key={star}
                    style={{
                        fontSize: "2rem",
                        color: star <= rating ? "gold" : "gray", // Зірки заповнені або сірі
                    }}
                >
          ★
        </span>
            ))}
        </div>
    );
};

export default StarRatings;