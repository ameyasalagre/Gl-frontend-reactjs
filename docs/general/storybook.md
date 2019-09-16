# Storybook for React

# Automatic setup
```Shell
npx -p @storybook/cli sb init --type react
```
>Note: be sure you have a package.json in your project or the above command will fail.

# Manual setup
If you want to set up Storybook manually for your React project, this is the guide for you.

>Step 1: Add dependencies
>Add @storybook/react
>Add @storybook/react to your project. To do that, run:
```Shell
npm install @storybook/react --save-dev
```
>Add react, react-dom, @babel/core, and babel-loader
>Make sure that you have react, react-dom, @babel/core, and babel-loader in your dependencies as well because we list these as a peer dependencies:
```Shell
npm install react react-dom --save
npm install babel-loader @babel/core --save-dev 
```
>Step 2: Add an npm script
>Then add the following NPM script to your package.json in order to start the storybook later in this guide:

```jsx
{
  "scripts": {
    "storybook": "start-storybook"
  }
}
```
Step 3: Create the config file
For a basic Storybook configuration, the only thing you need to do is tell Storybook where to find stories.

To do that, create a file at .storybook/config.js with the following content:

```jsx
import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/index.js');
  // You can require as many stories as you need.
}
```

configure(loadStories, module);
That’ll load stories in ../stories/index.js. You can choose where to place stories, you can co-locate them with source files, or place them in an other directory.

Requiring all your stories becomes bothersome real quick, so you can use this to load all stories matching a glob.

details
Step 4: Write your stories
Now create a ../stories/index.js file, and write your first story like this:

```jsx
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Hello Button</Button>
  ))
  .add('with emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   
```

Each story is a single state of your component. In the above case, there are two stories for the demo button component:

>Button
>  ├── with text
>  └── with emoji
Finally: Run your Storybook
Now everything is ready. Run your storybook with:

npm run storybook
Storybook should start, on a random open port in dev-mode.

Now you can develop your components and write stories and see the changes in Storybook immediately since it uses Webpack’s hot module reloading.