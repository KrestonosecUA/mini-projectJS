//На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('userId');

const foo = async () => {
    const usJson = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await usJson.json();
    console.log(user);

    const postJson = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const posts = await postJson.json();
    console.log(posts);

    const detailsBlock = document.createElement('div');
    detailsBlock.classList.add('details-block');

    const userList = document.createElement('ul');
    userList.classList.add('user-list');

    const id = document.createElement('li');
    const name = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const address = document.createElement('li');
    const addressList = document.createElement('ul');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const geo = document.createElement('li');
    const geoList = document.createElement('ul');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const phone = document.createElement('li');
    const website = document.createElement('li');
    const company = document.createElement('li');
    const companyList = document.createElement('ul');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');

    const postButton = document.createElement('button');
    postButton.classList.add('post-button');
    postButton.innerText = 'post of current user';

    const postBlocks = document.createElement('div');
    postBlocks.classList.add('post-blocks');

    for (let i = 0; i < posts.length; i++) {
        const postBlock = document.createElement('div');
        const postTitle = document.createElement('p');
        const postDetailsButton = document.createElement('button');

        postBlock.classList.add('post-block');
        postTitle.classList.add('post-title');
        postDetailsButton.classList.add('post-detail-button');

        postTitle.textContent = `Post number ${i + 1}: ${posts[i].title}`;
        postDetailsButton.textContent = 'Детальніше';

        postBlocks.appendChild(postBlock);
        postBlock.append(postTitle, postDetailsButton);

        postDetailsButton.onclick = function () {
            location.href = `../post-details/post-details.html?postId=${posts[i].id}`;
        }
    }

    postBlocks.style.display = 'none';
    postButton.addEventListener('click', () => {
        postBlocks.style.display = 'flex';
    })

    id.textContent = `ID: ${user.id}`;
    name.textContent = `Name: ${user.name}`;
    username.textContent = `Username: ${user.username}`;
    email.textContent = `Email: ${user.email}`;
    address.textContent = `Address:` ;
    street.textContent = `Street: ${user.address.street}`;
    suite.textContent = `Suite: ${user.address.suite}`;
    city.textContent = `City: ${user.address.city}`;
    zipcode.textContent = `Zipcode: ${user.address.zipcode}`;
    geo.textContent = `Geo:`;
    lat.textContent = `Lat: ${user.address.geo.lat}`;
    lng.textContent = `Lng: ${user.address.geo.lng}`;
    phone.textContent = `Phone: ${user.phone}`;
    website.textContent = `Website: ${user.website}`;
    company.textContent = `Company:`;
    companyName.textContent = `Name: ${user.company.name}`;
    catchPhrase.textContent = `Catch Phrase: ${user.company.catchPhrase}`;
    bs.textContent = `BS: ${user.company.bs}`;

    companyList.append(companyName, catchPhrase, bs)
    geoList.append(lat, lng);
    addressList.append(street, suite, city, zipcode, geo, geoList);
    userList.append(id, name, username, email, address, addressList, phone, website, company, companyList)

    detailsBlock.appendChild(userList)

    document.body.append(detailsBlock, postButton, postBlocks);



}

void foo();