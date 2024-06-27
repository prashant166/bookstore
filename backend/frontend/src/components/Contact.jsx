
import React from 'react';
import { useForm } from 'react-hook-form';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); 
  };

  return (
    
    <div className="max-w-screen-xl mx-auto px-4 py-12 mt-16">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto space-y-4">
        {/* name */}
        <div className="flex flex-col">
          <label htmlFor="name" className="mb-1">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="px-3 py-2 border rounded-md outline-none"
            placeholder="Enter your name"
          />
          {errors.name && <span className="text-red-500">Name is required</span>}
        </div>

        {/* email */}
        <div className="flex flex-col">
          <label htmlFor="email" className="mb-1">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
            className="px-3 py-2 border rounded-md outline-none"
            placeholder="Enter your email"
          />
          {errors.email && <span className="text-red-500">Email is required</span>}
        </div>

        {/*message ka area*/}
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1">Your Message</label>
          <textarea
            id="message"
            {...register("message", { required: true })}
            className="px-3 py-2 border rounded-md outline-none"
            rows="5"
            placeholder="Write your message"
          ></textarea>
          {errors.message && <span className="text-red-500">Message is required</span>}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white rounded-md px-4 py-2 mt-4 duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
