var fake = {
//TODO: should be array so the user can up&down arrow through the history
	currentCommand: ''
};

fake.run = function (options) {

	options = options || {};

	options.intro.innerHTML = tutorial[0].intro;
	options.task.innerHTML = tutorial[0].task;
	options.tip.innerHTML = tutorial[0].tip;

	var term = new Terminal({
		cols: 80,
		rows: 24,
		useStyle: true,
		screenKeys: true
	});

	term.on('data', function(data) {
		if (data.charCodeAt(0) == 13) {
			term.write(fake.command(fake.currentCommand));
			term.write('\r\n$ ');
			fake.currentCommand = ""
		} else {
			term.write(data)
			fake.currentCommand += data;
		}
	});

	term.open(options.parent || document.body);
	term.write('WELCOME!\r\n$ ');

//	term.destroy();
};


fake.command = function (command) {
	if (command == "") {
		return ""
	}

//TODO: need to parse it..
	return "\r\n-sh: "+command+": command not found";
}
