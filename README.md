# Weather App

This is a simple weather application that checks if it will rain tomorrow in a specified location.

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/nayananandofficial/RainCheckApp.github.io.git
    cd "My Weather App"
    ```

2. Install dependencies:
    ```bash
    npm install
    ```````````

3. Obtain an OpenWeatherMap API key:
    - Sign up for a free account at [OpenWeatherMap](https://home.openweathermap.org/users/sign_up).
    - Log in and navigate to the [API keys section](https://home.openweathermap.org/api_keys).
    - Click "Create Key", name your key, and generate it.
    - Copy your API key.


4. Create a `.env` file in the root directory and add your API key:
    `````````````
    WEATHER_API_KEY=your_openweathermap_api_key
    `````````````

5. Start the server:
    ```bash
    npm run dev
    ```````````

6. Open your browser and go to `http://localhost:3000`.

## Usage

Enter the name of a city to check if it will rain tomorrow in that location.

## License

This project is licensed under the MIT License.