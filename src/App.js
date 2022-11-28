import React from "react";
import{ ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from } from '@apollo/client'
import ListOfEmployee from "./Components/ListOfEmployee";
import CreateEmploee from "./Components/CreateEmployee";
import {onError} from '@apollo/client/link/error'

const errorLink = onError(({graphqlErrors, networkError}) => {
  if(graphqlErrors){
    graphqlErrors.map(({message, location, path}) => {
      alert(`Graphql error ${message}`)
    })
  }
})


const link = from([
  errorLink,
  new HttpLink({uri: "http://localhost:8080/graphql"})
])


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link:link
})

function App() {
 
  return (
    <>
      <ApolloProvider client={client}>
        <ListOfEmployee />
        {/* <CreateEmploee /> */}
      </ApolloProvider>
    </>
  );
}

export default App;




// import React from "react";
// import{ ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
// import ListOfEmployee from "./Components/ListOfEmployee";
// import CreateEmploee from "./Components/CreateEmployee";

// function App() {
//   const client = new ApolloClient({
//     uri: "http://localhost:8080/graphql",
//     cache: new InMemoryCache()
//   })
//   return (
//     <>
//       <ApolloProvider client={client}>
//         {/* <ListOfEmployee /> */}
//         <CreateEmploee />
//       </ApolloProvider>
//     </>
//   );
// }

// export default App;
