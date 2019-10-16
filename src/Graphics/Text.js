import React from 'react';


function text_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  var text=null;
  var key=null;
  if(event.type==="click" &&  chamber===null)
  {
    ln= <text x={x} y={y} fontSize={options.strokeWidth} fill={options.stroke}></text>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="keypress"  && chamber!==null)
  {
    key=event.key;
   
    
    if(chamber.props.children!=null)
    {
      console.log(key);
      if(key==="Enter")
      {
        key='';
      }
      text=chamber.props.children + key;
    }
    else
    {
      text=event.key;
    }
    
    ln= <text x={chamber.props.x} y={chamber.props.y} fontSize={options.strokeWidth} fill={options.stroke}>{text}</text>;
    obj={store:"chambered",add:ln};
  }
  if(event.type==="click" && chamber!==null)
  {
    if(chamber.props.children!=null)
    {
      text=chamber.props.children;
    }
    else
    {
      text='\0';
    }
    ln= <text x={chamber.props.x} y={chamber.props.y} fontSize={options.strokeWidth} fill={options.stroke}>{text}</text>;
    obj={store:"final",add:ln};
  }
  return obj;
  
}

export var text={handle:text_handle,info:"click on starting point and type, click again to end, (change width in options for text size) "}; 
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
