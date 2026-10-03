/**
 * Menu taken from the earlier draft of the site.
 * TODO(owner): verify every item and price with the cafe before going live.
 * Prices are in Nepali rupees and include taxes.
 */

export type MenuItem = { name: string; note?: string; price: number };
export type MenuCategory = { id: string; label: string; intro: string; items: MenuItem[] };

export const menuNote =
  "Everything is made fresh to order. Prices include all taxes. Takeaway available on call.";

export const menu: MenuCategory[] = [
  {
    id: "coffee",
    label: "Hot coffee",
    intro: "Espresso-based drinks, ground to order.",
    items: [
      { name: "Espresso", price: 150 },
      { name: "Americano", price: 180 },
      { name: "Cappuccino", price: 200 },
      { name: "Cafe latte", note: "Smooth, milky, with fresh latte art", price: 220 },
      { name: "Cafe mocha", price: 250 },
    ],
  },
  {
    id: "cold",
    label: "Cold drinks",
    intro: "Iced coffee, shakes and something sharp for a hot day.",
    items: [
      { name: "Iced latte", price: 250 },
      { name: "Cold coffee", note: "Blended thick with vanilla ice cream", price: 240 },
      { name: "Iced americano", price: 220 },
      { name: "Fresh lime soda", price: 120 },
      { name: "Milkshakes", note: "Chocolate, vanilla or strawberry", price: 280 },
    ],
  },
  {
    id: "momo",
    label: "Momo",
    intro: "Steamed, fried or in soup.",
    items: [
      { name: "Steam momo", note: "Buff, 10 pieces, with house achar", price: 150 },
      { name: "Fried momo", price: 170 },
      { name: "Jhol momo", note: "Served in our spiced tomato-ginger broth", price: 180 },
      { name: "Chicken steam momo", price: 180 },
      { name: "Chicken jhol momo", price: 220 },
    ],
  },
  {
    id: "bistro",
    label: "Bistro favourites",
    intro: "Sandwiches, burgers, pasta and noodles from the kitchen.",
    items: [
      { name: "Club sandwich", note: "Triple-decker with fries and coleslaw", price: 240 },
      { name: "Chicken sandwich", price: 260 },
      { name: "Chicken burger", note: "Crispy fillet, house sauce, fries", price: 260 },
      { name: "White sauce pasta", price: 250 },
      { name: "Veg chowmein", price: 160 },
    ],
  },
  {
    id: "dessert",
    label: "Desserts",
    intro: "Something sweet to go with the coffee.",
    items: [
      { name: "Brownie with ice cream", note: "Warm brownie, vanilla scoop, caramel", price: 260 },
      { name: "Waffle with honey", price: 220 },
      { name: "Chocolate lava cake", price: 280 },
    ],
  },
];

export const rupees = (n: number) => `Rs. ${n}`;
