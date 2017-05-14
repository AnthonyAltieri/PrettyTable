package main

import (
	"./prettytable"
)

var table = [][]string{
	[]string{ "Anthony", "22", "red"},
	[]string{ "Chris", "23", "blonde"},
	[]string{ "Kevin", "23", "black"},
	[]string{ "Bharat", "23", "black"},
}

var labels = []string { "Name", "Age", "Hair Color" }


func main() {
	prettytable.PrintTable(labels, table)
}
