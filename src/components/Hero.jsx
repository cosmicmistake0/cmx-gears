import "./hero.css";
export function Hero() {
  return (
    <div className="hero-container">
      <div className="text-container">
        <p>GAME DAY</p>
        <p>ESSENTIALS</p>
      </div>
      <div className="hero-sports">
        <a href="/shop?category=football">FOOTBALL</a>
        <span>•</span>
        <a href="/shop?category=basketball">BASKETBALL</a>
        <span>•</span>
        <a href="/shop?category=training">TRAINING</a>
      </div>
      <div className="hero-cta">
        <a href="">
          <button>SHOP NOW </button>
        </a>
      </div>
    </div>
  );
}
