import logo from './logo.svg';
import './App.css';
import { Fragment } from 'react';

function AppJSX() {
  const name = '엘리';
  const list = ['우유', '딸기', '바나나'];
  return (
    <> {/*<Fragment></Fragment>*/} 
      <h1 className='orange'>hello</h1>
      <h2>hello</h2>
      <p>{`HELLO!, ${name}`}</p>
      <ul>
        {
          list.map((item) => <li>{item}</li>)
        }
      </ul>
    </>
  );
}

export default AppJSX;
