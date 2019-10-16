import React from 'react';
import "./Board.css";

class Board extends React.Component 
{
  cords = (evnt) =>
  {
    
    //var rect = evnt.target.getBoundingClientRect(); --if mouse on svg element this doesnt work
    var rect = document.getElementById("board1").getBoundingClientRect();
    var x=evnt.clientX-rect.left;
    var y=evnt.clientY-rect.top;
    this.props.getCords(x,y,evnt);
  }
  
  render()
  {
    return (
        
          <span className="board" id="board1" tabIndex="0" onClick={this.cords} onMouseMove={this.cords} onMouseDown={this.cords} onAuxClick={this.cords} onKeyPress={this.cords} >
            <svg id="the_svg" width={this.props.width} height={this.props.height}>
                <rect x="0" y="0" width={this.props.width} height={this.props.height} stroke="none" strokeWidth="0" fill="white" />
                {this.props.children}
                
            </svg>
            
          </span>
        
       
    );
  }
}

export default Board;
