import React from 'react';
import styles from './typography.module.scss';

function addString(props, className) {
  return props.className ? props.className + ' ' + className : className;
}

export const H1 = props => {
  return (
    <h1 {...props} className={addString(props, styles.h1)}>
      {props.children}
    </h1>
  );
};

export const H2 = props => {
  return (
    <h2 {...props} className={addString(props, styles.h2)}>
      {props.children}
    </h2>
  );
};

export const H3 = props => {
  return (
    <h3 {...props} className={addString(props, styles.h3)}>
      {props.children}
    </h3>
  );
};

export const H4 = props => {
  return (
    <h4 {...props} className={addString(props, styles.h4)}>
      {props.children}
    </h4>
  );
};

export const Heading = props => <>
  <H4 style={{color: '#878787'}} {...props} />
  ---- 
</>
