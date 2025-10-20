import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
  const [error, setError] = useState('');

  const location = useLocation();

  const { logIn } = use(AuthContext);

  const navigate = useNavigate();

  const handleLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    logIn(email, password)
      .then(() => {
        alert('Logged In Successfully!');
        // const user = res.user;
        // console.log(user);
        navigate(`${location.state ? location.state : '/'}`);
      })
      .catch((err) => {
        const errorCode = err.code;
        // const errorMessage = err.message;
        // alert(errorCode, errorMessage);
        setError(errorCode);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />

            {/* password */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button type="submit" className="btn btn-primary mt-4">
              Login
            </button>
            <p className="text-center pt-5">
              Dont't Have An Account?{' '}
              <Link className="text-secondary" to={'/auth/register'}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
