import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { SQUARE_ONLINE_URL } from "@/lib/config";

export const metadata: Metadata = {
  title: "Menu — Forum Coffee",
  description:
    "Hot drinks, cold drinks, pastries, pies, wraps, sandwiches and salads — made fresh daily at Forum Coffee, Chippendale.",
};

type Item = { name: string; desc?: string; price: string };

const categories: { name: string; priceLabel?: string; items: Item[] }[] = [
  {
    name: "Hot Drinks",
    priceLabel: "Reg / Lrg",
    items: [
      { name: "Espresso", price: "3.5 / 4.0" },
      { name: "Black", price: "4.0 / 5.0" },
      { name: "White", price: "4.5 / 5.5" },
      { name: "Magic", price: "4.8" },
      { name: "Mocha", price: "4.5 / 5.5" },
      { name: "Chai", price: "6.0" },
      { name: "Matcha", price: "6.0" },
      { name: "Assorted Teas", price: "5.0" },
    ],
  },
  {
    name: "Cold Drinks",
    items: [
      { name: "Iced Coffee", price: "6.5" },
      { name: "Iced Chai", price: "6.5" },
      { name: "Iced Matcha", price: "6.5" },
      { name: "Milkshakes", price: "12.0" },
      { name: "Smoothies", price: "7.0" },
      { name: "Peach Iced Tea", price: "4.5" },
      { name: "Juices", price: "5.0" },
    ],
  },
  {
    name: "Pastries",
    items: [
      { name: "Croissant", price: "6.0" },
      { name: "Pain au Chocolat", price: "7.0" },
      { name: "Almond Croissant", price: "9.0" },
      { name: "Ham + Cheese Croissant", price: "9.0" },
      { name: "Double Chocolate Muffin", price: "6.8" },
      { name: "Mixed Berry Muffin", price: "6.8" },
      { name: "Banana Bread", price: "5.0" },
    ],
  },
  {
    name: "Pies",
    items: [
      { name: "Beef Mince", price: "9.0" },
      { name: "Chicken, Leek, Mustard", price: "9.0" },
      { name: "Eggplant, Potato, Pea Curry", price: "9.0" },
      { name: "Pork + Fennel Sausage Roll", price: "8.0" },
    ],
  },
  {
    name: "Baked",
    items: [
      { name: "Choc Chip", price: "5.5" },
      { name: "Dubai Pistachio", price: "5.5" },
      { name: "Biscoff + White Choc", price: "5.5" },
      { name: "Pistachio, Almond, Coconut Bar", desc: "Gluten free.", price: "5.5" },
    ],
  },
  {
    name: "Wraps",
    items: [
      { name: "Za'atar Wrap", desc: "Za'atar, cucumber, tomato, olives.", price: "12.5" },
      { name: "Chicken Wrap", desc: "Tomato, mozzarella, basil.", price: "14.5" },
      {
        name: "Halloumi Wrap",
        desc: "Lettuce, tomato, cucumber, mint, pesto, pomegranate.",
        price: "14.5",
      },
    ],
  },
  {
    name: "Sandwiches",
    items: [
      {
        name: "Classic Ham + Cheese Baguette",
        desc: "Leg ham, cheese, cornichon, butter.",
        price: "14.5",
      },
      {
        name: "Caprese Ciabatta",
        desc: "Tomato, mozzarella, basil.",
        price: "14.5",
      },
      {
        name: "Schnitzel Sandwich",
        desc: "Chicken, tomato, lettuce, mayonnaise.",
        price: "14.5",
      },
    ],
  },
  {
    name: "Salads",
    items: [
      {
        name: "Chicken Fattoush",
        desc: "Lettuce, tomato, cucumber, radish, pita, sumac vinaigrette.",
        price: "15.0",
      },
      {
        name: "Halloumi Salad",
        desc: "Lettuce, tomato, cucumber, mint, pesto, walnuts, pomegranate.",
        price: "15.0",
      },
      {
        name: "Tuna Niçoise",
        desc: "Eggs, green beans, olives, tomatoes, potato.",
        price: "15.0",
      },
    ],
  },
];

export default function MenuPage() {
  return (
    <>
      <Nav />
      <PageHeader
        eyebrow="The Menu"
        title="Made fresh. Made here."
        description="Hot and cold drinks, pastries from local bakers, hearty wraps and sandwiches, and seasonal salads. Prices in AUD — cash and card welcome at the bar, or order online for pickup."
      />
      <section className="menu-page">
        <div className="container">
          <div className="menu-cats">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="menu-cat-h">
                  <h3>{cat.name}</h3>
                  <span className="count">
                    {cat.priceLabel ?? `${cat.items.length} items`}
                  </span>
                </div>
                <div className="menu-list">
                  {cat.items.map((item) => (
                    <div key={item.name} className="menu-item">
                      <div>
                        <p className="name">{item.name}</p>
                        {item.desc && <p className="desc">{item.desc}</p>}
                      </div>
                      <span className="price">${item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="menu-foot-note">
            <span>Vegan, vegetarian and gluten-free options available — just ask the bar.</span>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a
                href={SQUARE_ONLINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-tan"
              >
                Order Online
              </a>
              <a href="/catering" className="btn btn-dark">Order for an Event</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
