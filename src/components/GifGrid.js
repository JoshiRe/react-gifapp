import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import React,{ useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
// import { getGif } from '../helpers/getGifs';

export const GifGrid = ({category})=>{

    const {data:images, loading} = useFetchGifs(category);

    return(
        <>
            <h3>{category}</h3>
            { loading && <p>loading</p> }
            <div className="card-grid">
                
                    {
                        images.map( img =>{
                            return (
                                <GifGridItem 
                                    key={img.id}
                                    {...img}/>
                            )
                        } )
                    }
                
            </div>
        </>
    );

};