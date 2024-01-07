const tweetForm = document.querySelector('#tweetForm');
const tweetList = document.querySelector('#tweets')

tweetForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const newTweet = document.createElement('li');
    const usernameInput = tweetForm.elements.username;
    const tweetInput = tweetForm.elements.tweet;
    newTweet.innerHTML = `<b>${usernameInput.value}</b> : ${tweetInput.value}`;
    tweetList.appendChild(newTweet);
    usernameInput.value = '';
    tweetInput.value = '';
});


tweetList.addEventListener('click', function (e) {
    e.target.nodeName === 'LI' && e.target.remove();
});

