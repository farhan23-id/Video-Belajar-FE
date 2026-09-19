import Product from "./Product.jsx";
import Tutor from "./Tutor.jsx";

import "../../../styles/App.css";
import { cardsData } from "./courseData.js";

function ProductCard({ variant = "card_1" }) {
  const card = cardsData[variant] || cardsData.card_1;

  return (
    <li className="card-item lg:pb-3">
      <article className="h-full bg-primaryBg rounded-[0.625rem] p-4 border border-border flex flex-wrap items-start gap-2 lg:flex-col lg:p-5 lg:gap-4">
        <img
          src={`asset/catalog/${card.image}`}
          alt="course"
          className="w-20.5 h-20.5 rounded-[10px] object-cover mr-2 lg:mr-0 lg:w-full lg:h-auto lg:aspect-video"
        />

        <div className="content-wrapper flex flex-col gap-2 flex-1 min-h-20.5 justify-between lg:gap-4">
          <Product variant={card.product} />
          <Tutor variant={card.tutor} />
        </div>

        <div className="card-information flex justify-between items-center w-full mt-auto">
          <div className="rating flex items-center gap-2">
            <div className="stars" style={{ "--rating": card.stars }}></div>
            <p className="text-[0.75rem] bodySmall-M underline text-textDark-secondary lg:text-[0.875rem]">
              {card.stars} ({card.totalRating})
            </p>
          </div>

          <div className="price">
            <p className="heading-5 lg:heading-4 text-primary">{card.price}</p>
          </div>
        </div>
      </article>
    </li>
  );
}

export default ProductCard;
