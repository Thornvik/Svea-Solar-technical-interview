# Svea Solar Technical interview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First clone the project from this repo:
```bash
  git clone name-of-repository
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying files such as `app/page.tsx`. The pages auto-updates as you edit the files.

## Implementation Choices

### styling

CSS moduels for a light weight and robust way to style components.

clsx utility for constructing classname string conditionally.

### State management

**React Context** for "global" states.

**React Hooks** when needed for things such as local states or do fetch things on first render or only when required arguments are available.

**Custom React Hooks** for handling api calls

### Routing

This project is setup using **App routing** which is the latest version of NextJS compared to the old Page router pattern.

### API design patterns

The app utilizes the clean code design pattern for dependency injection. Folder **api** contains *repositories* which each is a corresponding handler for each **RESTAPI** resource. It also includes an **index.ts**, from where you should access reach repository from your components. Each repository should be an exported constant for each available repository. In **index.ts** we also toggle between our **MOCK API:s** and the API:s based on if the node enviornment is **production** or not. This is to allow for transitions between mocks and the accutal API:s when developing locally and pushing to production without the developer having to manually toggle between the mocks and the API:s
