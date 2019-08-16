import React, { Fragment, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import t from 'prop-types';

import { H3, H4, P } from '../../../components/typography';
import {
  Sidebar,
  Stack, 
  ThreeColumns,
  GridView,
  Tab
} from '../../../components/layouts';
import routes from './routes';
import { color } from '../../../styles/helpers';
import { Button } from '../../../components/forms';
import { Card, ServiceCard } from '../../../components/cards';
import { vendorCategory } from '../../../libs/mocks/categories';
import { FlatList, VendorAccord } from '../../../components/lists';

const Label = styled(H4)`
  color: ${color('greylight')};
`;
const PICK = 'PICK';
const CHANGE = 'CHANGE';

const Planner = () => {
  const [category, setCategory] = useState({ name: 'None*' });
  const [action, setAction] = useState(null);
  const actionIs = payload => payload === action;
  const fireAction = (payload, vendor) => () => {
    setAction(payload);
    setCategory(vendor);
  };

  const prices = [
    { name: 'Music', price: 10000 },
    { name: 'Catering', price: 8000 },
    { name: 'Photography', price: 6000, quantity: 3 },
    { name: '3 velvet card - Bakery', price: 6000, quantity: 2 }
  ];

  return (
    <Fragment>
      <ThreeColumns>
        <Sidebar>
          <Stack className="px-5">
            <Link
              to={routes.events}
              className="py-5"
              style={{ color: '#878787' }}
            >
              <span className="back-arrow" />
              projects
            </Link>
            <article>
              <Label>Title</Label>
              <H3>Junior's Party</H3>
            </article>
            <article>
              <Label>Date</Label>
              <span className="opacity-50">Created 18 August, 2018</span>
              <H4>18th Semptember, 2018</H4>
            </article>
            <div>
              <Label>Theme</Label>
            </div>
            <article>
              <Label>Venue</Label>
              <H4>No. 28 Khana Street D/Line, Port-Harcourt.</H4>
            </article>

          </Stack>
        </Sidebar>
        <Stack>
          <hgroup>
            <H3 className="font-bold">Manage Vendors</H3>
            <P className="italic">
              click a card to pick vendors for that category
            </P>
          </hgroup>
          <GridView width={220}>
            {vendorCategory.map((e, index) => (
              <ServiceCard
                key={index}
                {...e}
                large
                isActive={e === category}
                image={e.icon}
                onClick={fireAction(PICK, e)}
              />
            ))}
          </GridView>

          <Button primary className="mb-8">
            REQUEST VENDORS
          </Button>

          <Card>
            <Card.Header>
                <H4 className="font-bold">Cost Overview</H4>
                <P className="italic">Cost for all vendors.</P>
            </Card.Header>
            <table className="w-full">
              <tr className="bg-gray">
                <th className="text-left">Service</th>
                <th width="30%" className="text-right">Price(&#x20A6;)</th>
              </tr>
              {prices.map((e, index)=> <tr key={index}>
                <td className="text-left py-3 border-b border-gray">{e.name}</td>
                <td className="text-right py-3 border-b border-gray">{e.price}</td>
                </tr>
              )}
            </table>
            <footer className="pt-5">
              <Tab>
                <Button primary>
                  ACCEPT
                </Button>
              </Tab>
            </footer>
          </Card>
        </Stack>
        {actionIs(PICK) && 
        <VendorFinder 
          category={category} 
          fireAction={action => fireAction(action)} />
        }
      </ThreeColumns>
    </Fragment>
  );
};

const VendorFinder = (props) => {
  return (
    <section className="sticky py-2 border-l border-gray" style={{ top: 60+'px', height: 'calc(100vh - 65px)', overflowY: 'scroll' }}>
      <Stack> 
        <header className="px-2">
          <hgroup>
            <H4>
              {props.category.name}
              <span className="flex-1 float-right cursor-pointer" 
                onClick={props.fireAction(CHANGE)}>
                X
              </span>
            </H4>
            <P small className="italic">
              Select a vendor by clicking
            </P>
          </hgroup>
        </header>
        <FlatList>
          {Array(15)
            .fill(3)
            .map((e, index) => (
              <VendorAccord key={index}/>
            ))}
        </FlatList>
      </Stack>
    </section>
  );
};

VendorFinder.propTypes = {
  fireAction: t.func.isRequired,
  category: t.shape({
    name: t.string.isRequired,
  })
}

export default Planner;
