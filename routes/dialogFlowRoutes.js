const chatbot = require('../chatbot/chatbot');

module.exports = (app) => {
  app.post('/api/df_text_query', async (req, res) => {
    res.send({ hello: 'Johnny' });
    // const responses = await chatbot.textQuery(
    //   req.body.text,
    //   req.body.parameters
    // );

    // const result = responses[0].queryResult;
    // console.log(`Query: ${result.queryText}`);
    // console.log(`Response: ${result.fulfillmentText}`);
    // if (result.intent) {
    //   console.log(`Intent: ${result.intent.displayName}`);
    // } else {
    //   console.log(`No intent matched.`);
    // }

    // res.send(result);
  });

  app.post('/api/df_event_query', async (req, res) => {
    const responses = await chatbot.eventQuery(
      req.body.event,
      req.body.parameters
    );
    const result = responses[0].queryResult;
    res.send(result);
  });
};
