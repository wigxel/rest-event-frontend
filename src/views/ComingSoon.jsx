import React, { useEffect } from 'react'
import useForm from 'react-hook-form';

import { H4, P } from '../components/typography'
import { Button, Input } from '../components/forms';
import {
    Container, Stack
} from '../components/layouts'
import { log } from '../libs/helpers'
import landingImage from '../assets/svgs/landing-image.svg';
const FORM_LINK = 'https://docs.google.com/forms/d/e/1FAIpQLSfo6WdM8Pi4yDq1Fjhd3PXaIm0Qc7Qrmx9vj09VddoXmCYDqA/viewform'


const Heading = () => (
    <h1 className="text-5xl mb-5" style={{lineHeight: '1', fontFamily: '"Dancing Script", cursive'}}>
       We make event planning a <i>breeze</i>
    </h1>
)

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const ComingSoon = () => {
    const {register, errors, handleSubmit } = useForm({
        defaultValues: {
            email: ''
        }
    })

    useEffect(() => {
        log(errors);
    })

    const onSubscribe = () => {
        log(errors);
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
                        <article>
                            <span className="text-xs mb-3 border border-gray px-2 py-1 rounded-lg inline-block">coming soon</span>
                            <Heading />
                            <H4>
                                With our easy-to-use collaborative event management software for everyone, event managment has never been easey. Get credible vendors and planners from one platform.
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
                                    ref={register({ required: true, pattern: emailRegex })}
                                    placeholder="yusuf.kelvin@somwhere.com" type="text" large/>
                                <Button disabled={errors.email} primary className="w-full md:w-auto lg:ml-4">Notify on Launch</Button>
                            </Stack>
                            {errors.email && <P small className="text-red-500">Please provide a valid E-mail address.</P>}
                        </form>
                    </Stack>
                </section>
            </div>
            </Container>
        </main>
    )
}

export default ComingSoon;