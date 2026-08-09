
import Product from "../atoms/Product"
import Tutor from "../atoms/Tutor"

import '../../styles/molecules.css'
import { cardsData } from '../../constants/courseData.js'

// const cards = {
//   card_1: {
//     categoryId: "web-dev",
//     image: "catalog_1.jpg",
//     product: "product_1",
//     tutor: "tutor_1",
//     stars: "4.5",
//     totalRating: "100",
//     price: "Rp500k"
//   },
//   card_2: {
//     categoryId: "web-dev",
//     image: "catalog_2.jpg",
//     product: "product_2",
//     tutor: "tutor_2",
//     stars: "4.9",
//     totalRating: "342",
//     price: "Rp850k"
//   },
//   card_3: {
//     categoryId: "data-science",
//     image: "catalog_3.jpg",
//     product: "product_3",
//     tutor: "tutor_3",
//     stars: "3.8",
//     totalRating: "215",
//     price: "Rp750k"
//   },
//   card_4: {
//     categoryId: "design",
//     image: "catalog_4.jpg",
//     product: "product_4",
//     tutor: "tutor_4",
//     stars: "4.7",
//     totalRating: "189",
//     price: "Rp450k"
//   },
//   card_5: {
//     categoryId: "design",
//     image: "catalog_5.jpg",
//     product: "product_5",
//     tutor: "tutor_5",
//     stars: "4.6",
//     totalRating: "95",
//     price: "Rp900k"
//   },
//   card_6: {
//     categoryId: "web-dev",
//     image: "catalog_6.jpg",
//     product: "product_6",
//     tutor: "tutor_6",
//     stars: "4.8",
//     totalRating: "150",
//     price: "Rp800k"
//   },
//   card_7: {
//     categoryId: "web-dev",
//     image: "catalog_7.jpg",
//     product: "product_7",
//     tutor: "tutor_7",
//     stars: "4.9",
//     totalRating: "280",
//     price: "Rp650k"
//   },
//   card_8: {
//     categoryId: "design",
//     image: "catalog_8.jpg",
//     product: "product_8",
//     tutor: "tutor_8",
//     stars: "4.4",
//     totalRating: "76",
//     price: "Rp550k"
//   },
//   card_9: {
//     categoryId: "web-dev",
//     image: "catalog_9.jpg",
//     product: "product_9",
//     tutor: "tutor_9",
//     stars: "4",
//     totalRating: "412",
//     price: "Rp950k"
//   }

// }

function ProductCard({ variant = "card_1" }) {

  const card = cardsData[variant] || cardsData.card_1;

  return (
    <li className="card-item lg:pb-3">
      <article
        className="h-full bg-primaryBg rounded-[0.625rem] p-4 border border-border flex flex-wrap items-start gap-2 lg:flex-col lg:p-5 lg:gap-4">

        <img src={`asset/catalog/${card.image}`} alt="course"
          className="w-20.5 h-20.5 rounded-[10px] object-cover mr-2 lg:mr-0 lg:w-full lg:h-auto lg:aspect-video" />

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
            <p className="heading-5 lg:heading-4 text-primary">
              {card.price}
            </p>
          </div>
        </div>
      </article>
    </li>
  )
}

export default ProductCard