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
      { name: "Matcha", price: "8.0" },
      { name: "Assorted Teas", price: "5.0" },
    ],
  },
  {
    name: "Cold Drinks",
    items: [
      { name: "Iced Coffee", price: "6.5" },
      { name: "Iced Chai", price: "6.5" },
      { name: "Iced Matcha", price: "9.0" },
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
    name: "Breakfast",
    items: [
      {
        name: "B+E Roll",
        desc: "Bacon, fried eggs, aioli on a soft white roll.",
        price: "9.5",
      },
      {
        name: "Smoked Salmon Bagel",
        desc: "Smoked salmon, cream cheese, baby spinach, Spanish onion, capers.",
        price: "10.5",
      },
      {
        name: "Ham, Cheese + Tomato Sourdough",
        desc: "Double smoked leg ham, tomato, tasty cheese, Dijon mustard.",
        price: "9.5",
      },
    ],
  },
  {
    name: "Cold Lunch",
    items: [
      {
        name: "Italian Baguette",
        desc: "Tomato, pesto, bocconcini, fresh basil, baby spinach.",
        price: "10.0",
      },
      {
        name: "Waldorf Chicken Ciabatta",
        desc: "Waldorf chicken, cucumber, carrot, leaf, aioli on Italian ciabatta.",
        price: "12.0",
      },
      {
        name: "Salamighty Sandwich",
        desc: "Danish salami, roasted spicy eggplant, grilled zucchini, rocket.",
        price: "14.0",
      },
    ],
  },
  {
    name: "Hot Lunch",
    items: [
      {
        name: "Chicken Parmy Sandwich",
        desc: "Chicken schnitzel, roasted eggplant, napolitana, mozzarella.",
        price: "16.0",
      },
      {
        name: "Cuban Sandwich",
        desc: "Mojo pulled pork, double smoked Prager ham, Swiss cheese, pickles.",
        price: "15.0",
      },
      {
        name: "Roasted Pumpkin + Feta Sandwich",
        desc: "Roasted butternut pumpkin, grilled zucchini, sundried tomato, rocket.",
        price: "11.0",
      },
    ],
  },
  {
    name: "Wraps",
    items: [
      {
        name: "Veggie Patty Wrap",
        desc: "House-made veggie patty, cucumber, roast peppers, rocket, sweet chilli.",
        price: "10.0",
      },
      {
        name: "Chicken Schnitzel Wrap",
        desc: "Chicken schnitzel, tomato, tasty cheese, aioli, leaf.",
        price: "10.0",
      },
      {
        name: "Pesto Chicken Wrap",
        desc: "Poached chicken breast, pesto, semi sun-dried tomato, cucumber.",
        price: "10.0",
      },
    ],
  },
  {
    name: "Salads",
    items: [
      {
        name: "Traditional Pasta Salad",
        desc: "Fusilli pasta, roast vegetables, leaf, aioli.",
        price: "11.0",
      },
      {
        name: "Crumbed Chicken Caesar Salad",
        desc: "Crumbed chicken, bacon, freshly baked croutons, egg, caesar dressing.",
        price: "15.5",
      },
      {
        name: "Tuna Niçoise Salad",
        desc: "Tuna, green beans, tomato, potato, soft-boiled egg, Spanish onion.",
        price: "14.5",
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
