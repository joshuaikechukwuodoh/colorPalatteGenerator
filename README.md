# Palette Generator

This is a simple Color Palette Generator built with React. It generates a random 5-color palette when the "Generate Palette" button is clicked.

## Features

-   **Random Color Generation:** Generates random hexadecimal color codes.
-   **Palette Display:** Displays the generated palette as colored squares.
-   **Generate Button:** Triggers the generation of a new palette.

## Getting Started

### Prerequisites

-   Node.js and npm (or yarn) installed on your machine.

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd <repository_directory>
    ```

2.  Install dependencies:

    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  Start the development server:

    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your browser and navigate to `http://localhost:3000`.

## Usage

-   Click the "Generate Palette" button to generate a new 5-color palette.
-   The generated colors will be displayed as colored squares below the button.

## Code Explanation

-   **`useState`:** Manages the current color palette (`palette`) as an array of hexadecimal color codes.
-   **`generatePalette`:** Generates a new palette by calling `getRandomColor` five times and updating the `palette` state.
-   **`getRandomColor`:** Generates a random 6-digit hexadecimal color code (e.g., `#RRGGBB`).
-   **Component Structure:**
    -   A `palette-container` div wraps the entire palette generator.
    -   An `h2` tag displays the title "Color Palette".
    -   A `generate-button` triggers the `generatePalette` function.
    -   A `palette-colors` div contains the generated color squares.
    -   The `palette.map` function iterates through the `palette` array and creates a `palette-color` div for each color, setting its `backgroundColor` style.
-   **CSS:** The `index.css` file provides basic styling for the palette generator.

## Customization

-   You can change the number of colors in the palette by modifying the loop count in the `generatePalette` function.
-   You can customize the styling by modifying the `index.css` file.
-   You can add features like copying the color codes to the clipboard or displaying the hexadecimal values next to the color squares.

## Contributing

Feel free to contribute by submitting pull requests or opening issues for bug reports or feature requests.
