import {Middleware} from 'redux';

const LoggerMiddleware: Middleware = store => next => action => {
  const returnValue = next(action);
  return returnValue;
};

export default [LoggerMiddleware];
