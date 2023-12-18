import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Info } from './index';

jest.mock('./styles', () => {

    return {
        useStyles: () => ({
            container: 'mock-container-class',
            label: 'mock-label-class',
            value: 'mock-value-class',
        })
    };
});

const mockInfoProps = {
    label: 'Test Label',
    value: 'Test Value',
    defaultValue: 'N/A',
};



describe('Info component', () => {

    it('renders with the correct styles and content', () => {
        const { container } = render(<Info {...mockInfoProps} />);

        // Assert that the component renders with the correct styles
        expect(container.getElementsByClassName('mock-container-class')[0]).toBeInTheDocument()
        expect(container.getElementsByClassName('mock-label-class')[0]).toBeInTheDocument()
        expect(container.getElementsByClassName('mock-value-class')[0]).toBeInTheDocument()

        // Assert that the label and value are displayed correctly
        expect(screen.getByText('Test Label')).toBeInTheDocument();
        expect(screen.getByText('Test Value')).toBeInTheDocument();
    });

    it('renders with the default value when value is not provided', () => {
        render(<Info label="Test Label" value={undefined} />);

        // Assert that the default value is displayed when value is not provided
        expect(screen.getByText('N/A')).toBeInTheDocument();
    });
});
