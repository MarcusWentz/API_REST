// REST API Overview
// Javascript/node.js : quick to run
// Golang: scales with type error handling
// Credit: https://tutorialedge.net/golang/creating-restful-api-with-golang/
// Open http://localhost:10000/ to see page

package main

import (
    "fmt"
    "log"
    "net/http"
)

func homePage(w http.ResponseWriter, r *http.Request){
    fmt.Fprintf(w, "Welcome to the HomePage!")
    fmt.Println("Endpoint Hit: homePage")
}

func handleRequests() {
    http.HandleFunc("/", homePage)
    log.Fatal(http.ListenAndServe(":10000", nil))
}

func main() {
    handleRequests()
}
