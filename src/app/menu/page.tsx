import type { Metadata } from "next";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";

export const metadata: Metadata = {
  title: "Menu — Forum Coffee",
  description:
    "Specialty coffee, fresh pastries, juice, smoothies, food and shakes — made fresh daily at Forum Coffee, Chippendale.",
};

type Item = { name: string; desc?: string; price: string };

const categories: { name: string; items: Item[] }[] = [
  {
    name: "Coffee",
    items: [
      { name: "Black", desc: "Long, short or batch brew.", price: "4.0 / 5.0" },
      { name: "White", desc: "Flat white, latte, cappuccino, piccolo.", price: "4.5 / 5.5" },
      { name: "Chai · Iced", desc: "Prana spiced chai or iced over milk.", price: "6.0 / 7.0" },
      { name: "Matcha · Iced", desc: "Ceremonial grade, single origin.", price: "6.0 / 7.0" },
      { name: "Filter Brew", desc: "V60 of the week, ask the bar.", price: "6.5" },
      { name: "Add-ons", desc: "Oat, almond, decaf or extra shot.", price: "0.5" },
    ],
  },
  {
    name: "Tea",
    items: [
      { name: "English Breakfast", price: "5.0" },
      { name: "Earl Grey", price: "5.0" },
      { name: "Peppermint", price: "5.0" },
      { name: "Green Sencha", price: "5.0" },
      { name: "Chamomile", price: "5.0" },
      { name: "Lemongrass & Ginger", price: "5.0" },
    ],
  },
  {
    name: "Pastries",
    items: [
      { name: "Almond Croissant", desc: "Twice-baked, dusted with icing sugar.", price: "7.5" },
      { name: "Butter Croissant", desc: "Flaky, traditional, baked daily.", price: "6.0" },
      { name: "Pain au Chocolat", desc: "Two batons of dark chocolate.", price: "6.5" },
      { name: "Banana Bread", desc: "Toasted, with butter.", price: "7.0" },
      { name: "Carrot Cake Slice", desc: "House-made cream cheese frosting.", price: "8.0" },
      { name: "Custard Tart", desc: "Vanilla bean, brûléed top.", price: "7.0" },
    ],
  },
  {
    name: "Food",
    items: [
      { name: "Bacon & Egg Roll", desc: "Free-range, smoky relish, milk bun.", price: "12.0" },
      { name: "Avo on Sourdough", desc: "Lemon, chilli, dukkah, sea salt.", price: "16.0" },
      { name: "Chicken Wrap", desc: "Slaw, chipotle aioli, fresh herbs.", price: "14.0" },
      { name: "Halloumi Wrap", desc: "Roast capsicum, hummus, rocket.", price: "14.0" },
      { name: "Loaded Toastie", desc: "Three cheese, leg ham, dijon.", price: "13.0" },
      { name: "Soup of the Day", desc: "With sourdough on the side.", price: "12.0" },
    ],
  },
  {
    name: "Smoothies",
    items: [
      { name: "Berry Burst", desc: "Mixed berries, banana, oat milk.", price: "12.0" },
      { name: "Tropical Sun", desc: "Mango, pineapple, coconut water.", price: "12.0" },
      { name: "Green Glow", desc: "Spinach, banana, apple, ginger.", price: "12.0" },
      { name: "Choc Protein", desc: "Cacao, banana, almond, whey.", price: "13.0" },
    ],
  },
  {
    name: "Juice & Shakes",
    items: [
      { name: "Cold-pressed OJ", desc: "Just oranges, nothing else.", price: "8.0" },
      { name: "Antioxidant", desc: "Beetroot, apple, ginger, lemon.", price: "9.0" },
      { name: "Green", desc: "Celery, cucumber, kale, mint.", price: "9.0" },
      { name: "Choc Milkshake", desc: "Belgian cocoa, vanilla bean.", price: "9.0" },
      { name: "Vanilla Malt", desc: "Classic with malted milk.", price: "9.0" },
      { name: "Salted Caramel", desc: "House-made caramel, sea salt.", price: "9.5" },
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
        description="A short menu, rotated often. Coffee from a single roaster we know by name. Food from kitchens that open before sunrise. Prices in AUD — cash and card welcome."
      />
      <section className="menu-page">
        <div className="container">
          <div className="menu-cats">
            {categories.map((cat) => (
              <div key={cat.name}>
                <div className="menu-cat-h">
                  <h3>{cat.name}</h3>
                  <span className="count">{cat.items.length} items</span>
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
            <a href="/catering" className="btn btn-tan">Order for an Event</a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
