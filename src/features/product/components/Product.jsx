import { products } from "./courseData.js";

function Product({ variant = "product_1" }) {
  const product = products[variant] || products.product_1;

  return (
    <div className="card-title flex flex-col gap-2" title={product.description}>
      <h3 className="tracking-normal text-[1rem] heading-6 lg:text-[18px] text-textDark-primary">
        {product.title}
      </h3>
      <p className="hidden w-full lg:line-clamp-2 bodyMedium-M text-textDark-secondary ">
        {product.description}
      </p>
    </div>
  );
}

export default Product;
