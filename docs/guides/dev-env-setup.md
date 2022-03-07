---
id: dev-env
title: Set Up A Development Environment
---

This guide describes how to set up a Commuto development environment to work on the Commuto witepaper, Commuto smart 
contracts and the Desktop, Android and iOS Commuto Interfaces.

# Whitepaper

1. Clone the git repository:

    ```
    $ git clone https://github.com/jimmyneutront/commuto-whitepaper.git
    ```

2. Enter the new directory:

    ```
   $ cd commuto-whitepaper
   ```
   
And now you're ready to contribute to the whitepaper repo! Any time that significant changes are made to Commuto, this 
repo should be updated to explain and document them.

# Commuto Protocol

1. Clone the git repository:

   ```
   $ git clone https://github.com/jimmyneutront/commuto-protocol.git
   ```

2. Enter the new directory:

   ```
   $ cd commuto-protocol
   ```
   
3. Ensure that you have Python 3.7 or later installed:

   ```
   $ python3 --version
   ```
   
4. Create a new virtual environment in the project directory:

   ```
   $ python3 -m venv .venv
   ```
   
5. Use pip to install the following packages: `web3`, `slither-analyzer`, `solc-select` and `py-solc-x`:

   ```
   $ pip install web3 slither-analyzer solc-select py-solc-x
   ```

6. Use solc-select to install solc 0.6.12:

   ```
   $ solc-select install 0.6.12
   ```
   
7. Set 0.6.12 as the global version of solc:

   ```
   $ solc-select use 0.6.12
   ```
   
8. Download and install [Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

9. Create and enter new directory and initialize a new npm project: 

   ```
   $ mkdir commuto-test-chain
   $ cd commuto-test-chain
   $ npm init
   ```

10. Install [Hardhat](https://hardhat.org):

   ```
   $ npm install --save-dev hardhat
   ```
   
11. Start a standalone Hardhat Network instance:

   ```
   $ npx hardhat node
   ```
   
12. Replace the web3 provider address in [CommutoSwapTest.py](https://github.com/jimmyneutront/commuto-protocol/blob/f29c18e0757c4f79ce9335b8ec863d7de762ffb8/tests/CommutoSwapTest.py#L10) and [Setup_Test_Environment.py](https://github.com/jimmyneutront/commuto-protocol/blob/f29c18e0757c4f79ce9335b8ec863d7de762ffb8/Setup_Test_Environment.py#L14) with the address and port number of your Hardhat Network instance.

13. You are now ready to run tests and experiment with the Commuto Protocol!

   ```
   $ cd ../tests
   $ python3 -m unittest
   ```