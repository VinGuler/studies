import Editor from './Editor'
import History from './History'

/**
 * Implementing the Memento pattern
 * a pattern to handle state changes in a list of states (undo/redo for example).
 * 
 * Editor class creates the states to be saved
 * History class holds the states to be saved (and later accessed when undoing/redoing)
 */
function main() {
  const editor = new Editor()
  const history = new History()

  editor.setContent('hello')
  history.save(editor.createState())

  editor.setContent('world')
  history.save(editor.createState())

  editor.setContent('pretty')
  history.save(editor.createState())

  editor.restoreState(history.undo())

  editor.restoreState(history.undo())

  editor.restoreState(history.redo())

  // Will print 'world'
  console.log(editor.getContent())
}

main()
