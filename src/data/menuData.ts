export interface MenuItem {
  name: string;
  price: string;
  description?: string;
  isPopular?: boolean;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menuData: MenuCategory[] = [
  {
    title: "Fruity Breakfast",
    items: [
      { name: "Berry Crepes", price: "$8.50" },
      { name: "Multi-Berry Crepes", price: "$8.50" },
      { name: "Banana Coconut Crepes", price: "$8.50" },
      { name: "Banana Nut Caramel Crepes", price: "$8.50" },
      { name: "Fruit French Toast", price: "$8.75" },
      { name: "Fruity Waffle", price: "$8.75" },
      { name: "Fruit Pancakes", price: "$8.75" },
      { name: "Banana Nut Waffle", price: "$8.75" },
      { name: "Strawberry Stuffed French Toast", price: "$8.75" },
      { name: "Banana Stuffed French Toast", price: "$9.00" },
    ],
  },
  {
    title: "Breakfast Specials",
    items: [
      { name: "Biscuit Supreme", price: "$11.75" },
      { name: "Biscuit and Gravy with Eggs", price: "$7.50" },
      { name: "Arvin's Green Biscuit", price: "$8.00" },
      { name: "Breakfast Sandwich", price: "$6.00" },
      { name: "Bacon Burrito Supreme", price: "$13.00", isPopular: true },
      { name: "Breakfast Burrito", price: "$10.00" },
      { name: "Huevos Rancheros", price: "$10.75" },
      { name: "Hobo Breakfast", price: "$11.00", isPopular: true },
      { name: "Supreme Hobo Breakfast", price: "$13.50" },
      { name: "Chicken Fried Steak Skillet", price: "$12.00" },
    ],
  },
  {
    title: "Omelets",
    items: [
      { name: "Steak Omelet", price: "$14.00" },
      { name: "Meat Lover's Omelet", price: "$13.00", isPopular: true },
      { name: "Bacon Avocado Omelet", price: "$11.50" },
      { name: "Denver Omelet", price: "$11.50" },
      { name: "Garden Omelet", price: "$11.50" },
      { name: "Green Chili Omelet", price: "$12.00" },
      { name: "Western Omelet", price: "$11.50" },
      { name: "Ham and Cheese Omelet", price: "$11.00" },
    ],
  },
  {
    title: "Pancakes, Waffles & French Toast",
    items: [
      { name: "Belgian Waffle", price: "$7.50" },
      { name: "Belgian Waffle Special", price: "$9.25" },
      { name: "French Toast", price: "$4.00" },
      { name: "French Toast Special", price: "$9.50" },
      { name: "Endless Pancakes", price: "$6.00", isPopular: true },
      { name: "Pancake Special", price: "$7.50" },
    ],
  },
  {
    title: "Meat & Eggs",
    items: [
      { name: "8 oz. Rib-Eye Steak and Eggs", price: "$16.00" },
      { name: "Chicken Fried Steak and Eggs", price: "$12.00", isPopular: true },
      { name: "16 oz. Ribeye and Eggs", price: "$22.00" },
      { name: "Pork Steak and Eggs", price: "$12.00" },
      { name: "6 oz. Sirloin and Eggs", price: "$12.00" },
      { name: "Pit Ham Steak and Eggs", price: "$11.00" },
      { name: "Bacon and Eggs", price: "$11.00" },
      { name: "Arvin's Patty Sausages and Eggs", price: "$7.00" },
    ],
  },
  {
    title: "Burgers & Sandwiches",
    items: [
      { name: "Mile High Burger", price: "$9.50", isPopular: true },
      { name: "Blue Bacon Burger", price: "$9.50" },
      { name: "Ranch Burger", price: "$9.50" },
      { name: "Mushroom Swiss Burger", price: "$9.00" },
      { name: "Bacon Onion Cheddar Burger", price: "$9.25" },
      { name: "Classic Hamburger", price: "$5.50" },
      { name: "Chicken Fried Steak Sandwich", price: "$9.75" },
      { name: "French Dip", price: "$7.25" },
      { name: "Philly Steak Sandwich", price: "$7.75" },
      { name: "Club Sandwich", price: "$7.75" },
    ],
  },
  {
    title: "Kids & Seniors",
    items: [
      { name: "Junior French Toast", price: "$6.00" },
      { name: "kIds Mouse Cake", price: "$6.00" },
      { name: "Kids Mac and Cheese Lunch", price: "$6.00" },
      { name: "Junior Burger Lunch", price: "$6.00" },
      { name: "Lite Breakfast", price: "$5.50" },
      { name: "Senior Chicken fried Steak", price: "$9.50" },
    ],
  },
  {
    title: "Sides & Beverages",
    items: [
      { name: "Cinnamon Roll", price: "$2.60", isPopular: true },
      { name: "Biscuit and Gravy", price: "$5.00" },
      { name: "French Fries", price: "$3.75" },
      { name: "Onion Rings", price: "$4.50" },
      { name: "Soft Drink", price: "$2.49" },
      { name: "Coffee", price: "$2.49" },
      { name: "Milk", price: "$2.50" },
      { name: "Fresh Juice", price: "$2.75" },
    ],
  },
];
