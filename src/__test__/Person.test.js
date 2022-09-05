import { fireEvent, render, screen } from "@testing-library/react";
import Person from "../components/Person";


describe('Super Deluxe Form', () => {

    test('Form, can change Name', async () => {
        render(<Person />);
        const input = screen.getByTestId('name-input');
        const name = screen.getByTestId('name');
        fireEvent.change(input, { target: { value: 'Potato' } });
        expect(name).toHaveTextContent(`Potato`)
    })

    test('Form, can change Age', async () => {
        render(<Person />);
        const input = screen.getByTestId('age-input');
        const age = screen.getByTestId('age');
        fireEvent.change(input, { target: { value: '20' } });
        expect(age).toHaveTextContent(`20`)
    })

    test('Form, can change Gender', async () => {
        render(<Person />);
        const input = screen.getByTestId('gender-input');
        const gender = screen.getByTestId('gender');
        fireEvent.change(input, { target: { value: 'Apache Helicopter' } });
        expect(gender).toHaveTextContent(`Apache Helicopter`)
    })
})