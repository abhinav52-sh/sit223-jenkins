pipeline {
    agent any
    tools {
        nodejs 'node'
    }
    
    stages {
        stage('Cleanup') {
            steps {
                cleanWs()
            }
        }
        
        stage('Install Dependencies') {
            steps{
                script {
                    git branch: 'main', url: 'https://github.com/abhinav52-sh/sit223-jenkins'
                    dir('sit223-jenkins') {
                        sh 'npm install --fetch-timeout=60000'
                        sh 'npm install start-server-and-test --save-dev'
                    }
                }
            }
        }
        
        stage('Code Analysis') {
            steps {
                script {
                    sh 'npx eslint src'
                }
            }
        }
        
        stage('Test') {
            steps {
                script {
                    sh "npx start-server-and-test 'start' 3000 'npx cypress run --headless'" 
                }
            }
        }
        
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
                }
            }
        }
        
        stage('Deploy') {
            steps {
                script {
                    def netlifySiteID = '484aa694-333e-4871-a52f-18cc786eb6a8'
                    def netlifyAccessToken = 'nfp_qa2QijugbUrQvJyK8PVyv1fzNA4xWuXK59e3'

                    sh 'npm install netlify-cli --save-dev'
                    sh 'npx netlify deploy --site ${netlifySiteID} --auth ${netlifyAccessToken} --dir ./build --prod'
                }
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline Succedded! '
        }
        failure {
            echo 'Pipeline Failed!'
        }
    }
}
