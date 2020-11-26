// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  stripe: {
    testKey: 'pk_test_51HrkkvBSjzeSa94djVwxOjSLPjV99YuVo2troy0a4iAqD5suVGR8jnQzJ9HEAtO6dJpN3uv5sHblezoLH8vNppdL00mZ7shUEd'
  },
  firebaseConfig : {
    apiKey: "AIzaSyD5fHByWJpbpQ7oK6EuMSKDfDJllOGzBt4",
    authDomain: "jagan-ae35e.firebaseapp.com",
    databaseURL: "https://jagan-ae35e.firebaseio.com",
    projectId: "jagan-ae35e",
    storageBucket: "jagan-ae35e.appspot.com",
    messagingSenderId: "878230387631",
    appId: "1:878230387631:web:55a310b2a38e92fd70cd5a",
    measurementId: "G-KKPRGQS6X4"
  } 
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
