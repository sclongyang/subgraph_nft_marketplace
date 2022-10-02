import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NFTMarketplace,
  AddedItem as AddedItemEvent,
  BuyNFT as BuyNFTEvent,
  DeletedItem as DeletedItemEvent,
  WithdrawProceeds as WithdrawProceedsEvent
} from "../generated/NFTMarketplace/NFTMarketplace"
import { ActiveItem, AddedItem, DeletedItem, BuyNFT, WithdrawProceeds } from "../generated/schema"

export function handleAddedItem(event: AddedItem): void {
  let id = getIdFromEventParams(event.tokenId, event.nftAddress)
  let addedItem = AddedItem.load(id)
  let activeItem = ActiveItem.load(id)
  if (!addedItem) {
    addedItem = new AddedItem(id)
  }
  if (!activeItem) {
    activeItem = new ActiveItem(id)
  }
  addedItem.nftAddress = event.nftAddress
  addedItem.tokenId = event.tokenId
  addedItem.price = event.price
  addedItem.seller = event.seller

  activeItem.nftAddress = event.nftAddress
  activeItem.tokenId = event.tokenId
  activeItem.price = event.price
  activeItem.seller = event.seller
  activeItem.buyer = Address.fromString("0x0000000000000000000000000000000000000000")

  addedItem.save()
  activeItem.save()
}

export function handleBuyNFT(event: BuyNFT): void {
  let itemBought = BuyNFT.load(
    getIdFromEventParams(event.tokenId, event.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.tokenId, event.nftAddress)
  )
  if (!itemBought) {
    itemBought = new BuyNFT(
      getIdFromEventParams(event.tokenId, event.nftAddress)
    )
  }
  itemBought.buyer = event.buyer
  itemBought.nftAddress = event.nftAddress
  itemBought.tokenId = event.tokenId
  activeItem!.buyer = event.buyer

  itemBought.save()
  activeItem!.save()
}

export function handleDeletedItem(event: DeletedItem): void {
  let itemCanceled = DeletedItem.load(
    getIdFromEventParams(event.tokenId, event.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.tokenId, event.nftAddress)
  )
  if (!itemCanceled) {
    itemCanceled = new DeletedItem(
      getIdFromEventParams(event.tokenId, event.nftAddress)
    )
  }
  itemCanceled.seller = event.seller
  itemCanceled.nftAddress = event.nftAddress
  itemCanceled.tokenId = event.tokenId
  activeItem!.buyer = Address.fromString("0x000000000000000000000000000000000000dEaD")

  itemCanceled.save()
  activeItem!.save()
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}