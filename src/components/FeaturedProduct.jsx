import "./featuredProduct.css";
export function FeaturedProduct() {
  return (
    <>
      <div className="product-container">
        <div className="product-grid">
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <div>
                <h3>CMX performance Jersey</h3>
                <p>Football</p>
              </div>
              <div className="price-n-cart">
                <span>₦35,000</span>
                <div className="product-card-cart">
                  <img src="icons/cartplussvg.svg" alt="" />
                </div>
              </div>
            </div>
          </article>
          {/* <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3>CMX Training Shorts</h3>
              <p>Training</p>
              <span>₦25,000</span>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3>CMX Basketball Jersey</h3>
              <p>Basketball</p>
              <span>₦32,000</span>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3>CMX Sports T-Shirt</h3>
              <p>Training</p>
              <span>₦22,000</span>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3>CMX Sports Hoodie</h3>
              <p>Training</p>
              <span>₦38,000</span>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image"></div>
            <div className="product-info">
              <h3>CMX Football Shorts</h3>
              <p>Football</p>
              <span>₦20,000</span>
            </div>
          </article> */}
        </div>
      </div>
    </>
  );
}
