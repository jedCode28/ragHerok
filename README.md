# Getting started
TLDR need to clone with a unique project name and rename database

1. git clone git@github.com:Derek229/starter-project-spring-21.git <new_project_name>

2. cd  into <new_project_name>

3. run bundle 

4. rename database to something unique may use <new_project_name> in `database.yml` - search fro `starter-spring-21` in `database.yml`  inside of vs code.

5. rails db:create
6. cd client
7. yarn

## to test 
1. rails s -p 3001
2. yarn start

## Handle GITHUB  need a new repo
 two way to do this 

1. remove remote add new one (easiest , preferred)
    - `git remote rm origin`
    -create a new github repo
    - git remote add origin <ssh link to repo>
2. remove git repo entirely and recreate a new repo
