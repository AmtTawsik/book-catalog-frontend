/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { useSigninMutation } from '../redux/features/auth/authApi';

function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const [signin, { data, isLoading, error }] = useSigninMutation();

  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      if ('data' in error) {
        if ((error.data as { message?: string }).message) {
          const message = (error.data as { message?: string }).message;
          setErrorMsg(message as string);
        } else {
          setErrorMsg('Something went wrong! Try again');
        }
      }
    }

    if (data?.success) {
      navigate('/all-books');
    }
  }, [data, error, navigate]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setErrorMsg('');

    signin({ email, password });
  }

  return (
    <div className="flex h-full w-full items-center justify-center px-4 py-6">
      <div className="w-full rounded-md bg-yellow-50 p-6">
        <h2 className="mb-8 text-2xl font-semibold">
          Let's track your reading!
        </h2>

        <form onSubmit={handleSubmit}>
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
              {/* <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
       error
      </p> */}
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
              {isLoading ? 'Signning in...' : 'Signin'}
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

export default Signin;
