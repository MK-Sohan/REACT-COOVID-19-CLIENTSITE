import { React, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../Loading/Loading";

const Signup = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);

  // const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const password = data.password;
    await createUserWithEmailAndPassword(email, password);
    // await updateProfile({ displayName: name });

    reset();
  };
  useEffect(() => {
    if (user || guser) {
      navigate("/");
      toast("Signup Successfully ");
    }
  }, [user, guser]);

  let signInError;
  if (error || gerror) {
    signInError = (
      <p className="text-red-600 text-[18px] py-3">{error?.message}</p>
    );
  }
  if (loading || gloading) {
    return <Loading></Loading>;
  }

  return (
    <div className="mt-10 bg-slate-900 w-[100%] lg:w-[36%] mx-auto mb-20">
      <div class="flex flex-col  ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h2 className=" text-center text-4xl text-white mb-20">
            Register here
          </h2>

          <div class="info  lg:h-[300px]  lg:w-full">
            <input
              required
              class="fname"
              type="text"
              name="name"
              placeholder="Full name"
              {...register("name")}
            />
            <input
              required
              type="text"
              name="name"
              placeholder="Email"
              {...register("email")}
            />

            <input
              required
              type="password"
              name="name"
              placeholder="Password"
              className="text-white"
              {...register("password")}
            />
            {signInError}
            <p>
              <small className="text-white font-bold text-sm">
                Already have an Account ?{" "}
                <Link className="text-green-700 font-bold" to="/login">
                  Log in
                </Link>
              </small>
            </p>
            <button className="button-signup" type="submit" href="/">
              Submit
            </button>
          </div>
        </form>
        <div className="divider text-white">OR</div>
        <button
          onClick={() => signInWithGoogle()}
          className="transition ease-in-out  mx-auto mb-10 w-[80%] lg:w-[14vw] btn btn-outline text-center border-none  bg-green-500 hover:bg-white text-white hover:border-0"
        >
          {/* <BsGoogle></BsGoogle> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="24"
            height="25"
            preserveAspectRatio="xMidYMid"
            viewBox="0 0 256 262"
            className="mr-3 rounded-md bg-white "
          >
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            />
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            />
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            />
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
