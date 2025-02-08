import { render, fireEvent } from "@testing-library/react";
import React from "react";
import NewPoll from "../components/NewPoll";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../utils/simulation";
import "@testing-library/jest-dom/extend-expect";

describe("NewPoll Page: elements", () => {
  it("The submit button should be disabled when only option 1 is entered", async () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const input1 = component.getByTestId("test-option1");
    const submitButton = component.getByTestId("test-submit-btn");

    fireEvent.change(input1, { target: { value: "stay" } });
    expect(submitButton).toBeDisabled();
  });

  it("The submit button should be disabled when only option 2 is entered", async () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const input2 = component.getByTestId("test-option2");
    const submitButton = component.getByTestId("test-submit-btn");

    fireEvent.change(input2, { target: { value: "leave" } });
    expect(submitButton).toBeDisabled();
  });

  it("The submit button become active once both options have been entered.", async () => {
    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <NewPoll />
        </Provider>
      </MemoryRouter>
    );

    const input1 = component.getByTestId("test-option1");
    const input2 = component.getByTestId("test-option2");
    const submitButton = component.getByTestId("test-submit-btn");

    fireEvent.change(input1, { target: { value: "stay" } });
    fireEvent.change(input2, { target: { value: "leave" } });

    expect(submitButton).not.toBeDisabled();
  });
});
