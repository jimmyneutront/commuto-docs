---
id: core-tec-ref
title: CommutoSwap Technical Reference
---

This document describes the structs, events and functions used by the CommutoSwap smart contract.

# Structs

## Offer
```solidity
struct Offer {
    bool isCreated;
    bool isTaken;
    address maker;
    bytes interfaceId;
    address stablecoin;
    uint256 amountLowerBound;
    uint256 amountUpperBound;
    uint256 securityDepositAmount;
    uint256 serviceFeeRate;
    SwapDirection direction;
    bytes price;
    bytes[] settlementMethods;
    uint256 protocolVersion;
}
```

This represents an offer within CommutoSwap.

| Name                  | Type          | Description                                                                                                                                   |
|:----------------------|:--------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| isCreated             | bool          | Used internally to check for offer existence                                                                                                  |
| isTaken               | bool          | Used internally to check if offer is taken                                                                                                    |
| maker                 | address       | The Ethereum address of the offer maker                                                                                                       |
| bytes                 | interfaceId   | The maker's Commuto interface id                                                                                                              |
| stablecoin            | address       | The address of the contract of the stablecoin to be swapped                                                                                   |
| amountLowerBound      | uint256       | The minimum amount of stablecoin the maker is willing to buy/sell                                                                             |
| amountUpperBound      | uint256       | The maximum amount of stablecoin the maker is willing to buy/sell                                                                             |
| securityDepositAmount | uint256       | The amount that the maker and taker must temporarily surrender as a security deposit                                                          |
| serviceFeeRate        | uint256       | The rate, expressed as a percentage times 100, of the taken swap amount that will be charged to both the maker and the taker as a service fee |
| direction             | SwapDirection | An enum that determines whether the maker is offering to buy or sell stablecoin                                                               |
| price                 | bytes         | A UTF-8 byte array describing the price of the offer, in terms of (number of FIAT units) per 1 STBL                                           |
| settlementMethods     | bytes[]       | An array of supported settlement methods by which the maker is willing to send/receive payment                                                |
| protocolVersion       | uint256       | Indicates for which version of CommutoSwap this offer was created                                                                             |

## Swap
```solidity
struct Swap {
    bool isCreated;
    bool requiresFill;
    address maker;
    bytes makerInterfaceId;
    address taker;
    bytes takerInterfaceId;
    address stablecoin;
    uint256 amountLowerBound;
    uint256 amountUpperBound;
    uint256 securityDepositAmount;
    uint256 takenSwapAmount;
    uint256 serviceFeeAmount;
    uint256 serviceFeeRate;
    SwapDirection direction;
    bytes price;
    bytes settlementMethod;
    uint256 protocolVersion;
    bool isPaymentSent;
    bool isPaymentReceived;
    bool hasBuyerClosed;
    bool hasSellerClosed;
    DisputeRaiser disputeRaiser;
}
```

This represents a swap within CommutoSwap.

| Name                  | Type             | Description                                                                                                                                                        |
|:----------------------|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isCreated             | bool             | Copied from corresponding Offer struct                                                                                                                             |
| requiresFill          | bool             | Used internally for maker-as-seller trades to check if maker has filled swap                                                                                       | 
| isTaken               | bool             | Copied from corresponding Offer struct                                                                                                                             |
| maker                 | address          | Copied from corresponding Offer struct                                                                                                                             |
| bytes                 | makerInterfaceId | Copied from interfaceId field of corresponding Offer struct                                                                                                        |
| taker                 | address          | The Ethereum address of the taker                                                                                                                                  |
| bytes                 | takerInterfaceId | The taker's Commuto interface id                                                                                                                                   |
| stablecoin            | address          | Copied from corresponding Offer struct                                                                                                                             |
| amountLowerBound      | uint256          | Copied from corresponding Offer struct                                                                                                                             |
| amountUpperBound      | uint256          | Copied from corresponding Offer struct                                                                                                                             |
| securityDepositAmount | uint256          | Copied from corresponding Offer struct                                                                                                                             |
| takenSwapAmount       | uint256          | The amount of stablecoin the taker has decided to buy/sell (note that amountLowerBound ≤ takenSwapAmout ≤ amountUpperBound)                                        |
| serviceFeeAmount      | uint256          | The amount to be paid to Commuto by both the maker and taker as a service fee                                                                                      |
| serviceFeeRate        | uint256          | Copied from corresponding Offer struct                                                                                                                             |  
| direction             | SwapDirection    | Copied from corresponding Offer struct                                                                                                                             |
| price                 | bytes            | Copied from corresponding Offer struct                                                                                                                             |
| settlementMethod      | bytes            | The settlement method by which the taker has decided to send/receive payment (note that settlementMethod must be in corresponding offer's settlementMethods field) |
| protocolVersion       | uint256          | Copied from corresponding Offer struct                                                                                                                             |
| isPaymentSent         | bool             | Used internally to check whether the buyer has sent fiat payment                                                                                                   |
| isPaymentReceived     | bool             | Used internally to check whether the seller has received fiat payment                                                                                              |
| hasBuyerClosed        | bool             | Used internally to track whether the buyer has closed the swap and received their purchased stablecoin plus their security deposit                                 |
| hasSellerClosed       | bool             | Used internally to track whether the seller has closed the swap and received their purchased stablecoin plus their security deposit                                |
| disputeRaiser         | DisputeRaiser    | Used internally to track dispute status, will be set to NONE by takeOffer                                                                                          |

# Events

## OfferOpened
```solidity
OfferOpened(bytes16 offerID, bytes interfaceId)
```

Emitted when a new offer is opened.

## PriceChanged
```solidity
PriceChanged(bytes16 offerID)
```

Emitted when the price of an offer is changed.

## OfferCanceled
```solidity
OfferCanceled(bytes16 offerID)
```

Emitted when an offer is canceled.

## OfferTaken
```solidity
OfferTaken(bytes16 offerID, bytes takerInterfaceId)
```

Emitted when an offer is taken.

## SwapFilled
```solidity
SwapFilled(bytes16 swapID);
```

Emitted when a maker-as-seller swap is filled

## PaymentSent
```solidity
PaymentSent(bytes16 swapID)
```

Emitted when the buyer indicates that they have sent payment.

## PaymentReceived
```solidity
PaymentReceived(bytes16 swapID)
```

Emitted when the seller indicates that they have received payment

## BuyerClosed
```solidity
BuyerClosed(bytes16 swapID)
```

Emitted when the buyer closes their side of the swap.

## SellerClosed
```solidity
SellerClosed(bytes16 swapID)
```

Emitted when the seller closes their side of the swap.

# Read-Only Functions

## Get Supported Settlement Methods
```solidity
function getSupportedSettlementMethods() view public returns (bytes[] memory)
```

Returns a list of byte arrays uniquely identifying each supported settlement method.

## Get Supported Stablecoins
```solidity
function getSupportedStablecoins() view public returns (address[] memory)
```

Returns a list containing the address of each supported stablecoin contract.

## Get Offer
```solidity
function getOffer(bytes16 offerID) view public returns (Offer memory)
```

Returns an Offer struct with the specified id

| Name    | Type    | Description                        |
|:--------|:--------|:-----------------------------------|
| offerID | bytes16 | The id of the Offer to be returned |

## Get Swap
```solidity
function getSwap(bytes16 swapID) view public returns (Swap memory)
```

Returns a Swap struct with the specified id

| Name   | Type    | Description                       |
|:-------|:--------|:----------------------------------|
| swapID | bytes16 | The id of the Swap to be returned |


# State-Changing Functions

## Set Settlement Method Support
```solidity
function setSettlementMethodSupport(bytes calldata settlementMethod, bool support)
```

Adds or removes support for a specific settlement method. This function can only be called by the owner of the CommutoSwap contract (the Commuto governance contract.)

| Name             | Type  | Description                                                                               |
|:-----------------|:------|:------------------------------------------------------------------------------------------|
| settlementMethod | bytes | The byte array uniquely identifying the settlement method in question                     |
| support          | bool  | Indicates whether support for the settlement method in question is to be added or removed |

## Set Stablecoin Support
```solidity
function setStablecoinSupport(address stablecoin, bool support)
```

Adds or removes support for a specific stablecoin. This function can only be called by the owner of the CommutoSwap contract (the Commuto governance contract.)

| Name       | Type    | Description                                                                        |
|:-----------|:--------|:-----------------------------------------------------------------------------------|
| stablecoin | address | The address of the stablecoin contract in question                                 |
| support    | bool    | Indicates whether support for the stablecoin in question is to be added or removed |

## Open Offer
```solidity
function openOffer(bytes16 offerID, Offer memory newOffer)
```

Opens a new offer to swap stablecoin for fiat.

| Name     | Type    | Description                                               |
|:---------|:--------|:----------------------------------------------------------|
| offerID  | bytes16 | A type-4 UUID that uniquely identifyies the new offer     |
| newOffer | Offer   | An Offer struct containing the specifics of the new offer |

## Edit Offer
```solidity
function editOffer(bytes16 offerID, Offer memory editedOffer, bool editPrice, bool editSettlementMethods)
```

Edits the price and/or supported settlement methods of an open swap offer. This function can only be called by the maker of the offer in question.

| Name                  | Type    | Description                                                                                                     |
|:----------------------|:--------|:----------------------------------------------------------------------------------------------------------------|
| offerID               | bytes16 | The id of the offer to be edited                                                                                |
| editedOffer           | Offer   | An Offer struct with the new price and/or settlement methods of the open offer                                  |
| editPrice             | boolean | Indicates whether the price of editedOffer should replace the price of the open offer                           |
| editSettlementMethods | boolean | Indicates whether the settlement methods of editedOffer should replace the settlement methods of the open offer |

## Cancel Offer
```solidity
function cancelOffer(bytes16 offerID)
```

Cancels an open offer. This function can only be called by the maker of the offer in question.

| Name    | Type    | Description                        |
|:--------|:--------|:-----------------------------------|
| offerID | bytes16 | The id of the offer to be canceled |

## Take Offer
```solidity
function takeOffer(bytes16 offerID, Swap memory newSwap)
```

Takes an open swap offer.

| Name    | Type    | Description                                            |
|:--------|:--------|:-------------------------------------------------------|
| offerID | bytes16 | The id of the offer to be taken                        |
| newSwap | Swap    | A Swap struct containing the specifics of the new swap |

## Fill Swap
```solidity
function fillSwap(bytes16 swapID)
```

Fills a maker-as-seller swap by locking up takenSwapAmount of the maker's STBL, to be sent to the buyer upon swap closure. This function can only be called by the maker of a seller swap.

| Name   | Type    | Description                     |
|:-------|:--------|:--------------------------------|
| swapID | bytes16 | The id of the swap to be filled |

## Report Payment Sent
```solidity
function reportPaymentSent(bytes16 swapID)
```

Used by the buyer to indicate that they have sent payment. This function can only be called by the buyer.

| Name   | Type    | Description                                        |
|:-------|:--------|:---------------------------------------------------|
| swapID | bytes16 | The id of the swap for which payment has been sent |

## Report Payment Received
```solidity
function reportPaymentReceived(bytes16 swapID)
```

Used by the seller to indicate that they have received payment. This function can only be called by the buyer.

| Name   | Type    | Description                                            |
|:-------|:--------|:-------------------------------------------------------|
| swapID | bytes16 | The id of the swap for which payment has been received |

## Close Swap
```solidity
function closeSwap(bytes16 swapID)
```

Used by the buyer to receive the stablecoin they just purchased and have their security deposit returned to them. Used by the seller to have their security deposit returned to them. This function can only be called by the buyer and seller.

| Name   | Type    | Description                     |
|:-------|:--------|:--------------------------------|
| swapID | bytes16 | The id of the swap to be closed |