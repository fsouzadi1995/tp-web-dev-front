import * as React from 'react';
import { Outlet, Navigate, useRoutes } from 'react-router-dom';
import { AuthContext } from './providers/AuthContext';

import { Root } from './routes/Root';
import { Signin } from './routes/Signin';
import { CreateOutfit } from './routes/CreateOutfit';
import { History } from './routes/History';

function Routes() {
  const { isAuthed } = React.useContext(AuthContext);

  const commonRoutes = [
    {
      path: 'history',
      element: <History />,
    },
  ];
  const publicRoutes = [
    {
      path: 'signin',
      element: <Signin />,
    },
  ];
  const privateRoutes = [
    {
      path: 'create',
      element: <CreateOutfit />,
    },
  ];

  const routes = [
    {
      path: '/',
      element: (
        <>
          <Root>
            <Outlet />
          </Root>
        </>
      ),
      children: isAuthed
        ? [...commonRoutes, ...privateRoutes]
        : [...commonRoutes, ...publicRoutes],
    },
    {
      path: '*',
      element: <Navigate to='/' />,
    },
  ];

  const element = useRoutes(routes);

  return <>{element}</>;
}

export { Routes };
