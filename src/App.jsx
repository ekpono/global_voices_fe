import { BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './navigation/AppRoutes'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { Toaster } from 'react-hot-toast'
import { RecoilRoot } from "recoil";
import { backendUrl } from './config'


const client = new ApolloClient({
  uri: backendUrl,
  cache: new InMemoryCache()
})
function App() {


  return (
    <>
    <ApolloProvider client={client}>
      <RecoilRoot>
      <Router>
        <Toaster />
          <AppRoutes />
      </Router>
      </RecoilRoot>
    </ApolloProvider>
    </>
  )
}

export default App
