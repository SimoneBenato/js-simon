let simonNumb = [];
while (simonNumb.length < 5)
{
    let rndNumb = getRndNumb(1, 100);
    if (!simonNumb.includes(rndNumb)) // il punto esclamativo vuol dire NOT
    {
        simonNumb.push(rndNumb);
    }   
}

setTimeout(function() 
{
    userNumb = [];
    while (userNumb.length < 5)
    {
        let attemp = parseInt(prompt('inserisci un numero'));
        if (userNumb.includes(attemp) == false)
        {
            userNumb.push(attemp);
        }
    }

    let point = [];

    for(let i = 0; i < userNumb.length; i++)
    {
        if (simonNumb.includes(userNumb[i]))
        {
            point.push(userNumb[i]);
        }
    }

    alert('Hai fatto ' + point.length + ' punti')
}, 3000)

// ---- FUNZIONI ----

function getRndNumb(min, max)
{
    return Math.floor(Math.random() * (max- min + 1) + min);
}