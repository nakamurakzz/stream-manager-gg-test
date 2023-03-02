// import {
//   StreamManagerClient,
//   MessageStreamDefinition,
//   StrategyOnFull,
//   Persistence,
//   ExportDefinition,
// } from "aws-greengrass-stream-manager-sdk";

setInterval(() => console.log("setInterval: 5000"), 5000);
setInterval(() => console.log("setInterval: 8000"), 8000);

// const client = new StreamManagerClient();

// const main = () => {
//   client.onConnected(async () => {
//     try {
//       await client.createMessageStream(
//         new MessageStreamDefinition()
//           .withName("StreamName") // Required.
//           .withMaxSize(268435456) // Default is 256 MB.
//           .withStreamSegmentSize(16777216) // Default is 16 MB.
//           .withTimeToLiveMillis(null) // By default, no TTL is enabled.
//           .withStrategyOnFull(StrategyOnFull.OverwriteOldestData) // Required.
//           .withPersistence(Persistence.File) // Default is File.
//           .withFlushOnWrite(false) // Default is false.
//           .withExportDefinition(
//             // Optional. Choose where/how the stream is exported to the AWS クラウド.
//             new ExportDefinition()
//               .withKinesis(null)
//               .withIotAnalytics(null)
//               .withIotSiteWise(null)
//               .withS3(null)
//           )
//       );
//     } catch (e) {
//       // Properly handle errors.
//     }
//   });
//   client.onError((err) => {
//     // Properly handle connection errors.
//     // This is called only when the connection to the StreamManager server fails.
//   });
// };
// main();

console.log("Hello World!");
