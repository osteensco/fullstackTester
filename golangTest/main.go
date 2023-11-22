package main

import (
    "fmt"
    "net/http"
    "log"
)

func main() {

    Port := "8080"

    // http.Handle("/", http.FileServer(http.Dir("../vanillajs")))

    http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "OK")
    })

    log.Println("Server listening on "+ Port)

    err := http.ListenAndServe(":"+Port, nil)
    if err != nil {
        log.Println("Error starting server:", err)
    }

}
