import React from 'react'
import Appi from './components/Board.jsx'

class App extends React.Component {

    render(){
        return(
            <div>
              <Appi />
            </div>
              )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));