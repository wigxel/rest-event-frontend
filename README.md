This is the development branch for the Rest Event Platform.

## Design Specs for Project
[See Design Specs](https://xd.adobe.com/spec/aa269db1-f4a5-41e5-4872-a1d41ea658ce-dc17 "Adobe XD Link")

## How to contribute

First, thanks for contributing to this project. We appreciate your interest in our mini project. 
If you are new to contribution we advice you `clone` this repo by running the command in your `cli`.

```bash
git clone https://github.com/wigxel/rest-event-frontend.git rest-events-frontend
``` 

Secondly, We issue out _tasks_ from the `issues` tabs in the following ways. Every issue has got a `label` attached to them for easy sorting and development.

if you are working on a feature like a card design, the label should be `ui components` you need to: 

1. create a new branch: 
```bash
git checkout -b feat/cards
```

2. after creating the component use the commit message convention for example: 
```bash
git commit -m 'feat(rest-event): created a card component'
```

3. git push to `develop` branch with the command below, so the commit can be reviewed. 

```bash
git push -u origin develop
```

if you don't understand how to use the commit convention use:

```bash
 npx git-cz
```


## Component Development & Testing
We are using **storybook-js** for development and testing of the `UI Components`. To start the storybook server use the command.
```bash
npm run storybook
```
After the setup is done. You should navigate to the the `storybook/index.stories.js`. You should know what happens next.
