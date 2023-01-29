import { useEffect , useState} from "react";
function Child(props) {

    const [apiData, setApiData] = useState(null);
    let check = props.childBtnClick;
    

    useEffect(() => {
        if(check == true)
        {
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setApiData(json))
        }

    }, [check]);    
    return ( 
        <div>
        <h2>This is the Child component</h2>
        {apiData && <table>
            <thead>
                <tr>
                    <th>userId</th>
                    <th>Id</th>
                    <th>title</th>
                    <th>body</th>
                </tr>
            </thead>
            <tbody>
            {apiData.map((post , index) => 
            <tr key={index}>
            <td> {post.userId}</td>
            <td> {post.id}</td>
            <td> {post.title}</td>
            <td> {post.body}</td>
            </tr>
            )}
            </tbody>
            </table>}
        </div>
     );
}

export default Child;