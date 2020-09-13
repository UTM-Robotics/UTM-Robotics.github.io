## Description
This is the Server-Side Rendered UTM Robotics website for 2020+. 
The site is created using the following technologies:

1. React (Web Framework)
2. Gatsby (Server-Side Rendering)
3. Contentful (Content Management Service)
4. Github Pages (Hosting)
5. Github Actions (Deployment)

## Rules
1. Working-only in master
    - Please do not push broken code to master. If you're not sure how to collaborate.
2. No keys of any kind in this repo.
    - Adding public/private keys to this repo can allow the boogeyman to get us. We wouldn't want that now would we.
3. Convene before making changes
    - Make sure to convene with the UTM Robotics club members to allow for big changes. The more on board, the better.
4. Comment wherever required
    -  Add Todos, code explanations, and function headers if you think it would be useful for others.

## 🚀 Setup

1. Install npm
    https://nodejs.org/en/download/
2. Install the Gatsby CLI
    ```sh
    npm install -g gatsby-cli
    ```
    The above command installs Gatsby CLI globally on your machine.
3. Clone repository
    ```sh
    "git clone https://github.com/UTM-Robotics/UTM-Robotics.github.io"
    ```
4. Install prereqs
    ```sh
    npm install
    ```
5. Setup Contentful 
    ```sh
    
    ```
## Update Website Content
1. Log into Robotics Github
2. Log into Contentful (https://app.contentful.com)
    Go to https://app.contentful.com and select "login with github"
3. Add or edit Entries under the "Content" section, assume all fields are required for best viewing experience.

## Deployments
### Option 1
    1. Build website for production and push live.
    ```sh
    npm run deploy
    ```
    2. Github Action Activates
        If the github action triggers correctly, when your gh-pages branch is pushed to remote, an action will automatically trigger and push to our deployment repo.
    3. If "2." doesn't work after ~ 5 minutes
        Manually push to our deployment repo, yes, this repo exists because I am lazy for now.
        ```sh
            git checkout gh-pages
            git remote add deployment https://github.com/UTM-Robotics/UTM-Robotics-Deployment
            git push deployment gh-pages
        ```
