import EditorState from "./EditorState"

/**
 * This is the Caregiver
 * he manages the states (a list of them, actually),
 * with keeping track of the current index
 */
export default class History {
  public states: Array<EditorState> = []
  public currentStateIndex: number = -1

  save(state: EditorState): void {
    this.states.push(state)
    this.currentStateIndex = this.states.length - 1
  }

  undo(): EditorState | null {
    this.currentStateIndex--
    this.states.push(this.states[this.currentStateIndex])
    return this.states[this.currentStateIndex]
  }

  redo(): EditorState | null {
    this.currentStateIndex++
    this.states.push(this.states[this.currentStateIndex])
    return this.states[this.currentStateIndex]
  }
}