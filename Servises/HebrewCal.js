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

function ConvertDateFormat(date){
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
};

module.exports={
    HebCal,
    ConvertDateFormat
}