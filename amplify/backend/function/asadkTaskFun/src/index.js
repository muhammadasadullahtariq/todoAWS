/* Amplify Params - DO NOT EDIT
	API_TODOTESTING_ASADTASKCOUNTTABLE_ARN
	API_TODOTESTING_ASADTASKCOUNTTABLE_NAME
	API_TODOTESTING_GRAPHQLAPIIDOUTPUT
	ENV
	REGION
Amplify Params - DO NOT EDIT */ /**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
const AWS = require("aws-sdk");

const dynamoDb = new AWS.DynamoDB.DocumentClient();

async function putTask(user, operation) {
  const params = {
    TableName: process.env.STORAGE_ASADTASKCOUNT_NAME,
    Key: {
      user,
    },
    Item: {
      user,
    },
  };
  try {
    const result = await dynamoDb.get(params).promise();
    console.log("result is", result);
    if (result.Item) {
      if (operation === "add") {
        params.Key.count = result.Item.count + 1;
        params.Item.count = result.Item.count + 1;
      } else {
        params.Key.count = result.Item.count - 1;
        params.Item.count = result.Item.count - 1;
      }
    } else {
      params.Key.count = 1;
      params.Item.count = 1;
    }
    const resu = await dynamoDb.put(params).promise();
    console.log("resu is ", resu);
  } catch (error) {
    console.log("error is", error);
    console.log(error);
  }
}

exports.handler = async (event) => {
  const params = {
    TableName: process.env.STORAGE_ASADTASKCOUNT_NAME,
    Key: {
      user: "asad",
      count: 0,
    },
    Item: {
      user: "asad",
      count: 0,
    },
  };
  console.log("event is", event);
  console.log(`EVENT: ${JSON.stringify(event)}`);
  //const resu = await dynamoDb.put(params).promise();
  if (event.Records[0].eventName === "INSERT") {
    await putTask(event.Records[0].dynamodb.NewImage.user.S, "add");
    //putTask(user, "add");
  } else if (event.Records[0].eventName === "REMOVE") {
    console.log("removing the record");
    await putTask(event.Records[0].dynamodb.OldImage.user.S, "delete");
    //putTask(user, "sub");
  }
  // event.Records.forEach((record) => {
  //   console.log(record.eventID);
  //   console.log(record.eventName);
  //   console.log("DynamoDB Record: %j", record.dynamodb);
  // });
  return Promise.resolve("Successfully processed DynamoDB record");
};
