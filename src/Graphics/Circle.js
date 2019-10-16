import React from 'react';

function circle_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  var dis=null;
  if(event.type==="click" &&  chamber===null)
  {
    ln=<circle cx={x} cy={y} r="0" stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    dis=Math.sqrt((Math.pow(parseFloat(chamber.props.cx)-x,2))+(Math.pow(parseFloat(chamber.props.cy)-y,2)));
    
    ln = <circle cx={chamber.props.cx} cy={chamber.props.cy} r={dis} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    console.log(ln);
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" && chamber!==null)
  {
    dis=Math.sqrt((Math.pow(parseFloat(chamber.props.cx)-x,2))+(Math.pow(parseFloat(chamber.props.cy)-y,2)));
    ln = <circle cx={chamber.props.cx} cy={chamber.props.cy} r={dis} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"final",add:ln};
    
  }
  return obj;
  
}

export var circle={handle:circle_handle,info:"click once for center,click second time for radius"}; 
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
