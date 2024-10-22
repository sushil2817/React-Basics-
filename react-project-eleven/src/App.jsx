import React from 'react'
import { useForm } from "react-hook-form";
import './App.css'

export default function App() {


  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = values => console.log(values);
  return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email</label>
      <input
        type="email"
        {...register("email", {
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}
        <br />
        <label>UserName</label>
      <input
        {...register("username", {
          validate: value => value !== "admin" || "Nice try!"
        })}
      />
      {errors.username && errors.username.message}
        <br />
      <button type="submit">Submit</button>
    </form>
    </div>
  )
}
