const Confirm = require('prompt-confirm');
const spawn = require('child-process-promise').spawn;

/*
	This tool asks user for confirmation and then deploys Serverless functions to production (prod stage)
*/

function watchOutput(proc) {
	proc.childProcess.stdout.on('data', data => {
		console.log(data.toString());
	})
	proc.childProcess.stderr.on('data', data => {
		console.error(data.toString());
	})
}

new Confirm('Are you sure you want to deploy to production?')
	.run()
	.then(answer => {
		if (answer) {
			console.log('Deploying...');
			const deploy = spawn('serverless', ['deploy', '--stage', 'prod']);
			watchOutput(deploy);
			return deploy;
		}
		else {
			console.log('Canceled production deploy');
			return false;
		}
	}).then(results => {
		console.log('Done!');
	})