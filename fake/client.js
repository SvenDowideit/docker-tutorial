var fake = {
//TODO: should be array so the user can up&down arrow through the history
	currentCommand: ''
};

fake.run = function (options) {

	options = options || {};

	currentStep = 0;
	options.intro.innerHTML = tutorial[currentStep].intro;
	options.task.innerHTML = tutorial[currentStep].task;
	options.tip.innerHTML = tutorial[currentStep].tip;

	var term = new Terminal({
		cols: 120,
		rows: 28,
		useStyle: true,
		screenKeys: false
	});

	term.on('data', function(data) {
		if (data.charCodeAt(0) == 13) {
			term.write(fake.command(fake.currentCommand));
			if (fake.currentCommand == tutorial[currentStep].command_expected.join(" ")) {
				currentStep++;
			        options.intro.innerHTML = tutorial[currentStep].intro;
			        options.task.innerHTML = tutorial[currentStep].task;
			        options.tip.innerHTML = tutorial[currentStep].tip;
			}
			term.write('\r\n$ ');
			fake.currentCommand = ""
		} else {
			term.write(data)
			fake.currentCommand += data;
		}
	});

	term.open(options.parent || document.body);
	term.write(fake.command("whale"));
	term.write('Welcome to the Docker tutorial!\r\n$ ');

//	term.destroy();
};


fake.command = function (str) {
	if (str == "") {
		return ""
	}

	ARGC = str.split(" ")

	if (commands[ARGC[0]] != undefined) {
		//TODO: probably should re-combine with join(" ") - but need to extract any quoted strings before the split.
		args = str.substring(ARGC[0].length+1);
		key = args
		if (key == "") { key = "_default"; }
		if (commands[ARGC[0]][key] != undefined) {
			return "\r\n"+commands[ARGC[0]][key].output.replace(/\n/g, "\r\n");
		} else {
			key = "_error"
			if (commands[ARGC[0]][key] != undefined) {
				return "\r\n"+commands[ARGC[0]][key].output.replace(/\n/g, "\r\n");
			} else {
				return "\r\n"+ARGC[0]+" error: "+args
			}
		}
	}
//TODO: need to parse it..
	return "\r\n-sh: "+ARGC[0]+": command not found";
}
