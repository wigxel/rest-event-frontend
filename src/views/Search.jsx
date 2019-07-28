import React, { useState } from 'react';
import { Checkbox, Input, IconInput, RadioInput } from '../components/forms';
import { VendorGroup } from '../components/layouts';
import { H3, H4, P } from '../components/typography';
import Footer from '../components/Footer';
import categories from '../libs/mocks/categories';
import InputRange from 'react-input-range';
import { VendorCard, VendorCardSkeleton } from '../components/cards';
import { generateVendors } from '../libs/mocks/vendors';
import { log, onEnter } from '../libs/helpers';

const Search = props => {
  const searchQuery = props.history.location.state.value || '';

  const count = 7;
  const [quality, setQuality] = useState({ value: 4 });
  const [range, setRange] = useState({ min: 1000, max: 500000 });
  const makeSearch = evt => log(evt.target.value, 'searching');

  return (
    <>
      <main className="min-h-screen px-10">
        <section className="flex tab">
          <aside className="flex-1">
            <H3>Filter</H3>
            <div className="mt-5 stack">
              <section>
                <H4>Type</H4>
                <div>
                  {categories.map((e, i) => (
                    <div key={i}>
                      <Checkbox /> {e.name}
                    </div>
                  ))}
                </div>
              </section>
              <section>
                <H4>Quality</H4>
                <div className="pt-5">
                  <InputRange
                    minValue={1}
                    maxValue={5}
                    value={quality.value}
                    formatLabel={value => `${value} star`}
                    onChange={value => setQuality({ value })}
                  />
                </div>
              </section>
              <section>
                <H4>Price Range</H4>
                <P className="text-primary font-bold">
                  {`₦${range.min}`} - {`₦${range.max}`}
                </P>
                <div className="pt-5">
                  <InputRange
                    minValue={1000}
                    maxValue={1000000}
                    value={range}
                    formatLabel={() => ''}
                    onChange={value => setRange({ ...value })}
                  />
                </div>
              </section>
              <section>
                <H4>Location</H4>
                <Input type="text" fullwidth placeholder="Add Location" />
                <section>
                  <div>
                    <RadioInput name="city" /> Port-Harcourt
                  </div>
                  <div>
                    <RadioInput name="city" /> Lagos
                  </div>
                </section>
              </section>
            </div>
          </aside>
          <section className="w-4/5">
            <IconInput
              icon="search"
              type="text"
              placeholder="Search for Items"
              defaultValue={searchQuery}
              onKeyUp={onEnter(makeSearch)}
              fullwidth
              large
            />
            <section className="flex justify-between items-end mb-5">
              <H3>
                Results for <b>Category</b>
              </H3>
              <H4> Vendors found - {count} </H4>
            </section>
            <VendorGroup grid>
              {generateVendors(count).map(vendor => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
              <VendorCardSkeleton />
            </VendorGroup>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Search;
