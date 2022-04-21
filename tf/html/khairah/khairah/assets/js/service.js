async function fetchData() {
    const html = document.getElementById('demo');
const list = document.createDocumentFragment();
    let response = await fetch('https://jsonplaceholder.typicode.com/todos');

    console.log(response.status); // 200
    console.log(response.statusText); // OK

    if (response.status === 200) {
        let data = await response.json();
        data.map(function(author) {
            let html = `<h2>i</h2>`;
            document.getElementById("demo").innerHTML = html;
            // let li = document.createElement('li');
            // let name = document.createElement('h2');
            // let email = document.createElement('span');

            // name.innerHTML = `${author.name}`;
            // email.innerHTML = `${author.email}`;


            // li.appendChild(name);
            // li.appendChild(email);
            // list.appendChild(li);

            
        });
        console.log(data)
    }

    ul.appendChild(list);

    
}




fetchData();

