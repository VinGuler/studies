/**
 * This is the Memento
 * a simple "stupid" state
 * that we will use to create "images" of the Originator                                            in the Caregiver
 */
export default class EditorState {
  private content: string

  constructor (content) {
    this.content = content
  }

  getContent(): string {
    return this.content
  }
}
