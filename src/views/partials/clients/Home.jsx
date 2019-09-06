import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../../components/cards';
import { Button } from '../../../components/forms'
import { Activity } from '../../../components/lists';
import { Heading, H1, H3, H4, P } from '../../../components/typography'
import { GridView, Stack, Tab } from '../../../components/layouts';
import routes from './routes'

const headingC = 'mt-5 text-purple text-right'
const infoC = 'flex flex-col justify-between'


const activities = [
  'Received payment from client `ejowo`.',
  'A customer needs this plan `photos/hour`.',
  'Thinking', 
  'A customer needs this plan `2PH/hour`.',
  'Serving client Ejowo',
  'Welcome John'
]

export default function Home() {
  return (
    <>
    <Tab className="flex mt-5 mx-10">
        <Stack large={true} className="flex-1">
          <Stack>
            <Heading>Overview</Heading>
            <GridView width={250}>
              <Card className={infoC}>
                <H3>Events</H3>
                {/* <H2 className={headingC}>2</H2> */}
                <Link to={routes.createEvent}>
                  <Button primary outline fullwidth>
                    <div className="text-center">
                      Create Event
                    </div>
                  </Button>
                </Link>
              </Card>
              <Card className={infoC}>
                <H3>Completed</H3>
                <H1 className={headingC}>0</H1>
              </Card>
              <Card className={infoC}> 
                <H3>Messages</H3>
                <H1 className={headingC}>12</H1>
              </Card>
            </GridView>
          </Stack>
          
          <Stack>
            <Heading>What&apos;s Trending?</Heading>
            <GridView width={250}>
              {Array(4).fill(0).map((i, index) => <Card key={index}>
                <H4 className="font-bold mb-4">Surprise Brook</H4>
                <P><i>
                  Looking to surprise someone today? Give someone special a good surprise by booking 
                  a surprise vendor today
                </i></P>
                <Button primary fullwidth className="mt-10">BOOK</Button>
              </Card>)}
            </GridView>
          </Stack>
        </Stack>

        <Stack className="w-1/4">
          <Heading>Activity Log</Heading>
          <Activity hoverable entries={activities} render={entry => (
            <>
              <div className="text-sm">{entry}</div> 
              <small className="opacity-50">2 seconds ago</small>
            </>
          )
          }/>
        </Stack>
    </Tab>
      </>

  );
}
