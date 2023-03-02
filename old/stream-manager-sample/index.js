import { StreamManagerClient } from "aws-greengrass-stream-manager-sdk";

const main = () => {
  console.log("Hello from Stream Manager Sample");
  try {
    const client = connectToStreamManagerWithDefaultPort();
    console.log({ client: JSON.stringify(client, null, 2) });
  } catch (error) {
    console.error(error);
  }
};

main();

function connectToStreamManagerWithDefaultPort() {
  const client = new StreamManagerClient();
  return client;
}
