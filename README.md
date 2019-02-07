# server_using_npm
building a practice server for an api


Structure: 
        API base = https://my-api-server-bjs.herokuapp.com/api/persons?person 


    Default key
        - &key=1234

    Query options = 
        - &age= 
        - &last_name=
        - &first_name=


* Example api request for persons with first name 'brian'
        https://my-api-server-bjs.herokuapp.com/api/persons?person&key=1234&first_name=brian

* API url (view all)
        https://my-api-server-bjs.herokuapp.com/api/persons/all


* Example using fetch()

    var url = "https://my-api-server-bjs.herokuapp.com/api/persons?person&key=1234&first_name=brian";

      fetch(url)
      .then((resp) => resp.json())
        .then(function(data) {
            console.log(data)
        })

