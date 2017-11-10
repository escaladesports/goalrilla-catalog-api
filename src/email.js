const createClient = require('./email-client.js').createClient;

const stage = process.env.STAGE || 'dev';

const regularFontSize = 12;
const headerFontSize = 14;

function sendDealerCatalogEmail(data, dealerAddress) {
	const client = createClient();
	const sendTo = (stage === 'production' || stage === 'prod') ? [dealerAddress, 'csedlacek@escaladesports.com'] : ['csedlacek@escaladesports.com'];

	console.log('sendTo '+process.env.STAGE+':');
	console.dir(sendTo);

	const subject = 'New catalog request from Goalrilla.com';
	const message = `<html><body><div style="font-size: ${regularFontSize}px;"><p>New catalog request received from Goalrilla.com:</p>
	<hr>
	<ul>
		<li>Name: ${data.userFirstName} ${data.userLastName}</li>
		<li>Email address: ${data.userEmail}</li>
		<li>
			Address:
			<address style="font-style: normal;">
				${data.userAddress}<br>
				${data.userCity}, ${data.userState} ${data.userZip}
			</address>
		</li>
	</ul>
	</div></body></html>`;

	return client.send({subject, message}, sendTo);
}

module.exports = {
	sendDealerCatalogEmail
}