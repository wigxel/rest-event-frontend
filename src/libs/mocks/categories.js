const getIcon = iconName => require(`../../assets/svgs/${iconName}`);

const categories = [
  { name: 'Party' },
  { name: 'Weddings' },
  { name: 'Shows' },
  { name: 'Ceremonials' }
];

export const vendorCategory = [
  { name: 'Bakery', icon: getIcon('bakery-icon.svg') },
  { name: 'Disc Jocky', icon: getIcon('dj-icon.svg') },
  { name: 'Catering', icon: getIcon('catering-icon.svg') },
  { name: 'Photography', icon: getIcon('camera-icon.svg') }
];

export default categories;
