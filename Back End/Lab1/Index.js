import EventEmitter from "node:events";
const myEmitter = new EventEmitter();
myEmitter.on("greet", (teacher) => {
    console.log(`class started by ${teacher}`);
});
myEmitter.on("exit", (teacher) => {
    console.log(`class finished by ${teacher}`);
});
myEmitter.emit("greet", "Anshuman");
myEmitter.emit("exit", "Anshuman");
myEmitter.on("started", (gamer) => {
    console.log(`Game started by ${gamer}`);
});
myEmitter.on("completed", (gamer) => {
    console.log(`Game finished by ${gamer}`);
});
myEmitter.emit("started", "RALS");
myEmitter.emit("completed", "RALS");