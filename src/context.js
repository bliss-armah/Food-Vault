import React, { useState, useEffect, useContext } from "react";
import { useCallback } from "react";
import axios from "axios";
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])

  const fetchData = async() => {
    setLoading(true)
    try {
      const resp = await axios.get(`${url}`)
      const { drinks } = resp.data;
      if (drinks) {
        const newData = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = item
          return ({
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          })
        })
        setData(newData)
      }
      else {
        setData([])
      }
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  return (
    <AppContext.Provider value={{ loading,data }}>{children}</AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext,AppProvider};
