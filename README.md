# Event Creation Website
> ## Description
&emsp;&emsp;This project is basically a simple website where a user signs in, creates an event for other users, whereby other users can request to join the event. The creator of the event can either accept or deny the request. Upon accepting the required number of users, no more users can request to join the event.
> ## Getting started
 1. Firstly clone the repository into your local machine.
 ```bash
git clone https://github.com/Krishna-D-K/KTJ
```
 2. cd to frontend folder and install the dependencies using [npm](https://www.npmjs.com) .
```bash
cd frontend
npm install
```
3. Move back to the parent folder, cd to backend folder and install the dependencies.
```powershell
cd ..
cd backend
npm install
```
4. Start the server using node or nodemon, in the backend folder.
```bash
node server.js
```
5. Run the frontend in the frontend folder using the command.
```bash
npm run start
```

> ## Details
- React.js is used for frontend.
- Node.js + Express.js is used for backend.
- MongoDb Atlas is used for database.

&emsp;(*The **passwords.env** file is left intentionally in the repository, you may add it in .gitignore.*)
