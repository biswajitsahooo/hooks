import { useState } from "react";

const CounterComponent = () => {
    const [count,setCount] = useState(15);

    return(
        <div>
            <p>
                Count Components - {count}
            </p>
            <h5>Numbesr is {count % 2 === 0 ? "Even" : "Odd"}</h5>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
};

export default CounterComponent;