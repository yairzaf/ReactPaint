import React from 'react';

function polyline_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  var tmp=null;
  var count=0;
  if(event.type==="click" &&  chamber===null)
  {
    ln=<polyline points={x+" "+y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    tmp=chamber.props.points;
    count = tmp.split(" ");
    if(count.length>=3)
    {
        
        count.pop();
        count.pop();
        tmp=count.join(" ")
    }
    ln = <polyline points={tmp+" "+x+" "+y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" &&  chamber!==null)
  {
    ln=<polyline points={chamber.props.points+" "+x+" "+y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="auxclick" && chamber!==null)
  {
    tmp=chamber.props.points;
    count = tmp.split(" ");
    if(count.length>=3)
    {
        
        count.pop();
        count.pop();
        tmp=count.join(" ")
    }
    ln = <polyline points={tmp}  stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"final",add:ln};
    
  }
  return obj;
  
}

export var polyline={handle:polyline_handle,info:"click once per vertacie, right click mouse to finnish"}; 
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
