import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const apiCoinMarketCap = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';
const apiToInsert = '';
const apiToEdit = '';

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


export {getCoinList};
export {insertNewElementToServer};
export {updateElementToServer};