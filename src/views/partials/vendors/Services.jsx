import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form';
import _ from 'lodash';

import {
    TwoColumns,
    Container,
    Stack,
    Cluster,
    GridView,
} from '../../../components/layouts'

import { Button, Input } from '../../../components/forms'
import { log } from '../../../libs/helpers'
import { Modal } from '../../../components/cards'
import { H3, H4, P } from '../../../components/typography'
import { FlatList } from '../../../components/lists'
import categories from '../../../libs/mocks/categories'
import CurrencyInput from '../../../components/forms/CurrencyInput'
import { naira } from '../../../libs/numbers/currency';


const Plan = (props) => {
    return (
        <div className="border-2 border-gray rounded-lg">
            <Cluster.Small>
                <div className="flex flex-col justify-between" style={{minHeight: 200}}>
                    <div className="text-center mb-5 text-2xl">{props.name}</div>
                    <Stack>
                        <div className="text-primary text-center font-bold">{naira(props.price)}</div>
                        <Button primary fullwidth onClick={props.onEdit}>Edit</Button>
                    </Stack>
                </div>
            </Cluster.Small>
        </div>
    );
}

const CreatePlanModal = (props) => {
    const isEditing = () => _.has(props, 'form') && props.form !== null;
    const { register, handleSubmit } = useForm({ 
        defaultValues: {
            name: '',
            price: 1000,
        }
    })
    const [price, setPrice] = useState(0.0);
    const submit = (form) => {
        props.onSubmit({...form, price: parseFloat(price)}); // eslint-disable-line
    }

    return (
        <Modal {...props}>
            <Stack>
                <hgroup>
                    <H3>{!isEditing() ? 'Create a Plan' : 'Edit Plan'}</H3>
                    <P>Fill the form to create a plan.</P>
                </hgroup>
                <Input type="text"
                    name="name"
                    ref={register({ required: true })}
                    placeholder="Plan Name"
                    fullwidth large
                        />
                <CurrencyInput 
                    name="price" 
                    onChange={({ target }) => setPrice(target.value)} 
                    large fullwidth />

                <Button primary onClick={handleSubmit(submit)}>
                    Create
                </Button>
            </Stack>
        </Modal>
    )
}
CreatePlanModal.defaultProps = {
    form: null,
}
const AddServiceModal = (props) => {
    return (
        <Modal 
            {...props}>
            <Stack>
                <hgroup>
                    <H3>Add Services</H3>
                    <P>Pick a plan that fits you service.</P>
                </hgroup>

                <Input type="text" placeholder="Enter name here" fullwidth/>
                <FlatList>
                    {categories.map((e, i) => 
                        <FlatList.Item key={i}> - {e.name}</FlatList.Item>)}
                </FlatList>
                <div className="flex justify-end">
                    <Button primary onClick={props.onSubmit({ done: true })}>Done</Button>
                </div>
            </Stack>
        </Modal>
    )
}

const Services = () => {
    const [state, setState] = useState({ modal: false, form: null, createModal: false });
    const [plans, setPlans] = useState([
        {id: 23, name: 'Landing Photograhpy', price: 100000 },
        {id: 12, name: ' Potrait', price: 100000 },
    ]);

    useEffect(() => {
        // log(plans, 'The Plans');
        log(state, 'The State');
    })

    return (
        <Stack>
            <div>
                <CreatePlanModal
                    form={state.form}
                    size="sm" show={state.createModal} 
                    onClose={() => setState({ createModal: false  }) }
                    onSubmit={formData => {
                        setState({ ...state, createModal: false });
                        if (log(formData.id, 'the form id')) { //creating
                            log('creating something new')
                            setPlans([...plans, formData]);
                        } else { //updating
                            log('updating something')
                            const level = plans.map(e => 
                                e.id === formData.id ? formData : e);
                            setPlans(level)
                        }
                    }}/>
                <AddServiceModal size="sm" show={state.modal} 
                    onClose={() => setState({ modal: false  }) }
                    onSubmit={() => {}} />
            </div>
            <Container>
                <Cluster vertical>
                <div className="border-gray-200 border rounded-lg">
                    <TwoColumns>
                        <aside>
                            <Cluster.Small>
                                <Stack>
                                    <H4 className="text-primary">Services</H4>
                                    <div className="-mx-4">
                                        <FlatList>
                                            {categories.map((e, i) => 
                                                <FlatList.Item key={i}>{e.name}</FlatList.Item>)}
                                        </FlatList>
                                    </div>
                                    <Button fullwidth outline primary
                                        onClick={() => setState({ modal: true })}>
                                        Add Service
                                    </Button>
                                </Stack>
                            </Cluster.Small>
                        </aside>
                        <section className="border-l border-gray">
                            <Cluster.Small>
                                <Stack>
                                    <div className="flex justify-between items-start">
                                        <hgroup>
                                            <H4 className="text-primary">All Plans</H4>
                                            <P>Add/manage services and cost.</P>
                                        </hgroup>
                                        <Button primary small outline onClick={() => setState({ createModal: true })}>
                                            Create Plan 
                                        </Button>
                                    </div>
                                    <GridView width={'220'}>
                                        {plans.map((prop, i) => 
                                            <Plan 
                                                key={i} {...prop} 
                                                onEdit={() => {
                                                    setState({ ...state, createModal: true, form: prop })
                                                }} />)}
                                    </GridView>
                                </Stack>
                            </Cluster.Small>
                        </section>
                    </TwoColumns>
                </div>
                </Cluster>
            </Container>
        </Stack>
    )
}

export default Services