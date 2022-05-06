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
| hasSellerClosed       | bool             | Used internally to track whether the seller has closed the swap and received their their security deposit                                |
| disputeRaiser         | DisputeRaiser    | Used internally to track dispute status, will be set to NONE by takeOffer                                                                                          |

## Dispute
```solidity
struct Dispute {
    uint disputeRaisedBlockNum;
    address disputeAgent0;
    address disputeAgent1;
    address disputeAgent2;
    bool hasDA0Proposed;
    uint256 dA0MakerPayout;
    uint256 dA0TakerPayout;
    uint256 dA0ConfiscationPayout;
    bool hasDA1Proposed;
    uint256 dA1MakerPayout;
    uint256 dA1TakerPayout;
    uint256 dA1ConfiscationPayout;
    bool hasDA2Proposed;
    uint256 dA2MakerPayout;
    uint256 dA2TakerPayout;
    uint256 dA2ConfiscationPayout;
    MatchingProposalPair matchingProposals;
    DisputeReaction makerReaction;
    DisputeReaction takerReaction;
    DisputeState state;
    bool hasMakerPaidOut;
    bool hasTakerPaidOut;
    uint256 totalWithoutSpentServiceFees;
}
```

This represents a dispute within CommutoSwap

| Name                         | Type                 | Description                                                                                                                                       |
|:-----------------------------|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| disputeRaisedBlockNum        | uint                 | The block number in which the dispute was raised                                                                                                  |
| disputeAgent0                | address              | The address of the first dispute agent selected by the dispute raiser                                                                             |
| disputeAgent1                | address              | The address of the second dispute agent selected by the dispute raiser                                                                            |
| disputeAgent2                | address              | The address of the third dispute agent selected by the dispute raiser                                                                             |
| hasDA0Proposed               | bool                 | Used internally to track whether the first selected dispute agent has submitted a resolution proposal                                             |
| dA0MakerPayout               | uint256              | The amount of STBL that the first selected dispute agent recommends the maker be paid                                                             |
| dA0TakerPayout               | uint256              | The amount of STBL that the first selected dispute agent recommends the taker be paid                                                             |
| dA0ConfiscationPayout        | uint256              | The amount of STBL that the first selected dispute agent recommends be confiscated and sent to the service fee pool                               |
| hasDA1Proposed               | bool                 | Used internally to track whether the second selected dispute agent has submitted a resolution proposal                                            |
| dA1MakerPayout               | uint256              | The amount of STBL that the second selected dispute agent recommends the maker be paid                                                            |
| dA1TakerPayout               | uint256              | The amount of STBL that the second selected dispute agent recommends the taker be paid                                                            |
| dA1ConfiscationPayout        | uint256              | The amount of STBL that the second selected dispute agent recommends be confiscated and sent to the service fee pool                              |
| hasDA2Proposed               | bool                 | Used internally to track whether the third selected dispute agent has submitted a resolution proposal                                             |
| dA2MakerPayout               | uint256              | The amount of STBL that the third selected dispute agent recommends the maker be paid                                                             |
| dA2TakerPayout               | uint256              | The amount of STBL that the third selected dispute agent recommends the taker be paid                                                             |
| dA2ConfiscationPayout        | uint256              | The amount of STBL that the third selected dispute agent recommends be confiscated and sent to the service fee pool                               |
| matchingProposals            | MatchingProposalPair | Used internally to track which two submitted resolution proposals are identical to each other, if any                                             |
| makerReaction                | DisputeReaction      | The maker's reaction to the identical resolution proposals, if any                                                                                |
| takerReaction                | DisputeReaction      | The taker's reaction to the identical resolution proposals, if any                                                                                |
| state                        | DisputeState         | Used internally to track the state of the dispute                                                                                                 |                                                                 |
| hasMakerPaidOut              | bool                 | Used internally to track whether the maker has closed the disputed swap and received their STBL as specified by the approved resolution proposals |
| hasTakerPaidOut              | bool                 | Used internally to track whether the taker has closed the disputed swap and received their STBL as specified by the approved resolution proposals |
| totalWithoutSpentServiceFees | uint256              | The total amount of STBL that can be paid out to the maker, taker, and/or service fee pool                                                        |

# Events

## OfferOpened
```solidity
OfferOpened(bytes16 offerID, bytes interfaceId)
```

Emitted when a new offer is opened

## PriceChanged
```solidity
PriceChanged(bytes16 offerID)
```

Emitted when the price of an offer is changed

## OfferCanceled
```solidity
OfferCanceled(bytes16 offerID)
```

Emitted when an offer is canceled

## OfferTaken
```solidity
OfferTaken(bytes16 offerID, bytes takerInterfaceId)
```

Emitted when an offer is taken

## SwapFilled
```solidity
SwapFilled(bytes16 swapID);
```

Emitted when a maker-as-seller swap is filled

## PaymentSent
```solidity
PaymentSent(bytes16 swapID)
```

Emitted when the buyer indicates that they have sent payment

## PaymentReceived
```solidity
PaymentReceived(bytes16 swapID)
```

Emitted when the seller indicates that they have received payment

## BuyerClosed
```solidity
BuyerClosed(bytes16 swapID)
```

Emitted when the buyer closes their side of the swap

## SellerClosed
```solidity
SellerClosed(bytes16 swapID)
```

Emitted when the seller closes their side of the swap

## DisputeRaised
```solidity
DisputeRaised(bytes16 swapID, address disputeAgent0, address disputeAgent1, address disputeAgent2)
```

Emitted when a swapper raises a dispute

## ResolutionProposed
```solidity
ResolutionProposed(bytes16 swapID, address disputeAgent)
```

Emitted when a dispute agent submits a resolution proposal

## ReactionSubmitted
```solidity
ReactionSubmitted(bytes16 swapID, address addr, DisputeReaction reaction)
```

Emitted when the maker or taker of a disputed swap reacts to two or more identical resolution proposals

## DisputedSwapClosed
```solidity
DisputedSwapClosed(bytes16 swapID, address closer)
```

Emitted when the maker or taker of a disputed swap, for which at least two identical resolution proposals have been
submitted and accepted by both the maker and taker, closes their side of the disputed swap

## DisputeEscalated
```solidity
DisputeEscalated(bytes16 swapID, address escalator, EscalationReason reason)
```

Emitted when the maker or taker of a disputed swap escalates the swap to be resolved by CMTO token holders

## EscalatedSwapClosed
```solidity
EscalatedSwapClosed(bytes16 swapID, uint256 makerPayout, uint256 takerPayout, uint256 confiscationPayout)
```

Emitted when an escalated swap is closed

## ServiceFeeRateChanged
```solidity
ServiceFeeRateChanged(uint256 newServiceFeeRate)
```

Emitted when the service fee rate is changed

## MinimumDisputePeriodChanged
```solidity
MinimumDisputePeriodChanged(uint256 newMinimumDisputePeriod)
```

Emitted when the minimum dispute period is changed

## TimelockChanged
```solidity
TimelockChanged(address oldTimelock, address newTimelock)
```

Emitted when the timelock address is changed

# Read-Only Functions

## Get Service Fee Rate
```solidity
function getServiceFeeRate() view public returns (uint256)
```

Returns the current service fee rate as a percentage times 100

## Get Minimum Dispute Period
```solidity
function getMinimumDisputePeriod() view public returns (uint256)
```

Returns the current minimum dispute period as a number of blocks

## Get Supported Settlement Methods
```solidity
function getSupportedSettlementMethods() view public returns (bytes[] memory)
```

Returns a list of byte arrays uniquely identifying each supported settlement method

## Get Supported Stablecoins
```solidity
function getSupportedStablecoins() view public returns (address[] memory)
```

Returns a list containing the address of each supported stablecoin contract

## Get Active Dispute Agents
```solidity
function getActiveDisputeAgents() view public returns (address[] memory)
```

Returns a list containing the addresses of each active dispute agent

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

## Get Dispute
```solidity
function getDispute(bytes16 swapID) view public returns (Dispute memory)
```

Returns a Dispute struct belonging to a disputed swap with the specified id

| Name   | Type    | Description                                                    |
|:-------|:--------|:---------------------------------------------------------------|
| swapID | bytes16 | The id of the swap corresponding to the Dispute to be returned |

# State-Changing Functions

## Change Timelock
```solidity
function changeTimelock(address newTimelock) public
```

Change the timelock address. This function can only be called by the current timelock.

## Set Service Fee Rate
```solidity
function setServiceFeeRate(uint256 newServiceFeeRate) public
```

Set the current service fee rate, as a percentage times 100. This function can only be called by the current timelock.

## Set Minimum Dispute Period
```solidity
function setMinimumDisputePeriod(uint256 newMinimumDisputePeriod) public
```

Set the minimum dispute period, as a number of blocks. This function can only be called by the current timelock.

## Set Settlement Method Support
```solidity
function setSettlementMethodSupport(bytes calldata settlementMethod, bool support) public
```

Adds or removes support for a specific settlement method. This function can only be called by the current timelock.

| Name             | Type  | Description                                                                               |
|:-----------------|:------|:------------------------------------------------------------------------------------------|
| settlementMethod | bytes | The byte array uniquely identifying the settlement method in question                     |
| support          | bool  | Indicates whether support for the settlement method in question is to be added or removed |

## Set Stablecoin Support
```solidity
function setStablecoinSupport(address stablecoin, bool support) public
```

Adds or removes support for a specific stablecoin. This function can only be called by the current timelock.

| Name       | Type    | Description                                                                        |
|:-----------|:--------|:-----------------------------------------------------------------------------------|
| stablecoin | address | The address of the stablecoin contract in question                                 |
| support    | bool    | Indicates whether support for the stablecoin in question is to be added or removed |

## Set Dispute Agent Active
```solidity
function setDisputeAgentActive(address disputeAgentAddress, bool setActive) public
```

Controls whether or not an address belongs to an active dispute agent. This function can only be called by the current timelock.

## Open Offer
```solidity
function openOffer(bytes16 offerID, Offer memory newOffer) public
```

Opens a new offer to swap stablecoin for fiat.

| Name     | Type    | Description                                               |
|:---------|:--------|:----------------------------------------------------------|
| offerID  | bytes16 | A type-4 UUID that uniquely identifyies the new offer     |
| newOffer | Offer   | An Offer struct containing the specifics of the new offer |

## Edit Offer
```solidity
function editOffer(bytes16 offerID, Offer memory editedOffer, bool editPrice, bool editSettlementMethods) public
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
function cancelOffer(bytes16 offerID) public
```

Cancels an open offer. This function can only be called by the maker of the offer in question.

| Name    | Type    | Description                        |
|:--------|:--------|:-----------------------------------|
| offerID | bytes16 | The id of the offer to be canceled |

## Take Offer
```solidity
function takeOffer(bytes16 offerID, Swap memory newSwap) public
```

Takes an open swap offer.

| Name    | Type    | Description                                            |
|:--------|:--------|:-------------------------------------------------------|
| offerID | bytes16 | The id of the offer to be taken                        |
| newSwap | Swap    | A Swap struct containing the specifics of the new swap |

## Fill Swap
```solidity
function fillSwap(bytes16 swapID) public
```

Fills a maker-as-seller swap by locking up takenSwapAmount of the maker's STBL, to be sent to the buyer upon swap closure. This function can only be called by the maker of a seller swap.

| Name   | Type    | Description                     |
|:-------|:--------|:--------------------------------|
| swapID | bytes16 | The id of the swap to be filled |

## Report Payment Sent
```solidity
function reportPaymentSent(bytes16 swapID) public
```

Used by the buyer to indicate that they have sent payment. This function can only be called by the buyer.

| Name   | Type    | Description                                        |
|:-------|:--------|:---------------------------------------------------|
| swapID | bytes16 | The id of the swap for which payment has been sent |

## Report Payment Received
```solidity
function reportPaymentReceived(bytes16 swapID) public
```

Used by the seller to indicate that they have received payment. This function can only be called by the seller.

| Name   | Type    | Description                                            |
|:-------|:--------|:-------------------------------------------------------|
| swapID | bytes16 | The id of the swap for which payment has been received |

## Close Swap
```solidity
function closeSwap(bytes16 swapID) public
```

Used by the buyer to receive the stablecoin they just purchased and have their security deposit returned to them. Used by the seller to have their security deposit returned to them. This function can only be called by the buyer and seller.

| Name   | Type    | Description                     |
|:-------|:--------|:--------------------------------|
| swapID | bytes16 | The id of the swap to be closed |

## Raise Dispute
```solidity
function raiseDispute(bytes16 swapID, address disputeAgent0, address disputeAgent1, address disputeAgent2) public
```

Used by a swap maker or taker to raise a dispute for the swap. This function can only be called by the swap's maker or taker.

| Name           | Type    | Description                                                    |
|:---------------|:--------|:---------------------------------------------------------------|
| swapID         | bytes16 | The id of the swap for which the dispute is being raised       |
| disputeAgent0  | address | The address of the first dispute agent selected by the caller  |
| disputeAgent1  | address | The address of the second dispute agent selected by the caller |
| disputeAgent2  | address | The address of the third dispute agent selected by the caller  |

## Propose Resolution
```solidity
function proposeResolution(bytes16 swapID, uint256 makerPayout, uint256 takerPayout, uint256 confiscationPayout) public
```

Used by a dispute agent to propose a resolution for a disputed swap. This function can only be called by a dispute agent assigned to the disputed swap.

| Name               | Type    | Description                                                                                   |
|:-------------------|:--------|:----------------------------------------------------------------------------------------------|
| swapID             | bytes16 | The id of the disputed swap for which the resolution is being proposed                        |
| makerPayout        | uint256 | The amount of STBL that the caller recommends the maker be paid                               |
| takerPayout        | uint256 | The amount of STBL that the caller recommends the taker be paid                               |
| confiscationPayout | uint256 | The amount of STBL that the caller recommends be confiscated and sent to the service fee pool |

## React To Resolution Proposal
```solidity
function reactToResolutionProposal(bytes16 swapID, DisputeReaction reaction) public
```

Used by the maker and taker of a disputed swap to react to two or more matching resolution proposals. This function can only be called by the swap's maker or taker.

| Name      | Type            | Description                                                                                                     |
|:----------|:----------------|:----------------------------------------------------------------------------------------------------------------|
| swapID    | bytes16         | The id of the disputed swap for which the reaction is being submitted                                           |
| reaction  | DisputeReaction | The caller's reaction to the two or more matching resolution proposals submitted by the selected dispute agents |

## Close Disputed Swap
```solidity
function closeDisputedSwap(bytes16 swapID) public
```

Used by the maker and taker of a disputed swap with two or more identical resolution proposals accepted by the maker and taker to claim their STBL in the amounts specified in the accepted resolution proposals. This function can only be called by the swap's maker or taker.

| Name   | Type    | Description                 |
|:-------|:--------|:----------------------------|
| swapID | bytes16 | The id of the swap to close |

## Escalate Dispute
```solidity
function escalateDispute(bytes16 swapID, EscalationReason reason) public
```

Used by the maker or taker of a disputed swap to escalate the dispute for resolution by CMTO token holders. This function can only be called by the swap's maker or taker.

| Name    | Type             | Description                                 |
|:--------|:-----------------|:--------------------------------------------|
| swapID  | bytes16          | The id of the disputed swap to escalate     |
| reason  | EscalationReason | The reason for escalating the disputed swap |

## Close Escalated Swap
```solidity
function closeEscalatedSwap(bytes16 swapID, uint256 makerPayout, uint256 takerPayout, uint256 confiscationPayout) public
```

Used to close an escalated disputed swap. This function can only be called by the current timelock.

| Name               | Type    | Description                                                                  |
|:-------------------|:--------|:-----------------------------------------------------------------------------|
| swapID             | bytes16 | The id of the escalated disputed swap to close                               |
| makerPayout        | uint256 | The amount of STBL the maker will receive                                    |
| takerPayout        | uint256 | The amount of STBL the taker will receive                                    |
| confiscationPayout | uint256 | The amount of STBL that will be confiscated and sent to the service fee pool |