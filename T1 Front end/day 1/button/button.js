let grid = [1,2,3,6,9,8,7,4];

function updateBtnValue()
{
    for (let i = 1; i <= grid.length; i++) 
    {
        document.querySelector(`#b${i}`).innerHTML = `${grid[i-1]}`;
    }
}
updateBtnValue();
function rotateGrid()
{
    let lastNum = grid[7];

    let temp = [];
    for(let i=0; i<7 ; i++)
    {
        temp[i] = grid[i];
    }
    grid[0] = lastNum;
    for(let i=1; i<8 ; i++)
    {
        grid[i] = temp[i-1];
    }
    console.log(grid);
}

updateBtnValue();

let b5 = document.querySelector('#bc');

b5.addEventListener('click' , ()=>
{
    rotateGrid();
    updateBtnValue();
})