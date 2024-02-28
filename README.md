NAGP Client MFE - Micro Frontend Application
This repository contains the NAGP client MFE (Micro Frontend) application, comprising a shell along with two micro-applications (microapp1 and microapp2).

Repository Link
https://github.com/shivambindal93/nagp_client_mfe

Getting Started
To run the container application, use the following command:
npm run start

- Registering Multiple Applications

    - To register multiple applications and use them as web components in the container application, follow these steps
        - Host the build files of each micro-application.
        - Add the paths in the index.js file under the microappsPath array object.
    - Main.js and Main.css:
        - Ensure that main.js and main.css files are generated with the correct chunk path:
            - For JS: ${path}static/js/main.js
            - For CSS: ${path}static/css/main.css
    - Running Micro-applications:
        - Run each micro-application individually via:
            - npm run start
        - Make sure to run `npm i` in each micro-application before starting to install dependencies.
    - Building Container Application:
        - Build the container application with the required web component paths.
        - Host it on an HTTP server or use the host-server command in the container, microapp1, and microapp2 to host the applications.
- Structure
    - The shell folder contains the shell application.
    - The microapp1 folder contains the first micro-application.
    - The microapp2 folder contains the second micro-application.
    
Running Micro-applications Individually
To run each micro-application individually, navigate to its folder (microapp1 or microapp2) and use the following command:
npm run start

Hosting Applications
To host applications using an HTTP server, build the container application with the required web component paths. Alternatively, use the host-server command in the container, microapp1, and microapp2 to host the applications.
