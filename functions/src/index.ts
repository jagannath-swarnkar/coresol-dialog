import * as functions from 'firebase-functions';
const admin = require('firebase-admin');

const stripe = require('stripe')('pk_test_51HrkkvBSjzeSa94djVwxOjSLPjV99YuVo2troy0a4iAqD5suVGR8jnQzJ9HEAtO6dJpN3uv5sHblezoLH8vNppdL00mZ7shUEd');
admin.initializeApp(functions.config().firebase);


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

exports.stripeChargeCall = functions.https.onCall(async (data, context) => {

    if (!data || data.charge) return;
    const doc = admin.firestore().collection('sources').doc();
    doc.set(data);
  
    const source = data.id;
    const email = 'jagannath18@navgurukul.org';
  
    const customer = await stripe.customers.create({ email, source});
  
    const idempotencyKey = doc.id;
    const amount = data.amount;
    const currency = 'usd';
  
    const charge = { amount, currency, source, customer: customer.id };
  
    const charge_1 = await (stripe.charges.create(charge, { idempotencyKey }));
  
    if (charge_1.paid === true) {
      admin.firestore().collection('charges').doc().set(charge_1);
      return {result: 'SUCCESSFUL'};
    } else {
      admin.firestore().collection('charges_error').doc().set({charge_1});
      return {result: 'FAILED'};
    }
  });
