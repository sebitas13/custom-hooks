
import React, { useEffect, useState } from 'react'

const localCache = {

}

export const useFetch2 = (url) => {

  const [state, setState] = useState({
    data : null,
    isLoading : true,
    hasError : false,
    error : null,
  })  

  useEffect(() => {
    getFech();
  
   
  }, [url])

  const setLoadingState = () => {
    setState({
        data : null,
        isLoading : true,
        hasError : false,
        error : null,
    })
  }
  
  const getFech = async()=>{

    setLoadingState();

    if(localCache[url]){
        console.log('usando cache');
        setState({
            data : localCache[url],
            isLoading : false,
            hasError : false,
            error : null,
        })

        return;
    }
    
    const resp = await fetch(url);

    if(!resp.ok){
        setState({
            data : null,
            isLoading : false,
            hasError : false,
            error : {
                code : resp.status,
                message : resp.statusText
            }
        });
        return;
    }
    const data = await resp.json();

    setState({
        data : data,
        isLoading : false,
        hasError : false,
        error : null
    })

    localCache[url] = data;
    
    
  }

  return {
     data : state.data,
     isLoading : state.isLoading,
     hasError : state.hasError
  }
}
