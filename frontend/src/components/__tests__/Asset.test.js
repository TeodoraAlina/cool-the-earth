import React from "react";
import { render } from "@testing-library/react";
import Asset from "../Asset";

describe("Asset Component", () => {
  test("renders a spinner when 'spinner' prop is true", () => {
    const { container } = render(<Asset spinner={true} />);
    const spinnerElement = container.querySelector(".spinner-border");
    expect(spinnerElement).toBeInTheDocument();
  });

  test("does not render a spinner when 'spinner' prop is false", () => {
    const { container } = render(<Asset spinner={false} />);
    const spinnerElement = container.querySelector(".spinner-border");
    expect(spinnerElement).not.toBeInTheDocument();
  });

  test("renders an image with 'src' prop", () => {
    const src = "example.jpg";
    const { container } = render(<Asset src={src} />);
    const imgElement = container.querySelector("img");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", src);
  });

  test("does not render an image when 'src' prop is not provided", () => {
    const { container } = render(<Asset />);
    const imgElement = container.querySelector("img");
    expect(imgElement).not.toBeInTheDocument();
  });

  test("renders a message when 'message' prop is provided", () => {
    const message = "This is a test message";
    const { getByText } = render(<Asset message={message} />);
    expect(getByText(message)).toBeInTheDocument();
  });

  test("does not render a message when 'message' prop is not provided", () => {
    const { queryByText } = render(<Asset />);
    expect(queryByText("This is a test message")).not.toBeInTheDocument();
  });
});