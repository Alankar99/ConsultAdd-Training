import './button.css';

function Button(props) {

    let sortByValue;
    function handleChange(e)
    {
        sortByValue = e.target.value;
        props.dataTransfer(sortByValue);
    }
    return ( 
        <>
        <div className="card">

        <div id="sort">Sort By</div>
        <form>
            <div className="form">

                <div id="b">
                    <label htmlFor='name'>Name</label>
                    <input name="sort" type="radio" value="0" id="name" onChange={handleChange} />
                </div>
                
                <div id="b">
                    <label htmlFor="age">Birth Date</label>
                    <input name="sort" type="radio" value="1" id="age" onChange={handleChange} />
                </div>
            </div>
                
            {/* <div class="submit">
                <input id="btn" type="submit" value="Sort" /> 
            </div> */}
            </form>

        </div>
        </>
     );
}

export default Button;