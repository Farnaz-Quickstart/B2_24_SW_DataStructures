// Stack is a linear data structure that follows the LIFO (Last-In-First-Out) principle. Stack has one end, 
// Example: Undo Functionality in Text Editors

// The Stack Big O Time Complexities
//     Push (Insertion): O(1)
//     Pop (Removal): O(1)
//     Peek Returns the top element without removing it.
//     Searching: ????

// The Stack Big O space Complexities

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
