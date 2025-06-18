// Imports.
import Instance from "./instance.js";

// App.
const App = document.querySelector("#app");
const A = Instance("p", {
    innerText: "Hello, world",
    parent: App,
}, {
    class: "text-red-300"
});