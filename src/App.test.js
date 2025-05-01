import { render, screen } from '@testing-library/react';
import App from './App';

describe('GPA Calculator', () => {
  test('renders header and main elements', () => {
    render(<App />);
    
    // Check for header elements
    expect(screen.getByText('GPA Calculator')).toBeInTheDocument();
    expect(screen.getByText('Track and calculate your academic performance')).toBeInTheDocument();
    
    // Check for department selection
    expect(screen.getByText('Department Selection')).toBeInTheDocument();
    expect(screen.getByText('Computer Science')).toBeInTheDocument();
    
    // Check for stats sections
    expect(screen.getByText('Total Credit Hours')).toBeInTheDocument();
    expect(screen.getByText('Cumulative GPA')).toBeInTheDocument();
    expect(screen.getByText('Total Points')).toBeInTheDocument();
    
    // Check for table headers
    expect(screen.getByText('Code')).toBeInTheDocument();
    expect(screen.getByText('Course Name')).toBeInTheDocument();
    expect(screen.getByText('Credits')).toBeInTheDocument();
    expect(screen.getByText('Mark')).toBeInTheDocument();
    expect(screen.getByText('Grade')).toBeInTheDocument();
  });
});
