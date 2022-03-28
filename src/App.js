import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import UserPage from "./Pages/UserPage";
import { makeStyles } from "@material-ui/core";
import Form from "./Components/Form";


function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#14161a",
      color: "#fff",
      minHeight: "100vh",
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/users/:id" component={UserPage} />
        <Route path="/login" component={Form}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
