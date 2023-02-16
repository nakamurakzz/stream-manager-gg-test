console.log("custom component start")

export const index = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  console.log(JSON.stringify(event, null, 2))
  console.log("hello world")
  callback(undefined, {});
  return;
};
