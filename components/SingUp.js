import React from "react";
import { useForm } from "react-hook-form";

export default function SingUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "all",
  });

  const pass = watch("password");
  const onSubmit = (data) => {
    console.log("run");
    console.log(data);
  };

  const RegisterForm = () => {
    return (
      <>
        <div class="container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                class="form-control"
                id="fullName"
                name="fullName"
                aria-describedby="NameHelp"
                placeholder="Full Name"
                {...register("fullName", {
                  required: "Full Name is Required",
                  minLength: {
                    value: 3,
                    message: "At leas 3 Cracters Required in Full Name",
                  },
                  maxLength: {
                    value: 20,
                    message: "Less Then 20 careaters are allow in full name",
                  },
                })}
              />
              <small id="NameHelp" class="form-text text-danger">
                {errors.fullName && <p>{errors.fullName.message}</p>}
              </small>
            </div>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                class="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                placeholder="Enter your Email"
                {...register("email", {
                  required: "valaid Email is Required",
                })}
              />
              <small id="emailHelp" class="form-text text-danger">
                {errors.email && <p>{errors.email.message}</p>}
              </small>
            </div>

            <div class="form-group">
              <label htmlFor="password">password</label>
              <input
                type="text"
                class="form-control"
                id="password"
                name="password"
                aria-describedby="passwordHelp"
                placeholder="Enter your password"
                {...register("password", {
                  required: true,
                  minLength: {
                    value: 3,
                    message: "At leas 8 Cracters Required in password",
                  },
                })}
              />
              <small id="passwordHelp" class="form-text text-danger">
                {errors.password && <p>{errors.password.message}</p>}
              </small>
            </div>

            <div class="form-group">
              <label htmlFor="confirmpassword">password</label>
              <input
                type="text"
                class="form-control"
                id="confirmpassword"
                name="confirmpassword"
                aria-describedby="confirmpasswordHelp"
                placeholder="Enter your password"
                {...register("confirmpassword", {
                  required: "plase Re-Enter your same password",
                  validate: (value) => {
                    return (
                      value === pass ||
                      "Your Confiram Password didn't match with password"
                    );
                  },
                })}
              />
              <small id="confirmpasswordHelp" class="form-text text-danger">
                {errors.confirmpassword && (
                  <p>{errors.confirmpassword.message}</p>
                )}
              </small>
            </div>
            <button type="submit" class="btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </>
    );
  };

  return (
    <>
      <div>{RegisterForm()}</div>
    </>
  );
}
