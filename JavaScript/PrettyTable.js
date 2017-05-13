/**
 * Created by anthonyaltieri on 5/13/17.
 */

function calculateSectionLengths(labels, table) {
    const largest = [];
    for (let i = 0 ; i < labels.length ; i++) {
        largest[i] = labels[i].length
    }

    for (let i = 0 ; i < table.length ; i++) {
        for (let j = 0 ; j < table[i].length ; j++) {
            const stringContent = '' + table[i][j];
            const lengthContent = stringContent.length;
            if (lengthContent > largest[j]) {
                largest[j] = lengthContent
            }
        }
    }
    return largest
}

function getCenteredLabel(sectionLength, label) {
    const numWhitespace = sectionLength - label.length;
    const numSpace = Math.floor(numWhitespace / 2);
    let string = '';
    string += ' '.repeat(numSpace);
    string += label;
    string += ' '.repeat(numSpace);
    if (numWhitespace % 2 !== 0) {
        string += ' ';
    }
    return string;
}

function getHeader(labels, sectionLengths) {
    return labels.reduce((a, c, i) => `${a} ${getCenteredLabel(sectionLengths[i], c)} \u2503` , '\u2503');
}

function getTableWidth(sectionLengths) {
    return sectionLengths.reduce((a, c) => a + c + 2, 2);
}

function createRegularLine(sectionLengths) {
    return sectionLengths.reduce((a, c, i) => {
        return a + '\u2500'.repeat(c + 2) + (i === sectionLengths.length - 1 ? '\u2502' : '\u253C')
    }, '\u2502');
}

function createTopLine(sectionLengths) {
    return sectionLengths.reduce((a, c, i) => {
        return a + '\u2501'.repeat(c + 2) + (i === sectionLengths.length - 1 ? '\u2513' : '\u2533')
    }, '\u250F');
}

function createBottomLine(sectionLengths) {
    return sectionLengths.reduce((a, c, i) => {
        return a + '\u2500'.repeat(c + 2) + (i === sectionLengths.length - 1 ? '\u2518' : '\u2534')
    }, '\u2514');
}

function createSectionLine(sectionLengths) {
    return sectionLengths.reduce((a, sectionLength, i) => (
        a + '\u2501'.repeat(sectionLength + 2) + (i === sectionLengths.length - 1 ? '\u2529' : '\u2547')
    ), '\u2521')
}

function getContentPadded(content, sectionLength) {
    const contentLength = content.length;
    return sectionLength > content.length
        ? (content + ' '.repeat(sectionLength - contentLength))
        : content;
}

function printTable(labels, table) {
    const sectionLengths = calculateSectionLengths(labels, table);
    const header = getHeader(labels, sectionLengths);
    const topLine = createTopLine(sectionLengths);
    const bottomLine = createBottomLine(sectionLengths);
    const regularLine = createRegularLine(sectionLengths);
    const sectionLine = createSectionLine(sectionLengths);

    console.log(topLine);
    console.log(header);
    console.log(sectionLine);
    for (let i = 0 ; i < table.length ; i++) {
        let rowString = '\u2502';
        for (let j = 0 ; j < table[i].length ; j++) {
            const contentPadded = getContentPadded(table[i][j], sectionLengths[j])
            rowString += (' ' +  contentPadded + ' \u2502')
        }
        console.log(rowString);
        if (i === table.length - 1) {
            console.log(bottomLine)
        } else {
            console.log(regularLine)
        }
    }
}

module.exports = printTable;
