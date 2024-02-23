groovy
pipeline {
    agent any

    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    docker.build("calculator-app")
                }
            }
        }

        stage('Run Docker Container') {
            steps {
                script {
                    docker.image('calculator-app').run('-p 8080:80', '--name calculator-container')
                }
            }
        }
    }

    post {
        always {
            stage('Cleanup') {
                steps {
                    script {
                        docker.image('calculator-app').stopContainer('calculator-container')
                        docker.image('calculator-app').removeContainer('calculator-container')
                    }
                }
            }
        }
    }
}
