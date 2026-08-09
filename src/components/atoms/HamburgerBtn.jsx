function HamburgerBtn({ onClick }) {
  return (
    <button onClick={onClick} className="lg:hidden cursor-pointer">
      <img src="/asset/icon/burger.svg" alt="" />
    </button>
  );
}

export default HamburgerBtn;
