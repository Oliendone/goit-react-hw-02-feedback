import React from 'react';
import ReactDOM from 'react-dom';

import { func } from 'prop-types';

export default function Section({ title, children }) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
