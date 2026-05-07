import {
  IconCoffee,
  IconPastry,
  IconJuice,
  IconFood,
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
    image: "/images/signature-pastry.jpg",
  },
  {
    icon: <IconJuice />,
    name: "Juice",
    desc: "Cold-pressed and refreshing.",
    image: "/images/signature-juice.jpg",
  },
  {
    icon: <IconFood />,
    name: "Food",
    desc: "Simple, delicious and satisfying.",
    image: "/images/signature-food.jpg",
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
              <a href="/menu" className="sig-link">View Menu →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
