// CREATING A CLASS AND PRINT 'HELLO WORLD" IN CONSOLE
class Greetings {
    constructor(name){
       this.name = name;
       
    }

    hello () {
        const hello = `<h1>Hello ${this.name}!</h1>`;
        console.log(hello)
    }
}

const world = new Greetings("World");
world.hello();


// REST API USING ASYNC/AWAIT/FETCH
async function getUser (user) {
    const promise = await fetch(`https://api.github.com/users/${user}`);
    const data = await promise.json();
    await createAuthor(data);
}

const createAuthor = (promise) => {
    const author = document.querySelector("#author");
    author.innerHTML = `<h4>Author: ${promise.name}</h2>
                    <p>Github: <a href=" ${promise.html_url}" target="_blank">${promise.html_url}</a></p>`
}

getUser("caiodesign");
