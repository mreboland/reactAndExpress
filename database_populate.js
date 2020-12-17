'use strict';

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbname = 'jawber';

MongoClient.connect(url, { 
	useNewUrlParser: true,
	useUnifiedTopology: true 
	}, 
	(err, client) => {
	if (err) {
		console.error(err);
		throw err;
	}

	const db = client.db(dbname);
	const collection = db.collection('jobs');

	collection.insert(
		[
			{
				"title": "Developer / Bartender",
                "company": "Ballmer Peak",
                "link": "ballmerpeak.com"
			},
			{
				"title": "Animal Collar Engineer",
                "company": "Mark's Pet Wearables",
                "link": "petwearables.com"
            },
            {
                "title": "Robot Friend Creation Engineer",
                "company": "Make me a Friend",
                "link": "makemeafriend.com"
            }
		],
		(err, result) => {
			if (err) {
				throw err;
            }
            console.log("Neato...we did it! Together, together, together everyone!")
            client.close();
		}
	)
});