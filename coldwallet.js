#!/usr/bin/node
var keypairs = require('ripple-keypairs');
var seed = (process.argv.length==3) ? process.argv[2] : keypairs.generateSeed();
var keypair = keypairs.deriveKeypair(seed);
console.log("Ripple-address: " + keypairs.deriveAddress(keypair.publicKey));
console.log("Ripple-secret: " + seed);
