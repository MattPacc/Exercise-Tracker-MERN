import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AddExercisePage = () => {

    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [language, setLanguage] = useState('');

    const navigate = useNavigate();

    const addExercise = async () => {
        const newExercise = {title, year, language};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: { 'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert("Successfully added a new Exercise");
        }else{
            alert(`Failed to add a new Exercise, status code: ${response.status}`)
        }
        navigate("/");
    };



    return (
        <div>
            <h1>Add Exercise</h1>
            <input
                type="text"
                placeholder="Enter name here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setYear(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <input
                type="text"
                value={unit}
                placeholder="Enter unit here"
                onChange={e => setUnit(e.target.value)} />
            <input
                type="text"
                value={date}
                placeholder="Enter date here"
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;