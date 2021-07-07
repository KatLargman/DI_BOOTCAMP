//ex2
// 1-2
let checkDriverAge = (age=prompt("Enter your age please: ")) => {

    if (age == 18)
	{
		alert("Congratulations on your first year of driving. Enjoy the ride!");
        return;
	}
	else if (age < 18)
	{
		alert("Sorry, you are too young to drive this car. Powering off");
       
        return;
	}
    //else if (age > 70)
	//{
		//alert("You are too old to drive, may be better someone younger would ride you where you need? ")
        //return; 
	//}
	else
	{
		alert("You are old enough to drive, Powering On. Enjoy the ride!");
        
	}
}
checkDriverAge();//3
//checkDriverAge(23);//4
