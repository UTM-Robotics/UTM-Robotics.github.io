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
    
    Confirm download worked with
    ```sh
    npm --version
    ```
2. Install the Gatsby CLI
```sh
npm install -g gatsby-cli
```
The above command installs Gatsby CLI globally on your machine.
3. Clone git repository
```sh
git clone https://github.com/UTM-Robotics/UTM-Robotics.github.io
```
4. Install prereqs (These commands can be run from wsl if they dont work on windows)
```sh
    ./setuprequirements.cmd
```
5. Setup Contentful 
    1. Create a file for your keys in root of repo
    ```
    touch ./.env.development
    ```
    2. Obtain the Contentful Development key and Space ID
    Log in to Contentful using your given Credential system. 
    Execs: Github Oauth
    Other: Undetermined glhf
    Find the strings here:
    ```
    Once logged into Contentful do the following:
        1. Click the left dropdown.
        2. Click on the Space UTMRobotics.github.io (if not already selected)
        3. Settings dropdown on top right of screen
        4. API Keys
        5. Click "UTMRobotics.github.io Development Key"
        6. Temporarily leave tab open, proceed
    ```
    3. Copy the following into ".env.development"
    ```
    CONTENTFUL_SPACE_ID=CONTENTFUL_SPACE_ID_HERE
    CONTENTFUL_ACCESS_TOKEN=YOUR_KEY_HERE_NO_QUOTES
    ```
4. Test your installation!
```
gatsby develop
```

## Update Website Content
1. Log into Robotics Github
2. Log into Contentful (https://app.contentful.com)
    Go to https://app.contentful.com and select "login with github"
3. Add or edit Entries under the "Content" section, assume all fields are required for best viewing experience.

## Deployments
Before deploying, please ensure your code runs without error:
```sh
gatsby develop
```
### Option 1 Manual Deployment
1. Build website for production
```sh
npm run deploy
```
2. Push Branch live
```sh
git checkout gh-pages
git push origin gh-pages
```
Note, this will leave you on the gh-pages branch to go back, run:
```sh
git checkout master
```
### Option 2 
1. Merge your branch to master.
```sh
git checkout master
git pull
git merge master
git push
```
2. Check Github Action Status:
https://github.com/UTM-Robotics/UTM-Robotics.github.io/actions
Your site is now live! If the Action failed, your code is broken, please contact an executive if you cannot immediately fix this.
## Deployment Versions
V1 - Past events
V1.0.3 - Q&A Event
V1.0.4 - Weekly #2
V1.0.5 - Weekly #2 fixed
V1.0.6 - Weekly Workshops Added