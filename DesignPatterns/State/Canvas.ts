import Tool from './Tool'

// Context Class
export default class Canvas {
  private currentTool: Tool
  
  mouseDown(): void {
    this.currentTool.mouseDown()
  }

  mouseUp(): void {
    this.currentTool.mouseUp()
  }

  getCurrentTool(): Tool {
    return this.currentTool
  }

  setCurrentTool(tool: Tool): void {
    this.currentTool = tool
  } 
}
