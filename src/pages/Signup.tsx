/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { FormEvent, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useSignupMutation } from '../redux/features/auth/authApi';

function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [signup, { data, isLoading, error }] = useSignupMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      if ('data' in error) {
        if (
          (error.data as { message?: string }).message === 'Duplicate email'
        ) {
          setErrorMsg('Email already exists');
        } else {
          setErrorMsg('Something went wrong! Try again');
        }
      }
    }

    if (data?.success) {
      toast.success('Signup successfull');
      navigate('/signin');
    }
  }, [data, error, navigate]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMsg('');

    signup({ userName, email, password });
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-6">
      <div className="w-full rounded-md bg-yellow-50 p-6">
        <h2 className="mb-8 text-2xl font-semibold">
          Ready to track your reading? Let's signup first!
        </h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Username</label>
            <div className="grow">
              <input
                type="text"
                name="userName"
                className="input"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Email</label>
            <div className="grow">
              <input
                type="email"
                name="email"
                className="input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
            <label className="text-lg sm:basis-40">Password</label>
            <div className="grow">
              <input
                type="password"
                name="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div>
            <Button disabled={isLoading} type="primary">
              {isLoading ? 'Signing up...' : 'Signup'}
            </Button>
          </div>
          {errorMsg !== '' && (
            <p className="mt-4 rounded-md bg-red-100 p-2 text-lg text-red-700">
              {errorMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;
