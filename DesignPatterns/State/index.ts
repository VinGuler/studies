import Canvas from './Canvas'
import SelectionTool from './SelectionTool'
import BrushTool from './BrushTool'

/**
 * Implementing the State pattern
 * a pattern to handle cases of different object behaviors based on its state
 * 
 * In this case, a Canvas class can be in a few different states ('SELECTION', 'BRUSH')
 * each state (Tool) has the mouseDown and mouseUp implementation
 */

function main() {
  const canvas = new Canvas()
  canvas.setCurrentTool(new SelectionTool())
  canvas.mouseDown()
  canvas.mouseUp()
  canvas.setCurrentTool(new BrushTool())
  canvas.mouseDown()
  canvas.mouseUp()
}

main()
