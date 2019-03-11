function getFirstSelector(selector) {
    return document.querySelector(selector);
}

function nestedTarget() {
    return document.querySelector('#nested .target');
}

function deepestChild() {
    let node = document.getElementById('grand-node');
    let childNode = node.children[0];

    while (childNode) {
        node = childNode;
        childNode = node.children[0]
    }
    return node;
}

function increaseRankBy(n) {
    let elementsToIncrease = document.querySelectorAll('.ranked-list li');

    for (let i = 0; i < elementsToIncrease.length; i++) {
        elementsToIncrease[i].innerHTML = parseInt(elementsToIncrease[i].innerHTML) + n;
    }
}