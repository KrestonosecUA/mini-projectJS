//На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const postId = new URL(location.href).searchParams.get('postId');

const foo = async () => {
    const postJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const post = await postJson.json();
    console.log(post);

    const commentJson = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const comments = await commentJson.json();
    console.log(comments);

    const postInfo = document.createElement('div');
    const userId = document.createElement('p');
    const id = document.createElement('p');
    const title = document.createElement('p');
    const body = document.createElement('p');
    postInfo.classList.add('post-info');
    userId.classList.add('post-text');
    id.classList.add('post-text');
    title.classList.add('post-text');
    body.classList.add('post-text');

    userId.textContent = `Користувач номер: ${post.userId}`;
    id.textContent = `Допис номер: ${post.id}`;
    title.textContent = `Title: ${post.title}`;
    body.textContent = `Body: ${post.body}`;

    postInfo.append(userId, id, title, body);
    document.body.append(postInfo);

    const titleComments = document.createElement('h2');
    titleComments.classList.add('title-comments');
    titleComments.textContent = 'Коментарі'

    document.body.append(titleComments);

    const commentBlocks = document.createElement('div');
    commentBlocks.classList.add('comment-blocks');

    document.body.append(commentBlocks);

    for (let i = 0; i < comments.length; i++) {
        const commentBlock = document.createElement('div');
        const commentTitle = document.createElement('h3');
        const commentEmail = document.createElement('p');
        const commentBody = document.createElement('p');


        commentBlock.classList.add('comment-block');
        commentTitle.classList.add('comment-title');
        commentEmail.classList.add('comment-email');
        commentBody.classList.add('comment-body');

        commentTitle.textContent = `${i + 1}. ${comments[i].name}`;
        commentEmail.textContent = `Коментатор: ${comments[i].email}`;
        commentBody.textContent = `${comments[i].body}`;


        commentBlocks.appendChild(commentBlock);
        commentBlock.append(commentTitle, commentEmail, commentBody);

    }


}

void foo();