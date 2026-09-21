import Product from "./Product.jsx";
import Tutor from "./Tutor.jsx";
import "../../../styles/App.css";

import { ShoppingCart, Check } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleCart,
  selectIsInCart,
} from "../../../redux/slicers/chartSlice.js";

function ProductCard({ course }) {
  const dispatch = useDispatch();
  const isInCart = useSelector((state) => selectIsInCart(state, course.id));

  const handleToggleCart = () => {
    dispatch(toggleCart(course.id));
  };

  return (
    <li className="card-item lg:pb-3">
      <article className="h-full bg-primaryBg rounded-[0.625rem] p-4 border border-border flex flex-wrap items-start gap-2 lg:flex-col lg:p-5 lg:gap-4">
        <img
          src={`/asset/catalog/${course.image}`}
          alt="course"
          className="w-20.5 h-20.5 rounded-[10px] object-cover mr-2 lg:mr-0 lg:w-full lg:h-auto lg:aspect-video"
        />

        <div className="content-wrapper flex flex-col gap-2 flex-1 min-h-20.5 justify-between lg:gap-4">
          <Product title={course.title} description={course.description} />
          <Tutor
            avatar={course.tutorAvatar}
            name={course.tutorName}
            job={course.tutorJob}
            company={course.tutorCompany}
          />
        </div>

        <div className="card-information flex flex-wrap justify-between items-center w-full mt-auto">
          <div className="rating flex items-center gap-2">
            <div className="stars" style={{ "--rating": course.stars }}></div>
            <p className="text-[0.75rem] bodySmall-M underline text-textDark-secondary lg:text-[0.875rem]">
              {course.stars} ({course.totalRating})
            </p>
          </div>

          <div className="price">
            <p className="heading-5 lg:heading-4 text-primary">
              Rp{Number(course.price).toLocaleString("id-ID")}
            </p>
          </div>
        </div>
        <button
          onClick={handleToggleCart}
          aria-label={isInCart ? "Hapus dari keranjang" : "Tambah ke keranjang"}
          className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-[0.625rem] bodyMedium-M transition-colors duration-200 cursor-pointer ${
            isInCart
              ? "bg-secondary-100 text-secondary border border-secondary"
              : "bg-primary text-white hover:bg-primary/90"
          }`}
        >
          {isInCart ? (
            <>
              <Check size={18} />
              Sudah di Keranjang
            </>
          ) : (
            <>
              <ShoppingCart size={18} />
              Tambah ke Keranjang
            </>
          )}
        </button>
      </article>
    </li>
  );
}

export default ProductCard;
