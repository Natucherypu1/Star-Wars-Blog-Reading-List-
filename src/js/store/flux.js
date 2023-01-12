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

      addFavorites: (favorite) => {
        let store = getStore()
        store.favorites.push(favorite)
        setStore(store)
      },

      deleteFavorites: (index) => {
        let store = getStore()
        let newFavoriteList = store.favorites.filter((item, i) => index != i);
        setStore({favorites:newFavoriteList})
      },
    },
  };
};

export default getState;
