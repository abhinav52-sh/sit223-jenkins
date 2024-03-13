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
        
        stage('Build') {
            steps {
                script {
                    sh 'npm run build'
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

        stage('Test Deploy') {
            steps {
                sh 'docker build -t my-react-app .' // Build Docker image
                sh 'docker stop my-react-container || true' // Stop existing container (if running)
                sh 'docker rm my-react-container || true' // Remove existing container (if exists)
                sh 'docker run -d --name my-react-container -p 3002:3000 my-react-app' // Run Docker container
            }
        }
        
        
        stage('Production Deploy') {
            steps {
                script {
                    def netlifySiteID = ''
                    def netlifyAccessToken = ''

                    sh 'npm install netlify-cli --save-dev'
                    sh 'npx netlify deploy --site 484aa694-333e-4871-a52f-18cc786eb6a8 --auth nfp_qa2QijugbUrQvJyK8PVyv1fzNA4xWuXK59e3 --dir ./build --prod'
                }
            }
        }
    }
    
    post {
        success {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Successful",
                      body: 'The build was successful. Congratulations!',
                      to: 'sharma.abhinav.new@gmail.com',
                      attachLog: true
        }
        failure {
            emailext subject: "Pipeline '${currentBuild.fullDisplayName}' Failed",
                      body: 'The build has failed. Please investigate.',
                      to: 'sharma.abhinav.new@gmail.com',
                      attachLog: true
        }
    }
}
