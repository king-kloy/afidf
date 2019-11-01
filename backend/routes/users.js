const express = require("express");
const router = express.Router();

// models
const User = require("../models/User.model");
const UserSession = require("../models/UserSession.model");

// Sign up users
router.post('/signup', (req, res, next) => {
  const {
    body
  } = req;

  let {
    firstName,
    lastName,
    email,
    password
  } = body;

  // checks if credentials ain't null
  checkCredentials();

  // validate email later
  /*
   * CODE HERE
   */

  // verify with email if user already exist
  User.find({
    email
  }, (err, previousUsers) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error.'
      });
    } else if (previousUsers.length > 0) {
      return res.send({
        success: false,
        message: 'Error: Account already exist.'
      });
    }

    // create and save new user
    const newUser = new User();

    newUser.email = email;
    newUser.firstName = firstName;
    newUser.lastName = lastName;
    newUser.password = newUser.generateHash(password);

    newUser.save((err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: last name cannot be blank.'
        });
      }

      return res.send({
        success: true,
        message: 'Signed up user successfully.'
      });
    });
  });
});

// Sign in users
router.post('/signin', (req, res, next) => {
  const {
    body
  } = req;

  let {
    email,
    password
  } = body;

  // checks if credentials ain't null
  checkCredentials();

  // verify with email if user already exist
  User.find({
    email
  }, (err, users) => {
    if (err) {
      return res.send({
        success: false,
        message: 'Error: Server error.'
      });
    } else if (users.length != 1) {
      return res.send({
        success: false,
        message: 'Error: Invalid'
      });
    }

    const user = users[0];
    if (!user.validPassword(password)) {
      return res.send({
        success: false,
        message: 'Error: Invalid.'
      });
    }

    // otherwise log user in and create session
    let userSession = new UserSession();
    userSession.userId = user._id;

    userSession.save((err, doc) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: server error'
        });
      }

      return res.send({
        success: true,
        message: 'Signed in successfully',
        token: doc._id
      });
    });
  });
});


// checks if credentials ain't null
function checkCredentials(req, res, next) {
  if (!fistName) {
    return res.send({
      success: false,
      message: 'Error: first name cannot be blank.'
    });
  }

  if (!lastName) {
    return res.send({
      success: false,
      message: 'Error: last name cannot be blank.'
    });
  }

  if (!email) {
    return res.send({
      success: false,
      message: 'Error: email cannot be blank.'
    });
  }

  if (!password) {
    return res.send({
      success: false,
      message: 'Error: password cannot be blank.'
    });
  }
}

// GET methods
// router.get("/", async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({
//       message: err
//     });
//   }
// });

// get specific user
router.get("/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.json(user);
  } catch (err) {
    res.status(500).json({
      message: err
    });
  }
});

// delete specific user
router.delete("/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({
      _id: req.params.userId
    });
    res.json(removedUser);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

// update specific user
router.patch("/:userId", async (req, res) => {
  try {
    const updatedUser = await User.updateOne({
      _id: req.params.userId
    }, {
      $set: {
        title: req.body.title // updates the title of the posts
      }
    });
    res.json(updatedUser);
  } catch (err) {
    res.json({
      message: err
    });
  }
});

module.exports = router;