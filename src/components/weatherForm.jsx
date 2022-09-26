import { useState } from "react";
import styles from './weatherForm.module.css';
export default function WeatherForm({onChangeCity}){
    const [city, setCity] = useState('');
    function onChange(event){
        const value = event.target.value;
        if (value !== '') {
            setCity(value);
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        onChangeCity(city);
    }
    return <form onSubmit={handleSubmit} className={styles.container} >
        <input type="text" onChange={onChange} className={styles.input} placeholder="Enter the ubication you want to see" />
    </form>
}