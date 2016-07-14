import React from 'react'
import ReactDOM from 'react-dom'

class MapView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        MapView component
      </div>
    )
  }
}

ReactDOM.render(
  <MapView />,
  document.getElementById("root")
)
