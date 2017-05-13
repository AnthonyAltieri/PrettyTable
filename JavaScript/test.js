/**
 * Created by anthonyaltieri on 5/13/17.
 */

const printTable = require('./PrettyTable');

const table = [
    ["Anthony", "22", "red"],
    ["Chris", "2312414124124", "blonde"],
    ["Bharat", "23", "black"],
    ["Kevin", "23", "black"]
];

const labels = [
    "Name",
    "Age",
    "Hair Color"
];

printTable(labels, table);
