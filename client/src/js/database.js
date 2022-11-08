import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
    console.log("PUT to the database");

    // create a connection to the database and version we want to use
    const jateDb = await openDB("jate", 1);

    // create a new transaction and specify the databse and data privileges
    const tx = jateDb.transaction("jate", "readwrite");

    // open the desired object store
    const store = tx.objectStore("jate");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

initdb();
