const KEY = '96b947a45d33d7dc1c49af3203966408'

// request getData:

const getData = async (cityName) => {
    const base = 'https://api.openweathermap.org/data/2.5/weather'
    const query = `?q=${cityName}&units=metric&appid=${KEY}`
    const request = await fetch(base + query);
    const data = await request.json();
    return data
}