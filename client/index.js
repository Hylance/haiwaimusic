import { hydrate } from 'react-dom';
import React from 'react';
import Index from '../shared/index/components';

hydrate(
  <Index />,
  document.getElementById('main'),
);
