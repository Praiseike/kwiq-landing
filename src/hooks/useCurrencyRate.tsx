import { useState, useEffect } from "react";
import axios from "axios";

const useCurrencyRate = (currencyName: string) => {
  const [rate, setRate] = useState(null);

  useEffect(() => {
    const fetchRate = async () => {
      try {
        const response = await axios.get(`https://test-api.kwiq.app/api/v1/quidax/markets/tickers/${currencyName.toLowerCase()}`);
        if (response.data) {
          setRate(response.data.data.lastPrice);
        }
      } catch (error) {
        console.error("Error fetching currency rate:", error);
      }
    };

    fetchRate();
  }, [currencyName]);

  return rate;
};

export default useCurrencyRate;
