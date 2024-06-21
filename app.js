import express from 'express';
import axios from 'axios';
import path from 'path';
import { fileURLToPath } from 'url';
import { config } from 'dotenv';

config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { weather: null, willRain: false, willBeCloudy: false, error: null });
});

app.post('/', async (req, res) => {
    const city = req.body.city;
    const apiKey = process.env.OPENWEATHERMAP_API_KEY;
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await axios.get(apiUrl);
        const weather = response.data;
        const tomorrowWeather = weather.list.find(item => item.dt_txt.includes('12:00:00'));
        const willRain = tomorrowWeather.weather.some(item => item.main.toLowerCase().includes('rain'));
        const willBeCloudy = tomorrowWeather.weather.some(item => item.main.toLowerCase().includes('clouds'));

        res.render('index', { weather: { city: weather.city, weather: tomorrowWeather.weather }, willRain, willBeCloudy, error: null });
    } catch (error) {
        res.render('index', { weather: null, willRain: false, willBeCloudy: false, error: 'Error retrieving weather data. Please try again.' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
