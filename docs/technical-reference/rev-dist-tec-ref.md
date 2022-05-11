---
id: rev-dist-tec-ref
title: Commuto Revenue Distribution Technical Reference
---

The Commuto Protocol's Primary Timelock and the Commuto Token contract are used to distribute stablecoin revenue to 
Commuto Token holders, as described in the 
[whitepaper](https://github.com/jimmyneutront/commuto-whitepaper/blob/main/commuto-whitepaper.txt). The Primary Timelock
contract is based on OpenZepplin's 
[TimelockController](https://docs.openzeppelin.com/contracts/4.x/api/governance#TimelockController), and the Commuto 
Token contract is based on OpenZepplin's
[ERC20Snapshot](https://docs.openzeppelin.com/contracts/4.x/api/token/erc20#ERC20Snapshot). Complete documentation on 
OpenZepplin contracts can be found 
[here](https://docs.openzeppelin.com/contracts/4.x/). This document describes only the structs, events, and functions 
unique to the 
[CommutoGovernor](https://github.com/jimmyneutront/commuto-protocol/blob/main/libraries/governance/CommutoGovernor.sol) 
and [CommutoToken](https://github.com/jimmyneutront/commuto-protocol/blob/main/libraries/governance/CommutoToken.sol) 
contracts, not those inherited from their parent contracts.

# Structs

## RevenueDistributionSnapshot (in CommutoToken)
```solidity
struct RevenueDistributionSnapshot {
    uint256 block;
    uint256 snapshotId;
    uint256 balance;
}
```

This represents a Revenue Distribution Snapshot within CommutoToken.

| Name       | Type    | Description                                                                                                                 |
|:-----------|:--------|:----------------------------------------------------------------------------------------------------------------------------|
| block      | uint256 | The block in which this Revenue Distribution Snapshot was taken                                                             |
| snapshotId | uint256 | The id of the snapshot of CommutoToken balances taken when this Revenue Distribution Snapshot was created                   |
| balance    | uint256 | The amount of the specified stablecoin held by the CommutoToken contract when this Revenue Distribution Snapshot was taken  |

# Events

## TimelockChanged (in CommutoToken)
```solidity
event TimelockChanged(address oldTimelock, address newTimelock);
```

Emitted when the old Timelock transfers control of CommutoToken to a new Timelock

## RevenueCollectionPeriodChanged (in CommutoToken)
```solidity
event RevenueCollectionPeriodChanged(uint256 oldPeriod, uint256 newPeriod);
```

Emitted when the Revenue Collection Period is changed

## RevenueDistributionSnapshotTaken (in CommutoToken)
```solidity
event RevenueDistributionSnapshotTaken(address stablecoin, uint256 snapshotId, uint256 balance);
```

Emitted when a Revenue Distribution Snapshot is taken

## RevenueCollected (in CommutoToken)
```solidity
event RevenueCollected(address stablecoin, address collector, address recipient, uint256 amount);
```

Emitted when revenue is collected

# Read-Only Functions

## Get Revenue Distribution Snapshot (in CommutoToken)
```solidity
function getRevenueDistributionSnapshot(address stablecoin) view public returns (RevenueDistributionSnapshot memory)
```

Returns the latest Revenue Distribution Snapshot for the specified stablecoin

## Get Latest Revenue Collection (in CommutoToken)
```solidity
function getLatestRevenueCollection(address stablecoin, address account) view public returns (uint256)
```

Returns the number of the block in which the specified account last collected revenue in the specified stablecoin

## Get Revenue Collection Period (in CommutoToken)
```solidity
function getRevenueCollectionPeriod() public view returns (uint256)
```

Returns the current Revenue Collection Period, in blocks.

# State-Changing Functions

## Take Revenue Distribution Snapshot (in CommutoToken)
```solidity
function takeRevenueDistributionSnapshot(address stablecoin) public
```

Create a new Revenue Distribution Period Snapshot for the specified stablecoin

## Collect Revenue (in CommutoToken)
```solidity
function collectRevenue(address stablecoin, address recipient) public
```

Collect revenue in the specified stablecoin, and transfer it to the specified recipient

## Change Timelock (in CommutoToken)
```solidity
function changeTimelock(address newTimelock) public
```

Give a new Timelock control over CommutoToken. (This function can only be called by the current Timelock)

## Change Revenue Collection Period (in CommutoToken)
```solidity
function changeRevenueCollectionPeriod(uint256 newRevenueCollectionPeriod) public
```

Set a new Revenue Collection Period. (This function can only be called by the current Timelock)