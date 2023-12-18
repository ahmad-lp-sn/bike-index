import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { BikeCard } from './index';
import { BikeData } from '../../types';

// Mock data for testing
const mockData = {
    title: 'Test Bike',
    large_img: 'test_image.jpg',
    manufacturer_name: 'Test Manufacturer',
    frame_model: 'Test Model',
    serial: 'ABC123',
    date_stolen: 1672531200, 
    stolen_coordinates: [40.7128, -74.0060], 
    stolen_location: 'New York City',
    status: 'Stolen',
    description: 'Test bike description',
    url: 'https://example.com',
} as BikeData;

// Mock the useStyles hook
jest.mock('./styles', () => ({
    useStyles: () => ({
        card: 'mock-card-class',
        image: 'mock-image-class',
        detailsOuterContainer: 'mock-details-outer-container-class',
        details: 'mock-details-class',
        detailsCol: 'mock-details-col-class',
    }),
}));

// Mock the appConfig
jest.mock('../../config', () => ({
    appConfig: {
        googleMapUrl: 'https://maps.google.com',
    },
}));

describe('BikeCard component', () => {
    it('renders BikeCard component with provided data', () => {
        render(<BikeCard data={mockData} />);

        // Add your assertions based on the rendered content
        expect(screen.getByText(mockData.title)).toBeInTheDocument();
        expect(screen.getByAltText(mockData.title)).toBeInTheDocument();
        // Add more assertions as needed
    });
});
