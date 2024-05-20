# stage_project

## Instructions to run locally-
1. Install dependencies by running: npm install
2. add/edit local mysql database configurations and create the database.
3. You can now test APIs

## Aassumptions
I took into account a page size of 5 when paginating the response.

## Optimizations
1. We can enhance the API's speed by implementing a caching mechanism. Additionally, I've utilized indexes to further optimize its performance.
2. Since I used MySQL, I've established a new table to establish the relationship between show and user data, facilitating the implementation of the list feature.
