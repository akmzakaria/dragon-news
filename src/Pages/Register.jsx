import React, { use, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import Alert from '../Components/Alert'

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext)

  const [nameError, setNameError] = useState('')
  const [alertMsg, setAlertMsg] = useState('')

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value

    if (name.length < 5) {
      setNameError('Name must be at least 6 characters!')
      return
    } else {
      setNameError('')
    }

    const photo = e.target.photo.value
    const email = e.target.email.value
    const password = e.target.password.value

    createUser(email, password)
      .then((res) => {
        const user = res.user
        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo })
            setAlertMsg('Registered Successfully!')
            setTimeout(() => {
              setAlertMsg('')
              navigate('/')
            }, 1500)
          })
          .catch(() => {
            setUser(user)
          })
      })
      .catch(() => {
        // console.log(err.code);
      })
  }

  return (
    <div className="flex justify-center min-h-screen items-center px-3 md:px-0">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 md:py-5">
        {alertMsg && <Alert type="success" message={alertMsg} onClose={() => setAlertMsg('')} />}
        <h2 className="font-semibold text-xl md:text-2xl text-center px-4">Register an account</h2>
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* name  */}
            <label className="label text-xs md:text-sm">Name</label>
            <input
              name="name"
              type="name"
              className="input input-bordered text-sm"
              placeholder="Name"
            />

            {/* nameError */}
            {nameError && <p className="text-error text-xs">{nameError}</p>}

            {/* photo_url  */}
            <label className="label text-xs md:text-sm">Photo URL</label>
            <input
              name="photo"
              type="photo-url"
              className="input input-bordered text-sm"
              placeholder="Enter your photo URL"
            />

            {/* email  */}
            <label className="label text-xs md:text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered text-sm"
              placeholder="Email"
            />

            {/* password */}
            <label className="label text-xs md:text-sm">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered text-sm"
              placeholder="Password"
            />

            <button type="submit" className="btn btn-primary mt-4 text-sm md:text-base">
              Register
            </button>
            <p className="text-center pt-5 text-xs md:text-sm">
              Already Have An Account?{' '}
              <Link className="text-secondary font-semibold hover:underline" to={'/auth/login'}>
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Register
