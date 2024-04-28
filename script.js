const myForm = document.getElementById('myForm');
const labelText = document.querySelectorAll('.label-text');
const messError = document.querySelectorAll('.messError');
const resultDay = document.getElementById('result-days');
const resultMonth = document.getElementById('result-months');
const resultYear = document.getElementById('result-years');


function age(inputDay, inputMonth, inputYear)
{
    
    let error = 0;

    const currentDate = new Date();

    const birthDate = new Date(inputYear, inputMonth-1, inputDay);

    let diffDate = currentDate - birthDate;


    for(let i = 0; i < myForm.length-1; i++)
    {

        if(!myForm[i].validity.valid)
        {

            myForm[i].style.border = '1px solid red';

            labelText[i].style.color = 'red';


            if(i === 0)
            {
                messError[0].innerText = 'Must be a valid day';
            }
       
            else if(i === 1)
            {
                messError[1].innerText = 'Must be a valid month';
            }
            else
            {
                messError[2].innerText = 'Must be in the past';
            }

            error = 1;

        }

        
        else
        {
            
            myForm[i].style.border = '1px solid hsla(0, 0%, 8%, 0.2)';

            labelText[i].style.color = 'hsl(0, 1%, 44%)';

            messError[i].innerText = '';

        }

    
        if(diffDate < 0)
        {
            console.log('diffDate : ' + diffDate);

            messError[2].innerText = 'Must be in the past';

            myForm[2].style.border = '1px solid red';

            labelText[2].style.color = 'red';

            error = 1;
        }
           
        if(myForm[0].value === '00')
        {
            myForm[0].style.border = '1px solid red';

            labelText[0].style.color = 'red';

            messError[0].innerText = 'Must be a valid day';

            error = 1;

        }

        if(myForm[1].value === '00')
        {
            myForm[1].style.border = '1px solid red';

            labelText[1].style.color = 'red';

            messError[1].innerText = 'Must be a valid month';

            error = 1;
        }


        if( ((inputMonth <= 7 && inputMonth % 2 === 0) && (inputDay > 30)) || ((inputMonth >= 8 && inputMonth % 2 === 1) && (inputDay > 30)) )
        {
    
            console.log('IF MOIS a 30 jours');
    
            myForm[0].style.border = '1px solid red';
    
            labelText[0].style.color = 'red';
    
            messError[0].innerText = 'Must be a valid day';

            error = 1;
    
        }

        
    }


    if(!error)
    {

        diffDate = Math.floor(diffDate / 1000 / 60 / 60 / 24);

        let year = Math.floor(diffDate / 365.2425);

        let moduloYear = Math.floor(diffDate % 365.2425);

        let month = Math.floor(moduloYear / 30.436875);

        let day = Math.round(moduloYear - (month * 30.436875));


        resultDay.classList.toggle('anim');

        resultMonth.classList.toggle('anim');

        resultYear.classList.toggle('anim');


        setTimeout( function(){

            resultDay.innerText = day;

            resultMonth.innerText = month;
    
            resultYear.innerText = year;


            resultDay.classList.toggle('anim');

            resultMonth.classList.toggle('anim');

            resultYear.classList.toggle('anim');


        }, 2000);

    }

}


myForm.addEventListener('submit', function(event){

    age(myForm[0].value, myForm[1].value, myForm[2].value);

    event.preventDefault();

} );



