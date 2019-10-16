import React from 'react';
import './Options.css';

class Option extends React.Component 
{
  
  render()
  {
    return (
      <span className="option">
        <label>{this.props.label}</label>
        <input type={this.props.type} value={this.props.value} title={this.props.title} onChange={this.props.onChange} onClick={this.props.onClick}/>
      </span>
    );
  }
}

export default Option;
