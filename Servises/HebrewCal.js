const axios=require('axios');

const HebCal=async(gregorianDate) =>{
    try{
        const resp = await  axios.get(`https://www.hebcal.com/converter?cfg=json&date=${gregorianDate}&g2h=1&strict=1`);
        return resp.data.hebrew;
    }
    catch(err){
        console.error(err);
    }
};

export default HebCal;