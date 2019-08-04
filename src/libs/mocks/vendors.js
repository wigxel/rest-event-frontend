const vendor = {
  rating: 5,
  name: 'Diana\'s Buffet',
  banner: '/images/vendor_banner.png',
  logo: '/images/vendor_logo.png',
  description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo hic, dolore dolorem culpa modi iste consectetur, aliquam iusto, reiciendis qui totam nostrum et blanditiis omnis. Obcaecati deleniti pariatur maxime sequi ipsum reprehenderit ut laboriosam velit architecto, rerum, inventore sunt impedit modi itaque molestiae, iusto voluptate doloribus. Nostrum debitis cum id.'
};

export const generateVendors = (number = 10) => {
  return Array(number)
    .fill(0)
    .map((value, index) => ({ ...vendor, id: index + 1 }));
};
