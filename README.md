# Client Side Developer test

In this repo you will find my attempt at completing the Client Side Developer test. Some reasoning behind my architectural decisions:

- I wasn't sure if changing the structure of the provided HTML document is allowed so I haven't changed the divs to an ordered list and haven't rearranged the elements to better suite the layout
- ACCESSIBILITY: I could have built the tab switch with React and states but I decided to keep the anchor and switching the tab with the fragment identifier to improve accesibility
- BROWSER SUPPORT: In my code I haven't used any experimental features that would be a problem for modern browsers to run
- REUSABILITY: I could have completed the task with a few lines of vanilla JS and without React but I thought doing so will help the reusability aspect of the task
- TEST COVERAGE: I added a few unit tests and snapshot tests for the React components
- NO JS (not implemented): The tab switch on its own is an easy task for HTML and CSS to handle, however, the task was to load the content from an API and I'm unable to do that without JS

# Running the app

Intall dependencies:

```
npm install
```

Run the app:

```
npm start
```

Build the app:

```
npm build
```

Run tests:

```
npm test
```
