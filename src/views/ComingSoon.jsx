import React, { useState, useEffect } from 'react'
import useForm from 'react-hook-form';

import { H3, H4, P } from '../components/typography'
import { Button, Input } from '../components/forms';
import {
    Tab, Container, Stack
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

    
    return (
        <main className="px-4 pb-10 md:pb-0 md:-mt-24">
            <Container>
            <div className="flex text-center md:text-left flex-col md:flex-row py-5 min-h-screen items-center justify-center">
                <section className="flex flex-1 justify-center md:order-1">
                    <img className="flex-1 w-4/5 mb-10 sm:mb-0" src={landingImage} />
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
                        <P className="md:w-3/4">
                             Take this <a href={FORM_LINK} className="text-underline">  Short Survey</a> if you are an event professional, we need your input for before dropping the first features. 
                        </P>
                        <form>
                            <Stack>
                                <Input 
                                    name="email"
                                    className="w-2/3"
                                    ref={register({ required: true, pattern: emailRegex })}
                                    placeholder="E-mail Address" type="text" large/>
                                <Button primary className="md:ml-4">Notify Me on Launch</Button>
                            </Stack>
                        </form>
                    </Stack>
                </section>
            </div>
            </Container>
        </main>
    )
}

export default ComingSoon;