import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import HighlightText from './index';

describe('HighlightText', () => {
  it('renders the text without highlighting when keyword is not provided', () => {
    render(<HighlightText text="Hello World" keyword="" />);

    const textElement = screen.getByText(/Hello World/);
    expect(textElement).toBeInTheDocument();
    expect(textElement).not.toHaveClass('svl-highlight-text-highlight');
  });

  it('highlights the keyword in the text', () => {
    render(<HighlightText text="Hello World" keyword="World" />);

    const highlightedElement = screen.getByText(/World/);
    expect(highlightedElement).toBeInTheDocument();
    expect(highlightedElement).toHaveClass('svl-highlight-text-highlight');
  });

  it('applies the custom highlight style', () => {
    const highlightStyle = { backgroundColor: 'yellow' };
    render(
      <HighlightText
        text="Hello World"
        keyword="World"
        highlightStyle={highlightStyle}
      />,
    );

    const highlightedElement = screen.getByText(/World/);
    expect(highlightedElement).toHaveStyle('background-color: yellow');
  });

  it('handles case-insensitive keyword highlighting', () => {
    render(<HighlightText text="Hello World" keyword="world" />);

    const highlightedElement = screen.getByText(/World/i);
    expect(highlightedElement).toBeInTheDocument();
    expect(highlightedElement).toHaveClass('svl-highlight-text-highlight');
  });

  it('renders multiple highlighted parts when the keyword appears multiple times', () => {
    render(<HighlightText text="World Hello World" keyword="World" />);

    const highlightedElements = screen.getAllByText(/World/);
    expect(highlightedElements).toHaveLength(2);
    highlightedElements.forEach((element) => {
      expect(element).toHaveClass('svl-highlight-text-highlight');
    });
  });

  it('renders the text correctly when keyword is not in the text', () => {
    render(<HighlightText text="Hello World" keyword="Test" />);

    const textElement = screen.getByText(/Hello World/);
    expect(textElement).toBeInTheDocument();
    expect(textElement).not.toHaveClass('svl-highlight-text-highlight');
  });

  it('applies additional className to the container', () => {
    render(
      <HighlightText
        text="Hello World"
        keyword="World"
        className="custom-class"
      />,
    );

    const containerElement = screen.getByText(/Hello/).closest('span');
    expect(containerElement).toHaveClass('svl-highlight-text');
    expect(containerElement).toHaveClass('custom-class');
  });

  it('passes additional props to the container', () => {
    render(
      <HighlightText
        text="Hello World"
        keyword="World"
        data-testid="highlight-container"
      />,
    );

    const containerElement = screen.getByTestId('highlight-container');
    expect(containerElement).toBeInTheDocument();
  });
});
