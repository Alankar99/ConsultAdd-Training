import './table.css';
import { useState , useEffect } from "react";
function Table(props) 
{
    const [tableData, setTableData] = useState(null);
    let sortByValue = props.sortTableBy;
    let firstRender = false;

    useEffect(()=>{
        getApi();
    }
    ,[firstRender]);
    const getApi = ()=>{
        fetch('bday.json' ,
        {
        headers : {
            'Content-type': 'application/json',
            'Accept' : 'application/json'
            }
        }
        ).then((result)=>{
            return result.json();
        }).then((jsonResult) => {
            setTableData(jsonResult);
        });

    }
    useEffect(() => {
        sort();
    },[sortByValue]);
    function sort()
    {
        if(sortByValue == 0)
        {
            console.log("sort by name");
            // let d1 = [...tableData];
            let newtableData = [...tableData];
            newtableData.sort((a, b) =>
            { 
            if(a.name < b.name)
            {
                return -1;
            }
            else
            return 1;
            });
        // tableData = newtableData;
        setTableData(newtableData);
        }
        else if(sortByValue == 1)
        {
            console.log("sort by age");

            let newtableData = [...tableData]; 
            newtableData.sort((a,b) =>
            {
            let date1 = a.birthDate.split("/");
            let date2 = b.birthDate.split("/");

            for(let i=2 ; i>=0;i--)
            {
                if(date1[i] < date2[i])
                {
                return -1;
                }
                else if(date1[i] > date2[i])
                {
                return 1;
                }
            }
            return 0;
            });
            // tableData = newtableData;
            setTableData(newtableData);
        }
    }
    function dis(myName)
    {
        console.log(myName);
    }
return ( 
    <>
    <div className="main"> 
    <div className="heading">
        Birth Day Sort
    </div>
    
    {tableData && <div className="table">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Birth Date</th>
                </tr>
            </thead>
            <tbody>
                {tableData.map((row , index)=>
                <tr key={index}>
                    <td>{row.name}</td>
                    <td>{row.birthDate}</td>
                </tr>
                )}
            </tbody>
        </table>
    </div>}
</div>
    </>
 );
}
export default Table;