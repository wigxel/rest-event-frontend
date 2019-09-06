import React from 'react'
import { Heading, H3, H4, P } from '../../../components/typography'
import { Button } from '../../../components/forms'
import { Container, Tab, Stack } from '../../../components/layouts'
import { Activity, FlatList } from '../../../components/lists'
import styled from 'styled-components';
import { color } from '../../../styles/helpers';

const Home = () => {
    return (
        <Container>
            <div className="flex py-5">
                <section className="flex-1 px-5">
                    <Stack>
                        <Heading>Overview</Heading>
                        <br/>
                        <InfoBox/>
                        <Heading>Bookings</Heading>
                        {Array(10).fill(2).map((e, index) => <FlatList.Item key={index} className="flex items-center border border-gray 
                            rounded-lg justify-between px-5 py-2">
                            <Tab className="flex items-center">
                                <img alt="clients avatar" 
                                    className="w-12 rounded-full mr-4 bg-gray-500 h-12 object-cover"/>
                                <H4>Mr. James Morphy</H4>
                                <P className="opacity-50">Catering</P>
                            </Tab>
                            <Button outline primary>ACCEPT</Button>
                        </FlatList.Item>)}
                    </Stack>
                </section>
                <section className="w-1/4 px-5">
                    <Stack>
                        <Heading>Recent Activity</Heading>
                        <Activity className="-mt-5" entries={[
                            'Dancing seriously', 
                            'Working around the moon', 
                            'dance a lot', 
                            'play a little'
                        ]} />
                    </Stack>
                </section>
            </div>
        </Container>
    )
}

const InfoBoxStyle = styled.div`
    border-color: ${color('whitesmoke')};

    * > span:last-of-type {
        opacity: .4;
    }

    > * + * {
        border-left: solid 1px ${color('whitesmoke')};
    }
`

const InfoBox = () => {
    const infos = [
        ['Ongoing', 2],
        ['Services', 2],
        ['Earnings', '50%'],
        ['Done', 2],
    ]
    
    return <InfoBoxStyle className="flex justify-around border border-gray rounded-lg p-4">
        {infos.map((e, index) => <H3 key={index} className="py-4 px-8">
            <Tab large>
                <span>{e[0]}</span> 
                <span>{e[1]}</span>
            </Tab>
        </H3>)}
    </InfoBoxStyle>
}

export default Home