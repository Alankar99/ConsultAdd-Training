let circles = [];

for (let i = 0; i < 3; i++) 
{
    circles[i+1] = document.querySelector(`#c${i+1}`);

    circles[i+1].addEventListener("click" , (e)=> 
    {
        alert(`You have clicked on c${i+1} `);
        e.stopPropagation();
    })
      
}
