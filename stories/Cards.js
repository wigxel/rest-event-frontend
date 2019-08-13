import { storiesOf } from '@storybook/react';
import React from 'react';
import {
  VendorCard,
  VendorList,
  VendorListSkeleton,
  VendorCardSkeleton,
  ProjectCard,
  ServiceCard
} from '../src/components/cards';
import { VendorGroup, GridView } from '../src/components/layouts';
import { H3 } from '../src/components/typography/heading';
import { generateVendors, createVendor } from '../src/libs/mocks/vendors';
import { generateProjects } from '../src/libs/mocks/projects';
import { vendorCategory } from '../src/libs/mocks/categories';
import { Theme } from './styles/StyleComponents';
import cameraIcon from '../src/assets/svgs/camera-icon.svg';
import Stack from '../src/components/layouts/Stack';

const eoaData = createVendor({
  name: 'Joas Confectionaires',
  rating: 3,
  banner:
    'https://logos-download.com/wp-content/uploads/2018/01/NASA_logo_blue.png',
  logo:
    'https://logos-download.com/wp-content/uploads/2018/01/NASA_logo_blue.png'
});

storiesOf('Cards', module)
  .add('Vendor Card', () => (
    <Theme>
      <section>
        <H3>Single Vendor Card</H3>
        <VendorCard vendor={generateVendors()[0]} />
        <VendorList vendor={generateVendors()[0]} />

        <H3>Vendor Skeleton</H3>
        <VendorGroup grid>
          {generateVendors(3).map((vendor, index) => (
            <VendorCardSkeleton key={index} vendor={vendor} />
          ))}
        </VendorGroup>

        <VendorGroup list>
          <VendorListSkeleton vendor={generateVendors()[0]} />
        </VendorGroup>

        <H3>
          Vendor Card <b>(Vendor Group Grid)</b>
        </H3>
        <VendorGroup grid>
          <VendorCard vendor={eoaData} />
          {generateVendors(5).map((vendor, index) => (
            <VendorCard key={index} vendor={vendor} />
          ))}
        </VendorGroup>
        <H3>
          Vendor Card <b>(Vendor Group List)</b>
        </H3>

        <VendorGroup list>
          <VendorList vendor={eoaData} />
          {generateVendors(5).map((vendor, index) => (
            <VendorListSkeleton key={index} vendor={vendor} />
          ))}
        </VendorGroup>
      </section>
    </Theme>
  ))
  .add('Project Cards', () => (
    <Theme>
      <VendorGroup grid>
        <ProjectCard
          key={'b'}
          title="George weds Manny"
          category="Baby Dancing"
        />
        <ProjectCard key={'a'} title="Little Rico's" category="Kids" />
        {generateProjects(12).map((e, index) => (
          <ProjectCard.Skeleton key={index} {...e} />
        ))}
      </VendorGroup>
    </Theme>
  ));

const vendorAvatars = generateVendors(6).map(e => e.logo);
storiesOf('Cards', module).add('Service Card', () => (
  <Theme>
    <Stack>
      <section>
        <H3>Regular</H3>
        <GridView width={160}>
          {vendorCategory.map((cat, index) => (
            <ServiceCard
              key={index}
              image={cat.icon}
              vendors={vendorAvatars}
              checked={true}
              {...cat}
            />
          ))}
          <ServiceCard.Skeleton />
        </GridView>
      </section>
      <section>
        <H3>Large</H3>
        <GridView width={220}>
          {vendorCategory.map((cat, index) => (
            <ServiceCard
              key={index}
              checked={true}
              name={cat.name}
              image={cat.icon}
              vendors={vendorAvatars}
              isActive={index % 2 == 0}
              large
            />
          ))}
          <ServiceCard.Skeleton large isActive={false} />
        </GridView>
      </section>
    </Stack>
  </Theme>
));
