import React from 'react';
import { render, cleanup, waitForDomChange, fireEvent } from '@testing-library/react';
import App from './App';

afterEach(cleanup);
//Testa se em algum momento do render, aparece o texto carregando
describe('Movie List', () => {
    test('Renders a loading string' , () => {
        const { getByText } = render(<App />);
        expect(getByText('Carregando...')).toBeDefined();
    });

test ('Renders the movie titles after the page loads', async () => {
    const { queryByText } = render(<App />);

    await waitForDomChange();

    expect(queryByText('Kingsglaive')).not.toBeNull();
    expect(queryByText('Carregando...')).toBeNull();
    expect(queryByText('Final Fantasy')).not.toBeNull();
    expect(queryByText('Ghost In The Shell')).not.toBeNull();
    expect(queryByText('Appleseed Alpha')).not.toBeNull();
    expect(queryByText('Resident Evil')).not.toBeNull();

    test('Renders the movies details in a separate page when "Ver detalhes" button is clicked"', async() => {
        const { queryByText, queryByTestId } = render(<App />);
            //Usa propriedade 'data-testid' na tag HTML ou JSX para procurar
        await waitForDomChange();

        fireEvent.click(querybyTestId('KingsglaiveDe'));

        await waitForDomChange();

        expect(queryByText('Genre: action')).not.toBeNull();
        expect(queryByText('Rating: 4.5')).not.toBeNull();
        
    } )
    });
});
