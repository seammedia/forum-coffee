"use client";

import { useState } from "react";
import { Arrow } from "./icons";

const MENU_DATA: Record<string, { name: string; desc: string; price: string }[]> = {
  Coffee: [
    { name: "Black", desc: "Long, short, batch - your call", price: "4.0 / 5.0" },
    { name: "White", desc: "Flat, latte, cap, piccolo", price: "4.5 / 5.5" },
    { name: "Chai · Iced", desc: "Prana spiced or iced over milk", price: "6.0 / 7.0" },
    { name: "Matcha · Iced", desc: "Ceremonial grade, single origin", price: "6.0 / 7.0" },
    { name: "Filter Brew", desc: "V60 of the week, ask the bar", price: "6.5" },
    { name: "Add-ons", desc: "Oat, almond, decaf, extra shot", price: "0.5" },
  ],
  Food: [
    { name: "Almond Croissant", desc: "Twice-baked, lots of icing sugar", price: "7.5" },
    { name: "Bacon & Egg Roll", desc: "Free-range, smoky relish, milk bun", price: "12" },
    { name: "Avo on Sourdough", desc: "Lemon, chilli, dukkah, sea salt", price: "16" },
    { name: "Chicken Wrap", desc: "Slaw, chipotle aioli, herbs", price: "14" },
    { name: "Halloumi Wrap", desc: "Roast capsicum, hummus, rocket", price: "14" },
    { name: "Loaded Toastie", desc: "Three cheese, leg ham, dijon", price: "13" },
  ],
  Pantry: [
    { name: "Forum Beans · 250g", desc: "Whole bean or ground to order", price: "22" },
    { name: "Cold-pressed Juice", desc: "Antioxidant, green, citrus", price: "9" },
    { name: "Granola Jar", desc: "House-toasted, oat & almond", price: "11" },
    { name: "Tote Bag", desc: "Heavy canvas, navy on natural", price: "18" },
    { name: "Enamel Mug", desc: "Forum colonnade, 350ml", price: "24" },
    { name: "Gift Card", desc: "Any value, in-store or post", price: "-" },
  ],
};

export function Menu() {
  const [tab, setTab] = useState("Coffee");
  const tabs = Object.keys(MENU_DATA);

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="eyebrow">The Menu</span>
            <h2>What&apos;s on<br /><em>the wall.</em></h2>
          </div>
          <p className="lede">
            A short menu, rotated often. Coffee from a single roaster we know by name.
            Food from kitchens that open before sunrise.
          </p>
        </div>
        <div className="menu-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={"menu-tab" + (tab === t ? " active" : "")}
              onClick={() => setTab(t)}
            >
              {t} ({MENU_DATA[t].length})
            </button>
          ))}
        </div>
        <div className="menu-grid">
          {MENU_DATA[tab].map((item, i) => (
            <div key={i} className="menu-row">
              <div>
                <div className="name">{item.name}</div>
                <div className="desc">{item.desc}</div>
              </div>
              <div className="price">${item.price}</div>
            </div>
          ))}
        </div>
        <div className="menu-foot">
          <div className="note">Prices in AUD · cash & card welcome</div>
          <a href="#" className="btn">Full menu (PDF) <Arrow /></a>
        </div>
      </div>
    </section>
  );
}
