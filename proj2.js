var students = [
{
	name :'Gunwant',
	score1 : 67,
	score2 : 92
},
{
	name :'Abhi',
	score1 : 87,
	score2 : 62
},
{
	name :'Raj',
	score1 : 17,
	score2 : 24
},
{
	name :'Amar',
	score1 : 97,
	score2 : 82
}
];

var scores = [91,81,71,61,51];

var degrees = ['A','B','C','D','E'];

function calcSum(sc1,sc2)
{
	var sum = sc1 + sc2;
	return sum;
}

function calcFinal()
{
	for(var i=0; i<students.length; i++)
	{
		students[i].sum = calcSum(students[i].score1, students[i].score2);

		if(students[i].sum >= 51)
		{
			console.log(students[i].name + ' Passed Final exam successfully');

			for(var x=0; x<scores.length; x++)
			{	
				if (students[i].sum >= scores[x])
				{
					console.log('He has '+ students[i].sum + ' points and he got diploma with degree ' +degrees[x]);
					console.log('**********');
					break;
				}
			}
		}
		else
		{
			console.log(students[i].name + ' Failed the exam');
		}
	}
}


calcFinal();