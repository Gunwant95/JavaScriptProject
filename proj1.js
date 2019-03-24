function ck()
{
	var date = new Date();
	var day = date.getDay() + '';
	var hours = date.getHours() + '';
	var min = date.getMinutes() + '';
	var sec = date.getSeconds() + '';
	/*console.log(day);
	console.log(hours);
	console.log(min);
	console.log(sec);
	*/
	var week = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

	if (hours.length<2)
	{
		var hours = '0' + hours;
	}

	if (min.length<2)
	{
		var min = '0' + min;
	}

	if (sec.length<2)
	{
		var sec = '0' + sec;
	}

	var clock1 = week[day] + ' ' + hours + ':' +min + ':' + sec;
	console.log(clock1);

	document.getElementById('Clock').innerHTML = clock1;
}

ck();
setInterval(ck,1000);