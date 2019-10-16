import React from 'react';

function draw_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  if(event.type==="mousedown" &&  chamber===null)
  {
    ln=<polyline points={x+" "+y}  stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    ln = <polyline points={chamber.props.points+" "+x+" "+y}  stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" && chamber!==null)
  {
    ln = <polyline points={chamber.props.points+" "+x+" "+y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"final",add:ln};
    
  }
  return obj;
  
}

export var draw={handle:draw_handle,info:"hold mouse and draw"}; 
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
