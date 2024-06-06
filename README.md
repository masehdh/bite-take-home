## Step 1

Make sure you have node installed: https://nodejs.org/en

## Step 2

Run ```npm install``` in the root directory

## Step 3

Add a .env file in the root directory with 

```
MONGO_DB_URI=<your db string>
API_KEY=<key I sent on wellfound>
```

## Step 4

If you're in VS code, you can use run and debug, otherwise ```npm run dev``` in any console.

## Step 5

Make a post request to localhost:3001/trigger-sync and take a look at the server logs and your db.
