# Svelte

## [Svelte-Site](https://svelte.dev/)

```js
npx degit sveltejs/template svelte-dabble
cd svelte-dabble
npm install
npm run dev
```

## [Examples from the docs](https://svelte.dev/examples/hello-world)

- Hello World
- Dynamic attributes and shorthand for attributes. cat={cat} === {cat}
- Styling. Why no name collisions?
- Yes, another counter :)
- Reactive declarations. Values changing when other values change ($: prefixed)
- Props. pass as in React, receive with export let name;
- (#if blah}{:else blah blah}{:else}{/if}
- {#each sharks as shark} or {#each sharks as {id, name, country}, i}
  As in React lists need keys
- {#await promise}{:then something}{:catch error}{/await}
