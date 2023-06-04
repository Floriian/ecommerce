const adminDatabase = db.getSiblingDB("admin");

adminDatabase.createUser({
  user: "ecommerce_user",

  pwd: "ecommerce_user",

  roles: [
    {
      role: "readWrite",

      db: "ecommerce_database",
    },
  ],
});

const tsmdb = db.getSiblingDB("ecommerce_database");

tsmdb.createCollection("delete_this");
