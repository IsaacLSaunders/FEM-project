//Parcel automatically supports JSX and React, Parcel detects that you are using React and compiles automatically without imports.
// import React from 'react';

//REACT 18 uses createRoot instead of ReactDOM.render, version 17 will be used unless this is changed
import { render } from 'react-dom';
import SearchParams from './SearchParams';
// import Pet from './Pet';

/*V1
// const App = () => {
//   return React.createElement('div', {}, [
//     React.createElement('h1', {}, 'Adopt Me!'),
//     React.createElement(Pet, {
//       name: 'Edna',
//       animal: 'Dog',
//       breed: 'Pure Bred Mutt',
//     }),
//     React.createElement(Pet, {
//       name: 'Rijken',
//       animal: 'Dog',
//       breed: 'Bouvier',
//     }),
//     React.createElement(Pet, {
//       name: 'Other Cat',
//       animal: 'Cat',
//       breed: 'Lucky Black',
//     }),
//   ]);
// };
//ReactDOM.render(React.createElement(App), document.getElementById('root'));
*/

const App = () => {
  return (
    <div id='My App'>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById('root'));
