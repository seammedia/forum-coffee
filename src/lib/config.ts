// Site-wide config. Update SQUARE_ONLINE_URL once Square Online is published.

// The Square Online ordering URL — get this from Square Dashboard → Online → Site URL
// Example: "https://forum-coffee.square.site"
export const SQUARE_ONLINE_URL = "https://squareup.com/dashboard"; // PLACEHOLDER — replace with real URL

// Whether to embed Square Online in an iframe on /order, or link out directly.
// Set to false to just open the Square site in a new tab.
export const SQUARE_EMBED_ENABLED = false;

export const BUSINESS = {
  name: "Forum Coffee",
  address: "112-126 Broadway, Chippendale NSW 2008",
  phone: "(02) 9999 1234",
  phoneTel: "+61299991234",
  email: "hello@forumcoffee.com.au",
  cateringEmail: "catering@forumcoffee.com.au",
  instagram: "https://www.instagram.com/forumcoffeeunda/",
  hours: {
    weekday: "6:30am - 3:30pm",
    weekend: "7:00am - 3:00pm",
  },
};
