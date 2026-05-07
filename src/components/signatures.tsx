import {
  IconCoffee,
  IconPastry,
  IconSmoothie,
  IconJuice,
  IconFood,
  IconShake,
} from "./icons";

const items = [
  {
    icon: <IconCoffee />,
    name: "Coffee",
    desc: "Expertly brewed specialty coffee.",
    image: "/images/upload-1.webp",
  },
  {
    icon: <IconPastry />,
    name: "Pastries",
    desc: "Baked fresh daily by our bakers.",
    image: "/images/latte-pastry.webp",
  },
  {
    icon: <IconSmoothie />,
    name: "Smoothies",
    desc: "Blended to order with real fruit.",
    image: "/images/wraps.webp",
  },
  {
    icon: <IconJuice />,
    name: "Juice",
    desc: "Cold-pressed and refreshing.",
    image: "/images/upload-4.webp",
  },
  {
    icon: <IconFood />,
    name: "Food",
    desc: "Simple, delicious and satisfying.",
    image: "/images/wraps.webp",
  },
  {
    icon: <IconShake />,
    name: "Shakes",
    desc: "Thick, creamy and indulgent.",
    image: "/images/upload-1.webp",
  },
];

export function Signatures() {
  return (
    <section id="menu" className="signatures">
      <div className="container">
        <span className="eyebrow">Our Signatures</span>
        <h2>Made fresh. Made here.</h2>
        <div className="sig-grid">
          {items.map((item) => (
            <div key={item.name} className="sig-card">
              <div className="sig-photo">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="sig-icon-circle">{item.icon}</div>
              <div className="sig-name">{item.name}</div>
              <p className="sig-desc">{item.desc}</p>
              <a href="#menu" className="sig-link">View Menu →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
