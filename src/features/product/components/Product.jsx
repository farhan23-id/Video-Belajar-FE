function Product({ title, description }) {
  return (
    <div className="card-title flex flex-col gap-2" title={description}>
      <h3 className="tracking-normal text-[1rem] heading-6 lg:text-[18px] text-textDark-primary">
        {title}
      </h3>
      <p className="hidden w-full lg:line-clamp-2 bodyMedium-M text-textDark-secondary ">
        {description}
      </p>
    </div>
  );
}

export default Product;