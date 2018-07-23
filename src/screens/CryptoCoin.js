import React, {Component} from 'react';
import {
  View, Text, StyleSheet, FlatList,
  Image, RefreshControl,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import {getCoinList} from '../networking/fetchApi';

export default class CryptoCoin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRefreshing: false,
      isLoading: true,
      coinData: [],
    };
    // this.tick = this.tick.bind(this);
    // this.onRefresh = this.onRefresh.bind(this)
  }

  tick = () => {
    this.setState({isRefreshing: true});
    getCoinList().then((coinList) => {
      this.setState({
        isRefreshing: false,
        isLoading: false,
        coinData: coinList,
      });
    }).catch((e) => {
      this.setState({
        isRefreshing: false,
        isLoading: false,
        coinData: [],
      });
    });
  };

  onRefresh = () => {
    this.tick();
  };

  componentDidMount() {
    this.tick();
    // setInterval(() => this.tick(), 5000);
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View>
          <Spinner
            visible={this.state.isLoading}
            textContent={'Loading...'}
            textStyle={{color: 'black'}}
            animation="fade"
          />
        </View>
      );
    }
    return (
      <View style={{flex: 1, backgroundColor: 'white'}}>
        <FlatList
          data={this.state.coinData}
          renderItem={({item, index}) => {
            return (
              <CoinCard
                coin_name={item.name}
                symbol={item.symbol}
                price_usd={item.price_usd}
                percent_change_24h={item.percent_change_24h}
                percent_change_7d={item.percent_change_7d}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.isRefreshing}
              onRefresh={this.onRefresh}
            />
          }
        >

        </FlatList>
      </View>
    );
  }
}

export class CoinCard extends Component {
  render() {
    return (
      <View style={container}>
        <View style={upperRow}>
          <Image
            style={{height: 40, width: 40}}
            source={{uri: images[this.props.symbol]}}
          />
          <Text style={coinSymbol}>{this.props.symbol}</Text>
          <Text style={seperator}>|</Text>
          <Text style={coinName}>{this.props.coin_name}</Text>
          <Text style={coinPrice}>{this.props.price_usd}$</Text>
        </View>

        <View style={statisticsContainer}>
          <Text>24h: <Text style={this.props.percent_change_24h < 0 ?
            percentChangeMinus :
            percentChangePlus}>{this.props.percent_change_24h}%</Text></Text>
          <Text>7 days: <Text style={this.props.percent_change_7d < 0 ?
            percentChangeMinus :
            percentChangePlus}>{this.props.percent_change_7d}%</Text></Text>
        </View>
      </View>
    );
  }
}

export const images = {
  BTC: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609483/bitcoin_eqld4v.png',
  ETH: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609485/ethereum_nw0chu.png',
  XRP: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/ripple_p0xeut.png',
  BCH: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327336/bch_2x_hahroi.png',
  LTC: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512427497/ltc_fjbqjf.png',
  DASH: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609484/dash_oltvqi.png',
  XEM: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/nem_imprip.png',
  BCC: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/bitconnect_oj1bo5.png',
  XMR: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/monero_wzk3ur.png',
  NEO: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1508609486/neo_fvoo6c.png',
  MIOTA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1512510148/miota_2x_xkby9u.png',
  ADA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1513434489/cardano_unympj.png',
  BTG: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1513434542/bitcoin-gold_reytam.png',
  XLM: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326886/xlm_2x_jfwlwt.png',
  ADA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326874/ada_2x_g4fs0c.png',
  IOTA: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516327102/miota_2x_zsvtqc.png',
  TRX: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326885/trx_2x_ukhxjm.png',
  EOS: 'https://res.cloudinary.com/da7jhtpgh/image/upload/v1516326878/eos_2x_dvr7p0.png',
};
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20,
  },
  upperRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  coinSymbol: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold',
  },
  coinName: {
    marginTop: 10,
    marginLeft: 5,
    marginRight: 20,
  },
  seperator: {
    marginTop: 10,
  },
  coinPrice: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 10,
    fontWeight: 'bold',
  },
  statisticsContainer: {
    display: 'flex',
    borderTopColor: '#FAFAFA',
    borderTopWidth: 2,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  percentChangePlus: {
    color: '#66ff33',
    fontWeight: 'bold',
    marginLeft: 5,
  },
  percentChangeMinus: {
    color: '#DD2C00',
    fontWeight: 'bold',
    marginLeft: 5,
  },
});

const {
  container,
  upperRow,
  coinSymbol,
  coinName,
  coinPrice,
  statisticsContainer,
  seperator,
  percentChangePlus,
  percentChangeMinus,
} = styles;
