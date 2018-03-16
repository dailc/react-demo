import React from 'react';
import {
    render,
} from 'react-dom';
import './style/libs/mui/mui.css';
import Routers from './routers';

render(<Routers />, document.getElementById('content'));