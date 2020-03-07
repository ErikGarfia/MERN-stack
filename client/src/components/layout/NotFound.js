import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' /> Pagina no encontrada
      </h1>
      <p className='large'>Esta pagina no existe</p>
    </Fragment>
  );
};

export default NotFound;
