import SignUpForm from '@/components/forms/SignUpForm'
import React from 'react'

const Signup = () => {
  return (
    <section className="font-verdana">
        <div className="pt-28 pb-16 px-8 lg:py-32 w-full flex flex-col justify-center">
            <div className="flex flex-col justify-center w-full lg:w-[90%] mx-auto">
                <h3 className="text-[32px] mb-8 font-neulis font-semibold">
                    Inscription
                </h3>

                <SignUpForm />
            </div>
        </div>
    </section>
  )
}

export default Signup