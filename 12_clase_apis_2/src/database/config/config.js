module.exports = {
  "development": {
    "username": "root",
    "password": "root",
    "database": "movies_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0,
    "define": {
      "underscored": true,
      
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": 0
  }
}
