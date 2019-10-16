
import React from 'react';
import Tool from './Tool/Tool.js';

class Tools extends React.Component 
{
  state = {toggledId:null};
  tools=
  [
    //{type:"clear",display:<rect x="5" y="5" width="32" height="28" stroke="grey" strokeWidth="1" fill="white"/>},
    //{type:"select",display:<polygon points="5,5 15,5 10,10 25,25 10,10 5,15" stroke="lightgrey" strokeWidth="5" fill="lightgrey"/>},
    {type:"draw",display:<path d="M 5 5 q 5 25 15 15  q 5 -25 15 15" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"line",display:<line x1="5" y1="5" x2="35" y2="25" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"polyline",display:<polyline points="5,5 30,5 5,30 30,30" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"rect",display:<rect x="5" y="5" width="30" height="25" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"polygon",display:<polygon points="5,5 30,5 30,30 5,30 15,15 " stroke="black" strokeWidth="2" fill="none"/>},
    {type:"arc",display:<path d="M 5 5 q 15 30 30 0" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"circle",display:<circle cx="20" cy="17" r="12" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"ellipse",display:<ellipse cx="20" cy="17" rx="14" ry="11" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"text",display:<text x="11" y="28" fontSize="30" fontFamily="corusive" fill="black">T</text>}
    //{type:"image",display:<rect x="5" y="5" width="28" height="24" stroke="lime" strokeWidth="3" fill="blue"/>}
    
  ];
  getToggle=(id)=>
  {
    this.setState({toggledId:id});
    this.props.setTool(id);
  }
  render()
  {
   
    return (
      <div>
        <span className="tools">
          {
            this.tools.map((tool,index)=>
            {
              return <Tool key={index} height="40" width="40" gt={this.getToggle} tglid={this.state.toggledId} id={tool.type}>{tool.display}</Tool>
            })
          }
          
        </span>
      </div>
    );
  }
}
export default Tools;

