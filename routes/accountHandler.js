import express from 'express';
import { promises as fsPromises } from 'fs';
import { ensureAccount } from '../lib/account.js';

export const router = express.Router();

router.post('/create', (req, res) => {
  // const app = express();

  // Your data to write to the .env file
  const envData = `USER_NAME=${req.body.username}
PASS=${req.body.password}
DOMAIN=${req.body.domain}
  `;

  // Path to your .env file
  const envFilePath = './.env';

  // Use fsPromises.writeFile for asynchronous file writing
  fsPromises
    .writeFile(envFilePath, envData)
    .then(() => {
      console.log('Data has been written to .env file');
      return fsPromises.readFile(envFilePath, 'utf-8');
    })
    .then(fileContents => {
      console.log('Contents of .env file:');
      console.log(fileContents);
    })
    .catch(error => {
      console.error('Error writing to .env file:', error);
    });

  ensureAccount(req.body.username, req.body.domain)
    .then(myaccount => {
      req.app.set('account', myaccount);
      return Promise.resolve('Yo');
    })
    .then(result => {
      res.redirect('/private');
    });
});

router.get('/create', async (req, res) => {
  res.status(200).render('createAccount', {
    layout: 'public'
  });
});