import React, { useEffect } from 'react'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import { useStateContext } from './contexts/ContextProvider'
import axios from 'axios'

const App = () => {

  const {setFinanceData, setPropertyData} = useStateContext();
  const fetchFinance = async () => {
    try {
      const url = `${process.env.REACT_APP_BASE_URL}/finance`;
      console.log(url);
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/finance/`);
      if(res.data.data){
        setFinanceData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }

  }
  const fetchProperty = async () => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/property`);
      if(res.data.data){
        setPropertyData(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }

  }

  useEffect(() => {
    fetchFinance();
    fetchProperty();
  }, []);
  return (
    <BrowserRouter>
      <div><Home/></div>
    </BrowserRouter>
  )
}

export default App