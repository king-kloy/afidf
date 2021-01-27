# backend

The back-end(power house) of afidf

## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. You have to also setup a local [MongoDB](https://mongodb.com) else you might get database connection error.

## Installation

First of all, make sure you have your MongoDB database connection. If you have MongoBD already installed then run this command to start the database connection:

```bash
mongod --port 27018 --dbpath=./[PATH_TO_API_DIR]/afidf-batabase/data
```

To run the app, run these commands in terminal windows from the root (or where the `afidf` directory is located):

```bash
cd backend && yarn && yarn start
```

Note: If you're using Linux Bash for Windows, [see this guide](https://www.howtogeek.com/261575/how-to-run-graphical-linux-desktop-applications-from-windows-10s-bash-shell/) or use `node` from the command prompt.
