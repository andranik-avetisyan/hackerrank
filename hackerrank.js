//####ARRAY###

//Arrays - DS
function reverseArray(a) {
    const b = [];
    for(let i = a.length - 1; i > -1; i--) {
        b.push(a[i]);
    }
    return b;
}

//Left Rotation
function leftRotation(d, a) {
    let tmp = 0;
    for (let i = 0; i < d; i++) {
        tmp = a[0];
        a.shift();
        a.push(tmp);
    }
    return a;
}

//Sparse Arrays
function matchingStrings(strings, queries) {
    const matchings = [];
    queries.forEach((query) => {
        const tmpArr = strings.filter((string) => string === query);
        matchings.push(tmpArr.length);
    });
    return matchings;
}

//2D Array - DS
function hourglassSum(arr) {
    let max = -64;
    for(let i = 0; i < arr.length - 2; i++) {
        for(let j = 0; j < arr.length - 2; j++) {
            let tmpSum = sum(arr, i, j, j + 2);
            if (max < tmpSum) {
                max = tmpSum;
            }
        }
    }
    return max;
}

function sum(arr, line, start, end) {
    let result = 0;
    for(let i = line; i <= line + 2; i++) {
        for(let j = start; j <= end; j++) {
            if ((i === line + 1) && (j === start || j === end)) {
                continue;
            }
            result += arr[i][j];
        }
    }
    return result;
}

// Dynamic Array
function dynamicArray(n, queries) {
    const seqList = [],
        result = [];
    let lastAnswer = 0;
    for (let i = 0, len = queries.length; i < len; i++) {
        const [q, x, y] = queries[i],
            seq = (x ^ lastAnswer) % n;
        if (!seqList[seq]) {
            seqList[seq] = [];
        }
        if (q === 1) {
            seqList[seq].push(y);
        } else {
            let index = y % seqList[seq].length;
            lastAnswer = seqList[seq][index];
            result.push(lastAnswer);
        }
    }
    return result;
}

//Array Manipulation TODO optimization
function arrayManipulation(n, queries) {
    const arr = Array(n).fill(0);
    for (let i = 0, len = queries.length; i < len; i++) {
        for (let j = queries[i][0]; j <= queries[i][1]; j++) {
            arr[j - 1] += queries[i][2];
        }
    }
    return Math.max( ...arr );
}

//####LINKED LIST###

//Insert a Node at the Tail of a Linked List
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtTail(head, data) {

    let newNode = new Node(data);

    if (!head) {
        head = newNode;
        return head;
    }

    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
    }
    tail.next = newNode;

    return head;
}

//Insert a node at the head of a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtHead(head, data) {

    let newNode = new Node(data);

    if (!head) {
        head = newNode;
        return head;
    }

    newNode.next = head;
    head = newNode;

    return head;
}

//Insert a node at a specific position in a linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function insertNodeAtPosition(head, data, position) {

    let newNode = new Node(data);

    let index = 0,
        currentPosition = head;
    while (index < position - 1) {
        currentPosition = currentPosition.next
        index++;
    }

    newNode.next = currentPosition.next;
    currentPosition.next = newNode;

    return head;
}

//Delete a Node
function deleteNode(head, position) {

    if (position === 0) {
        head = head.next;
        return head;
    }

    let index = 0,
        currentPosition = head;
    while (index < position - 1) {
        currentPosition = currentPosition.next
        index++;
    }

    currentPosition.next = currentPosition.next.next;

    return head;

}

//Compare two linked lists
function CompareLists(llist1, llist2) {

    let size1 = 0,
        size2 = 0,
        currentPosition1 = llist1,
        currentPosition2 = llist2;

    while (currentPosition1.next !== null) {
        currentPosition1 = currentPosition1.next
        size1++;
    }

    while (currentPosition2.next !== null) {
        currentPosition2 = currentPosition2.next
        size2++;
    }

    if (size1 !== size2) {
        return 0;
    }

    currentPosition1 = llist1;
    currentPosition2 = llist2;
    while (currentPosition1.next !== null) {
        if (currentPosition1.data !== currentPosition2.data) {
            return 0;
        }
        currentPosition1 = currentPosition1.next,
        currentPosition2 = currentPosition2.next
    }

    return 1;
}

//####STACK###

//Maximum Element
function processData(input) {
    const stack = [],
        maxElements = [],
        arr = input.split('\n');
    for(let i = 1; i <= Number(arr[0]); i++) {
        if (arr[i][0] === '1') {
            let element = Number(arr[i].slice(2));
            stack.push(element);
            if (!maxElements.length || maxElements[maxElements.length - 1] < element) {
                maxElements.push(element);
            } else {
                maxElements.push(Number(maxElements[maxElements.length - 1]));
            }
        } else if (arr[i][0] === '2') {
            stack.pop();
            maxElements.pop();
        } else {
            console.log(maxElements[maxElements.length - 1]);
        }
    }
}

//Equal Stacks
function equalStacks(h1, h2, h3) {
    let sum1 = stackHeight(h1),
        sum2 = stackHeight(h2),
        sum3 = stackHeight(h3);

    while(true) {
        if (sum1 > sum2) {
            sum1 = sum1 - h1.shift();
        } else if (sum1 < sum2) {
            sum2 = sum2 - h2.shift();
        } else {
            if (sum2 > sum3) {
                sum1 = sum1 - h1.shift();
                sum2 = sum2 - h2.shift();
            } else if (sum2 < sum3) {
                sum3 = sum3 - h3.shift();
            } else {
                return sum3;
            }
        }
    }
}

function stackHeight(stack) {
    let height = stack.reduce((sum, current) => sum + current, 0);
    return height;
}

//Simple Text Editor
function processData(input) {
    const stack = [],
        arr = input.split('\n');
    let item = '';
    for(let i = 1; i <= Number(arr[0]); i++) {
        if (arr[i][0] === '1') {
            const subStr = arr[i].slice(2);
            item = item + subStr;
            stack.push(item);
        } else if (arr[i][0] === '2') {
            const delCout = Number(arr[i].slice(2));
            item = item.slice(0, -delCout);
            stack.push(item);
        } else if (arr[i][0] === '3') {
            const printIndex = Number(arr[i].slice(2));
            console.log(stack[stack.length - 1][printIndex - 1]);
        } else {
            stack.pop();
            if (stack.length) {
                item = stack[stack.length - 1];
            } else {
                item = '';
            }
        }
    }
}

//Balanced Brackets
function isBalanced(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        } else if (s[i] === '{') {
            stack.push(s[i]);
        } else if (s[i] === '[') {
            stack.push(s[i]);
        } else if (s[i] === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return 'NO';
            }
        } else if (s[i] === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                return 'NO';
            }
        } else if (s[i] === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                return 'NO';
            }
        }
    }
    if (stack.length) {
        return 'NO'
    }
    return 'YES';
}

//Waiter
function waiter(number, q) {
    let curr_a_pile = number,
        next_a_pile =[],
        output = [],
        prime = 2,
        iter = 0;

    while (iter < q) {
        const tmpPile= [];
        while (curr_a_pile.length) {
            const num = curr_a_pile.pop();
            if (num % prime === 0) {
                tmpPile.push(num);
            } else {
                next_a_pile.push(num);
            }
        }

        prime = nextPrime(prime);
        iter++;

        curr_a_pile = next_a_pile;
        next_a_pile = [];

        output = [...output, ...tmpPile.reverse()];
    }

    return [...output, ...curr_a_pile.reverse()];
}

function nextPrime(current_prime) {
    let isPrime = false;
    while (!isPrime){
        current_prime++;
        isPrime = true;
        for (let i = 2; i < current_prime; i++) {
            if (current_prime % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return current_prime;
}

//####QUEUE###

//Queue using Two Stacks
function processData(input) {
    const queue = [],
        arr = input.split('\n');
    for(let i = 1; i <= Number(arr[0]); i++) {
        if (arr[i][0] === '1') {
            const value = arr[i].slice(2);
            queue.push(value);
        } else if (arr[i][0] === '2') {
            queue.shift();
        } else {
            console.log(queue[0]);
        }
    }
}

//Truck Tour
function truckTour(petrolpumps) {
    let minIndex = 0,
        currentAmount = 0;
    for (let i = 0, len = petrolpumps.length; i < len; i++) {
        const [amount, distance] = petrolpumps[i];
        currentAmount += amount - distance;
        if (currentAmount < 0) {
            currentAmount = 0;
            minIndex = i + 1;
        }
    }
    return minIndex;
}

// Down to Zero II (works incorrect if 12 neds 4 * 3 not 6 * 6)
function downToZero(n) {
    let steps = 0;
    for (let i = n; i > 2; i--) {
        if (n % (i - 1) === 0) {
            steps++;
            n = i - 1;
        }
    }

    if (n > 3) {
        steps = steps + 1;
        steps = steps + downToZero(n - 1);
    } else {
        steps = steps + n;
    }

    return steps;
}

function downToZero(n) {
    let queue = [];
    let steps = 0;
    let center;
    let isPrime = true;
    if (n > 3){
        center = Math.ceil(Math.sqrt(n))
    } else {
        return n;
    }
    for (let i = center; i < n; i++) {
        if (n % i === 0) {
            let x = downToZero(i);
            queue.push(x);
            steps++;
            isPrime = false;
        }
    }
    if (isPrime) {
        steps = steps + downToZero(n - 1);
        steps++;
    }
    if (queue.length > 0) {
        let minIndex = Math.min(...queue);
        steps = steps + minIndex;
    }
    return steps;
}

const minMoves = [];
function minMove(n) {
    if (n <=3) {
        return n;
    }
    if (minMoves[n] > 0) {
        return minMoves[n];
    }
    let min = Infinity;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            let factor = n / i;
            min = Math.min(min, 1 + minMove(factor));
        }
    }
    min = Math.min(min, 1 + minMove(n - 1));
    minMoves[n] = min;
    return min;
}