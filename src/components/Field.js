import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Name' : 'Név';

    return (
      <div className="label ui">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;