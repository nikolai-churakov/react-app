import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className="App">
        <Layout>
            {/*<div style={{width: 400, border: '1px solid black'}}>*/}
            {/*    <h1>Hi react</h1>*/}
            {/*</div>*/}
            <Quiz/>

        </Layout>

    </div>
  );
}

export default App;
