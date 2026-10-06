/**
 * Photos. The main files are expected in /public/img with the same names the
 * earlier draft used (hero-interior.jpg, iced-latte.jpg, momo-steamed.jpg ...).
 * Copy that folder into /public/img. The hero and story images fall back to
 * free Unsplash photos (https://unsplash.com/license) if the local file is
 * missing. If any image fails, <Photo> shows a plain block instead of a
 * broken image.
 * TODO(owner): replace with the cafe's own photos when available.
 */
const u = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=75`;

export const images = {
  hero: {
    src: "/img/home.webp",
    fallback: u("photo-1554118811-1e0d58224f24", 1200),
    alt: "A warm wooden table by the window with a fresh cup of coffee at Ngolo's",
  },
  story: {
    src: "/img/iced-latte.jpg",
    fallback: u("photo-1495474472287-4d71bcdd2085", 1200),
    alt: "An iced latte being poured over milk and ice",
  },
  gallery: [
    { src: "/img/momo-steamed.jpg", caption: "Steam momo", alt: "Steamed buff momo with tomato and sesame achar", ratio: "aspect-square", span: "md:col-span-4" },
    { src: "/img/jhol-momo.jpg", caption: "Jhol momo", alt: "Jhol momo in a bowl of spiced tomato broth", ratio: "aspect-square", span: "md:col-span-4" },
    { src: "/img/momo-chicken.jpg", caption: "Chicken momo", alt: "Steamed chicken momo with salad and red chutney", ratio: "aspect-square", span: "md:col-span-4" },
    { src: "/img/iced-latte.jpg", caption: "Iced latte", alt: "Iced latte being poured over cold milk", ratio: "aspect-[4/3]", span: "md:col-span-6" },
    { src: "/img/burger.jpg", caption: "Chicken burger", alt: "Chicken burger with crispy fries on a wooden table", ratio: "aspect-[4/3]", span: "md:col-span-6" },
    { src: "/img/pasta.jpg", caption: "White sauce pasta", alt: "Creamy white sauce pasta topped with herbs", ratio: "aspect-square", span: "md:col-span-4" },
    { src: "/img/brownie.jpg", caption: "Brownie with ice cream", alt: "Warm chocolate brownie with vanilla ice cream and caramel", ratio: "aspect-square", span: "md:col-span-4" },
    { src: "/img/hero-interior.jpg", caption: "The cafe", alt: "Wooden tables and plants inside Ngolo's", ratio: "aspect-square", span: "md:col-span-4" },
  ],
} as const;
