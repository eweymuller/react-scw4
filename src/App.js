import "./App.css";

function App() {
  return (
    <div className="App">
      <body>
        <div className="container">
          <head>
            <title>Eva's Weather App</title>
            <meta charset="UTF-8" />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
              rel="stylesheet"
              integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
              crossorigin="anonymous"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap"
              rel="stylesheet"
            />
            <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
          </head>
          <form id="search-form">
            <div className="row header">
              <div className="col-10">
                <input
                  type="text"
                  className="search"
                  id="searchInput"
                  placeholder="Search City..."
                />
                <input className="button" type="submit" value="Search" />
                <button className="button" id="myLocation">
                  My Location
                </button>
              </div>
              <div className="col-2">
                <button className="button" id="imperialButton" type="button">
                  Imperial
                </button>
                <button className="button" id="metricButton" type="button">
                  Metric
                </button>
              </div>
            </div>
          </form>
          <br />
          <section className="row topPart">
            <div className="col-6">
              <h1 className="city" id="city">
                Chamonix
              </h1>
              <p className="country" id="country">
                France
              </p>
              <hr />
            </div>
            <div className="col-7">
              <div className="row">
                <div className="col-3 title" id="today">
                  Today
                </div>
                <div className="col-3 title">High</div>
                <div className="col-3 title">Low</div>
              </div>

              <div className="row">
                <div className="col-3 title" id="FullTodayDate">
                  <span id="todayMonth">--</span>/<span id="todayDay">--</span>
                </div>
                <div className="col-5"></div>
                <div className="col-2 weatherVisual">
                  <img src="" alt="img" id="todayWeatherVisual" className="" />
                </div>
              </div>

              <div className="row">
                <div className="col-3 title" id="FulltodayTime">
                  <span id="hours">--</span>:<span id="minutes">--</span>
                </div>
                <div className="col-3 temp">
                  <h6>
                    <span className="temperature" id="todayTempHigh">
                      --
                    </span>
                    °<span className="unit">C</span>
                  </h6>
                </div>
                <div className="col-3 temp">
                  <h6>
                    <span className="temperature" id="todayTempLow">
                      --
                    </span>
                    °<span className="unit">C</span>
                  </h6>
                </div>
              </div>
            </div>

            <div className="col-2 title">
              <div className="row weatherRows">Wind</div>
              <div className="row weatherRows">Humidity</div>
              <div className="row weatherRows">Feels like</div>
            </div>
            <div className="col-1"></div>
            <div className="col-2 temp">
              <div className="row weatherRows">
                <h6>
                  <span id="wind">--</span>
                  <span className="unitsPerHour"> kph</span>
                </h6>
              </div>
              <div className="row weatherRows">
                <h6>
                  <span id="humidity">--</span> %
                </h6>
              </div>
              <div className="row weatherRows">
                <h6>
                  <span id="feel">--</span>°<span className="unit">C</span>
                </h6>
              </div>
            </div>
          </section>
          <p>
            Weather: <span className="weatherDescription dark"></span>
          </p>
          <div className="card forecast" id="forecast"></div>
          <footer>
            <a href="https://github.com/eweymuller/react-scw4" target="-blank">
              Open-source code
            </a>
            by Eva Weymuller
          </footer>
        </div>
      </body>
    </div>
  );
}

export default App;
