import '../Style/IncrementDecrement.css'

export function IncrementDecrement({counterValue}) {
    return (
        <div className="update-counter-element">
            <div className="increment">
                <button className="button-inc-dec">+</button>
                <input className="value-inc-dec" value={1}/>
            </div>
            <div className="decrement">
                <button className="button-inc-dec">-</button>
                <input className="value-inc-dec" value={1}/>
            </div>
        </div>
    )
}