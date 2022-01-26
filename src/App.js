import React, { useState, useEffect } from 'react';
import axios from 'axios';
import World from './components/World';
import Home from './components/Home';
import logo from './images/loading.gif';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    axios.get('https://corona.lmao.ninja/v2/countries').then(
      (res) => { setData(res.data); console.log(res.data); setLoading(true); }).catch(
        () => { setData([]); setLoading(false); });
  }, []);

  const sorter_desc = (sort_condition) => {
    if (sort_condition == "country") {
      const new_data = [...data];
      new_data.sort((a, b) => {
        var nameA = a.country.toUpperCase(); // ignore upper and lowercase
        var nameB = b.country.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return 1;
        }
        if (nameA > nameB) {
          return -1;
        }

        // names must be equal
        return 0;
      });
      setData(new_data);
    }
    else if (sort_condition == "cases") {
      console.log("sorting");
      const new_data = [...data];
      new_data.sort((a, b) => { return b.cases - a.cases });
      console.log(new_data)
      setData(new_data);
    }
    else if (sort_condition == "todaycases") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.todayCases - a.todayCases });
      setData(new_data);
    }
    else if (sort_condition == "deaths") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.deaths - a.deaths });
      setData(new_data);
    }
    else if (sort_condition == "todaydeaths") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.todayDeaths - a.todayDeaths });
      setData(new_data);
    }
    else if (sort_condition == "recovered") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.recovered - a.recovered });
      setData(new_data);
    }
    else if (sort_condition == "todayrecovered") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.todayRecovered - a.todayRecovered });
      setData(new_data);
    }
    else if (sort_condition == "active") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.active - a.active });
      setData(new_data);
    }
    else if (sort_condition == "critical") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.critical - a.critical });
      setData(new_data);
    }
    else if (sort_condition == "population") {
      const new_data = [...data];
      new_data.sort((a, b) => { return b.population - a.population });
      setData(new_data);
    }

  }
  const sorter_asc = (sort_condition) => {
    if (sort_condition == "country") {
      const new_data = [...data];
      new_data.sort((a, b) => {
        var nameA = a.country.toUpperCase(); // ignore upper and lowercase
        var nameB = b.country.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        // names must be equal
        return 0;
      });
      setData(new_data);
    }
    else if (sort_condition == "cases") {
      console.log("sorting");
      const new_data = [...data];
      new_data.sort((a, b) => { return a.cases - b.cases });
      console.log(new_data)
      setData(new_data);
    }
    else if (sort_condition == "todaycases") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.todayCases - b.todayCases });
      setData(new_data);
    }
    else if (sort_condition == "deaths") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.deaths - b.deaths });
      setData(new_data);
    }
    else if (sort_condition == "todaydeaths") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.todayDeaths - b.todayDeaths });
      setData(new_data);
    }
    else if (sort_condition == "recovered") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.recovered - b.recovered });
      setData(new_data);
    }
    else if (sort_condition == "todayrecovered") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.todayRecovered - b.todayRecovered });
      setData(new_data);
    }
    else if (sort_condition == "active") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.active - b.active });
      setData(new_data);
    }
    else if (sort_condition == "critical") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.critical - b.critical });
      setData(new_data);
    }
    else if (sort_condition == "population") {
      const new_data = [...data];
      new_data.sort((a, b) => { return a.population - b.population });
      setData(new_data);
    }

  }
  return (
    <div className="App">
      <Home />
      {loading ? <World data={data} sorter_asc={sorter_asc} sorter_desc={sorter_desc} /> :
        <div className='flex justify-center'>
          <img src={logo} alt='loading' />
        </div>}
    </div>
  );
}

export default App;
