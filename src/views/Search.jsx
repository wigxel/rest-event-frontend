import React, { useState } from 'react';
import { Checkbox, Input, IconInput, RadioInput } from '../components/forms';
import { Container } from '../components/layouts';
import { H3, H4, P } from '../components/typography';
import { log } from '../libs/helpers';
import Footer from '../components/Footer';
import categories from '../libs/mocks/categories';
import InputRange from 'react-input-range';

const Search = props => {
  let searchQuery = props.history.location.state.params.value;
  const count = 30;
  const [quality, setQuality] = useState({ value: 4 });
  const [range, setRange] = useState({ min: 1000, max: 500000 });

  return (
    <>
      <main className="min-h-screen">
        <Container>
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
                type="search"
                placeholder="Search for Items"
                defaultValue={searchQuery}
                fullwidth
                large
              />
              <section className="flex justify-between items-end">
                <H3>
                  Results for <b>Category</b>
                </H3>
                <H4> Vendors found - {count} </H4>
              </section>
            </section>
          </section>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default Search;
