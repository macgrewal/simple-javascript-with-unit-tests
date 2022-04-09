# A simple JavaScript project with unit tests

## Why?

I sometimes interview people and often ask if they can develop 
something simple using TDD. This is simple enough in Java, C#, 
Scala, etc. but when I thought about it in JavaScript I realised
I hadn't done it myself so I created this.

## Dependencies

This is a simple NodeJS project created using `npm init`. It was
created using NodeJS `v16.14.2` (`lts/gallium`) but earlier versions
like `v14.x` also work.

## Unit testing framework

There are a few unit testing frameworks for JavaScript but I
went with what was most common at the time (2022), [Jest](https://jestjs.io/).

## Setup

```
npm install
```

## Running the tests

To run the tests, simple run the following command:

```
npm test
```

If you prefer to have the tests running as files are changed
(I like this approach for TDD), run the following command:

```
npm run tdd
```
