import React,{ useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = ()=>{

    
    const [categories, setCategory] = useState(["One Punch"]);
    // const agregar = ()=>{
    //     setState(["Hunter X", ...categories]); // Ej. 1
    //     setCategory(cate => [...cate, "Hunter"]); // Ej 2
    // }

    return(
        <>
            <h2>Gif Expert App</h2>
            <AddCategory setCategory={setCategory}></AddCategory>
            <hr/>
            {/* <button onClick={agregar}>Agregar</button> */}
            <ol>
                { categories.map( category => (
                    // return <li key={category}>{category}</li>
                    <GifGrid
                        key={category}
                        category={category}
                        />
                )) }
            </ol>
        </>
    );
};