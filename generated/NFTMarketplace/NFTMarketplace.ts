// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class AddedItem extends ethereum.Event {
  get params(): AddedItem__Params {
    return new AddedItem__Params(this);
  }
}

export class AddedItem__Params {
  _event: AddedItem;

  constructor(event: AddedItem) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class BuyNFT extends ethereum.Event {
  get params(): BuyNFT__Params {
    return new BuyNFT__Params(this);
  }
}

export class BuyNFT__Params {
  _event: BuyNFT;

  constructor(event: BuyNFT) {
    this._event = event;
  }

  get buyer(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get seller(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DeletedItem extends ethereum.Event {
  get params(): DeletedItem__Params {
    return new DeletedItem__Params(this);
  }
}

export class DeletedItem__Params {
  _event: DeletedItem;

  constructor(event: DeletedItem) {
    this._event = event;
  }

  get seller(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get nftAddress(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class WithdrawProceeds extends ethereum.Event {
  get params(): WithdrawProceeds__Params {
    return new WithdrawProceeds__Params(this);
  }
}

export class WithdrawProceeds__Params {
  _event: WithdrawProceeds;

  constructor(event: WithdrawProceeds) {
    this._event = event;
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get proceeds(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class NFTMarketplace__getAddedItemResultValue0Struct extends ethereum.Tuple {
  get seller(): Address {
    return this[0].toAddress();
  }

  get price(): BigInt {
    return this[1].toBigInt();
  }
}

export class NFTMarketplace extends ethereum.SmartContract {
  static bind(address: Address): NFTMarketplace {
    return new NFTMarketplace("NFTMarketplace", address);
  }

  getAddedItem(
    nftAddress: Address,
    tokenId: BigInt
  ): NFTMarketplace__getAddedItemResultValue0Struct {
    let result = super.call(
      "getAddedItem",
      "getAddedItem(address,uint256):((address,uint256))",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );

    return changetype<NFTMarketplace__getAddedItemResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getAddedItem(
    nftAddress: Address,
    tokenId: BigInt
  ): ethereum.CallResult<NFTMarketplace__getAddedItemResultValue0Struct> {
    let result = super.tryCall(
      "getAddedItem",
      "getAddedItem(address,uint256):((address,uint256))",
      [
        ethereum.Value.fromAddress(nftAddress),
        ethereum.Value.fromUnsignedBigInt(tokenId)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<NFTMarketplace__getAddedItemResultValue0Struct>(
        value[0].toTuple()
      )
    );
  }

  getProceeds(user: Address): BigInt {
    let result = super.call("getProceeds", "getProceeds(address):(uint256)", [
      ethereum.Value.fromAddress(user)
    ]);

    return result[0].toBigInt();
  }

  try_getProceeds(user: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getProceeds",
      "getProceeds(address):(uint256)",
      [ethereum.Value.fromAddress(user)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class AddItemCall extends ethereum.Call {
  get inputs(): AddItemCall__Inputs {
    return new AddItemCall__Inputs(this);
  }

  get outputs(): AddItemCall__Outputs {
    return new AddItemCall__Outputs(this);
  }
}

export class AddItemCall__Inputs {
  _call: AddItemCall;

  constructor(call: AddItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get price(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class AddItemCall__Outputs {
  _call: AddItemCall;

  constructor(call: AddItemCall) {
    this._call = call;
  }
}

export class BuyNFTCall extends ethereum.Call {
  get inputs(): BuyNFTCall__Inputs {
    return new BuyNFTCall__Inputs(this);
  }

  get outputs(): BuyNFTCall__Outputs {
    return new BuyNFTCall__Outputs(this);
  }
}

export class BuyNFTCall__Inputs {
  _call: BuyNFTCall;

  constructor(call: BuyNFTCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BuyNFTCall__Outputs {
  _call: BuyNFTCall;

  constructor(call: BuyNFTCall) {
    this._call = call;
  }
}

export class DeleteItemCall extends ethereum.Call {
  get inputs(): DeleteItemCall__Inputs {
    return new DeleteItemCall__Inputs(this);
  }

  get outputs(): DeleteItemCall__Outputs {
    return new DeleteItemCall__Outputs(this);
  }
}

export class DeleteItemCall__Inputs {
  _call: DeleteItemCall;

  constructor(call: DeleteItemCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class DeleteItemCall__Outputs {
  _call: DeleteItemCall;

  constructor(call: DeleteItemCall) {
    this._call = call;
  }
}

export class ModifyPriceCall extends ethereum.Call {
  get inputs(): ModifyPriceCall__Inputs {
    return new ModifyPriceCall__Inputs(this);
  }

  get outputs(): ModifyPriceCall__Outputs {
    return new ModifyPriceCall__Outputs(this);
  }
}

export class ModifyPriceCall__Inputs {
  _call: ModifyPriceCall;

  constructor(call: ModifyPriceCall) {
    this._call = call;
  }

  get nftAddress(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get tokenId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get newPrice(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class ModifyPriceCall__Outputs {
  _call: ModifyPriceCall;

  constructor(call: ModifyPriceCall) {
    this._call = call;
  }
}

export class WithdrawProceedsCall extends ethereum.Call {
  get inputs(): WithdrawProceedsCall__Inputs {
    return new WithdrawProceedsCall__Inputs(this);
  }

  get outputs(): WithdrawProceedsCall__Outputs {
    return new WithdrawProceedsCall__Outputs(this);
  }
}

export class WithdrawProceedsCall__Inputs {
  _call: WithdrawProceedsCall;

  constructor(call: WithdrawProceedsCall) {
    this._call = call;
  }
}

export class WithdrawProceedsCall__Outputs {
  _call: WithdrawProceedsCall;

  constructor(call: WithdrawProceedsCall) {
    this._call = call;
  }
}