import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import OrderHeaderDetails from './OrderHeaderDetails';

test("Formats date correctly 1st", () => {
    render(<OrderHeaderDetails dispatchDate="2019-08-01T04:39:42-05:00" />);
    expect(screen.getByTestId("dispatchDate")).toHaveTextContent("August 1st 2019");
});

test("Formats date correctly 2nd", () => {
    render(<OrderHeaderDetails dispatchDate="2019-08-02T04:39:42-05:00" />);
    expect(screen.getByTestId("dispatchDate")).toHaveTextContent("August 2nd 2019");
});

test("Formats date correctly 3rd", () => {
    render(<OrderHeaderDetails dispatchDate="2019-08-03T04:39:42-05:00" />);
    expect(screen.getByTestId("dispatchDate")).toHaveTextContent("August 3rd 2019");
});

test("Formats date correctly 4th", () => {
    render(<OrderHeaderDetails dispatchDate="2019-08-04T04:39:42-05:00" />);
    expect(screen.getByTestId("dispatchDate")).toHaveTextContent("August 4th 2019");
});