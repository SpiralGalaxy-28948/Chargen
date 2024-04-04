var char = {
	attr: {
		str: 7,
		dex: 7,
		end: 7,
		int: 7,
		edu: 7,
		soc: 7
	},
	skillstodo: 0,
	skillToDoArray: [],
	step: '',
	careernum: 0,
	terms: 0,
	age: 18,
	agerolls: [],
	skills: {},
	careers: {},
	cash: 0,
	benefits: [],
	benefitsToDo : 0,
	cashRollsTaken : 0,
	history : []
}

function exportText()
{
	//$('#exportData').removeClass('hide');
	let data = "##INSERT YOUR NAME###\t" + $('#upp').html() + "\tAge " + $('#age').html() + "\r\n";
	for(x=1;x<=9;x++)
	{
		if($('#c'+x).html() != '')
		{
			data += $('#c'+x).html() + " ";
			if($('#r'+x).html()!='') {
				data += "Rank " + $('#r'+x).html()
			}


			data += "\r\n";

		}
	}
	data += $('#skills').html() + "\r\n";
	data +=  $('#cash').html() ;
	if( $('#pension').html() != '') {
		data += " Pension " + $('#pension').html();
	}
	data += "\r\n" + $('#benefits').html() + "\r\n";
	data += "\r\n*** HISTORY ***\r\n";

	$.each(char.history,function(key,value)
	{
		data += value + "\r\n";
	})

	$('#exportData').val(data);
	$('#exportModal').dialog({width:700});
}


function d1()
{
	return randomIntFromInterval(1,6);
	//return prompt("Enter 1d6 roll",1);
}

function d()
{
	let r = d1();
	return Number(prompt("[1]Enter 1d6 roll",r));
}

function randomIntFromInterval(min, max) { // min and max included
	Math.seedrandom();
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function d2(droplowest = false)
{
	let rolls = [];
	if(droplowest)
	{
		rolls[0] = d1();
		rolls[1] = d1();
		rolls[2] = d1();
		rolls.sort();
		rolls.reverse();
	}
	else
	{
		rolls[0] = d1();
		rolls[1] = d1();
	}
	// console.log(rolls);
	let total = +rolls[0] + +rolls[1];
	//return +rolls[0] + +rolls[1];
	return number(prompt("2d6 or ",total));

}

function roll_attributes(droplowest=false)
{
	char.attr.str = d2(droplowest);
	char.attr.dex = d2(droplowest);
	char.attr.end = d2(droplowest);
	char.attr.int = d2(droplowest);
	char.attr.edu = d2(droplowest);
	char.attr.soc = d2(droplowest);
	updateUPP();
	let val = 'Rolled using 2d6';
	if(droplowest)
	{
		val = 'Rolled using 3d6 Drop Lowest';
	}
	addToHistory($('#upp').html() + ' ' + val);

}

function updateUPP()
{
	putHTML('str',char.attr.str);
	putHTML('dex',char.attr.dex);
	putHTML('end',char.attr.end);
	putHTML('int',char.attr.int);
	putHTML('edu',char.attr.edu);
	putHTML('soc',char.attr.soc);

	let upp = statToHex(char.attr.str);
	upp += statToHex(char.attr.dex);
	upp += statToHex(char.attr.end);
	upp += statToHex(char.attr.int);
	upp += statToHex(char.attr.edu);
	upp += statToHex(char.attr.soc);

	putHTML('upp', upp );

}


function attrbonus(attribute)
{
	bonus = char.attr[attribute] / 3;
	bonus = Math.floor(bonus) - 2;
	// console.log(char.attr[attribute], bonus);
	return bonus;
}



var skills = [];
var backgroundSkills = [
	"Admin","Advocate","Animals","Broker","Carousing","Comms","Computer","Electronics","Engineering","Gun Combat","Life Sciences","Linguistics","Mechanics","Medicine","Melee Combat", "Physical Sciences","Social Sciences","Streetwise","Survival","Space Sciences","Vehicle","Zero-G"
];


function displaySelect(id, dataArray, text = 'Select Skill') {
	let str = '<select id="' + id + '">';
	str += "<option value=''>" + text + "</option>";
	alen = dataArray.length;
	for (x = 0; x < alen; x++) {
		str += "<option>" + dataArray[x] + "</option>";
	}
	str += "</select>";
	return str;
}

function addBackgroundSkill(list, level, id = 'formtest', text = 'Select Skill') {
	// console.trace();
	let data = displaySelect('bg', list, text);
	putHTML(id, data);
	$('#bg').off().on('change', function () {
		backgroundskilladd($(this).val(), level, id);
		$(this).remove();
	});
}


function updateSkills() {
	let str = '';
	let strArray = [];
	let skills = char.skills;
	$.each(skills, function (key, value) {
		strArray.push(key + "-" + value);
	});
	strArray.sort();
	str = strArray.join(' , ');
	$('#skills').text(str);
}


function backgroundskillcheck(skill, level, id = 'formtest') {
	console.log(id);
	let skillname = '';
	if (skilltree[skill] == 1) {
		return 1;
	} else {
		let data = skilltree[skill];
		let skillarray = [];
		$.each(data, function (key, value) {
				skillarray.push(key);
				skillarray.sort();
			}
		);
		addBackgroundSkill(skillarray, level, id, 'Select ' + skill + ' Cascade Skill');
	}
}

function dobackground() {
	let msg = 'UPP :  ' + $('#upp').html() + ' Accepted';
	addToHistory(msg);
	let attr = +attrbonus('edu');
	let max = 3 + attr;
	console.log(attr, max);
	char.skillstodo = max;
	char.step = 'background';
	addToHistory('Starting Background Skills');
	displaybackground();


}


function displaybackground() {
	setTitle('<h3>Select Background Skills ( ' + char.skillstodo + ' Left )</h3>');
	let buttons = "<span id='bg1'><button onclick='addBackgroundSkill(backgroundSkills,0,\"bg1\");$(this).remove();'>Choose Background Skill</button></span>";
	$('#actions').html(buttons);
}

function backgroundskilladd(skill, val = 1, id) {
	let check = backgroundskillcheck(skill, val, id);
	if (check == 1) {

		if (skill in char.skills) {
			char.skills[skill] += +val;
		} else {
			char.skills[skill] = +val;
		}
		addToHistory('Background Skill: ' + skill + "-" + char.skills[skill]);
		updateSkills();
		char.skillstodo -= 1;
		if (char.skillstodo == 0) {
			switch (char.step) {
				case 'background':
					choosecareer();
					break;
				case 'career':
					console.log('re-enlist');
			}

		} else {
			switch (char.step) {
				case 'background':
					displaybackground();
					break;
				case 'career':
					nextCareerSkill();
			}

		}

	}
}

function showSkillTables(career) {
	console.trace();
	setTitle('');
	setAction('');
	setInfoTable('');
	let skillList = jobs[career].skills;
	let table = "<table style='width:500px' class='skills'>";
	if (char.attr.edu >= 8) {
		table += "<tr><th>Roll</th><th>Personal<br>Development</th><th>Service<br>Skills</th><th>Specialist</th><th>Advanced<br>Education</th></tr>";
	} else {
		table += "<tr><th>Roll</th><th>Personal<br>Development</th><th>Service<br>Skills</th><th>Specialist</th></tr>";
	}

	for (x = 1; x <= 6; x++) {
		if (char.attr.edu >= 8) {
			table += "<tr><td>" + x + "</td><td>" + skillList['Personal Development'][x];
			table += "</td><td>" + skillList['Service Skills'][x];
			table += "</td><td>" + skillList['Specialist'][x];
			table += "</td><td>" + skillList['Advanced Education'][x];
			table += "</td></tr>";
		} else {
			table += "<tr><td>" + x + "</td><td>" + skillList['Personal Development'][x];
			table += "</td><td>" + skillList['Service Skills'][x];
			table += "</td><td>" + skillList['Specialist'][x];
			table += "</td></tr>";
		}

	}
	table += "</table>";
	setInfoTable(table);

}

function isEven(n) {
	return n % 2 == 0;
}

function isOdd(n) {
	return Math.abs(n % 2) == 1;
}


function setTitle(title) {
	$('#title').html(title);
}

function setAction(title) {
	$('#actions').html(title);
}

function setInfoTable(title) {
	$('#infotable').html(title);
}

function setMessage(title) {
	$('#message').html(title);
}

function resetAreas() {
	setTitle('');
	setAction('');
	setInfoTable('');
	setMessage('');

}

function hadCareer(career)
{
	console.log(career);
	if(career == 'Drifter')
	{
		return false;
	}
	if(char.careernum == 0)
	{
		return false;
	}
	for(var x = 1; x <= char.careernum; x++)
	{
		console.log(char.careers[x].career );
		if(char.careers[x].career == career)
		{
			return true;
		}
	}
	return false;

}

function choosecareer() {
	setTitle('<h3>Select Career or Draft</h3>');
	console.log('Choose a Career');
	char.step = 'choosecareer';
	console.log(char);
	list = [];
	$.each(jobs, function (key, value) {
		list.push(key);
	});
	list.sort();
	let data = '';
	let linkval = '';
	var outputcount = 0;
	data = "<table>"
	data += "<tr><th>Career</th><th>Enlist</th><th>Survival</th><th>Commission</th><th>Advance</th><th>Re-enlist</th>";
	data += "<th>Career</th><th>Enlist</th><th>Survival</th><th>Commission</th><th>Advance</th><th>Re-enlist</th></tr>";

	$.each(list, function (key, value) {
		if(hadCareer(value) == false) {


			outputcount++;
			// console.log(outputcount);
			if (isOdd(outputcount)) {
				data += "<tr>";
			}

			linkval = "<td>" + jobs[value]['qual']['val'] + "+ (" + jobs[value]['qual']['attr'] + ") </td><td> ";
			linkval += jobs[value]['survival']['val'] + "+ (" + jobs[value]['survival']['attr'] + ") </td><td> ";
			if (jobs[value]['commission']['val']) {
				linkval += jobs[value]['commission']['val'] + "+ (" + jobs[value]['commission']['attr'] + ") </td><td> ";
				linkval += jobs[value]['advancement']['val'] + "+ (" + jobs[value]['advancement']['attr'] + ") </td><td> ";
			} else {
				linkval += "&nbsp;</td><td>&nbsp;</td><td> ";
			}
			linkval += jobs[value]['re-enlist'] + "+ </td>";
			data += "<td><a href='javascript:checkEnlist(\"" + value + "\");' title='" + jobs[value]['explain'] + "'>" + value + "</a></td>" + linkval;


			if (isEven(outputcount)) {
				data += "</tr>";
			}
		}
	});
	if (isOdd(outputcount)) {
		data += "<td colspan=8></td></tr>";
	}

	data += "</table>";
	if(char.terms == 0) {
		data += "<br>" +
			"<a href='javascript:doDraft();'>Do Draft</a>";
	}
	setAction(data);

}

function doCareer(career, draft = false) {
	char.careernum++;
	char.careers[char.careernum] = {
		terms: 0,
		rank: 0,
		career: career,
		draft: draft
	};
	$('#cr'+char.careernum).removeClass('hide');
	resetAreas();
	if (draft == false) {
		setTitle('You have successfully enlisted in career:' + career);
		addToHistory('You have successfully enlisted in career:' + career)
	} else {
		setTitle('You have successfully be Drafted in career:' + career);
		addToHistory('You have successfully be Drafted in career:' + career);
	}
	doTerm(career, draft);

}

function updateCareer() {
	$('#totalterms').html(char.terms);
	$('#c' + char.careernum).html(char.careers[char.careernum]['career'] + " (" + char.careers[char.careernum]['terms'] + " terms)");

}


function checkRankSkills(career, rank) {
	return jobs[career].rankskills[rank];
}



function checkCommision(career) {
	console.log(char.careers[char.careernum].draft , char.careers[char.careernum].terms);
	if(char.careers[char.careernum].draft && char.careers[char.careernum].terms == 1)
	{
		addToHistory('First Term after Drafted Can not get a Commission');
		return false;
	}
	let roll = d2();
	let mod = attrbonus(jobs[career].commission.attr);
	console.log([roll,mod,jobs[career].commission.val]);
	roll = roll + +mod;
	return roll >= jobs[career].commission.val;

}

function checkAdvance(career) {
	let roll = d2();
	let mod = attrbonus(jobs[career].advancement.attr);
	console.log([roll,mod,jobs[career].advancement.val]);
	roll = roll + +mod;
	return roll >= jobs[career].advancement.val;

}


function checkbgskill(skill) {
	let answer = false;
	$.each(char.skillToDoArray, function (key, value) {
		if (value[0] == skill) {
			answer = true;
		}
	});

	if (answer == false) {
		char.skillToDoArray.push([skill, 0]);
	}
	return answer;
}


function doTerm(career, draft) {
	putHTML('actions', "")
	showSkillTables(career);
	if(!career)
	{
		career = char.careers[char.careernum]['career'];
		draft = false;
	}

	char.careers[char.careernum]['terms']++;
	addToHistory('Starting ' + career + ' term ' + char.careers[char.careernum]['terms']);
	char.terms++;
	updateCareer();


	if (char.careers[char.careernum]['terms'] == 1 && char.careers[char.careernum].rank == 0) {
		char.skillToDoArray.push([checkRankSkills(career, 0), 1]);
	}

	if (char.careernum == 1 && char.careers[char.careernum]['terms'] == 1) {
		let jobskills = jobs[career].skills["Service Skills"];
		$.each(jobskills, function (key, value) {
			let t = checkbgskill(value);
		});
	}

	if (char.careernum > 1 && char.careers[char.careernum]['terms'] == 1) {
		char.skillToDoArray.push(['Service Skills', 0]);
	}

	basicTraining(career);


	// check for survival

}


function checkEnlist(career) {
	let qual = jobs[career]['qual']['val'];
	let bonus = attrbonus(jobs[career]['qual']['attr']);
	let careers = char.careernum * -2;
	let roll = d2();
	let total = roll + bonus + careers;
	console.log("Qual: " + qual + " Bonus: " + bonus + " Roll: " + roll + " Career Mod : " + careers + " Roll:" + total);
	if (total >= qual) {
		addToHistory('successfully Enlisted in ' + career);
		doCareer(career, false);
	} else {
		addToHistory('Failed to Enlist in ' + career);
		if(char.careernum < 1){
			setMessage('Enlistment for ' + career + ' Failed. Submit to <a href="javascript:doDraft()">Draft</a> or Enter <a href="javascript:doCareer(\'Drifter\')">Drifter</a> (or you can cheat and try again)');

		}
		else
		{
			setMessage('Enlistment for ' + career + ' Failed. Enter <a href="javascript:doCareer(\'Drifter\')">Drifter</a> or <a href="javascript:charDone()">Done</a>(or you can cheat and try again)');

		}
	}
}

function doDraft()
{
	let roll = d();
	let career = "";
	switch (roll)
	{
		case 1:
			career = 'Aerospace Defense';
			break;
		case 2:
			career = 'Marine';
			break;
		case 3:
			career = 'Maritime Defense';
			break;
		case 4:
			career = 'Navy';
			break;
		case 5:
			career = 'Scout';
			break;
		case 6:
			career = 'Surface Defense';
			break;
	}
	addToHistory('Your Drafted Career is ' + career);
	doCareer(career,true);doAging()
}


function modattr(amt) {
	if (amt.split('')[0] == '+' || amt.split('')[0] == '-') {
		amt = amt.toLowerCase();
		data = amt.split(' ')
		attritbute = data[1];
		amount = data[0];
		char.attr[attritbute] += +amount;
		addToHistory('Stat: ' + amt);
		updateUPP();
	}

}

function putHTML(id, data) {
	$('#' + id).html(data);
}


function statToHex(stat) {
	let hexstring = '0123456789ABCDEFGHJKLMNPQRSTUVWXYZ';
	return hexstring.substr(stat,1);
}


function basicTraining(career) {
		if(jobs[career].rank[char.careers[char.careernum].rank] != '') {
		putHTML('r'+char.careernum,char.careers[char.careernum].rank + " - " + jobs[career].rank[char.careers[char.careernum].rank]);

	}

	if (char.skillToDoArray.length > 0) {
		let skill = char.skillToDoArray[0];
		console.log(skill, char.skillToDoArray);
		char.skillToDoArray.shift();
		addBasicTrainingSkill(skill[0], skill[1]);
	} else {
		char.age +=2;
		putHTML('age',char.age);
		if (checkSurival(career)) {
			surviveYes(career);
		} else {
			surviveNo(career);
		}


	}
}

function checkSurival(career) {
	let roll = d2() + attrbonus(jobs[career].survival.attr);
	if(roll >= jobs[career].survival.val)
	{
		return true;
	}

	return false;
}


function termSkills(career) {
	if(!career) {
		career = char.careers[char.careernum]['career'];
	}
	if (char.skillToDoArray.length > 0) {
		let skill = char.skillToDoArray.pop();
		console.log(skill);
		addCareerSkill(skill[0], skill[1]);
	} else {
		// re-enlist or muster out
   	ageCheck();

	}
}

function ageCheck()
{
	if(char.age < 34)
	{
		doAging();
	}
	else
	{
		addToHistory('Doing Aging Check');
		let roll = d2();
		let mod = char.terms;
		let result = roll - mod;
		console.log('*** AGING CHECK ****');
		console.log(roll,mod,result);
		if(result > 0)
		{
			doAging();
		}
		else
		{
			setTitle('You have suffer from the effects of Aging');
			switch(result){
				case 0:
					char.agerolls.push(['P',1]);
					break;
				case -1:
					char.agerolls.push(['P',1]);
					char.agerolls.push(['P',1]);
					break;
				case -2:
					char.agerolls.push(['P',1]);
					char.agerolls.push(['P',1]);
					char.agerolls.push(['P',1]);
					break;
				case -3:
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',1]);
					char.agerolls.push(['P',1]);
					break;
				case -4:
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',1]);
					break;
				case -5:
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',2]);
					break;
				default:
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',2]);
					char.agerolls.push(['P',2]);
					char.agerolls.push(['M',1]);
					break;

			}
			doAging();
		}
	}
}

function addToHistory(message)
{
	char.history.push(message);
	let len = char.history.length;
	let str = '';
	for(let x = len-1; x>=0; x--)
	{
		str += char.history[x] + "\n";

	}
	$('#history').html(str);
}

function doAging()
{
	if(char.agerolls.length>0)
	{
		let ageItem = char.agerolls.pop();
		doAgeSelect(ageItem);
	}
	else
	{
		reenlist();
	}


}

function doAgeSelect(ageItem)
{
	let ageType = ageItem[0];
	let amount = ageItem[1];
	let options = "<option>Select Aging Effect";
	let select  = "";
	if(agetype = 'P')
	{
		options += "<option value='-" + amount + " str'>decrease Str by " + amount + "</option>";
		options += "<option value='-" + amount + " dex'>decrease Dex by " + amount + "</option>";
		options += "<option value='-" + amount + " end'>decrease End by " + amount + "</option>";
	}
	else
	{
		options += "<option value='-" + amount + " int'>decrease Int by " + amount + "</option>";
		options += "<option value='-" + amount + " edu'>decrease Edu by " + amount + "</option>";
	}

	select = "<select onchange='applyAging($(this).val())'>" + options + "</select>";
	setTitle('Apply Aging');
	setAction(select);



}

function applyAging(val)
{
	console.log(val);
	setTitle('');
	setAction('');
	modattr(val);
	doAging();
}

function selectServiceSkill(level)
{

	let career = char.careers[char.careernum]['career'];
	setTitle('Select Basic Training Service Skill');
	var select = "<select id='basicTraining' onchange='addBasicTrainingSkill($(this).val()," + level + ")'><option>Select Service Skill</option>";
	for(let x = 1; x<=6;x++)
	{
		select += "<option>" + jobs[career].skills['Service Skills'][x] + "</option>";
	}


	select += "</select>";
	putHTML('formtest', select);
}


function addBasicTrainingSkill(skill, level) {
	putHTML('formtest', '');
	let career = char.careers[char.careernum]['career'];
	switch (skill) {
		case '' :
			updateSkills();
			basicTraining(career)
			break;
		case '*':
			displayCareerTypeSelect(level);
			break;
		case 'Personal Development':
			skillRoll('Personal Development', level);
			break;
		case 'Service Skills':
			selectServiceSkill(level);
			break;
		case 'Specialist':
			skillRoll('Specialist', level);
			break;
		case 'Advanced Education':
			skillRoll('Advanced Education', level);
			break;
		default:
			if (skill.split('')[0] == '+' || skill.split('')[0] == '-') {
				modattr(skill);
			} else {
				let check = basicTrainingSkillcheck(skill, level);
				if (check == 1) {

					if (skill in char.skills) {
						char.skills[skill] += +level;
					} else {
						char.skills[skill] = +level;
					}
					addToHistory('Basic Train: ' + skill + "-" + char.skills[skill]);
					updateSkills();
					basicTraining(career)
				}

			}

	}
}

function addCareerSkill(skill, level) {
console.log('here',skill,level);
setTitle('');
	let career = char.careers[char.careernum]['career'];
	switch (skill) {
		case '*':
			displayCareerTypeSelect(level);
			break;
		case 'Personal Development':
			skillRoll('Personal Development', level);
			break;
		case 'Service Skills':
			skillRoll('Service Skills', level);
			break;
		case 'Specialist':
			skillRoll('Specialist', level);
			break;
		case 'Advanced Education':
			skillRoll('Advanced Education', level);
			break;
		case "":
			updateSkills();
			termSkills(career);
			break;
		default:
			if (skill.split('')[0] == '+' || skill.split('')[0] == '-') {
				modattr(skill);
				termSkills(career);
			} else {
				let check = careerSkillcheck(skill, level);
				if (check == 1) {

					if (skill in char.skills) {
						char.skills[skill] += +level;
					} else {
						char.skills[skill] = +level;
					}
					addToHistory('Career Skill Gain:' + skill + '-' + char.skills[skill]);
					updateSkills();
					termSkills(career);
				}

			}

	}
}

function skillRoll(type,level)
{
	// console.trace();
	let career = char.careers[char.careernum]['career'];
	let r = d();
	let skill = jobs[career].skills[type][r];
	addCareerSkill(skill,level);

}

function bgskillRoll(type,level)
{
	// console.trace();
	let career = char.careers[char.careernum]['career'];
	let r = d();
	let skill = jobs[career].skills[type][r];
	addBackgroundSkill(skill,level);

}


function displayCareerTypeSelect(level) {
	setTitle('Select Career Skill Category');
	let career = char.careers[char.careernum]['career'];
	let select = "<select onchange='let val = this.value; this.remove(); addCareerSkill(val," + level + ");'>";
	select += "<option>Select Category</option>";
	select += "<option value='Personal Development'>Personal Development</option>";
	select += "<option value='Service Skills'>Service Skills</option>";
	select += "<option value='Specialist'>Specialist</option>";
	if (char.attr.edu >= 8) {
		select += "<option value='Advanced Education'>Advanced Education</option>";
	}

	select += "</select>";
	putHTML('formtest',select);


}

function basicTrainingSkillcheck(skill, level, id = 'formtest') {

	if (skilltree[skill] == 1) {
		return 1;
	} else {
		let data = skilltree[skill];
		let skillarray = [];
		$.each(data, function (key, value) {
				skillarray.push(key);
				skillarray.sort();
			}
		);
		setTitle('Basic Training Select Cascade Skill for ' + skill);
		addBasicTrainingSkillSelect(skillarray, level, id, 'Select ' + skill + ' Cascade Skill');
	}
}



function addBasicTrainingSkillSelect(list, level, id = 'formtest', text = 'Select Skill') {
	let data = displaySelect('bg', list, text);
	console.log(data);
	putHTML(id, data);
	$('#bg').off().on('change', function () {
		let skill = $(this).val();
		$(this).remove();
		addBasicTrainingSkill(skill, level);
	});
}


function addCareerSkillSelect(list, level, id = 'formtest', text = 'Select Skill') {
	let data = displaySelect('bg', list, text);
	console.log(data);
	putHTML(id, data);
	$('#bg').off().on('change', function () {
		let skill = $(this).val();
		$(this).remove();
		addCareerSkill(skill, level);
	});
}


function careerSkillcheck(skill, level, id = 'formtest') {
	console.log(id);
	let skillname;
	if (skilltree[skill] == 1) {
		return 1;
	} else {
		let data = skilltree[skill];
		let skillarray = [];
		$.each(data, function (key, value) {
				skillarray.push(key);
				skillarray.sort();
			}
		);
		setTitle('Select Cascade Skill for '+ skill);
		addCareerSkillSelect(skillarray, level, id, 'Select Cascade Skill');
	}
}


function addSkillSelect(skillarray, level, id, title) {
console.log('addSkillSelect');
}


function surviveYes(career) {
	addToHistory('Made Your Survival Roll');
	setMessage('');
	setAction('');
	char.benefitsToDo++;
	doAdvancementCheck(career)
}

function doAdvancementCheck(career)
{
		char.age += 2;
		putHTML('age',char.age);
		if (jobs[career]['commission']['val'] == 0) {
			char.skillToDoArray.push(['*', 1]);
			char.skillToDoArray.push(['*', 1]);
		} else {
			char.skillToDoArray.push(['*', 1]);

			if (char.careers[char.careernum].rank == 0) {
				if (checkCommision(career)) {
					console.log('You got a Commission');
					addToHistory('You got a Commission');
					char.careers[char.careernum].rank += 1;
					char.skillToDoArray.push([checkRankSkills(career, char.careers[char.careernum].rank), 1]);
					char.skillToDoArray.push(['*', 1]);
					}
				else
				{
					addToHistory('You did not get a Commission');
				}
			}

			if (char.careers[char.careernum].rank > 0 && char.careers[char.careernum].rank < 6) {
				if (checkAdvance(career)) {
					console.log('You Got Promoted');
					addToHistory('You Got Promoted');
					char.careers[char.careernum].rank += 1;
					char.skillToDoArray.push([checkRankSkills(career, char.careers[char.careernum].rank), 1]);
					char.skillToDoArray.push(['*', 1]);
				}
				else
				{
					addToHistory('You Failed to Get Promoted');
				}
			}

		}
	if(jobs[career].rank[char.careers[char.careernum].rank] != '') {
		putHTML('r'+char.careernum,char.careers[char.careernum].rank + " - " + jobs[career].rank[char.careers[char.careernum].rank]);

	}
	termSkills(career);

}


function surviveNo(career) {
	addToHistory('Failed Your Survival Check');
	setTitle('You failed your survival Check');
	setMessage('');
	let links = "<a href='javascript:surviveYes(\"" + career + "\");'>Override Yes</a>";
	links += " &nbsp; <a href='javascript:musterOut(\"" + career + "\");'>End Character</a>";
	setAction(links);
}


function doCareerSkills(career) {
	if (skillList.count() > 0) {
		pickCareerSkills(career);
	} else {
		reenlist();
	}
}

function reenlist() {
	let links = "<a href='javascript:attemptReenlist();'>Attempt Re-enlist Yes</a>";
	links += " &nbsp; <a href='javascript:musterOut(true);'>Muster Out</a>";
	putHTML('actions', links)
}


function attemptReenlist() {

	let career = char.careers[char.careernum]['career'];
	let roll = d2();
	let val = jobs[career]["re-enlist"];
	if (roll >= val)
	{
		addToHistory(career + " reenlistment successful");
		doTerm(career);
	}
	else
	{
		addToHistory(career + " reenlistment failed");
		let links = "";
		links += " &nbsp; <a href='javascript:attemptReenlist();'>Re-enlist (attempt again)</a>";
		links += " &nbsp; <a href='javascript:musterOut(false);'>Muster Out</a>";
		putHTML('actions', links);
	}

}

function musterOut(check)
{
	let career = char.careers[char.careernum]['career'];
	if(check)
	{
		let roll = d2();
		if(roll == 12) // forced term
		{
			addToHistory('Forced To Do Another Term');
			doTerm(career);
		}

	}

		let rolls = char.benefitsToDo;
		switch (char.careers[char.careernum]['rank']) {
			case 6:
				rolls++;
			case 5:
				rolls++;
			case 4:
				rolls++;
			break;	
            //case
        }		
		char.benefitsToDo = rolls;
		char.cashRollsTaken = 0;
		if(char.careers[char.careernum].terms >= 5)
		{
			putHTML('pension', formatCredits(2000 * char.careers[char.careernum].terms) );
		}

		putHTML('actions', '');
		putHTML('title', "Mustering Out");
		showMusterOutTable();
}

function formatCredits(amt)
{
	return amt.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",") + ' cr';
}

function showMusterOutTable() {
	let career = char.careers[char.careernum]['career'];
	
	
	setTitle('');
	setAction('');
	let benefits = jobs[career].benefits;
	let cash = jobs[career].cash;
	
	let table = "<table style='width:500px' class='skills'>";
		table += "<tr><th>Roll</th><th>Cash</th><th>Benefits</th></tr>";
	

	for (x = 1; x <= 7; x++) {

			table += "<tr><td>" + x + "</td><td>" + formatCredits(cash[x]);
			table += "</td><td>" + benefits[x];
			table += "</td></tr>";
		}

	
	table += "</table>";
	setInfoTable(table);
	doMusterOutRolls();
    //code
}

function doMusterOutRolls() {
	let career = char.careers[char.careernum]['career'];
	let links = "";
	if (char.benefitsToDo > 0) {
		links +="Rolls Left: " + char.benefitsToDo + " ";
		if (char.cashRollsTaken < 3) {
            //code
        
		links += "<a href='javascript:cashRoll();'>Cash Roll</a>";
		links += " &nbsp; <a href='javascript:benefitRoll();'>Benefit Roll</a>";
		} else {
		
		links += "<a href='javascript:benefitRoll();'>Benefit Roll</a>";
		}
		putHTML('actions', links)
	} else {
		setInfoTable('');
		links += "<a href='javascript:choosecareer();'>Another Career</a>";
		links += " &nbsp; <a href='javascript:charDone();'>Done</a>";

		putHTML('actions', links);
	}
}

function charDone() {
setTitle('');
setAction('<a href="javascript:exportText();">View as Plain Text</a>');
setMessage('');
setInfoTable('');
$('#formtest').html('');

}


// function download(filename, text) {
// 	var element = document.createElement('a');
// 	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
// 	element.setAttribute('download', filename);
//
// 	element.style.display = 'none';
// 	document.body.appendChild(element);
//
// 	element.click();
//
// 	document.body.removeChild(element);
// }

function download(filename = 'character.txt',text = $('#exportData').val() ) {
	var element = document.createElement('a');
	element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
	element.setAttribute('download', filename);

	element.style.display = 'none';
	document.body.appendChild(element);

	element.click();

	document.body.removeChild(element);
}

function benefitRoll() {
	let career = char.careers[char.careernum]['career'];
	let benefits = jobs[career].benefits
	let roll = d();
	if (char.careers[char.careernum].rank >= 5) {
		roll++;
        //code
    }
	
	let results = benefits[roll];
	char.benefitsToDo--;

	addToHistory('Added Benefit : ' + results);
	
	if (results.split('')[0] == '+') {
        modattr(results);
    }
	else{
	if (results in char.benefits) {
		
        char.benefits[results] += 1;
    }
	else
	{
		 char.benefits[results] = 1;
	}
	}
	updateBenefitDisplay();
	doMusterOutRolls();
	
}


function updateBenefitDisplay() {
    //code
	var data = [];
	let b = char.benefits;
    for (var key in b){
    	value = b[key];
		if (value > 1) {
					
            data.push(key + " x" + value);
			}
		else
		{
			 data.push(key);
		}
    }
	
	$('#benefits').html(data.join(' , '));
	
}

function cashRoll() {
	let career = char.careers[char.careernum]['career'];
	let cash = jobs[career].cash;
	let roll = d();
	if (char.careers[char.careernum]['terms']>= 5 || hasGambling()) {
        roll++;
    }
	
	let result = cash[roll];
	addToHistory("Add Cash : " + result);
	console.log([cash,roll,result]);
	char.cashRollsTaken++;
	char.benefitsToDo--;
	char.cash += +result;
	$('#cash').html(formatCredits(char.cash));
	doMusterOutRolls();
	
    //code
}
//
function hasGambling() {
	var gambling = false;
	$.each(char.skills,function(key,value){
		if (key == 'Gambling' && value > 0) {
            gambling = true;
        }
		   
	});
	
	return gambling;
    //code
}

