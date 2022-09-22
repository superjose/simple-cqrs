Welcome!
I've been working on proper startups ever since 2015. One of the capabilities of a true and tried startup is the ability to move fast and adapt to changes.

Today, I present you a simple CQRS pattern (or CQS for the matter) that can be applied to almost any programming language that will allow you to add a bunch of features without feeling constrained about the way you structure code.

Note that it sole purpose is to create a separation layer between your controller (Can be Express, the "C" in .NET MVC, Flask, or any other application) and your business logic in a way that you feel that you can add or remove without worrying too much about breaking other features.

This is written in pure TypeScript and has zero dependencies. This works in a browser, edge worker, Node, Deno, Bun, CloudFlare, Lambda, whatever. It's just plain JavaScript.

This has been greatly inspired by [Mediatr](https://github.com/jbogard/MediatR) and the main difference is that it leverages TypeScript's powerful Duck Typing to make it possible. (You'll see in code).

No need to define special classes or functions, as long as the shape of an input is matched, it will go through.

For example:

```ts
const inputA = {
    username: string;
    password: string;
}

const inputB = {
    username: string;
    password: string;
    birthday: Date;
    preferencesSet?: boolean;
}

// They both work!:
await dispatch({
    type: "REGISTER_USER",
    arg: inputA
});

await dispatch({
    type: "REGISTER_USER",
    arg: inputB
});

```

Please, let me know if there are improvements or other blind spots! I used this code in production for almost 4 years before my last startup faded away. It worked great and allowed me to add features and strangle the application when I had to make an architectural shift.
