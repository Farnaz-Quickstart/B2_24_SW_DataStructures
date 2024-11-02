// Stack: Undo Functionality in Text Editors
// In text editors, the undo feature is implemented using a stack. Each action 
// (e.g., typing a letter, deleting a word) is pushed onto a stack, and when the user presses 
// "undo," the last action is popped from the stack and reverted.

class TextEditor {
  constructor() {
      this.actions = [];
  }

  type(text) {
      this.actions.push(text);
      console.log(`Typed: ${text}`);
  }

  undo() {
      const lastAction = this.actions.pop();
      console.log(`Undo action: ${lastAction}`);
  }
}

const editor = new TextEditor();
editor.type("Hello");
editor.type("World");
editor.undo(); // "Undo action: World"
editor.undo(); // "Undo action: Hello"
