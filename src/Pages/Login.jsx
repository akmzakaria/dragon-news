import React, { use, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider'
import Alert from '../Components/Alert'

const Login = () => {
  const [error, setError] = useState('')
  const [alertMsg, setAlertMsg] = useState('')

  const location = useLocation()

  const { logIn } = use(AuthContext)

  const navigate = useNavigate()

  const handleLogIn = (e) => {
    e.preventDefault()

    const email = e.target.email.value
    const password = e.target.password.value

    logIn(email, password)
      .then(() => {
        setAlertMsg('Logged In Successfully!')
        setTimeout(() => {
          setAlertMsg('')
          navigate(`${location.state ? location.state : '/'}`)
        }, 1500)
      })
      .catch((err) => {
        const errorCode = err.code
        setError(errorCode)
      })
  }

  return (
    <div className="flex justify-center min-h-screen items-center px-3 md:px-0">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4 md:py-5">
        {alertMsg && <Alert type="success" message={alertMsg} onClose={() => setAlertMsg('')} />}
        <h2 className="font-semibold text-xl md:text-2xl text-center px-4">Login your account</h2>
        <form onSubmit={handleLogIn} className="card-body">
          <fieldset className="fieldset">
            {/* email */}
            <label className="label text-xs md:text-sm">Email</label>
            <input
              name="email"
              type="email"
              className="input input-bordered text-sm"
              placeholder="Email"
              required
            />

            {/* password */}
            <label className="label text-xs md:text-sm">Password</label>
            <input
              name="password"
              type="password"
              className="input input-bordered text-sm"
              placeholder="Password"
              required
            />

            <div>
              <a className="link link-hover text-xs md:text-sm">Forgot password?</a>
            </div>

            {error && <p className="text-red-500 text-xs">{error}</p>}

            <button type="submit" className="btn btn-primary mt-4 text-sm md:text-base">
              Login
            </button>
            <p className="text-center pt-5 text-xs md:text-sm">
              Dont't Have An Account?{' '}
              <Link className="text-secondary font-semibold hover:underline" to={'/auth/register'}>
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  )
}

export default Login
