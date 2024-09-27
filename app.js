function getMatrix(idPrefix) {
    return [
        [parseFloat(document.getElementById(idPrefix + '00').value), parseFloat(document.getElementById(idPrefix + '01').value)],
        [parseFloat(document.getElementById(idPrefix + '10').value), parseFloat(document.getElementById(idPrefix + '11').value)]
    ];
}

function displayResult(matrix) {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
    if (matrix) {
        const table = document.createElement('table');
        matrix.forEach(row => {
            const tr = document.createElement('tr');
            row.forEach(value => {
                const td = document.createElement('td');
                td.innerText = value;
                tr.appendChild(td);
            });
            table.appendChild(tr);
        });
        resultDiv.appendChild(table);
    } else {
        resultDiv.innerText = 'Invalid operation';
    }
}

function addMatrices() {
    const A = getMatrix('a');
    const B = getMatrix('b');
    const result = [
        [A[0][0] + B[0][0], A[0][1] + B[0][1]],
        [A[1][0] + B[1][0], A[1][1] + B[1][1]]
    ];
    displayResult(result);
}

function subtractMatrices() {
    const A = getMatrix('a');
    const B = getMatrix('b');
    const result = [
        [A[0][0] - B[0][0], A[0][1] - B[0][1]],
        [A[1][0] - B[1][0], A[1][1] - B[1][1]]
    ];
    displayResult(result);
}

function multiplyMatrices() {
    const A = getMatrix('a');
    const B = getMatrix('b');
    const result = [
        [
            A[0][0] * B[0][0] + A[0][1] * B[1][0],
            A[0][0] * B[0][1] + A[0][1] * B[1][1]
        ],
        [
            A[1][0] * B[0][0] + A[1][1] * B[1][0],
            A[1][0] * B[0][1] + A[1][1] * B[1][1]
        ]
    ];
    displayResult(result);
}
