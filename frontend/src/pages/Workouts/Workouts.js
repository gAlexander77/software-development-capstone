import React, { useState } from 'react';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Search from './components/Search';
import Display from './components/Display';
import '../../styles/pages/Workouts/Workouts.css';

import workoutData from '../../test-data/workoutsRequest.json';

function Workouts(){
    
    const data = workoutData;

    const [currentPage, setCurrentPage] = useState(1);

    const [searchQuery, setSearchQuery] = useState("");
    
    const filteredWorkouts = data.filter((workout) =>
        workout.workoutName.toLowerCase().replace(/-/g, " ").includes(searchQuery.toLowerCase().replace(/-/g, " "))
    );
    
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
        setCurrentPage(1);
    };

    console.log(data);

    return(
        <>
            <Nav/>
            <div className="workouts-page">
                <h1 id="page-title">Workouts</h1>
                <Search handleSearchChange={handleSearchChange}/>
                <Display 
                    data={filteredWorkouts}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                />
            </div>
            <Footer/>
        </>
    );
}

export default Workouts;