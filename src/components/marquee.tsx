const items = [
  "Specialty Espresso",
  "House-made Pastries",
  "Single Origin",
  "Sourdough Toasties",
  "Cold Brew on Tap",
  "Catering for the Office",
  "Bring it Home",
];

function Row() {
  return (
    <span>
      {items.map((item, i) => (
        <span key={i}>
          <span>{item}</span>
          <span className="star" />
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div className="marquee">
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
