import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email section */}
            <div className='mt-4 space-y-2'>
              <span>Email</span> <br />
              <input
                type="email"
                placeholder='Enter your Email'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("email", { required: true })}
              /> <br />
               {errors.email && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            {/* Password section */}
            <div className='mt-4 space-y-2'>
              <span>Password</span> <br />
              <input
                type="password"
                placeholder='Enter your password'
                className='w-80 px-3 py-1 border rounded-md outline-none'
                {...register("password", { required: true })}
              /> <br />
               {errors.password && <span className='text-sm text-red-500'>This field is required</span>}
            </div>
            <div className='flex justify-around mt-4'>
              <button className='bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200'>
                Login
              </button>
            </div>
          </form>
          <div className='flex justify-center mt-4'>
            <p>
              Not registered?{" "}
              <Link to="/signup" className='underline text-blue-500 cursor-pointer'>
                Sign Up
              </Link>{" "}
            </p>
          </div>
          {/* Close button for modal */}
          <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
