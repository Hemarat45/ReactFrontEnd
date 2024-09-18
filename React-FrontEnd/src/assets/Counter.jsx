import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);
    function increment() {
        setCount(count + 1);
        }
    function decrement() {
        setCount(count - 1);
    }    

    return (
        <div>
            <h1>Count value is: {count}</h1>
            <button onClick={increment}>เพิ่ม</button>
            <button onClick={decrement}>ลบ</button>
        </div>
    );
}