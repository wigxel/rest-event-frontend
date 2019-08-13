import { slugify } from '../../libs/helpers';

const getImage = name => require(`../../assets/images/${name}`);

export const createVendor = data => ({
  rating: 5,
  name: 'Diana\'s Buffet',
  banner: getImage('vendor_banner.png'),
  logo: getImage('vendor_logo.png'),
  isPremium: false,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo hic, dolore dolorem culpa modi iste consectetur, aliquam iusto, reiciendis qui totam nostrum et blanditiis omnis. Obcaecati deleniti pariatur maxime sequi ipsum reprehenderit ut laboriosam velit architecto, rerum, inventore sunt impedit modi itaque molestiae, iusto voluptate doloribus. Nostrum debitis cum id.',
  getUrl() {
    return `/vendor/${slugify(this.name || '404')}`;
  },
  ...data
});

export const generateVendors = (number = 10) => {
  return Array(number)
    .fill(0)
    .map((value, index) => createVendor({ id: index + 1 }));
};
