import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  static contextType = LanguageContext;

  render() {
    // console.log(this.context);
    const text = this.context === 'english' ? 'Sumit' : 'Választ';
    return <div><button className="ui primary button">{text}</button></div>;
  }
}

export default Button;