import React from 'react';
import ReactDOM from 'react-dom/client';
import FetchProxy from './FetchProxy';
import Axios from './Axios';
import AxiosParams from './AxiosParams';
import AxiosProxy from './AxiosProxy';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <FetchProxy/>
    <Axios/>
    <AxiosParams/>
    <AxiosProxy/>
  </div>
);

