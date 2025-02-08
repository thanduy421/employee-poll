import { useEffect } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Login from "./Login";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import Nav from "./Nav";
import { Routes, Route } from "react-router-dom";
import NewPoll from "./NewPoll";
import PollPage from "./pollPages/PollPage";
import Leaderboard from "./leaderboardComponents/Leaderboard";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <>
      <LoadingBar />
      <div className="container">
        {props.loading === true ? (
          <Login />
        ) : (
          <>
          <Nav />
          <Routes>
            <Route path="/" exact element={<Dashboard />} />
            <Route
              path="/questions/:question_id"
              exact
              element={<PollPage />}
            />
            <Route path="/add" element={<NewPoll />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
          </>
        )}
      </div>
    </>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
