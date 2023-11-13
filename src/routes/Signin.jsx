import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

function Signin() {
  const { login, isLoading } = React.useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const credentials = Object.fromEntries(form);

    login(credentials).then(() => navigate('/history'));
  };

  return (
    <section className='flex justify-center mt-20'>
      <form onSubmit={onSubmit} className='flex flex-col gap-y-20'>
        <div>
          <input
            required
            name='name'
            type='text'
            placeholder='Name'
            defaultValue={'fabian'}
            className='h-10 rounded p-4'
          />
        </div>

        <div>
          <input
            required
            name='password'
            type='password'
            placeholder='Password'
            defaultValue={1234}
            minLength={4}
            maxLength={16}
            className='h-10 rounded p-4'
          />
        </div>
        <div className='flex justify-center mt-10'>
          <button
            type='submit'
            className='px-4 py-2 bg-blue-800 flex justify-center rounded'
          >
            Submit
          </button>
        </div>

        {isLoading && <pre>Loading..</pre>}
      </form>
    </section>
  );
}

export { Signin };
