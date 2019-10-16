import React from 'react';

function arc_handle(event,x,y,chamber,options)
{
  var ln=null;
  var obj=null;
  var arc_data=null;
  var dissect=null;
  if(event.type==="click" &&  chamber===null)
  {
    arc_data="M "+x+" "+y+" q 0 0 0 0";
    ln=<path d={arc_data} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
    obj={store:"chambered",add:ln};
    
  }
  if(event.type==="mousemove"  && chamber!==null)
  {
    arc_data=chamber.props.d;
    dissect=arc_data.split(" ");
    if(dissect[4]==="0" && dissect[5]==="0")
    {
      dissect[6]=x-parseFloat(dissect[1]);
      dissect[7]=y-parseFloat(dissect[2]);
      arc_data=dissect.join(" ");
      ln =<path d={arc_data} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
      obj={store:"chambered",add:ln};
    }
    else
    {
      dissect[4]=(x-parseFloat(dissect[1]))*2;
      dissect[5]=(y-parseFloat(dissect[2]))*2;
      arc_data=dissect.join(" ");
      ln =<path d={arc_data} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
      obj={store:"chambered",add:ln};  
    
    }
  }
  if(event.type==="click" && chamber!==null)
  {
    arc_data=chamber.props.d;
    dissect=arc_data.split(" ");
    if(dissect[4]==="0" && dissect[5]==="0")
    {
      dissect[6]=x-parseFloat(dissect[1]);
      dissect[7]=y-parseFloat(dissect[2]);
      dissect[4]=1;
      dissect[5]=1;
      arc_data=dissect.join(" ");
      ln =<path d={arc_data} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
      obj={store:"chambered",add:ln};
    }
    else
    {
      dissect[4]=(x-parseFloat(dissect[1]))*2;
      dissect[5]=(y-parseFloat(dissect[2]))*2;
      arc_data=dissect.join(" ");
      ln =<path d={arc_data} x2={x} y2={y} stroke={options.stroke} strokeWidth={options.strokeWidth} fill={options.fill}/>;
      obj={store:"final",add:ln};  
    }
    
  }
  return obj;
  
}

export var arc={handle:arc_handle,info:"click once per vertacie, final click for arc bend"}; 
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
