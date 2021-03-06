import React from 'react'
import Modal, {closeStyle} from 'simple-react-modal'

export default class App extends React.Component{

  constructor(){
    super()
    this.state = {}
  }

  show(){
    this.setState({show: true})
  }

  close(){
    this.setState({show: false})
  }

  render(){
    return (
      <div>
      <a onClick={this.show.bind(this)}>Open Modal</a>
        <Modal
        onOuterClick={false}
        show={this.state.show}
        onClose={this.close.bind(this)}>

        <a style={closeStyle} onClick={this.close.bind(this)}>X</a>
        <div>hey</div>

        </Modal>
      </div>
    )
  }
}
React.render(<App />, document.getElementById('app'));
