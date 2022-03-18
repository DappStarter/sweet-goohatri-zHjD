require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stool response sad around inner nation equal ghost'; 
let testAccounts = [
"0xf74f665c78845b2aa00e81f62db4e7b373faa4ac571370ec923ff9839c7b50d2",
"0x078926249394d6fc217750c44a9060e6e6a819b1807e352135a5629023686387",
"0xc253cb21513c5f37bdb077ff0d2df0aa7beb9efd8682a0cb253bcb5698c1afa0",
"0x700adb7a9e8e5f32089c46a2bf2299a3a4d1ebc2649cbd1a6ab437bad06dfc36",
"0x5f85d67f32dfc8c2b53688c7af5bbd84258c068eb333369712fc635f984c7adc",
"0x56e622e560abbd610b90306b3aab54fbe842973c5bb33d7f3a9124b74b0dbf86",
"0xfa68909f47f3787c6113508552aa2ac8df2091f8467db9bb52b990a2d5082716",
"0x4a6b18916d94a31030af530973bf8f41b1b57bc9ead6cb67cbdc8cbcb05ade4e",
"0x55647e3df656a634f25dcf2c7c17350665c5bd66dbf12d0c776b7938da4c9f7e",
"0x2e9af583d765eeb29992b9914977f917813ae11c27102f06bd3621874c6c7a9a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

