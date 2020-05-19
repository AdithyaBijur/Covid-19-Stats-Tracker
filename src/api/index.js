import axios from "axios";

const url = "https://corona.lmao.ninja";

export const fetchData = async (country) => {
  var urll = `${url}/v2/all`;
  if (country) {
    urll = `https://corona.lmao.ninja/v2/countries/${country}`;
  }
  try {
    const { data } = await axios.get(urll);
    // console.log(`${url}/all`);
    const modifiedData = {
      total:data.cases,
      active: data.active,
      recovered: data.recovered,
      deaths: data.deaths,
    };
    return modifiedData;
  } catch (error) {
    // console.log(error);
  }
};

export const fetchDailyData = async (country) => {
  var urll = url;
  if (country) {
    urll = `${url}/v2/historical/${country}`;
  } else {
    urll = `${url}/v2/historical/all`;
  }

  try {
    const response = await axios.get(urll);
    if (country) return response.data.timeline;
    else return response.data;
  } catch (error) {
    // console.log(error);
  }
};


export const fetchDailyDatacompare = async (country) => {
   var urll = url;
  //  console.log(country)
   if (country) {
     
     var res=[]
   for(var i=0;i<country.length;i++)
   {
   try {
      urll = `${url}/v2/historical/${country[i]}`;
     const response = await axios.get(urll);
     response.data.timeline.country=country[i]
     res=[...res,response.data.timeline]

   } catch (error) {
    //  console.log(error);
   }

}

  return (res) 
 }
};


export const fetchCountries = async () => {
  try {
    const response = await axios.get(`${url}/v2/historical`);

    return Array.from(new Set(response.data.map((result) => result.country)));
  } catch (error) {
    // console.log(error);
  }
};

export const fetchState = async () => {
  try {
    const response = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
   
    return Array.from(new Set(response.data.data.regional.map((result) => result.loc)));
  } catch (error) {
    // console.log(error);
  }
};

export const fetchStateCard = async (state) => {
  try {
    const response = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    
    return response.data.data.regional.filter((result) => result.loc===state)[0];
  } catch (error) {
    // console.log(error);
  }
};

export const fetchStateAll = async () => {
  try {
    const response = await axios.get('https://api.rootnet.in/covid19-in/stats/latest');
    
    return response.data.data.regional;
  } catch (error) {
    // console.log(error);
  }
};




//for compare
// export const fetchCountries2 = async () => {
//   try {
//     const response = await axios.get(`${url}/v2/historical`);

//     return Array.from(
//       new Set(
//         response.data.map((result) => {
//           return { label: result.country };
//         })
//       )
//     );
//   } catch (error) {
//     console.log(error);
//   }
// };
