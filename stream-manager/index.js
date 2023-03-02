const {
  StreamManagerClient,
  // S3ExportTaskDefinition,
} = require("aws-greengrass-stream-manager-sdk");

const client = new StreamManagerClient();

// client.onConnected(async () => {
//   try {
//     // Append an Amazon S3 export task definition and print the sequence number.
//     const taskDefinition = new S3ExportTaskDefinition()
//       .withBucket("nakamura-test-for-puppeteer")
//       // https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html
//       // Example: myKeyNamePrefix/!{timestamp:yyyy/MM/dd}/myKeyNameSuffix.
//       // .withKey("{timestamp:yyyy/MM/dd}/myKeyNameSuffix.")
//       // .withInputUrl("/home/pi/test.txt");
//       // const sequenceNumber = await client.appendMessage("StreamName", util.validateAndSerializeToJsonBytes(taskDefinition));
//   } catch (e) {
//     console.error(e);
//   }
// });

// client.onError((err) => {
//   // Properly handle connection errors.
//   // This is called only when the connection to the StreamManager server fails.
// });

console.log("Hello World!!!!!!!!");
