import { ApolloProvider } from '@apollo/client'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { client } from './graphql/client.ts'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
)
