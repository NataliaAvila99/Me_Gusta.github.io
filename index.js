let likeCount1 = 0;
document.getElementById('like1').addEventListener('click', function() {
    likeCount1++;
    document.getElementById('likeCount1').textContent = likeCount1;
});

let likeCount2 = 0;
document.getElementById('like2').addEventListener('click', function() {
    likeCount2++;
    document.getElementById('likeCount2').textContent = likeCount2;
});

let likeCount3 = 0;
document.getElementById('like3').addEventListener('click', function() {
    likeCount3++;
    document.getElementById('likeCount3').textContent = likeCount3;
});