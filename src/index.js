import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'
import Form from './Form'

ReactDOM.render(<>
<App propsitm={'props-extract'}/>
<h1 style={{display:'flex',justifyContent:'center',alignItem:'center'}}>Events</h1>
<Form />
</>,document.getElementById('root'));


