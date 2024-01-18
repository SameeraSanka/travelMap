import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Key': '83213e2fb5msh95c0bab8e212072p1b0b36jsn0e0e6a97bda3',
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
  }
};

export const getPlacesData = async () => {
    try {
        const {data: {data}} = await axios.get(URL , options);
        // const response = await axios.get(URL, options);
        // const innerData = response.data.data;
        return data;
    } catch (error) {
        console.log(error);
    }
}