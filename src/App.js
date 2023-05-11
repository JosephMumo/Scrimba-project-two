import React from 'react';
import './App.css'
import Header from './Header';
import Main from './Main';
import Data from './Data';


function App() {
  const newData = Data.map((x) => {
    return(
      <Main
        key={x.id}
        imageUrl={x.imageUrl}
        title={x.title}
        location={x.location}
        googleMapsUrl={x.googleMapsUrl}
        startDate={x.startDate}
        endDate={x.endDate}
        description={x.description}
    />
    )
  })
  return(
    <div>
      <Header />
      {newData}
    </div>
  )
}
export default App;