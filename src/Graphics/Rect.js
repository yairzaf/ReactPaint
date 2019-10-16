import React from 'react';

function rect_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  if(event.type==="click" &&  chamber===null)
  {
    ln=<rect x={x} y={y} width="0" height="0" stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    var tmp_x=chamber.props.x;
    var tmp_y=chamber.props.y;
    var tmp_width=x-chamber.props.x;
    var tmp_height=y-chamber.props.y;
    if(tmp_width<0)
    {
        tmp_x=x;
        tmp_width=chamber.props.x-x;
    }
    if(tmp_height<0)
    {
      tmp_y=y;
      tmp_height=chamber.props.y-y;
    }
    ln = <rect x={tmp_x} y={tmp_y} width={tmp_width} height={tmp_height} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" && chamber!==null)
  {
    ln = <rect x={chamber.props.x} y={chamber.props.y}  width={x-chamber.props.x} height={y-chamber.props.y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"final",add:ln};
    
  }
  return obj;
  
}

export var rect={handle:rect_handle,info:"click once per vertacie"}; 
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
