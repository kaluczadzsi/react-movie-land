import { useEffect } from 'react';

const App = () => {
  const API_URL = 'http:/www.omdbapi.com?apikey=610450d5';

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data);
  };

  useEffect(() => {}, []);

  return <h1>App</h1>;
};

export default App;
