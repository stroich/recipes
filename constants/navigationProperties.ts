const GOODS_DATA = [
  { name: 'овощи', slug: 'vegetables' },
  { name: 'рыба', slug: 'fish' },
  { name: 'курица', slug: 'chicken' },
  { name: 'субпродукты', slug: 'by-products' },
  { name: 'морепродукты', slug: 'seafood' },
  { name: 'яйца', slug: 'eggs' },
  { name: 'индейка', slug: 'turkey' },
  { name: 'творог', slug: 'cottage-cheese' },
];
const TYPE_DATA = [
  { name: 'салат', slug: 'salad' },
  { name: 'напиток', slug: 'beverage' },
  { name: 'суп', slug: 'soup' },
  { name: 'десерт', slug: 'dessert' },
  { name: 'гарнир', slug: 'side-dish' },
  { name: 'выпечка', slug: 'baking' },
];

const WISHES_DATA = [
  { name: 'завтрак', slug: 'breakfast' },
  { name: 'с собой', slug: 'to-go' },
  { name: 'без заморочек', slug: 'easy' },
  { name: 'перекус', slug: 'snack' },
  { name: 'вегетарианское', slug: 'vegetarian' },
  { name: 'без сахара', slug: 'sugar-free' },
];

export const CATEGORIES = [
  {
    title: 'По продуктам',
    data: GOODS_DATA,
  },
  {
    title: 'По виду блюда',
    data: TYPE_DATA,
  },
  {
    title: 'Особые пожелания',
    data: WISHES_DATA,
  },
];
