import "./header.css";
export function Header() {
  return (
    <header>
      <div className="header-container">
        <div className="search-svg header-svgs">
          <img src="icons/searchsvg.svg" alt="" />
        </div>

        <div className="logo">
          <p>
            <span className="cmx">CMX</span>
            <span className="gears">gears</span>
          </p>
        </div>

        <div className="shop-svg header-svgs">
          <img src="icons/shoppingbagsvg.svg" alt="" />
        </div>
      </div>
    </header>
  );
}
