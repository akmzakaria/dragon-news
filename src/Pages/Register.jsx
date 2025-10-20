import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);

  const [nameError, setNameError] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    if (name.length < 5) {
      setNameError('Name must be at least 6 characters!');
      return;
    } else {
      setNameError('');
    }

    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
            navigate('/');
          })
          .catch((err) => {
            console.log(err);
            setUser(user);
          });
      })
      .catch(() => {
        // console.log(err.code);
        // console.log(err.message);
      });
  };

  return (
    <div className="flex justify-center min-h-screen items-center ">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
        <h2 className="font-semibold text-2xl text-center">Register an account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label">Name</label>
            <input name="name" type="name" className="input" placeholder="Name" />

            {/* nameError */}
            {nameError && <p className="text-error text-xs">{nameError}</p>}

            {/* photo_url  */}
            <label className="label">Photo URL</label>
            <input
              name="photo"
              type="photo-url"
              className="input"
              placeholder="Enter your photo URL"
            />

            {/* email  */}
            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" />

            {/* password */}
            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" />

            <button type="submit" className="btn btn-primary mt-4">
              Register
            </button>
            <p className="text-center pt-5">
              Already Have An Account?{' '}
              <Link className="text-secondary" to={'/auth/login'}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
