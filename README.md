# Counter App (React.js)

`You are on the redux-toolkit branch. 
Here the counter logic has been built using a Redux toolkit package`

> It's a very simple counter app that can:

- increment the number by 1;
- decrement the nuber by 1;
- increase the number by 10;
- open and close the counter conditionally (the counter number will be returned back to 0 on close)

`NOTE: The app was created using 2 different approaches:`

- the first uses the classic Redux approach (switch to the 'classic-redux' branch to view the code);
- the second approach uses the Redux toolkit.

## The goals of creating this application:

The main goals for me as a web developer were to improve my skills in working with:

- the Redux toolkit package:
  - the createSlice() and configureStore() Redux toolkit methods;
  - creating the counter reducer functions using state and actions as parameters;
  - the useDispatch() react-redux hook to dispatch the reducer functions;
  - the useSelector() react-redux hook to display new state or render the components based on state change;

## To start the app on your machine:

1. Clone the project to your machine by running:

```
git clone https://github.com/SharinLana/react-redux-counter.git
```

2. To install the project dependencies, run:

```
npm install
```

3. When the installation is complete, run the following command to start the app:

```
npm start
```

4. To view the code of the alternative approach:

```
git switch classic-redux
```

## Languages, frameworks, libraries, packages, tools and technologies:

- React.js
- Redux (react-redux and reduxjs/toolkit packages)
- JavaScript
- CSS

## Functionalities:

- incrementing/decrementing the number of the counter;
- displaying components conditionally;
- responsive design (mobile adaptation);
