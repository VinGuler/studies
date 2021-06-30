import Tool from './Tool'

// Concrete State Class
export default class SelectionTool implements Tool {
  mouseDown(): void {
    console.log('SELECTION ICON')
  }
  mouseUp(): void {
    console.log('DRAW DASHED RECTANGLE')
  }
}
