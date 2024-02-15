import { WeatherBox } from "./WeatherBox";

export function WeatherList({ forecastInfo, setActiveIndex }) {
  return forecastInfo && forecastInfo.forecastday
    ? forecastInfo.forecastday.map((_, index) => {
        return (
          <div key={index} onClick={() => setActiveIndex(index)}>
            <WeatherBox
              key={index}
              day={forecastInfo.forecastday[index].date}
              icon={forecastInfo.forecastday[index].day.condition.icon}
              weather={forecastInfo.forecastday[index].day.condition.text}
              maxTemp_c={forecastInfo.forecastday[index].day.maxtemp_c}
              minTemp_c={forecastInfo.forecastday[index].day.mintemp_c}
              avgTemp_c={forecastInfo.forecastday[index].day.avgtemp_c}
              windSpeed={forecastInfo.forecastday[index].day.maxwind_kph}
              humidity={forecastInfo.forecastday[index].day.avghumidity}
            />
          </div>
        );
      })
    : null;
}
