import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';



export const getPlacesData = async (sw,ne) => {
    try {
        const {data: {data}} = await axios.get(URL ,  {
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
          },
          headers: {
            'X-RapidAPI-Key': '83213e2fb5msh95c0bab8e212072p1b0b36jsn0e0e6a97bda3',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });
        // const response = await axios.get(URL, options);
        // const innerData = response.data.data;
        return data;
    } catch (error) {
        // console.log(error);
    }
}