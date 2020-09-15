import { render, Component, createElement } from './toy-react.js';

class MyComponent extends Component {
  render() {
    return <div>
      <h1>my component</h1>
      {this.children}
    </div>
  }
}

render(<MyComponent id="test">
  <div>2</div>
  <div>3</div>
  <div>4</div>
</MyComponent>, document.body);