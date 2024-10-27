import React, { useState } from 'react';
import styles from './Counter.module.scss'; // Исправленный импорт

export const Counter = () => {
    const [count, setCounter] = useState(0);

    const handlePlus = () => {
        setCounter(count + 1);
    };

    return (
        <div className={styles.btn}> {/* Используем styles.btn */}
            <h1 className={styles.qw}>{count}</h1>
            <button onClick={handlePlus}>добавить</button>
        </div>
    );
};

export default Counter;