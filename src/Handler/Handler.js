import React from 'react';
import Board from '../Board/Board.js';
import Actions from '../Actions/Actions.js';
import Options from '../Options/Options.js';
import Tools from '../Tools/Tools.js';

import {draw} from '../Graphics/Draw.js';
import {line} from '../Graphics/Line.js';
import {polyline} from '../Graphics/Polyline.js';
import {rect} from '../Graphics/Rect.js';
import {polygon} from '../Graphics/Polygon.js';
import {arc} from '../Graphics/Arc.js';
import {circle} from '../Graphics/Circle.js';
import {ellipse} from '../Graphics/Ellipse.js';
import {text} from '../Graphics/Text.js';
import './Handler.css'
import $ from 'jquery';
var canvg = require('canvg');

class Handler extends React.Component 
{
  state={currentTool:null,info:null,stack:[],undostack:[],chambered:null,selected:null,options:{boardWidth:"900",boardHeigt:"500",stroke:"#000000",fill:"none",strokeWidth:"2"}};
  tool2graph=[["draw",draw],["line",line],["polyline",polyline],["rect",rect],["polygon",polygon],["arc",arc],["circle",circle],["ellipse",ellipse],["text",text]];
  setOptions=(opt)=>
  {
    this.setState({options:opt});
  }
  setTool=(tool)=>
  {
    this.setState({chambered:null,selected:null,currentTool:tool,info:null});
  }
  getCords=(x,y,type)=>
  {
    var add=null;
    for(var i=0;i<this.tool2graph.length;i++)
    {
        if(this.tool2graph[i][0]===this.state.currentTool)
        {
          this.setState({info:this.tool2graph[i][1].info});
          add=this.tool2graph[i][1].handle(type,x,y,this.state.chambered,this.state.options);
        }
    }
    if(add!==null)
    {
      
      if(add.store==="chambered")
      {
        this.setState({chambered:add.add});
      }
      if(add.store==="final")
      {
        this.setState({chambered:null,stack:[...this.state.stack,add.add]});
      }
    }
    
  }
  execAction = (act)=>
  {
    
    if(act==="clear")
    {
      this.clearAll();
    }
    if(act==="undo")
    {
      this.undo();
    }
    if(act==="redo")
    {
      this.redo();
    }
    if(act==="export")
    {
      this.export_svg();
    }
  }

  clearAll =() =>
  {
    this.setState({stack:[],undostack:[],chambered:null});
  }
  undo = () =>
  {
      var stack=[...this.state.stack];
      var undostack=[...this.state.undostack];
      var tmp=stack.pop();
      if(tmp!=null)
      {
        undostack.push(tmp);
      }
      this.setState({stack:stack,undostack:undostack});
  }
  redo = () =>
  {
    var stack=[...this.state.stack];
    var undostack=[...this.state.undostack];
    var tmp=undostack.pop();
    if(tmp!=null)
    {
      stack.push(tmp);
    }
    this.setState({stack:stack,undostack:undostack});
  }
  export_svg = () =>
  {
      
      canvg('canvas',$("#the_svg")[0].outerHTML);
      var canvas = document.getElementById("canvas");
      var img = canvas.toDataURL("image/png");
      console.log(img);
      window.location.replace(img);

  }
  render()
  {
    return (
      <div className="handler">
        <Actions actionHandler={this.execAction} />
        <Tools setTool={this.setTool}/>
        <Options setOptions={this.setOptions}/>
        {
        this.state.currentTool!== null ?  <p className="tool-info">current tool: ({this.state.currentTool}) {this.state.info}</p> : <p className="tool-info">(no tool selected)</p> 
        }
        <Board height={this.state.options.boardHeigt} width={this.state.options.boardWidth} getCords={this.getCords}>
          
          {
            this.state.stack.map((grp,index)=>
            {
              return grp;
            })
          }
          {this.state.chambered}
        </Board>
        <br/>
        <canvas id="canvas" ></canvas>
      </div>
    );
  }
}

export default Handler;
