import * as React from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthContext';

function Root({ children }) {
  const { isAuthed } = React.useContext(AuthContext);

  return (
    <main className='bg-slate-800 text-gray-300  min-h-screen flex flex-col'>
      <nav className='h-16 bg-slate-700 flex justify-between'>
        <ul className='flex gap-x-20 items-center h-full px-10'>
          {isAuthed && (
            <Link to='/create'>
              <li>Create outfit</li>
            </Link>
          )}

          <Link to='/history'>
            <li>History</li>
          </Link>
        </ul>

        {!isAuthed && (
          <ul className='flex gap-x-20 items-center h-full px-10'>
            <Link to='/signin'>
              <li>Sign in</li>
            </Link>
          </ul>
        )}
      </nav>

      <div className='mt-20 text-center'>
        <h1 className='text-3xl'>TP Web Dev Front</h1>
      </div>

      {children}
    </main>
  );
}

export { Root };
