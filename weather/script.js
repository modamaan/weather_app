async function check(){
    let searchPlace = input.value
    if(!searchPlace){
      alert('Please Enter The Search City....')
    }else{
      const data = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${searchPlace}&units=metric&appid=03a094de2fbed757402784c8ab602833`)
      data.json().then((output)=>{
        displayData(output);
      })
    }
  }

  function displayData(output){
    let weatherDetails = output
    let cityname = `${weatherDetails.name} , ${weatherDetails.sys.country}`
    let temp = `${Math.round(weatherDetails.main.temp)}°C`
    let weather = weatherDetails.weather[0].description
    let now = new Date();
    let date = dateBuilder(now);

    html_Data = ` <section class="location">
        <div class="city">${cityname}</div>
        <div class="date">${date}</div>
      </section>

      <div class="current">
        <div class="temp"><span>${temp}</span></div>
        <div class="weather">${weather}</div>
      </div>`
      result.innerHTML = html_Data
  }
  function dateBuilder(d) {
let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[d.getDay()];
let date = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`;
}