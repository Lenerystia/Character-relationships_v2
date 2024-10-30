# Character_relationships
# How to run

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Run database and connect

```bash
db:start - to start the docker container
```

# About app

Small project drawing relationships between characters

Now is very simple version

Data about characters and relationships is pulling from database Postgres

Now looks like:
![obraz](https://github.com/Lenerystia/Character_relationships/assets/77778018/3323fdc4-c610-4402-a7c8-72aa5ab2a50d)

## Roadmap

- forms to add characters and relationships
- editing characters and relationships
- individual pages for every character
- individual graphs relation for every character (example: Main character have relation with him, him and him)
- family tree
- and more (someday I will write)
