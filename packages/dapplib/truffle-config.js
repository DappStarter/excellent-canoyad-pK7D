require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn property gesture inflict tattoo seat'; 
let testAccounts = [
"0x6c9d730fd5c198e73eea173731b70ccb0a4bf4c7553649134a2f6571f89d0a4f",
"0xdc3e74a3882fc1021616e0b31021ed3d2f9c569716d12964a165c80c3f9b91f9",
"0x76d8f9d9a3f06b6dcb2f7f7fee9f210e670df8fa523ecbb28c881646fb0b3796",
"0xbfb2f42cdfc6ad4d32d5d8c6e6a76feb1e685579b702b6e18b234a146372eb50",
"0x1c64e1f114d007045a89074e2318c9fcf273e3d838de227cd78064ebac75151a",
"0x01c49b91fb73e6941a3685c1253fa929b622ad83b43901c5758b435154d75e82",
"0x9e84ae9eb2033be2ddfb8297aeeefd2ebc555d5cff015e5bbecbea8767c3bcba",
"0x22c76508a29503fcd495c120e88c47dc9a2de772954501de5336268d735bfecc",
"0x2f5bfe8825a682a0443e623ac632d8bad1c9d84c9d2549b9eea62f659a30d328",
"0xb11489fdc35102abb29a522a232ea3ae0a5ef660125debf29d9275aba9256a5b"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

