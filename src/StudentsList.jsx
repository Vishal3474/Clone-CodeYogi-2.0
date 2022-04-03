import React, {useEffect, useState} from "react";
import StudentsCard from "./StudentsCard";
import axios from "axios";



function StudentsList(props) {
  

    const [students, setStudents] = useState([]);
      
    useEffect(() => {
        const token = axios.get("https://randomuser.me/api/?results=20")
        token.then((response) => {
            setStudents(response.data.results);
            console.log(response.data.results);
        });
    }, []);
  
    return(
        
        <div className="h-screen bg-white ml-10">
            
            <marquee className="text-3xl text-red-500 font-semibold">CodeYogi 2.0 Students</marquee>
              <div className="flex flex-wrap ">  {students.map((u) => (
                    <StudentsCard user={u} />
                     ))}
              </div>
            
            
        </div>
        
    );
}

export default StudentsList;