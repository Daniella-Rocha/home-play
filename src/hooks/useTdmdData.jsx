import { useState, useEffect } from "react";

import { requestDataTmdb } from "../axios/config";

const useTdmdData = (endpoint) => {
  const [fetchData, setFetchData] = useState([]);
  
  const getDataTmbd = async () =>{
    const response = await requestDataTmdb.get(endpoint);
    const data = await response.data.results;
    
    setFetchData(data);
  }
  
  useEffect(() =>{
    getDataTmbd();
  }, []);
  
  return fetchData;
}

export default useTdmdData
