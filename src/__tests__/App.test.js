import { render, fireEvent } from "@testing-library/react";
import React from "react";
import App from "../components/App";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../utils/simulation";
import "@testing-library/jest-dom/extend-expect";

describe("App", () => {
  it("Login Page will match snapshot", async () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    expect(component).toMatchSnapshot();
  });

  it("the Dashboard Page should be displayed after user login", async () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );

    const userDropbox = component.getByTestId("test-select");

    fireEvent.change(userDropbox, { target: { value: "johndoe" } });

    expect(component.getByTestId("test-db-heading")).toBeInTheDocument();
  });
});
