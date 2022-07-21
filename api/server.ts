const express = require('express');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const dotenv = require('dotenv');

// initialise express app
const app = express();

// Configure environment vars
dotenv.config();

// Set up sessions
const fileStoreOptions = {};

type SessionOptions = {
  secret: string;
  store?: any | undefined;
  resave: boolean;
  saveUninitialized: boolean;
};

if (process.env.SESSION_SECRET === undefined) {
  console.log("Session secret couldn't be found. Exiting.");
  process.exit();
}

// configure sessions for dev
let sessionOptions: SessionOptions = {
  secret: process.env.SESSION_SECRET,
  store: undefined,
  resave: true, // should we save the session if it hasn't been modified?
  saveUninitialized: true, // should we save a session that's uninitialized?
};

// configure sessions for prod
if (process.env.NODE_ENV === 'production') {
  sessionOptions.store = new FileStore(fileStoreOptions);
  sessionOptions.resave = false;
  sessionOptions.saveUninitialized = false;
}

app.use(session(sessionOptions));
