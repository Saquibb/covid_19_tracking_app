import axios from 'axios';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = await axios.get(url);
  return { confirmed, recovered, deaths, lastUpdate };
};

export const fetchDailyData = async () => {
  const { data } = await axios.get(`${url}/daily`);
  const modifiedData = data.map((dailyData) => ({
    confirmed: dailyData.confirmed.total,
    deaths: dailyData.deaths.total,
    date: dailyData.reportDate,
  }));
  return modifiedData;
};
