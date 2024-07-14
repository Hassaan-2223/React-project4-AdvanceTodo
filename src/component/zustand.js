

import React from "react";
import useStore from "./useStore"; 


const Counter = () => {
  const cour = useStore((state) => state.courses);
  const addCour = useStore((state) => state.addCourse);
  const inpuVal = useStore((state)=>state.inpuValue)
  const addin = useStore((state)=>state.addInpu)

  const handleInpu = (text) =>{
    if(text){
        addCour(text)
    }
  }


  return (
    <>
      {/* <h1>Courses:</h1>
      {courses.length !== 0 ? (
         <ul>
         {courses.map((course, index) => (
           <li>{course}</li>
         ))}
       </ul>
      ):
      
      (<h3>
        no element
      </h3>)}

      <button onClick={()=>{addCourse(courses.length+1)}}>Add Course </button> */}

    <h1>courses</h1>
    {cour.length > 0 ? (
        <ul>
            {cour.map((elem)=>(
                <li>{elem}</li>
            ))}
        </ul>
    ):(
        <h2>no element</h2>
    )}

    <input type="text" value={inpuVal} onChange={(e)=>addin(e.target.value)}/>

    
    <button onClick={()=>(handleInpu(inpuVal))}>add courses</button>
    

    </>
  );
};

export default Counter;

