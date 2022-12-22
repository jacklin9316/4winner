import React from 'react';
import { useSelector } from 'react-redux';
import { renderRoutes } from 'react-router-config'
import { Loading } from './utils';

function AppMain(props) {
  const isLoading1 = useSelector(state => state.mobileSportsReducers.isLoading)
  const isLoading2 = useSelector(state => state.betReducers.isLoading)
  return (
    <>
      {!(isLoading1 || isLoading2) ? <Loading /> : null}
      {renderRoutes(props.real_routes)}
    </>
  );
}
export default AppMain;