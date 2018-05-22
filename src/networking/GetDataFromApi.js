import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const apiCoinMarketCap = 'https://api.coinmarketcap.com/v1/ticker/?limit=10';

async function getCoinList() {
  try {
    let res = await fetch(apiCoinMarketCap);
    let resJson = await res.json();
    return resJson;
  } catch (e) {
    console.log(`Error is: ${e}`);
  }
}

export {getCoinList};