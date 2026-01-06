// app/login/page.tsx

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { api } from '../apiBase/axios';
import { useState } from 'react';

export default function SignInPage() {
  const [data, setdata] =  useState({})
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      try{
        const response = await api.post("users/login",values)
        setdata(response)
        console.log(response);
        const role = response.data.data.user.role
        console.log(role);

              

        
      

        console.log('Login submitted:', values);
        
        
        Swal.fire({
          title: 'Welcome Back!',
          text: response.data.message,
          icon: 'success',
          confirmButtonText: 'Continue',
          confirmButtonColor: '#1f2937',
          background: '#fff',
          timer: 3000,
          timerProgressBar: true,
        });
          

      resetForm();
      }
      catch(data:any){
        console.log(data.response.data.message);
        
      
        const message = data.response.data.message;
        console.log(message);

        if (message === "User does not exist"){
            Swal.fire({
              title: 'Email Not Found',
              text: data.response.data.message,
              icon: 'error',
              confirmButtonColor: '#dc2626',
            });
        }
        else if (message === "Invalid password"){
            Swal.fire({
              title: 'Incorrect Password',
              text: data.response.data.message,
              icon: 'error',
              confirmButtonColor: '#dc2626',
            });
        }  else{
            Swal.fire({
              title: 'Login Failed',
              text: 'Something went wrong. Please try again later.',
              icon: 'error',
              confirmButtonColor: '#dc2626',
            });
        } 
      }


      
     
    },
  });

  return (
    <div className="h-screen flex overflow-hidden">
      {/* Left Side - Form on White Background */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-lg space-y-8"
        >
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Welcome Back</h2>
            <p className="mt-3 text-gray-600 text-base md:text-lg">Sign in to continue your fragrance journey</p>
          </div>

          <form onSubmit={formik.handleSubmit} className="space-y-5">
            {/* Email Field */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:border-gray-900 transition text-base ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`w-full px-5 py-3.5 border rounded-xl focus:outline-none focus:border-gray-900 transition text-base ${
                  formik.touched.password && formik.errors.password
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.password && formik.errors.password && (
                <p className="text-red-500 text-sm mt-1">{formik.errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input type="checkbox" id="remember" className="h-4 w-4 text-gray-900 rounded" />
                <label htmlFor="remember" className="ml-3 text-sm text-gray-600">Remember me</label>
              </div>
              <Link href="#" className="text-sm text-gray-900 underline hover:text-gray-700">Forgot password?</Link>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={formik.isSubmitting}
              className="w-full py-3.5 cursor-pointer bg-gray-900 text-white font-semibold text-base md:text-lg rounded-xl hover:bg-gray-800 transition shadow-lg disabled:opacity-70"
            >
              {formik.isSubmitting ? 'Signing In...' : 'Sign In'}
            </motion.button>
          </form>

          <p className="text-center text-gray-600 text-sm md:text-base">
            Don't have an account?{' '}
            <Link href="/register" className="text-gray-900 font-semibold underline hover:text-gray-700">
              Create one
            </Link>
          </p>
        </motion.div>
      </div>

      {/* Right Side - Premium Image + Centered Text */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-black overflow-hidden">
        <Image
          src="https://thumbs.dreamstime.com/b/luxurious-black-perfume-bottle-gold-cap-dramatic-still-life-showcase-exquisite-fragrance-immerse-yourself-357744082.jpg"
          alt="Premium Luxury Perfume"

          fill   // ya container ke hisaab se adjust karein
          className="object-cover object-center"
        />

        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80" />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-12 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold tracking-widest">Reconnect with Luxury</h2>
          <p className="text-xl md:text-2xl text-gray-300 mt-6 font-light max-w-md">
            Step back into a world of timeless scents and unparalleled elegance.
          </p>
        </motion.div>
      </div>
    </div>
  );
}