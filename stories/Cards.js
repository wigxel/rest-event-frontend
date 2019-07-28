import { storiesOf } from '@storybook/react';
import React from 'react';
import { VendorCard, VendorCardSkeleton } from '../src/components/cards';
import { VendorGroup } from '../src/components/layouts';
import { H3 } from '../src/components/typography/heading';
import { generateVendors } from '../src/libs/mocks/vendors';
import { Theme } from './styles/StyleComponents';

storiesOf('Cards', module).add('Vendor Card', () => (
  <Theme>
    <section>
      <H3>Single Vendor Card</H3>
      <VendorCard vendor={generateVendors()[0]} />

      <H3>Vendor Skeleton</H3>
      <VendorGroup grid>
        {generateVendors(3).map((vendor, index) => (
          <VendorCardSkeleton key={index} vendor={vendor} />
        ))}
      </VendorGroup>

      <H3>
        Vendor Card <b>(Vendor Group Grid)</b>
      </H3>
      <VendorGroup grid>
        <VendorCard
          vendor={{
            name: 'Joas Confectionaires',
            rating: 3,
            banner:
              'https://logos-download.com/wp-content/uploads/2018/01/NASA_logo_blue.png',
            logo:
              'https://logos-download.com/wp-content/uploads/2018/01/NASA_logo_blue.png'
          }}
        />
        {generateVendors(5).map((vendor, index) => (
          <VendorCard key={index} vendor={vendor} />
        ))}
      </VendorGroup>
    </section>
  </Theme>
));
