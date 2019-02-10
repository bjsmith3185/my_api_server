# server_using_npm
building a practice server for an api


Structure: 
        API base = https://my-api-server-bjs.herokuapp.com/api/persons?person 


    Default key
        - &key=123456  (must be included in the request)

    Query options = 
        - &all=person  (if all is used all other queries are ignored)
        - &age= 
        - &last_name=
        - &first_name=


* Example api request for persons with first name 'brian'
        https://my-api-server-bjs.herokuapp.com/api/persons?person&key=123456&first_name=brian

* Example api request for all persons 
        https://my-api-server-bjs.herokuapp.com/api/persons?person&key=123456&all=person 


* Example using fetch()

    var url = "https://my-api-server-bjs.herokuapp.com/api/persons?person&key=1234&first_name=brian";

      fetch(url)
      .then((resp) => resp.json())
        .then(function(data) {
            console.log(data)
        })


TO APPLY FOR AN API KEY
    visit https://bjsmith3185.github.io/My_API_homepage/



