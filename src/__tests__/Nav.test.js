import { render } from "@testing-library/react";
import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../utils/simulation";
import Nav from "../components/Nav";
import "@testing-library/jest-dom/extend-expect";
import { handleLogin } from "../actions/shared";

describe("Nav", () => {
  it("should display logout button and three navigation links", async () => {
    store.dispatch(handleLogin("johndoe"));
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );
    expect(component.getByTestId("test-logout")).toBeInTheDocument();
    expect(component.getByText(/home/i)).toBeInTheDocument();
    expect(component.getByText(/new poll/i)).toBeInTheDocument();
    expect(component.getByText(/leaderboard/i)).toBeInTheDocument();
  });
});
