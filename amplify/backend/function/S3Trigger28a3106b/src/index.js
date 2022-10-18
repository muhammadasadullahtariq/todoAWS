/* Amplify Params - DO NOT EDIT
	API_ASADTODO_ASADUSERIMAGETABLE_ARN
	API_ASADTODO_ASADUSERIMAGETABLE_NAME
	API_ASADTODO_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */
const AWS = require("aws-sdk");

const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = async function (event) {
  console.log("Received S3 event:", JSON.stringify(event, null, 2));
  const bucket = event.Records[0].s3.bucket.name;
  const key = event.Records[0].s3.object.key;
  console.log(`Bucket: ${bucket}`, `Key: ${key}`);

  const user = key.split("/")[1];

  const params = {
    TableName: process.env.API_ASADTODO_ASADUSERIMAGETABLE_NAME,
    Key: {
      id: user,
    },
    Item: {
      id: user,
      image: `https://${bucket}.s3.amazonaws.com/${key}`,
    },
  };

  try {
    await dynamodb.put(params).promise();
  } catch (err) {
    console.log("DynamoDB error: ", err);
  }
};
