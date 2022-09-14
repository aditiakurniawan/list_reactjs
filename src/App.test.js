import { render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./Home";
import Detail from "./page/Detail";

test("renders learn react link", () => {
  render(<App />, <Home />, <Detail />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
