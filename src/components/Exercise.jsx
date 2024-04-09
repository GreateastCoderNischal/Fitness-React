import React, { useState,useEffect } from 'react'
import { exerciseAPI } from '../Api/FetchData'

const Exercise = ({ exercise }) => {
    const [items,setItems]=useState([])
   
    
    const generator=async(items)=>{
        let response=await exerciseAPI(items);
        return response
    }
    useEffect(() => {
        for (const iterator of exercise) {
            console.log(iterator)
            setItems(prev=>[...prev,generator(iterator)])
        }
    }, [])
    
    return (
        <div>
            {
                items.map((item, index) => {
                    const { name, equipment, difficulty, muscle, instructions } = item
                    return (
                        <div>
                            Exercises :                        
                        <div key={index}>
                            <li>Name:{name}</li>
                            <li>Equipment:{equipment}</li>
                            <li>difficulty:{difficulty}</li>
                            <li>Muscle:{muscle}</li>
                            <li>Instructions:{instructions}</li>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Exercise
