const getState = ({ getStore, getActions, setStore }) => {
  const backendUrl = "https://swapi.tech/api";
  return {
    store: {
      // characters: [{
      //   "height": "172",
      //   "mass": "77",
      //   "hair_color": "blond",
      //   "skin_color": "fair",
      //   "eye_color": "blue",
      //   "birth_year": "19BBY",
      //   "gender": "male",
      //   "created": "2022-11-24T20:21:16.705Z",
      //   "edited": "2022-11-24T20:21:16.705Z",
      //   "name": "Luke Skywalker",
      //   "homeworld": "https://www.swapi.tech/api/planets/1",
      //   "url": "https://www.swapi.tech/api/people/1"
      // }],
      characters : [],
      planets: [],
      vehicles: [],
      favorites: [],
    },
    actions: {
        fetchRes: async () => {
          const res = await fetch(
            backendUrl + "/people"
          );
          const data = await res.json();
          // setRecipeInp("");
          setStore({ characters: data });
        },
        loadcharactersarray: () => {
          /**
            fetch().then().then(data => setStore({ "foo": data.bar }))
          */
          fetch("https://swapi.dev/api/people/")
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            // console.log(data.results);
            setStore({characters:data.results});
          })
          .catch((error) => {
            console.log("Looks like there was a problem: \n", error);
          });},
          loadPlanetsArray: () => {
            /**
              fetch().then().then(data => setStore({ "foo": data.bar }))
            */
            fetch("https://swapi.dev/api/planets/")
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              // console.log(data.results);
              setStore({planets:data.results});
            })
            .catch((error) => {
              console.log("Looks like there was a problem: \n", error);
            });},
  

      // getCharacters: () => {
      //   let newPeople = [];
      //   fetch(backendUrl + "/people")
      //     .then((res) => res.json())
      //     .then((data) => {
      //       for (let i = 0; data.results.length > i; i++) {
      //         fetch(data.results[i].url)
      //           .then((resp) => resp.json())
      //           .then((info) => {
      //             newPeople.push(info.result.properties);
      //           })
                
      //           .catch((err) => console.log(err));
      //       }
      //     })
      //     .then(() => setStore({ characters: newPeople }))
      //     .catch((error) => console.log(error));
      // },

      // getPlanets: () => {
      //   let newPlanets = [];
      //   fetch(backendUrl + "/planets")
      //     .then((res) => res.json())
      //     .then((data) => {
      //       for (let i = 0; data.results.length > i; i++) {
      //         fetch(data.results[i].url)
      //           .then((resp) => resp.json())
      //           .then((info) => {
      //             newPlanets.push(info.result.properties);
      //           })
                
      //           .catch((err) => console.log(err));
      //       }
      //     })
      //     .then(() => setStore({ planets: newPlanets }))
      //     .catch((error) => console.log(error));
      // },

      getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles/")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          // console.log(data.results);
          setStore({vehicles:data.results});
        })
        .catch((error) => {
          console.log("Looks like there was a problem: \n", error);
        });},

      addFavorites: () => {},

      deleteFavorites: () => {},
    },
  };
};

export default getState;
