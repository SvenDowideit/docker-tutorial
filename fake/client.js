

var fake = {
//TODO: should be array so the user can up&down arrow through the history
	currentCommand: ''
};


fake.run = function (options) {

	options = options || {};

//TODO: persist step and tutorial name in a cookie...
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
			fake.command(term, fake.currentCommand);
			if (fake.currentCommand == tutorial[currentStep].command_expected.join(" ")) {
				currentStep++;
			        options.intro.innerHTML = tutorial[currentStep].intro;
			        options.task.innerHTML = tutorial[currentStep].task;
			        options.tip.innerHTML = tutorial[currentStep].tip;
			}
			fake.currentCommand = ""
		} else {
			term.write(data)
			fake.currentCommand += data;
		}
	});

	term.open(options.parent || document.body);
	fake.command(term, "whale");

//	term.destroy();
};


fake.command = function (term, str) {
	if (str == "") {
		return
	}

	ARGV = str.split(" ")

	if (commands[ARGV[0]] === undefined) {
		// try loading the definition dynamically
		require(['/commands/'+ARGV[0]+'.js?callback=define'], function test(cmd) {
			if (cmd == undefined) {
				console.log('failed to parse '+ARGV[0]);
				commands[ARGV[0]] = {"_error": {"output": ["\r\n-sh: {{}}: command not found"]}};
			} else {
				console.log('loaded '+ARGV[0]);
				commands[ARGV[0]] = cmd;
			}
			fake.command(term, str);
		}, function fail(err) {
			console.log('failed to load '+ARGV[0]);
			commands[ARGV[0]] = {"_error": {"output": ["\r\n-sh: {{}}: command not found"]}};
			fake.command(term, str);
		});
		return; // don't output anything yet
	}
	{
		//TODO: probably should re-combine with join(" ") - but need to extract any quoted strings before the split.
		args = str.substring(ARGV[0].length+1);
		key = args
		if (key == "") { key = "_default"; }
		if (commands[ARGV[0]][key] != undefined) {
			term.write("\r\n"+commands[ARGV[0]][key].output.join("\r\n"));
		} else {
			key = "_error"
			if (commands[ARGV[0]][key] != undefined) {
				term.write("\r\n"+commands[ARGV[0]][key].output.join("\r\n"));
			} else {
				term.write("\r\n"+ARGV[0]+" error: "+args);
			}
		}
	}
	term.write('\r\n$ ');
}
