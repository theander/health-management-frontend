import React, { Fragment } from 'react';
import MainHeader from './main-header';

export default function Layout(props: any) {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
}
