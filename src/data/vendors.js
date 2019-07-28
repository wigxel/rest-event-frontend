const vendor = {
    name: 'Diana\'s Buffet',
    banner: './images/vendor_banner.png',
    rating: 5,
    logo: './images/vendor_logo.png'
}

export const generateVendors = (number = 10) => {
    return Array(number).fill(0).map((value, index) => ({ ...vendor, id: index + 1}));
}