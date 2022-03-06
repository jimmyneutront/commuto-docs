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
    SwapDirection direction;
    bytes price;
    bytes[] settlementMethods;
    uint256 protocolVersion;
}
```

This represents an offer within CommutoSwap.

| Name                  | Type          | Description                                                                                         |
|:----------------------|:--------------|:----------------------------------------------------------------------------------------------------|
| isCreated             | bool          | Used internally to check for offer existence                                                        |
| isTaken               | bool          | Used internally to check if offer is taken                                                          |
| maker                 | address       | The Ethereum address of the offer maker                                                             |
| bytes                 | interfaceId   | The maker's Commuto interface id                                                                    |
| stablecoin            | address       | The address of the contract of the stablecoin to be swapped                                         |
| amountLowerBound      | uint256       | The minimum amount of stablecoin the maker is willing to buy/sell                                   |
| amountUpperBound      | uint256       | The maximum amount of stablecoin the maker is willing to buy/sell                                   |
| securityDepositAmount | uint256       | The amount that the maker and taker must temporarily surrender as a security deposit                |
| direction             | SwapDirection | An enum that determines whether the maker is offering to buy or sell stablecoin                     |
| price                 | bytes         | A UTF-8 byte array describing the price of the offer, in terms of (number of FIAT units) per 1 STBL |
| settlementMethods     | bytes[]       | An array of supported settlement methods by which the maker is willing to send/receive payment      |
| protocolVersion       | uint256       | Indicates for which version of CommutoSwap this offer was created                                   |

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
    SwapDirection direction;
    bytes price;
    bytes settlementMethod;
    uint256 protocolVersion;
    bool isPaymentSent;
    bool isPaymentReceived;
    bool hasBuyerClosed;
    bool hasSellerClosed;
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
| direction             | SwapDirection    | Copied from corresponding Offer struct                                                                                                                             |
| price                 | bytes            | Copied from corresponding Offer struct                                                                                                                             |
| settlementMethod      | bytes            | The settlement method by which the taker has decided to send/receive payment (note that settlementMethod must be in corresponding offer's settlementMethods field) |
| protocolVersion       | uint256          | Copied from corresponding Offer struct                                                                                                                             |
| isPaymentSent         | bool             | Used internally to check whether the buyer has sent fiat payment                                                                                                   |
| isPaymentReceived     | bool             | Used internally to check whether the seller has received fiat payment                                                                                              |
| hasBuyerClosed        | bool             | Used internally to track whether the buyer has closed the swap and received their purchased stablecoin plus their security deposit                                 |
| hasSellerClosed       | bool             | Used internally to track whether the seller has closed the swap and received their purchased stablecoin plus their security deposit                                |

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

# State-Changing Functions