# The State Machine

This is an example CDK stack to deploy The State Machine stack described by Jeremy Daly here - https://www.jeremydaly.com/serverless-microservice-patterns-for-aws/#statemachine

You would use this pattern for simple or complex business logic in a synchronous or an asynchronous setup. Step Functions come with lots of built in robustness features that will reduce your code liability 

### Building, Testing, and Deploying
Assuming that your environment is already set up for node and AWS CDK (note that the project is currently running on CDK v1.119.0), you can run the following commands to stand up the app.

To build: `npm run build`

To test: `npm run test`

To deploy: `npm run deploy`


### Sample API Calls

After deployment you should have an API Gateway HTTP API where on the base url you can send a POST request with a payload in the following format:

```json
// for a succesful execution
{
    "flavour": "pepperoni",
    "address": "123 Main Street"
}

//to see a failure
{
    "flavour": "pineapple",
    "address": "123 Main Street"
}
```

If you pass in pineapple or hawaiian you should see the step function flow fail in the response payload

The response returned is the raw and full output from the step function so will look something like this:

```json
// A successful execution, note the status of SUCCEEDED
{
    "billingDetails": {
        "billedDurationInMilliseconds": 700,
        "billedMemoryUsedInMB": 64
    },
    "executionArn": "arn:aws:states:us-east-1:910673953011:express:StateMachine2E01A3A5-IRAtzDIOzu0C:cf8781cd-58b5-439c-b834-c1a5d0649b2d:72d8f27c-1d84-4e8a-a9d8-672d0798d2af",
    "input": "{\r\n    \"flavour\": \"pepperoni\",\r\n    \"address\": \"123 Main Street\"\r\n}",
    "inputDetails": {
        "__type": "com.amazonaws.swf.base.model#CloudWatchEventsExecutionDataDetails",
        "included": true
    },
    "name": "cf8781cd-58b5-439c-b834-c1a5d0649b2d",
    "output": "{\"address\":\"123 Main Street\",\"deliveryDriver\":\"Mike\"}",
    "outputDetails": {
        "__type": "com.amazonaws.swf.base.model#CloudWatchEventsExecutionDataDetails",
        "included": true
    },
    "startDate": 1.685811447555E9,
    "stateMachineArn": "arn:aws:states:us-east-1:910673953011:stateMachine:StateMachine2E01A3A5-IRAtzDIOzu0C",
    "status": "SUCCEEDED",
    "stopDate": 1.685811448221E9,
    "traceHeader": "Root=1-647b70f7-6eb0f723ec4e8d01e74d5f2c;Sampled=1"
}

// a failed execution, notice status: FAILED and the cause/error properties
{
    "billingDetails": {
        "billedDurationInMilliseconds": 500,
        "billedMemoryUsedInMB": 64
    },
    "cause": "They asked for Pineapple",
    "error": "Failed To Make Pizza",
    "executionArn": "arn:aws:states:us-east-1:910673953011:express:StateMachine2E01A3A5-IRAtzDIOzu0C:8213edd5-e51b-403a-82e7-aa0709bbf0a9:b7bf3253-82b1-460e-8b00-41334ced67e1",
    "input": "{\r\n    \"flavour\": \"pineapple\",\r\n    \"address\": \"123 Main Street\"\r\n}",
    "inputDetails": {
        "__type": "com.amazonaws.swf.base.model#CloudWatchEventsExecutionDataDetails",
        "included": true
    },
    "name": "8213edd5-e51b-403a-82e7-aa0709bbf0a9",
    "outputDetails": {
        "__type": "com.amazonaws.swf.base.model#CloudWatchEventsExecutionDataDetails",
        "included": true
    },
    "startDate": 1.685811480423E9,
    "stateMachineArn": "arn:aws:states:us-east-1:910673953011:stateMachine:StateMachine2E01A3A5-IRAtzDIOzu0C",
    "status": "FAILED",
    "stopDate": 1.685811480851E9,
    "traceHeader": "Root=1-647b7118-4813320dfa0ce5464043ac5a;Sampled=1"
}
```

## Additional commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `npm run deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template
