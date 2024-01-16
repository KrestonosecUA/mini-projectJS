//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули

const foo = async () => {
    const usJson = await fetch('http://jsonplaceholder.typicode.com/users');
    const users = await usJson.json();

    const userBlocks = document.createElement('div');
    userBlocks.classList.add('user-blocks');

    for (const user of users) {
        const userBlock = document.createElement('div');
        const userInfo = document.createElement('p');
        const userButton = document.createElement('button');

        userBlock.classList.add('user-block');
        userInfo.classList.add('user-info');
        userButton.classList.add('user-button');

        userInfo.innerText = `${user.id}. ${user.name} `;
        userButton.innerText = 'Детальніше';

        userBlock.append(userInfo, userButton);
        userBlocks.appendChild(userBlock);

        userButton.onclick = function () {
            location.href = `user-details/user-details.html?userId=${user.id}`;
        }

    }
    document.body.appendChild(userBlocks);

}

void foo();