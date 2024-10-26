import React, { createContext } from "react";
import AdvertisementData from './Ad';

const AdData = createContext();



export const AdProvider = ({children})=>{
    return(
        <>
            <AdData.Provider value={AdvertisementData}>
                {children}
            </AdData.Provider>
        </>
    )
}

export default AdData