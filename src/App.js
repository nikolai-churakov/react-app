import Layout from "./hoc/Layout/Layout";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className="App">
        <Layout>
            <Quiz/>
            {/*<div style={{width: 400, border: '1px solid black'}}>*/}
            {/*    <h1>Hi react</h1>*/}
            {/*</div>*/}
        </Layout>

    </div>
  );
}

export default App;
