# MERN Stack
What is the MERN Stack?

![MERN-Stack](https://webimages.mongodb.com/_com_assets/cms/kobuybqq12c9ya16f-mernstack_visualized.png?auto=format%2Ccompress)
> MongoDB - ExpressJS - ReactJS - NodeJS

This is my most recent run through [How to Use MERN Stack: A Complete Guide](https://www.mongodb.com/languages/mern-stack-tutorial) provided by MongoDB. 

The notible differences is that I am using __Docker-Compose__ to run the environment locally rather then Atlas, MongoDB's cloud-based service. _See Other hosted solutions below for aditional options._

While I understand that mongo is not very performant on non-linux environments it serves good enough for local development.

### Dependancies
- [Docker Compose](https://docs.docker.com/get-docker/)

I tend to prefer yarn but feel free you use npm as well

## Getting Started

### MongoDB
Pull the repo and change the set admin username and password for mongo database
> :warning: replace __#admin#__ and __#pass#__ with something you prefer

```sh
# pull the repo
git clone https://github.com/imaPheven/mern-stack
# change into root directory
cd mern-stack
# set mongo admin user/pass with #admin#/#pass# (Works on MacOS)
sed -i '' -e 's/<mongo-user>/admin/' docker-compose.yaml
sed -i '' -e 's/<mongo-pass>/admin/' docker-compose.yaml
sed -i '' -e 's/<mongo-user>/admin/' server/config.env
sed -i '' -e 's/<mongo-pass>/pass/' server/config.env

# pull docker images
docker-compose pull
# start the mongo instance
docker-compose up
```
To verify the instance is running correctly you can navigate to https://localhost:8050 for access to the [mongo-express](https://hub.docker.com/_/mongo-express) UI.


From here you will need two additional terminals:
### Starting the express server:
```sh
cd server
# install node packages
yarn
# start the express server
yarn start
```

### Starting the React Client:
```sh
cd client
# install node packages
yarn
# start the client
yarn start
```
If your browser doesn't open to the correct page you can manually navigate to https://localhost:5001



## Other hosted solutions:

- [AWS DocumentDB](https://aws.amazon.com/documentdb/?nc2=h_ql_prod_db_doc) is compatible with MongoDB. 

    > Amazon DocumentDB is a scalable, highly durable, and fully managed database service for operating mission-critical MongoDB workloads.

- [Azure Cosmos DB](https://docs.microsoft.com/en-us/azure/cosmos-db/choose-api#api-for-mongodb) is another MongoDB compatible 

    > Azure Cosmos DB is a fully managed NoSQL database for modern app development. Azure Cosmos DB takes database administration off your hands with automatic management, updates, and patching. It also handles capacity management with cost-effective serverless and automatic scaling options that respond to application needs to match capacity with demand.

- ~~[GCP Firebase](https://firebase.google.com/products/realtime-database/)~~ is unfortunately (at the time of this writting) not compatible with MongoDB drivers. :grimacing:






