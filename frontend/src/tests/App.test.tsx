import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import App from "../App";

test("renders correctly", () => {
  const tree = renderer.create(<App />).toJSON();

  expect(tree).toMatchSnapshot();
});

test("renders the App component", () => {
  render(<App />);

  const headerElement = screen.getByText("Election Shield");
  const footerElement = screen.getByText(
    "Accept Terms of Service and Data Collection Consent"
  );

  expect(headerElement).toBeInTheDocument();
  expect(footerElement).toBeInTheDocument();
});
