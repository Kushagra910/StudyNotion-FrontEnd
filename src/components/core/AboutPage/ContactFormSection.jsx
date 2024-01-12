import React from 'react'
import ContactUsForm from '../../contactPage/ContactUsForm'


const ContactFormSection = () => {
  return (
    <div className='mx-auto font-inter'>
      <h1 className='text-richblack-5 text-center text-4xl font-semibold tracking-tight'>Get in Touch</h1>
      <p className='text-richblack-300 font-medium text-base self-stretch text-center mt-3'>We&apos;d love to here for you, Please fill out this form.</p>
      <div className='mt-12  mx-auto'>
        <ContactUsForm/>
      </div>
    </div>
  )
}

export default ContactFormSection