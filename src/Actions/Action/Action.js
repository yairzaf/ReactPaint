import React from 'react';
import './Action.css';

class Action extends React.Component 
{
 
  
  render()
  { 
   
    return (
        <span className="action" title={this.props.id} onClick={this.props.onClick}>
            <svg width={this.props.width} height={this.props.height}>
                {this.props.children}
            </svg>
        </span>
    );
  }
}

export default Action;
