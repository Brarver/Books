import React from 'react'
import ReactDOM from 'react-dom'
import Text from './components/Text'

ReactDOM.render(Text, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name= 'Mike';
  }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);

class NewSyntax {
  name = 'Jen'
}
const newSyntax = new NewSyntax();
console.log(newSyntax)