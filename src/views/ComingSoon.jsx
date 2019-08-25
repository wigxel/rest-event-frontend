import React, { useState } from 'react'
import useForm from 'react-hook-form';
import { addSubscriber } from '../libs/firebase';

import { H4, P } from '../components/typography'
import { Button, Input } from '../components/forms';
import {
    Container, Stack 
} from '../components/layouts'
// import { log } from '../libs/helpers'
import landingImage from '../assets/svgs/landing-image.svg';
const FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSfo6WdM8Pi4yDq1Fjhd3PXaIm0Qc7Qrmx9vj09VddoXmCYDqA/viewform'


const Heading = (props) => (
    <h1 className="text-5xl mb-5" style={{lineHeight: '1', fontFamily: '"Dancing Script", cursive'}}>
       {props.children}
    </h1>
)

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


const ComingSoon = () => {
    const [subscribed, setSub] = useState({state: false, email: ''});
    const {register, setError, clearError, errors, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    })

    const onSubscribe = ({ email }) => {
        if(Object.keys(errors).length > 0) return;
        addSubscriber(email).then(() => {
            setSub({ state: true, email })
        }).catch(() => {
           setError('email', 'failed', 'We are unable to add your email, please try again later');
        })
    }
    
    return (
        <main className="px-4 pb-10 md:pb-0 lg:-mt-24">
            <Container>
            <div className="flex text-center md:text-left flex-col md:flex-row py-5 min-h-screen items-center justify-center">
                <section className="w-full flex flex-1 justify-center md:order-1">
                    <img className="flex-1 w-4/5 mb-10 sm:mb-0" 
                        alt="a lady planning with inspector beside" 
                        src={landingImage} />
                </section>
                <section className="flex-1">
                    <Stack large>
                        {subscribed.state || <>
                        <article>
                            <span className="text-xs mb-3 border border-gray px-2 py-1 rounded-lg inline-block">coming soon</span>
                            <Heading>We make event planning a breeze</Heading>
                            <H4>
                                With our easy-to-use collaborative event management software for everyone, event managment has never been easier. Get credible vendors, planners and more from one platform.
                                <br/>
                            </H4>
                        </article>
                        <H4 className="md:w-3/4">
                             Take this <a href={FORM_LINK} className="text-underline">Short Survey</a> if you are an event professional, we need your input before dropping the first features. 
                        </H4>
                         <form action="POST" onSubmit={handleSubmit(onSubscribe)}>
                            <Stack>
                                <Input
                                    name="email"
                                    className="w-full md:w-2/3"
                                    onChange={() => clearError('email')}
                                    ref={register({ required: true, pattern: emailRegex })}
                                    placeholder="yusuf.kelvin@somwhere.com" type="text" large/>
                                <Button disabled={errors.email} primary className="w-full md:w-auto lg:ml-4">Notify on Launch</Button>
                            </Stack>
                            <P small className="text-red-500">{errors.email && errors.email.type === 'failed' && errors.email.message }</P>
                        </form>
                        </>
                        }
                        {!subscribed.state ||<article>
                            <Heading>{'Thanks for subscribing'}</Heading>
                            <H4>
                                We will keep you updated via email address: <b>{subscribed.email}</b>
                            </H4>
                        </article>}
                    </Stack>
                </section>
            </div>
            </Container>
        </main>
    )
}

export default ComingSoon;