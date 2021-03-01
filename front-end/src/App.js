import './App.css';
import {client} from './config/gql_config';
import { ApolloProvider } from '@apollo/client';
import { Students } from './components/Students';

function App() {
  return (
    <div className="App">
     <ApolloProvider client={client}>
      
      <Students />
    </ApolloProvider>
    </div>
  );
}

export default App;
