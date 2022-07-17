import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
    test("Renders the button component", () => {
        render(<Button label={"Hello World"} /> );
    })
})