import { createContext, useContext, useMemo, useReducer } from 'react';
import { AppReducer, initialState } from './AppReducer';

// const RestaurantsContext = createContext();

// const RestaurantsProvider = ({ children }) => {
//   const [restaurants, setRestaurants] = useState([]);
//   const refreshRestaurants = async () => {
//     try {
//       const res = await fetch('https://yuding.herokuapp.com/api/restaurants/all');
//       const allRestaurants = await res.json();
//       setRestaurants(allRestaurants);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <RestaurantsProvider.Provider value={{ restaurants }}>{children}</RestaurantsProvider.Provider>
//   );
// };

// export { RestaurantsProvider, RestaurantsContext };

const AppContext = createContext();
export function AppWrapper({ children }) {
  const { state, dispatch } = useReducer(AppReducer, initialState);
  const contextValue = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}
export function useAppContext() {
  return useContext(AppContext);
}
