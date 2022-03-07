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
   
# Commuto Interface Desktop

1. Ensure you have set up a working Commuto Protocol development environment.

2. Ensure that you have JDK 16 installed:

   ```
   $ javac -version
   ```
   
3. Install [IntelliJ IDEA](https://www.jetbrains.com/idea/)

4. Open IntelliJ IDEA and select `File` > `New` > `Project from Version Control...` 

5. Clone from this repository url: [`https://github.com/jimmyneutront/Commuto_Interface_Desktop.git`](https://github.com/jimmyneutront/Commuto_Interface_Desktop.git)

6. Trust the project, and wait for IntelliJ to finish importing and building the project.

7. Navigate to your `npm` project within your commuto-protocol repository.

8. Start a standalone Hardhat Network instance:

   ```
   $ npx hardhat node
   ```
   
9. Set up an on-chain testing environment by running [Setup_Test_Environment.py](https://github.com/jimmyneutront/commuto-protocol/blob/f29c18e0757c4f79ce9335b8ec863d7de762ffb8/Setup_Test_Environment.py#L14)

10. Return to your Commuto Interface Desktop repo, and replace the web3 provider address in [CommutoCoreInteraction.kt](https://github.com/jimmyneutront/Commuto_Interface_Desktop/blob/master/src/test/kotlin/com/commuto/interfacedesktop/CommutoCoreInteraction.kt) with the address and port number of your Hardhat Network instance.

11. You are now ready to run tests on and develop the Commuto Desktop interface! 

# Commuto Interface Mobile