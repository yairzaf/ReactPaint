
import React from 'react';
import Action from './Action/Action.js';

class Actions extends React.Component 
{
  
  tools=
  [
    {type:"clear",display:<rect x="5" y="5" width="32" height="28" stroke="grey" strokeWidth="1" fill="white"/>},
    {type:"undo",display:<path d="M 5 20 L 5 10 L 5 20 L 15 20 L 5 20 q 15 -30 30 0 " stroke="black" strokeWidth="2" fill="none"/>},
    {type:"redo",display:<path d="M 5 20 q 15 -30 30 0 L 25 20 L 36 20 L 35 9" stroke="black" strokeWidth="2" fill="none"/>},
    {type:"export",display:<polygon points="5,10 5,15 25,15 25,20 35,12 25,5 25,10 " stroke="black" strokeWidth="2" fill="green"/>}
    
    
  ];
  getAction  = (id) => 
  {
    this.props.actionHandler(id);
  }
  render()
  {
   
    return (
      <div>
        <span className="tools">
          {
            this.tools.map((tool,index)=>
            {
              return <Action key={index} height="30" width="40" id={tool.type} onClick={()=>this.getAction(tool.type)}>{tool.display}</Action>
            })
          }
          
        </span>
      </div>
    );
  }
}
export default Actions;

