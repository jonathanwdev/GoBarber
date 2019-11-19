import React from 'react';
import { useSelector } from 'react-redux';

import CreateRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const Routes = CreateRouter(signed);

  return <Routes />;
}
