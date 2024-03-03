pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                // Checkout source code from version control
                checkout scm
            }
        }
        
        stage('Build and Test') {
            steps {
                // Use Node.js tool to install dependencies and run tests
                script {
                    def nodeJSHome = tool 'NodeJS'
                    env.PATH = "${nodeJSHome}/bin:${env.PATH}"
                    sh 'npm install'
                    sh 'npm test'
                }
            }
        }
        
        stage('Build Docker Image') {
            steps {
                // Build Docker image
                script {
                    docker.build('calculator-app')
                }
            }
        }
        
        stage('Push Docker Image') {
            steps {
                // Push Docker image to a registry (replace 'your-registry' with your actual registry)
                script {
                    docker.withRegistry('https://192.168.56.6:3000') {
                        docker.image('calculator-app').push()
                    }
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Deploy the application using Docker (replace 'your-registry' with your actual registry)
                script {
                    sh 'docker run -d -p 3000:3000 192.168.56.6/calculator-app'
                }
            }
        }
    }
}
