type NodeType<T> = {
    data: T
    next: NodeType<T> | null
}

let node1: NodeType<number> = {
    data: 412,
    next: null
}

let node2: NodeType<number> = {
    data: 7,
    next: null
}

let node3: NodeType<number> = {
    data: 19,
    next: null
}

node1.next = node2
node2.next = node3
