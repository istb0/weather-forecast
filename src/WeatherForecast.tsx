import React, { useState } from 'react';

const WeatherForecast: React.FC = () => {
  const [date, setDate] = useState<string>('');
  const [forecast, setForecast] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value);
  };

  const generateRandomWeather = () => {
    const weatherOptions = ['晴れ', '雨', '曇り', '雪'];
    const randomWeather = weatherOptions[Math.floor(Math.random() * weatherOptions.length)];
    setForecast(randomWeather);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    generateRandomWeather();
  };

  return (
    <div>
      <h1>天気予報</h1>
      <form onSubmit={handleSubmit}>
        <label>
          日付を入力してください:
          <input type="date" value={date} onChange={handleDateChange} />
        </label>
        <button type="submit">予報を表示</button>
      </form>
      {forecast && (
        <div>
          <h2>{date}の天気予報</h2>
          <p>{forecast}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
