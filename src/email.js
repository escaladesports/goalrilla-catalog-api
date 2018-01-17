const createClient = require('./email-client.js').createClient;

const stage = process.env.STAGE || 'dev';

const regularFontSize = 12;
const headerFontSize = 14;

function sendDealerCatalogEmail(data, dealerAddress) {
	const client = createClient();
	const sendTo = (stage === 'production' || stage === 'prod') ? [dealerAddress, 'csedlacek@escaladesports.com', 'bentremont@escaladesports.com'] : ['csedlacek@escaladesports.com'];

	const subject = 'New catalog request from Goalrilla.com';
	const message = `<html><body><div style="font-size: ${regularFontSize}px;"><p>New catalog request received from Goalrilla.com:</p>
	<hr>
	<h2>Customer information</h2>
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
	<h2>Dealer information</h2>
	<ul>
		<li>ID: ${data.dealer.id}</li>
		<li>Name: ${data.dealer.name}</li>
		<li>Catalog email sent to: ${data.dealer.leadsEmail}</li>
		<li>
			Address:
			<address style="font-style: normal;">
				${data.dealer.address}<br>
				${data.dealer.city}, ${data.dealer.state} ${data.dealer.zip}
			</address>
		</li>
		<li>Contact email: ${data.dealer.email}</li>
		<li>Phone: ${data.dealer.phone}</li>
		<li>Website: ${data.dealer.web}</li>
	</ul>
	</div></body></html>`;

	return client.send({subject, message}, sendTo);
}

module.exports = {
	sendDealerCatalogEmail
}