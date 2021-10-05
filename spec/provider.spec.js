const path = require('path')
const { Verifier } = require('@pact-foundation/pact');

describe("Pact Provider", () => {
  var opts = {
    providerBaseUrl: "http://localhost:3000",
    pactUrls: [
      path.resolve(
        __dirname,
        "../../pact-consumer-test/pacts/westerosconsumer-westerosprovider.json"
      ),
    ],
  };

  it("verify the consumer contract", async () => {
    await new Verifier().verifyProvider(opts);
  });
});
