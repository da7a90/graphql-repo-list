import React from 'react'
import { createClient, Provider } from 'urql'
import './App.css'
import PinnedRepos from './components/PinnedRepos'

const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
    headers: { authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}` }
  }
})

const App = () => (
  <Provider value={client}>
    <div className='App' style={{background : 'none', marginTop:'-200px', padding:'2%'}}>
      <h1>Sidi Ahmed Ahmed cheikh | Da7a90 </h1>
      <h4> My 6 pinned repositories and their  </h4>
     <h2>  
<div className="dropping-texts">
  <div>name</div>
  <div>description</div>
  <div>and link</div>
  <div>using the github graphQl API</div>
</div>
</h2>
      
     
   <PinnedRepos />
    </div>
  </Provider>
)

export default App