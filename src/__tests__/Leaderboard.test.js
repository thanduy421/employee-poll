import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../utils/simulation";
import Leaderboard from "../components/leaderboardComponents/Leaderboard";

describe("Leaderboard", () => {
  it("will match snapshot", async () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Leaderboard />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
