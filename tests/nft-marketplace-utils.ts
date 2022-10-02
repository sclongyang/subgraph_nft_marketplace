import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AddedItem,
  BuyNFT,
  DeletedItem,
  WithdrawProceeds
} from "../generated/NFTMarketplace/NFTMarketplace"

export function createAddedItemEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt,
  price: BigInt
): AddedItem {
  let addedItemEvent = changetype<AddedItem>(newMockEvent())

  addedItemEvent.parameters = new Array()

  addedItemEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  addedItemEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  addedItemEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  addedItemEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return addedItemEvent
}

export function createBuyNFTEvent(
  buyer: Address,
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): BuyNFT {
  let buyNftEvent = changetype<BuyNFT>(newMockEvent())

  buyNftEvent.parameters = new Array()

  buyNftEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  buyNftEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return buyNftEvent
}

export function createDeletedItemEvent(
  seller: Address,
  nftAddress: Address,
  tokenId: BigInt
): DeletedItem {
  let deletedItemEvent = changetype<DeletedItem>(newMockEvent())

  deletedItemEvent.parameters = new Array()

  deletedItemEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  deletedItemEvent.parameters.push(
    new ethereum.EventParam(
      "nftAddress",
      ethereum.Value.fromAddress(nftAddress)
    )
  )
  deletedItemEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return deletedItemEvent
}

export function createWithdrawProceedsEvent(
  user: Address,
  proceeds: BigInt
): WithdrawProceeds {
  let withdrawProceedsEvent = changetype<WithdrawProceeds>(newMockEvent())

  withdrawProceedsEvent.parameters = new Array()

  withdrawProceedsEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  withdrawProceedsEvent.parameters.push(
    new ethereum.EventParam(
      "proceeds",
      ethereum.Value.fromUnsignedBigInt(proceeds)
    )
  )

  return withdrawProceedsEvent
}
