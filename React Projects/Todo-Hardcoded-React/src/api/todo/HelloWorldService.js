import axios from 'axios';

class HelloWorldService {

    executeHelloWorld() {
        return console.log("Hi there!");
    }

    executeHelloWorldService() {
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        return axios.get('http://localhost:8080/hello-world-bean');
    }

    executeHelloWorldPathVariableService(name) {
        /*
        let username = 'user';
        let password = 'password';
        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password);
        */
        return axios.get(`http://localhost:8080/hello-world/path-variable/${name}`
        /*,
            {
                headers : {
                    Authorization : basicAuthHeader
                }
            }
        */
        );
    }
}

export default new HelloWorldService;