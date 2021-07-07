let sentence = prompt("Please enter few words, seperated by commas");

let comma = true;
while(comma)
{
    if(!sentence.includes(",")){
    alert("missing comma!!")
}
    else
    {
    alert("Congratulations!!! Look for the result in console.log")
    comma = false;
    result = /[\s|,]*[[\s]*,{1,}[\s]*]*[[,]*[\s]*[,]*]*[\s|,]*/g;
    let array = sentence.split(result);
    let max = 0;
    let sign = '*';
    for (lo of array)
        {
	    if (max < lo.length) 
        {max = lo.length;}
        }
        for (let i = 0; i < array.length + 2; i++)
        {
	    let func = '';
	    if (i == 0 || i == array.length + 1)
	        {
		    for (let j = 0; j < max + 2; j++)
		        {
			        func += sign; 
		        }
	        }
	    else
	        {
		    func += '*';
		    func += array[i - 1];
		    for (let j = func.length; j < max + 1; j++)
		    {
			func += ' ';
		    }
		func += '*';
	}
    //console.log("result:");
    console.log(func);
}
}
}
