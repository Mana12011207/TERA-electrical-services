import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EnquiryForm from "../components/EnquiryForm";
import emailjs from "@emailjs/browser";

// Mocking emailjs to simulate form submission behavior
jest.mock("@emailjs/browser", () => ({
  sendForm: jest.fn(),
}));

test("form submission displays success message", async () => {
  // Mocking emailjs.sendForm to resolve successfully with a success message
  emailjs.sendForm.mockResolvedValueOnce({ message: "Success!" });
  render(<EnquiryForm />);

  // Simulate filling in the form fields
  userEvent.type(screen.getByLabelText(/name/i), "John Doe");
  userEvent.type(screen.getByLabelText(/email/i), "john@example.com");
  userEvent.type(screen.getByLabelText(/phone/i), "123456789");
  userEvent.type(screen.getByLabelText(/address/i), "123 Main St");
  userEvent.type(screen.getByLabelText(/message/i), "Test message");

  // Simulate clicking the "Send message" button
  userEvent.click(screen.getByText(/send message/i));

  // Wait for the success message to appear after form submission
  await waitFor(() => {
    expect(
      screen.getByText(/Thank you for contacting us!/i)
    ).toBeInTheDocument();
  });

  // Verify that emailjs.sendForm was called exactly once
  expect(emailjs.sendForm).toHaveBeenCalledTimes(1);
});
