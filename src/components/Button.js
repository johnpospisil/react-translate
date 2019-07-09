import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {

  render() {
    // console.log(this.context);
    // const text = this.context === 'english' ? 'Sumit' : 'Választ';
    return (
    <button className="ui primary button">
      <LanguageContext.Consumer>
        {(value) => value === 'english' ? 'Submit' : 'Választ'}
      </LanguageContext.Consumer>
    </button>
    );
  }
}

export default Button;