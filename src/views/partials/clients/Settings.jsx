import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import routes from './routes'
// import { log } from '../../../libs/helpers';
import { H4, P } from '../../../components/typography';
import { Card } from '../../../components/cards';
import { FlatList } from '../../../components/lists';
import { Input, IconButton } from '../../../components/forms';
import {
    Stack,
    Cluster,
    Sidebar,
    GridView,
    TwoColumns,
} from '../../../components/layouts';

const UpdateButton = (props) => <IconButton {...props} icon="add" color={'#fff'} primary>UPDATE</IconButton>

const Header = props => (<Card.Header>
    <H4>{props.children}</H4>
</Card.Header>)

const General = () => {
    return <GridView width={'400px'}>
        <Card className="flex-1">
            <Header>Basic Information</Header>
            <Stack>
                <Input type="text" fullwidth placeholder="CAC Number" disabled/>
                <Input type="text" fullwidth placeholder="Business Name" />
                <Input type="text" fullwidth placeholder="City" />
                <Input type="text" fullwidth placeholder="Rivers State" />
                <UpdateButton />
            </Stack>
        </Card>

        <Card className="flex-1">
            <Header>Business Information</Header>
            <Stack>
                <div className="mb-3">
                    <small>E-mail Address</small>
                    <P><b>Joseph.owonwo@gmail.com</b></P>
                </div>
                <Input type="text" fullwidth placeholder="First Name"/>
                <Input type="text" fullwidth placeholder="Last Name"/>
                <Input type="text" fullwidth placeholder="Password"/>
                <UpdateButton />
            </Stack>
        </Card>
        <Card outlineDanger className="flex-1">
            <P>I understand that am about to delete all data associated with this account.</P>
            <IconButton className="mt-5" icon="close" 
                color="#fff" danger>DELETE</IconButton>
        </Card>
    </GridView>
}

const Settings = () => {
    return (
        <TwoColumns>
            <Sidebar>
                <FlatList>
                    <FlatList.Link to={routes.general}>General</FlatList.Link>
                    <FlatList.Link to={routes.projects}>Security</FlatList.Link>
                    <FlatList.Link to={routes.projects}>Billing & Subscription</FlatList.Link>
                </FlatList>
            </Sidebar>
            <Cluster.Small>
                <Route exact path={routes.general} component={General}/>
                <Route path={'/somewhere'} component={General}/>
                <Route exact path={routes.settings} 
                    component={() => <Redirect to={routes.general} />}/>
            </Cluster.Small>
        </TwoColumns>
    )
}

export default Settings;