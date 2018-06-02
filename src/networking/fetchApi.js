import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const apiCoinMarketCap = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
const apiToInsert = '';
const apiToEdit = '';
const apiInsertNewDogLocal = 'http://localhost:3000/insert_new_dog';
const apiDogListLocal = 'http://localhost:3000/list_all_dog';
const apiUpdateADogLocal = 'http://localhost:3000/update_a_dog';
const apiDeleteADogLocal = 'http://localhost:3000/delete_a_dog';

const apiInsertNewDog = 'https://fathomless-hollows-47351.herokuapp.com/insert_new_dog';
const apiDogList = 'https://fathomless-hollows-47351.herokuapp.com/list_all_dog';
const apiUpdateADog = 'https://fathomless-hollows-47351.herokuapp.com/update_a_dog';
const apiDeleteADog = 'https://fathomless-hollows-47351.herokuapp.com/delete_a_dog';

async function getCoinList() {
  try {
    let res = await fetch(apiCoinMarketCap);
    let resJson = await res.json();
    return resJson;
  } catch (e) {
    console.log(`Error is: ${e}`);
  }
}

async function insertNewElementToServer(params) {
  try {
    let res = await fetch(apiToInsert, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    let resJson = await res.json();
    return resJson
  } catch (e) {
    console.error(`Error is: ${e}`)
  }
}

async function updateElementToServer(params) {
  try {
    let res = await fetch(apiToInsert, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    let resJson = await res.json();
    return resJson
  } catch (e) {
    console.error(`Error is: ${e}`)
  }
}

async function getDogList() {
  try {
    let res = await fetch(apiDogList);
    let resJson = await res.json();
    return resJson.data;
  } catch (e) {
    console.log(`Error is: ${e}`);
  }
}

async function insertNewDogToServer(params) {
  try {
    let res = await fetch(apiInsertNewDog, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    let resJson = await res.json();
    return resJson.result
  } catch (e) {
    console.log(`Error is: ${e}`);
  }
}

async function updateADog(params) {
  try {
    let res = await fetch(apiUpdateADog, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    let resJson = await res.json();
    return resJson.result;
  } catch (e) {
    console.error(`Error is : ${e}`)
  }
}

async function deleteADog(params) {
  try {
    let res = await fetch(apiDeleteADog, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    let resJson = await res.json();
    return resJson.result;
  } catch (e) {
    console.error(`Error is: ${e}`);
  }
}

export {getCoinList};
export {getDogList};
export {insertNewDogToServer};
export {updateADog};
export {deleteADog};
export {insertNewElementToServer};
export {updateElementToServer};