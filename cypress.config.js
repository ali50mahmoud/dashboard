const { defineConfig } = require("cypress");
const oracledb = require("oracledb");


module.exports = defineConfig({
  env:{
    
    
visionDB:{
  "user": "DB_MAINTAIN",
  "password": "DB_MAINTAIN",
  "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=10.14.55.11)(PORT=1523))(CONNECT_DATA=(SERVICE_NAME=vcstgdb)))"
},
FMSDB:{
  "user": "DB_MAINTAIN",
  "password": "DB_MAINTAIN",
  "connectString": "(DESCRIPTION=(ADDRESS=(PROTOCOL=TCP)(HOST=10.14.74.22)(PORT=1523))(CONNECT_DATA=(SERVICE_NAME=IFUATPDB)))"
},

      },
  chromeWebSecurity: false,
  defaultCommandTimeout: 100000,
  execTimeout: 120000,
  taskTimeout: 120000,
  retries:{ "runMode": 0, "openMode": 0},
  screenshotOnRunFailure: true,
  // trashAssetsBeforeRuns: true,
  video: false,
  "retries": 2,
  e2e: {
   baseUrl: "https://qa-test-frontend-ce07bae316f3.herokuapp.com/",
    
    
   "specPattern": "cypress/**/*.{feature,features}",
   watchForFileChanges: true,
    setupNodeEvents(on, config) {
   
      console.log(config.env)
      return require('./cypress/plugins/index.js')(on, config),
      on('task', {
        log(message) {
          console.log(message)
          return null
        },
      }),
      on("task", {
        SelectQueryVC: query => {
          const selectQuery = async (query, dbconfig) => {
            let connection
            try {
                connection = await oracledb.getConnection(dbconfig);
                var result = await connection.execute(query);
                   await connection.execute(`COMMIT`)
                   return result} catch (err) {
                console.log("Error => " + err);
                throw (err);
                // return err;
            } finally {
                if (connection) {
                    try {

                        await connection.close();
                    } catch (err) {
                        console.log("Error -->" + err);
                    }
                }
            }
          }
          return selectQuery(query, config.env.visionDB);
        },
      }),
  
      on("task", {
        SelectQueryFMS: query => {
          const selectQuery1 = async (query1, dbconfig1) => {
            let connection
            try {
                connection = await oracledb.getConnection(dbconfig1);
                var result = await connection.execute(query1);
                   await connection.execute(`COMMIT`)
                   return result} catch (err) {
                console.log("Error => " + err);
                throw (err);
                // return err;
            } finally {
                if (connection) {
                    try {

                        await connection.close();
                    } catch (err) {
                        console.log("Error -->" + err);
                    }
                }
            }
          }
          return selectQuery1(query, config.env.FMSDB);
        },
      });
    },
  },
});
