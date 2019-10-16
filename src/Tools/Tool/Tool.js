import React from 'react';
import './Tool.css';

class Tool extends React.Component 
{
  state={toggled:false};
  handleToggler = () =>
  {
     
      var change=!this.state.toggled;
      this.setState({toggled:change});
      
      if(change)
      {
        this.props.gt(this.props.id);
      }
      else
      {
        this.props.gt(null);
      }
    
  }
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.tglid!==this.props.id) {
      this.setState({toggled:false});
    }
  }
  render()
  { 
   
    return (
        <span className={this.state.toggled ?  "tool tool_selected" : "tool"} onClick={this.handleToggler} title={this.props.id}>
            <svg width={this.props.width} height={this.props.height}>
                {this.props.children}
            </svg>
        </span>
    );
  }
}

export default Tool;
