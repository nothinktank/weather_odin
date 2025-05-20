async function fetchWeather(location) {
  let apiKey = '5VYKWNK7NCPEBK9WFGC8BHT5H';
  let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${apiKey}`);
  let jsonData = await response.json();
  console.log(jsonData.address);
  console.log(jsonData.description);
}
fetchWeather('taipei');