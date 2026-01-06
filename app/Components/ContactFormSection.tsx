// components/ContactFormSection.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { api } from '../apiBase/axios';
import { log } from 'console';
import { useState } from 'react';

export default function ContactFormSection() {

const [data,setdata] =  useState({})

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone_number: '',
      subject: '',
      description: '',
      
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().required('Full Name is required'),
      email: Yup.string().email('Invalid email address').required('Email Address is required'),
      phone_number: Yup.string()
        .matches(/^[0-9+\-\s()]+$/, 'Please enter a valid phone number')
        .required('Phone Number is required'),
      subject: Yup.string().trim().required('Subject is required'),
      description: Yup.string().trim().min(10, 'Message must be at least 10 characters').required('Message is required'),
    }),
    onSubmit: async(values, { resetForm  }) => {

      try{  

        const response = await api.post("http://localhost:4000/contact",values)
        
        setdata(response);
        console.log(data);
        
        
        if (response.data?.success) {
            Swal.fire({
              title: 'Thank You!',
              text: response.data.message,
              icon: 'success',
              confirmButtonText: 'Okay',
              confirmButtonColor: '#1f2937',
              background: '#fff',
              backdrop: `rgba(0,0,0,0.8)`,
            });

            resetForm();
          }
            
        }
      
        
      

      catch (data: any) {
        console.log(data);
        console.log(data.message);
        
        Swal.fire({
          title: 'Error',
          text:
            data.message,
          icon: 'error',
          confirmButtonColor: '#1f2937',
        });
        } 
    },
  });

  return (
    <section className="relative w-full py-20 md:py-32 bg-white overflow-hidden">
      {/* Subtle Light Elegant Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{
          backgroundImage: "url('https://png.pngtree.com/thumb_back/fw800/background/20251128/pngtree-pink-perfume-bottle-amidst-white-flowers-soft-light-dreamy-romantic-elegant-image_20656028.webp')",
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-7xl mx-auto px-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-wide">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
            <p className="text-sm text-gray-500 italic">
              Please share as much detail as possible so we can assist you better.
            </p>

            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.name}
                    className={`w-full px-6 py-4 border rounded-xl focus:outline-none focus:border-gray-900 transition bg-white/70 ${
                      formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.name}</p>
                  )}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className={`w-full px-6 py-4 border rounded-xl focus:outline-none focus:border-gray-900 transition bg-white/70 ${
                      formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <input
                  type="tel"
                  name="phone_number"
                  placeholder="Phone Number *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phone_number}
                  className={`w-full px-6 py-4 border rounded-xl focus:outline-none focus:border-gray-900 transition bg-white/70 ${
                    formik.touched.phone_number && formik.errors.phone_number ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formik.touched.phone_number && formik.errors.phone_number && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.phone_number}</p>
                )}
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject *"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.subject}
                  className={`w-full px-6 py-4 border rounded-xl focus:outline-none focus:border-gray-900 transition bg-white/70 ${
                    formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formik.touched.subject && formik.errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.subject}</p>
                )}
              </div>

              <div>
                <textarea
                  name="description"
                  placeholder="Message *"
                  rows={6}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.description}
                  className={`w-full px-6 py-4 border rounded-xl focus:outline-none focus:border-gray-900 transition bg-white/70 resize-none ${
                    formik.touched.description && formik.errors.description ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {formik.touched.description && formik.errors.description && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={formik.isSubmitting}
                className="px-10 py-4 bg-gray-900 text-white font-semibold text-lg rounded-xl hover:bg-gray-800 transition shadow-lg disabled:opacity-70"
              >
                {formik.isSubmitting ? 'Sending...' : 'Send Message'}
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Transparent Perfume Bottle */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative h-96 md:h-full min-h-[500px] flex items-center justify-center"
          >
           <Image
          src="https://static.vecteezy.com/system/resources/previews/070/649/024/non_2x/luxury-golden-perfume-bottle-with-ornate-design-isolated-on-transparent-background-png.png"
          alt="Luxury Perfume Bottle"
          width={600}
          height={800}
          className="object-contain drop-shadow-2xl"
        />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}