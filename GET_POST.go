//Merged from https://zetcode.com/golang/getpostrequest/

package main

import (
    "fmt"
    "io/ioutil"
    "log"
    "net/http"
    "encoding/json"
    "net/url"
)

func GET_EXAMPLE() {

    resp, err := http.Get("http://webcode.me")

    if err != nil {
        log.Fatal(err)
    }

    defer resp.Body.Close()

    body, err := ioutil.ReadAll(resp.Body)

    if err != nil {
        log.Fatal(err)
    }

    fmt.Println(string(body))
}

func POST_EXAMPLE() {

    data := url.Values{
        "name":       {"John Doe"},
        "occupation": {"gardener"},
    }

    resp, err := http.PostForm("https://httpbin.org/post", data)

    if err != nil {
        log.Fatal(err)
    }

    var res map[string]interface{}

    json.NewDecoder(resp.Body).Decode(&res)

    fmt.Println(res["form"])
}

func main()  {
  GET_EXAMPLE()
  POST_EXAMPLE()
}
