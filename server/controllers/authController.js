// const router = require("express").Router();
// const googlePassport = require("../config/googlePpConfig");
// const jwt = require("jsonwebtoken");

// // This is the route the client hits to get redirected to Google
// // And over at the Google website, they will log in with their
// // Google account credentials
// router.get(
//   "/google",
//   googlePassport.authenticate("google", { scope: ["profile"] })
// );

// router.get(
//   "/google/callback",
//   googlePassport.authenticate("google", {
//     failureRedirect: "/login",
//     session: false,
//   }),
//   function (req, res) {
//     // Successful authentication, redirect home.
//     // console.log('this is the user', req.user)

//     // req.user is where the user data from google is
//     // I want to construct a JWT token from that user data
//     // And then I want to send that JWT to the client
//     const payload = {
//       // _id = req.user._id, // The mongodb id
//       provider: req.user.provider,
//       provider_id: req.user.id, // The google id
//       displayName: req.user.displayName,
//       name: {
//         familyName: req.user.name.familyName,
//         middleName: req.user.name.middleName,
//         givenName: req.user.name.givenName,
//       },
//       photos: req.user.photos,
//     };

//     // Create the JWT based off the user's data
//     const oneHour = 3600;
//     const token = jwt.sign(payload, process.env.JWT_SECRET, {
//       expiresIn: oneHour,
//     });
//     console.log(token);

//     res.redirect(`${process.env.CLIENT_URL}saveToken?token=${token}`);
//   }
// );

// module.exports = router;

const router = require("express").Router();
const googlePassport = require("../config/googlePpConfig");
const jwt = require("jsonwebtoken");

// This is the route the client hits to get redirected to Google
// And over at the Google website, they will log in with their
// Google account credentials
router.get(
  "/google",
  googlePassport.authenticate("google", { scope: ["profile"] })
);

router.get(
  "/google/callback",
  googlePassport.authenticate("google", {
    failureRedirect: "/login",
    session: false,
  }),
  function (req, res) {
    // Successful authentication, redirect home.
    // console.log('this is the user', req.user)

    // req.user is where the user data from google is
    // I want to construct a JWT token from that user data
    // And then I want to send that JWT to the client
    const payload = {
      _id: req.user._id, // The mongodb id
      provider: req.user.provider,
      provider_id: req.user.id, // The google id
      displayName: req.user.displayName,
      name: {
        familyName: req.user.name.familyName,
        middleName: req.user.name.middleName,
        givenName: req.user.name.givenName,
      },
      photos: req.user.photos,
    };

    // Create the JWT based off the user's data
    const oneHour = 3600;
    // const oneSecond = 1
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: oneHour,
    });
    console.log(token);

    res.redirect(`${process.env.CLIENT_URL}/saveToken?token=${token}`);
  }
);

module.exports = router;
