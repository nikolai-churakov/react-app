import Layout from "./hoc/Layout/Layout";
import {Route, Switch} from "react-router-dom";
import Quiz from "./containers/Quiz/Quiz";

function App() {
  return (
    <div className="App">
        <Layout>
            <Switch>
                <Route path="/auth" component={Quiz}/>
                <Route path="/quiz-creator" component={Quiz}/>
                <Route path="/quiz/:id" component={Quiz}/>
                <Route path="/" component={Quiz}/>
            </Switch>
        </Layout>

    </div>
  );
}

export default App;
