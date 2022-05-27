# git-hub-topic-explorer
React app using github graphql

# Steps to run this github topics' app

The “>” means that you have to execute the following command in the terminal.

## Steps
### `1) Download`

Download this repository to your local machine.

### `2) Open terminal`

Open terminal in the project root directory of the repository in step 1(The root directory is at the same level of the packaje.json file)

### `3) Install the dependencies`

Install the dependencies with the command (> npm install)

### `4) Open .env file`

Open .env file of the project and add your github api key in the REACT_APP_GITHUB_API_KEY= your_github_api_key variable

### `5) Start`

Once you’ve downloaded all the dependencies and configured the .env file, execute the following command to start the project in your localhost. (> npm start)

### `6) Test the app`

The previous command will open the internet browser with the next url: http://localhost:3000/

### `7) Click Search button`

In the app, you can type the topic then click on the Seach button and you will see the related topics listed in the app.

### `8) Click on a topic in the table`

You can also click on a topic in the table to see the topics’ related topics.

# Steps to test this github topics' app

The “>” means that you have to execute the following command in the terminal.

## Steps
### `1) Test`

Once you’ve downloaded all the dependencies, execute the following command to test the project in your localhost. (> npm test)

## Some future improvements
### `Code Structuring`
If the number of components are going to be more than five, it is highly recommended to use a redux-thunk or redux-saga to manage the async processes.

### `Refactoring`
When you make the decision of using thunk or saga, you will need to modify some structure in the project and some functions as well to let the app work properly.

### `Additional Features`
We could some pagination feature when the github api’s response has more than 10 related topics.
Make the app responsive.
Improve de unit tests using jest.

## Learn More

You can find some interesting projects in my GitHub Profile [GitHub Profile](https://github.com/blackwolf2809).

