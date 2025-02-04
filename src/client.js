import { config } from "dotenv";

config();

import { LambdaClient } from "@aws-sdk/client-lambda";

const AWS_REGION = process.env.AWS_REGION;

export const lambdaClient = new LambdaClient({
  region: AWS_REGION
});

console.log(lambdaClient);