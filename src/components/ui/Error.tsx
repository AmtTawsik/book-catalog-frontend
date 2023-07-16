import LinkButton from './LinkButton';

function Error({ message }: { message?: string }) {
  return (
    <div className="mt-6 w-full rounded-md bg-red-100 p-2 text-center">
      <p className="text-xl text-red-700">
        {message ? message : 'Something went wrong'}
      </p>
      <LinkButton to="-1">&larr; Go back</LinkButton>
    </div>
  );
}

export default Error;
