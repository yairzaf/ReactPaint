import React from 'react';

function line_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  if(event.type==="click" &&  chamber===null)
  {
    ln=<line x1={x} y1={y} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    ln = <line x1={chamber.props.x1} y1={chamber.props.y1} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" && chamber!==null)
  {
    ln = <line x1={chamber.props.x1} y1={chamber.props.y1} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"final",add:ln};
    
  }
  return obj;
  
}

export var line={handle:line_handle,info:"click once per vertacie"}; 
/*
export class Line extends React.Component 
{
  state={init:false,x1:0,y1:0,x2:0,y2:0};
  setFirst=(x,y)=>
  {
      this.setState({x1:x,y1:y});
  }
  setLast=(x,y)=>
  {
      this.setState({x2:x,y2:y});
  }
  componentWillReceiveProps(nextProps) 
  {
      
  }
  render()
  {
    return (
      <line x1={this.state.x1} y1={this.state.y1} x2={this.state.x2} y2={this.state.y2} stroke="black" strokeWidth="2" fill="none"/>
    );
  }
}
*/
