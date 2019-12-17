let pre = []
let post = []
const test = () => {
    const nodeinfo = [[5, 3], [11, 5], [13, 3], [3, 5], [6, 1], [1, 3], [8, 6], [7, 2], [2, 2]];
    nodeinfo.forEach((item, i) => {
        (item.push(i + 1))
    })
    nodeinfo.sort((a, b) => {
        return a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0;
    })
    var num = new BST();
    nodeinfo.forEach((item) => {
        num.insert(item[0], item[2])
    })
    preOrder(num.root);
    postOrder(num.root);
    return ([pre, post])
}

function Node(data, left, right, number) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.number = number
    this.show = show;
}

function show() {
    return this.number;
}

function BST() {
    this.root = null;
    this.insert = insert;
}

function insert(data, number) {
    var node = new Node(data, null, null, number);
    if (this.root == null) {
        this.root = node;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current == null) {
                    parent.left = node;
                    break;
                }
            } else {
                current = current.right;
                if (current == null) {
                    parent.right = node;
                    break;
                }
            }
        }
    }
}

//전위
function preOrder(node) {
    if (node != null) {
        pre.push(node.show())
        preOrder(node.left);
        preOrder(node.right);
    }
}

//후위
function postOrder(node) {
    if (node != null) {
        postOrder(node.left);
        postOrder(node.right);
        post.push(node.show())
    }
}
test()