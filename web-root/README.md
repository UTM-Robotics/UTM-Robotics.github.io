
##🚀 **Setup this site**

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

## Update Website Content
1. Log into Robotics Github
2. Log into Contentful (https://app.contentful.com)
    Go to https://app.contentful.com and select "login with github"
3. Add or edit Entries under the "Content" section, assume all fields are required for best viewing experience.

##Deployments
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
