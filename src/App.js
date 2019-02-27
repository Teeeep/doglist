import React, { Component } from 'react'
import DogsListContainer from './DogsListContainer'
import { Route } from 'react-router-dom'
import DogBreedImagesContainer from './DogBreedImagesContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <main>
          <Route exact path="/" component={DogsListContainer} />
          <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />
        </main>
      </div>
    );
  }
}

export default App;
