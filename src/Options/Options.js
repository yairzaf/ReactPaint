import React from 'react';
import './Options.css';
import Option from './Option.js';
class Options extends React.Component 
{
  state={boardWidth:"900",boardHeigt:"500",stroke:"#000000",fill:"none",strokeWidth:"2"}
  getStroke = (event) =>
  {
    var tmp={...this.state};
    tmp.stroke=event.target.value;
    this.setState({stroke:event.target.value});
    this.props.setOptions(tmp);
  }
  getFill = (event) =>
  {
    var tmp={...this.state};
    tmp.fill=event.target.value;
    this.setState({fill:event.target.value});
    this.props.setOptions(tmp);
  }
  getStrokeWidth = (event) =>
  {
    var tmp={...this.state};
    tmp.strokeWidth=event.target.value;
    this.setState({strokeWidth:event.target.value});
    this.props.setOptions(tmp);
  }
  getBoardWidth = (event) =>
  {
    var tmp={...this.state};
    tmp.boardWidth=event.target.value;
    this.setState({boardWidth:event.target.value});
    this.props.setOptions(tmp);
  }
  getBoardHeight = (event) =>
  {
    var tmp={...this.state};
    tmp.boardHeigt=event.target.value;
    this.setState({boardHeigt:event.target.value});
    this.props.setOptions(tmp);
  }
  render()
  {
    
    return (
      <div className="Options">
        <h3>SETTINGS:</h3>
        <Option label="canvas height" type="number" value={this.state.boardHeigt} title="pick canvas height" onChange={this.getBoardHeight}/>
        <Option label="canvas width" type="number" value={this.state.boardWidth} title="pick canvas width" onChange={this.getBoardWidth}/> 
        <Option label="foreground" type="color" value={this.state.stroke} title="pick foreground color" onChange={this.getStroke}/>
        <Option label="tool width\size" type="number" value={this.state.strokeWidth} title="pick background color" onChange={this.getStrokeWidth}/> 
        <Option label="background" type="color" value={this.state.fill} onChange={this.getFill}/>
        <Option label="revert to transparent" type="button" value="none" title="change to transparent" onClick={this.getFill} />
      </div>
    );
  }
}

export default Options;

/*
<span className="option">
          foreground
          <input type="color" value={this.state.stroke} title="pick foreground color" onChange={this.getStroke}/>
          width
          <input type="number" value={this.state.strokeWidth} title="pick background color" onChange={this.getStrokeWidth}/> 
        </span>
        <span className="option">
          background
          <input type="color" value={this.state.fill} onChange={this.getFill}/>
          change to transparent 
          <input type="button" value="none" title="change to transparent" onClick={this.getFill} />
        </span>
*/