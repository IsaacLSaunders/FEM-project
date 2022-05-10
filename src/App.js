import React from 'react';
import ReactDOM from 'react-dom';

const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, {
      name: 'Edna',
      animal: 'Dog',
      breed: 'Pure Bred Mutt',
    }),
    React.createElement(Pet, {
      name: 'Rijken',
      animal: 'Dog',
      breed: 'Bouvier',
    }),
    React.createElement(Pet, {
      name: 'Other Cat',
      animal: 'Cat',
      breed: 'Lucky Black',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
