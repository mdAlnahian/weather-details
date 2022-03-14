const API_KEY = `8c2ad2ba069d934f9436a099ac1a3d0e`;
const searchTemperature = () => {
  const city = document.getElementById("city-name").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  // console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayTemperature(data));
};

const setInnerText = (id,text)=>{
    document.getElementById(id).innerText=text;
}

const displayTemperature = (temperature) => {
    setInnerText('city',temperature.name)
    //  console.log(temperature);
   setInnerText("temperature", temperature.main.temp);
   setInnerText("condition", temperature.weather[0].main);
    //set weather icon
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById("weather-icon");
    imgIcon.setAttribute('src',url)
};
