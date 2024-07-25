import { useState, useEffect } from 'react';

const useCountry = () => {
  const [country, setCountry] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchCountryInfo = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://restcountries.com/v3.1/all`);
        const data = await response.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
        setError('The country is not found!!!');
      } finally {
        setLoading(false);
      }
    }
    fetchCountryInfo();
  }, []);

  return {
    loading,
    error,
    country
  }
}

export default useCountry;