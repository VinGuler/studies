import EditorState from './EditorState'

/**
 * This is the Originator
 * this is where all the data originates from
 * he controls the data and the creation and restoration of the states
 */
export default class Editor {
  private content: string

  createState(): EditorState {
    return new EditorState(this.content)
  }
  
  restoreState(state: EditorState): void {
    this.content = state.getContent()
  }

  getContent(): string {
    return this.content
  }

  setContent(content: string): void {
    this.content = content
  }
}
