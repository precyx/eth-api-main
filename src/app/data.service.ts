import { Injectable } from '@angular/core';
import { Contract }   from './classes/Contract';

@Injectable()
export class DataService {

  etherbots_core_abi:Array<object> = [{ constant: !1, inputs: [{ name: "_newElement", type: "uint8[]" }], name: "addMeleeParts", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_interfaceID", type: "bytes4" }], name: "supportsInterface", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "pure", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "cratesMigrated", outputs: [{ name: "", type: "uint16" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "hasOpenedOldCrates", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "name", outputs: [{ name: "_name", type: "string" }], payable: !1, stateMutability: "pure", type: "function" }, { constant: !1, inputs: [{ name: "_to", type: "address" }, { name: "_deedId", type: "uint256" }], name: "approve", outputs: [], payable: !0, stateMutability: "payable", type: "function" }, { constant: !0, inputs: [], name: "implementsERC721", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "pure", type: "function" }, { constant: !1, inputs: [], name: "openCrates", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "expiredCrates", outputs: [{ name: "", type: "uint16" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_index", type: "uint256" }], name: "deedByIndex", outputs: [{ name: "_deedId", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "totalSupply", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "openPendingPartCrates", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_from", type: "address" }, { name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "transferFrom", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "", type: "uint256" }], name: "meleeElementBySubtypeIndex", outputs: [{ name: "", type: "uint8" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "claimDoubleDrop", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }, { name: "_index", type: "uint256" }], name: "tokenOfOwnerByIndex", outputs: [{ name: "_tokenId", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "partId", type: "uint256" }], name: "scrap", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_subtypeIndexToDeprecate", type: "uint8" }], name: "deprecateBodySubtype", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "partsMinted", outputs: [{ name: "", type: "uint16" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "redeemBattleCrates", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [], name: "unpause", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_partId", type: "uint256" }, { name: "_startPrice", type: "uint256" }, { name: "_endPrice", type: "uint256" }, { name: "_duration", type: "uint256" }], name: "createAuction", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "", type: "uint256" }], name: "partIndexToApproved", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_count", type: "uint16" }, { name: "_owner", type: "address" }], name: "mintParts", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }, { name: "_index", type: "uint256" }], name: "deedOfOwnerByIndex", outputs: [{ name: "_deedId", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "partIds", type: "uint256[]" }], name: "totalLevel", outputs: [{ name: "", type: "uint32" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "paused", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "withdrawBalance", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }, { name: "", type: "uint256" }], name: "pendingRewards", outputs: [{ name: "blocknumber", type: "uint256" }, { name: "exp", type: "int32" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_deedId", type: "uint256" }], name: "ownerOf", outputs: [{ name: "_owner", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_min", type: "int8" }], name: "setMinScaled", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_to", type: "address" }, { name: "_tokenIds", type: "uint256[]" }], name: "transferAll", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "doubleDropCount", outputs: [{ name: "", type: "uint8" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_tokenId", type: "uint256" }], name: "tokenMetadata", outputs: [{ name: "infoUrl", type: "string" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_user", type: "address" }], name: "getUserByAddress", outputs: [{ name: "", type: "uint32" }, { name: "", type: "uint8[32]" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "newContractAddress", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "openOldCrates", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_id", type: "uint256" }], name: "getPartById", outputs: [{ name: "tokenId", type: "uint32" }, { name: "partType", type: "uint8" }, { name: "partSubType", type: "uint8" }, { name: "rarity", type: "uint8" }, { name: "element", type: "uint8" }, { name: "battlesLastDay", type: "uint32" }, { name: "experience", type: "uint32" }, { name: "forgeTime", type: "uint32" }, { name: "battlesLastReset", type: "uint32" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }], name: "balanceOf", outputs: [{ name: "count", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_nextAddress", type: "address" }], name: "setNewAddress", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_i", type: "uint8" }], name: "choosePerk", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_newElement", type: "uint8[]" }], name: "addBodyParts", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_newMediumMultiple", type: "uint8" }], name: "setMedium", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_user", type: "address" }, { name: "_partIds", type: "uint256[]" }, { name: "_exps", type: "int32[]" }], name: "addExperience", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "owns", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "pause", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }], name: "tokensOfOwner", outputs: [{ name: "ownerTokens", type: "uint256[]" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "owner", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "redeemShardsIntoPending", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [], name: "migrate", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "", type: "uint256" }], name: "bodyElementBySubtypeIndex", outputs: [{ name: "", type: "uint8" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_tournament", type: "address" }], name: "addApprovedTournament", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }], name: "countOfDeedsByOwner", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_address", type: "address" }], name: "setAuctionAddress", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "symbol", outputs: [{ name: "_smbol", type: "string" }], payable: !1, stateMutability: "pure", type: "function" }, { constant: !1, inputs: [{ name: "_to", type: "address" }, { name: "_tokenIds", type: "uint256[]" }], name: "approveMany", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_newMin", type: "uint8" }], name: "setMinShards", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_subtypeIndexToDeprecate", type: "uint8" }], name: "deprecateDefenceSubtype", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_battle", type: "address" }], name: "addApprovedBattle", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_newBestMultiple", type: "uint8" }], name: "setBest", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_to", type: "address" }, { name: "_tokenId", type: "uint256" }], name: "transfer", outputs: [], payable: !0, stateMutability: "payable", type: "function" }, { constant: !1, inputs: [{ name: "_battleId", type: "uint256" }, { name: "partIds", type: "uint256[]" }, { name: "commit", type: "bytes32" }, { name: "revealLength", type: "uint256" }], name: "createBattle", outputs: [], payable: !0, stateMutability: "payable", type: "function" }, { constant: !1, inputs: [{ name: "_owner", type: "address" }], name: "mintPart", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }, { name: "_tokenIds", type: "uint256[]" }], name: "ownsAll", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "partIds", type: "uint256[]" }], name: "hasValidParts", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_exp", type: "uint32" }], name: "getLevel", outputs: [{ name: "", type: "uint32" }], payable: !1, stateMutability: "pure", type: "function" }, { constant: !1, inputs: [{ name: "_deedId", type: "uint256" }], name: "takeOwnership", outputs: [], payable: !0, stateMutability: "payable", type: "function" }, { constant: !0, inputs: [{ name: "_owner", type: "address" }], name: "getPartsOfOwner", outputs: [{ name: "", type: "bytes24[]" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_deedId", type: "uint256" }], name: "deedUri", outputs: [{ name: "_uri", type: "string" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [], name: "convertReward", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "_index", type: "uint256" }], name: "ownerByIndex", outputs: [{ name: "_owner", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "countOfDeeds", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "_user", type: "address" }], name: "userPendingCrateNumber", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_subtypeIndexToDeprecate", type: "uint8" }], name: "deprecateMeleeSubtype", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "countOfOwners", outputs: [{ name: "_count", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_newElement", type: "uint8[]" }], name: "addTurretParts", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_newWorstMultiple", type: "uint8" }], name: "setWorst", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_base", type: "string" }], name: "setMetadataBase", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [{ name: "", type: "uint256" }], name: "defenceElementBySubtypeIndex", outputs: [{ name: "", type: "uint8" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "uint256" }], name: "partIndexToOwner", outputs: [{ name: "", type: "address" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "uint256" }], name: "turretElementBySubtypeIndex", outputs: [{ name: "", type: "uint8" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [], name: "getPendingPartCrateLength", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "hasMigrated", outputs: [{ name: "", type: "bool" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "_newChance", type: "uint256" }], name: "setRewardChance", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [], name: "withdrawAuctionBalance", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [], name: "removeDoubleDrops", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_subtypeIndexToDeprecate", type: "uint8" }], name: "deprecateTurretSubtype", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [], name: "doubleDrop", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !0, inputs: [], name: "PART_REWARD_CHANCE", outputs: [{ name: "", type: "uint256" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !0, inputs: [{ name: "", type: "address" }], name: "addressToUser", outputs: [{ name: "numShards", type: "uint32" }, { name: "experience", type: "uint32" }], payable: !1, stateMutability: "view", type: "function" }, { constant: !1, inputs: [{ name: "newOwner", type: "address" }], name: "transferOwnership", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_partArray", type: "uint8[4]" }, { name: "_owner", type: "address" }], name: "mintParticularPart", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { constant: !1, inputs: [{ name: "_newElement", type: "uint8[]" }], name: "addDefenceParts", outputs: [], payable: !1, stateMutability: "nonpayable", type: "function" }, { inputs: [], payable: !1, stateMutability: "nonpayable", type: "constructor" }, { anonymous: !1, inputs: [{ indexed: !0, name: "_from", type: "address" }, { indexed: !1, name: "_quantity", type: "uint8" }], name: "CratesOpened", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "_from", type: "address" }], name: "OpenedOldCrates", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "_from", type: "address" }, { indexed: !1, name: "_quantity", type: "uint16" }, { indexed: !1, name: "isMigrationComplete", type: "bool" }], name: "MigratedCrates", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "caller", type: "address" }, { indexed: !1, name: "shards", type: "uint32" }], name: "ShardsAdded", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "user", type: "address" }, { indexed: !1, name: "partId", type: "uint256" }], name: "Scrap", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "", type: "string" }, { indexed: !1, name: "", type: "address" }, { indexed: !1, name: "", type: "uint256" }], name: "PrintEvent", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "upgradedUser", type: "address" }, { indexed: !0, name: "perk", type: "uint8" }], name: "PerkChosen", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "from", type: "address" }, { indexed: !0, name: "to", type: "address" }, { indexed: !0, name: "deedId", type: "uint256" }], name: "Transfer", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "owner", type: "address" }, { indexed: !0, name: "approved", type: "address" }, { indexed: !0, name: "deedId", type: "uint256" }], name: "Approval", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "owner", type: "address" }, { indexed: !1, name: "partID", type: "uint256" }, { components: [{ name: "tokenId", type: "uint32" }, { name: "partType", type: "uint8" }, { name: "partSubType", type: "uint8" }, { name: "rarity", type: "uint8" }, { name: "element", type: "uint8" }, { name: "battlesLastDay", type: "uint32" }, { name: "experience", type: "uint32" }, { name: "forgeTime", type: "uint32" }, { name: "battlesLastReset", type: "uint32" }], indexed: !1, name: "part", type: "tuple" }], name: "Forge", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "newContract", type: "address" }], name: "ContractUpgrade", type: "event" }, { anonymous: !1, inputs: [{ indexed: !1, name: "paused", type: "bool" }], name: "SetPaused", type: "event" }, { anonymous: !1, inputs: [{ indexed: !0, name: "previousOwner", type: "address" }, { indexed: !0, name: "newOwner", type: "address" }], name: "OwnershipTransferred", type: "event" }];


  data4:Array<object> = [
    {"constant":false,"inputs":[{"name":"_subtypeIndexToDeprecate","type":"uint8"}],"name":"deprecateDefenceSubtype","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},
    {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"name":"ownerTokens","type":"uint256[]"}],"payable":false,"stateMutability":"view","type":"function"},
    {"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"getPartById","outputs":[{"name":"tokenId","type":"uint32"},{"name":"partType","type":"uint8"},{"name":"partSubType","type":"uint8"},{"name":"rarity","type":"uint8"},{"name":"element","type":"uint8"},{"name":"battlesLastDay","type":"uint32"},{"name":"experience","type":"uint32"},{"name":"forgeTime","type":"uint32"},{"name":"battlesLastReset","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},
    {"constant":false,"inputs":[{"name":"_partId","type":"uint256"},{"name":"_startPrice","type":"uint256"},{"name":"_endPrice","type":"uint256"},{"name":"_duration","type":"uint256"}],"name":"createAuction","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}
  ];

  aethia_marketplace_abi:Array<object>= [{constant:!1,inputs:[{name:'_contractAddress',type:'address'}],name:'deactivateContract',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'_contractAddress',type:'address'}],name:'activateContract',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{inputs:[{name:'chiTokenAddress',type:'address'},{name:'bankAddress',type:'address'},{name:'foodPriceList',type:'uint32[16]'},{name:'toyPriceList',type:'uint32[16]'},],payable:!1,stateMutability:'nonpayable',type:'constructor',},{anonymous:!1,inputs:[{indexed:!0,name:'player',type:'address'},{indexed:!0,name:'foodId',type:'uint8'},{indexed:!1,name:'quantity',type:'uint8'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogFoodPurchase',type:'event',},{anonymous:!1,inputs:[{indexed:!0,name:'player',type:'address'},{indexed:!0,name:'toyId',type:'uint8'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogToyPurchase',type:'event',},{anonymous:!1,inputs:[{indexed:!0,name:'foodId',type:'uint8'},{indexed:!1,name:'formerPrice',type:'uint256'},{indexed:!1,name:'newPrice',type:'uint256'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogFoodPriceChange',type:'event',},{anonymous:!1,inputs:[{indexed:!0,name:'toyId',type:'uint8'},{indexed:!1,name:'formerPrice',type:'uint256'},{indexed:!1,name:'newPrice',type:'uint256'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogToyPriceChange',type:'event',},{anonymous:!1,inputs:[{indexed:!0,name:'contractAddress',type:'address'},{indexed:!1,name:'isActivated',type:'bool'},],name:'LogContractChange',type:'event',},{constant:!1,inputs:[{name:'foodId',type:'uint8'},{name:'price',type:'uint32'},],name:'setFoodPrice',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'toyId',type:'uint8'},{name:'price',type:'uint32'},],name:'setToyPrice',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'itemId',type:'uint8'},{name:'quantity',type:'uint8'},],name:'buyFood',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'player',type:'address'},{name:'itemId',type:'uint8'},],name:'consumeFood',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'toyId',type:'uint8'}],name:'buyToy',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'player',type:'address'},{name:'foodId',type:'uint8'},{name:'amount',type:'uint8'},],name:'giftFood',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'player',type:'address'},{name:'toyId',type:'uint8'},],name:'giftToy',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!0,inputs:[{name:'player',type:'address'}],name:'getFood',outputs:[{name:'',type:'uint8[16]'}],payable:!1,stateMutability:'view',type:'function',},{constant:!0,inputs:[{name:'player',type:'address'}],name:'getToys',outputs:[{name:'',type:'bool[16]'}],payable:!1,stateMutability:'view',type:'function',},{constant:!0,inputs:[],name:'getFoodPrices',outputs:[{name:'',type:'uint32[16]'}],payable:!1,stateMutability:'view',type:'function',},{constant:!0,inputs:[],name:'getToyPrices',outputs:[{name:'',type:'uint32[16]'}],payable:!1,stateMutability:'view',type:'function',}];

  aethia_playhouse_abi:Array<object> = [{constant:!1,inputs:[{name:'_address',type:'address'}],name:'setCoreContractAddress',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'_address',type:'address'}],name:'setOwnershipContractAddress',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'_address',type:'address'}],name:'setStateContractAddress',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'_address',type:'address'}],name:'setAttributeContractAddress',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'_address',type:'address'}],name:'setShopContractAddress',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{inputs:[{name:'_foodEnergyBonus',type:'uint8[16]'},{name:'_foodHappinessBonus',type:'uint8[16]'},{name:'_foodHappinessPositive',type:'bool[16]'},{name:'_toyEnergyCost',type:'uint8[16]'},{name:'_toyHappinessBonus',type:'uint8[16]'},{name:'_interactionBonus',type:'uint8[6]'},{name:'_interactionEnergyCost',type:'uint8[6]'},{name:'_interactionHappinessCost',type:'uint8[6]'},],payable:!1,stateMutability:'nonpayable',type:'constructor',},{anonymous:!1,inputs:[{indexed:!0,name:'gotchiId',type:'uint256'},{indexed:!1,name:'interactionType',type:'uint8'},{indexed:!0,name:'owner',type:'address'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogEthergotchiChildInteraction',type:'event',},{anonymous:!1,inputs:[{indexed:!0,name:'player',type:'address'},{indexed:!0,name:'gotchiId',type:'uint256'},{indexed:!0,name:'foodId',type:'uint8'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogEthergotchiFoodConsumption',type:'event',},{anonymous:!1,inputs:[{indexed:!0,name:'player',type:'address'},{indexed:!0,name:'gotchiId',type:'uint256'},{indexed:!0,name:'toyId',type:'uint8'},{indexed:!1,name:'timestamp',type:'uint256'},],name:'LogEthergotchiToyUsage',type:'event',},{constant:!1,inputs:[{name:'gotchiId',type:'uint256'},{name:'foodId',type:'uint8'},],name:'feed',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'gotchiId',type:'uint256'},{name:'toyId',type:'uint8'},],name:'play',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'gotchiId',type:'uint256'}],name:'sleep',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!1,inputs:[{name:'gotchiId',type:'uint256'}],name:'clean',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',},{constant:!0,inputs:[{name:'gotchiId',type:'uint256'}],name:'canSleep',outputs:[{name:'',type:'bool'}],payable:!1,stateMutability:'view',type:'function',},{constant:!0,inputs:[{name:'gotchiId',type:'uint256'}],name:'getSleepCooldown',outputs:[{name:'',type:'uint256'}],payable:!1,stateMutability:'view',type:'function',},{constant:!0,inputs:[{name:'gotchiId',type:'uint256'}],name:'canClean',outputs:[{name:'',type:'bool'}],payable:!1,stateMutability:'view',type:'function',},{constant:!1,inputs:[{name:'gotchiId',type:'uint256'},{name:'interactionType',type:'uint8'},],name:'interact',outputs:[],payable:!1,stateMutability:'nonpayable',type:'function',}];


  contractName:string = "EtherbotsCore";
  contractAddress:string = "0x8063a39dd357165e04f12431ff3d67a5c9d3b7b4";


  contracts:Array<Contract> = [
    {name:'Aethia Marketplace', url:'aethia-marketplace', address:'0x000', abi:this.aethia_marketplace_abi},
    {name:'Etherbots Core', url:'etherbots-core', address:'0x001', abi:this.etherbots_core_abi}
  ];

  /* selected data is gonna be displayed */
  SELECTED_DATA:Array<object> = this.etherbots_core_abi;

  constructor() { }

  getData():object[]{
    return this.SELECTED_DATA;
  }

  getById(id:number):object{
      return this.SELECTED_DATA.find(function(elem, index){
        return index == id;
      });
  }

  getContracts():Array<Contract>{
    return this.contracts;
  }

  getContractByName(name:string):Contract{
    return this.contracts.find(function(elem, index){
      return name == elem.url;
    });
  }

}
