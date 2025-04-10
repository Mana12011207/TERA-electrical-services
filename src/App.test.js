import { render, screen } from "@testing-library/react";
import App from "./App.js";
import { BrowserRouter } from "react-router-dom";

test("renders home correctly", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  // Search for the text "Welcome" in the rendered output, which is assumed to be on the Home page
  const homeText = screen.getByText(/Welcome/i);
  // Verify that the "Welcome" text is present in the document
  expect(homeText).toBeInTheDocument();
});
