import Tool from './Tool'

// Concrete State Class
export default class BrushTool implements Tool {
  mouseDown(): void {
    console.log('BRUSH ICON')
  }
  mouseUp(): void {
    console.log('DRAW A LINE')
  }
}
