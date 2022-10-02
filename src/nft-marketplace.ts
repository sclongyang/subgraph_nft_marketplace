import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NFTMarketplace,
  AddedItem as AddedItemEvent,
  BuyNFT as BuyNFTEvent,
  DeletedItem as DeletedItemEvent
} from "../generated/NFTMarketplace/NFTMarketplace"
import { ActiveItem, AddedItem, DeletedItem, BuyNFT } from "../generated/schema"

export function handleAddedItem(event: AddedItemEvent): void {
  let id = getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  let addedItem = AddedItem.load(id)
  let activeItem = ActiveItem.load(id)
  if (!addedItem) {
    addedItem = new AddedItem(id)
  }
  if (!activeItem) {
    activeItem = new ActiveItem(id)
  }
  addedItem.nftAddress = event.params.nftAddress
  addedItem.tokenId = event.params.tokenId
  addedItem.price = event.params.price
  addedItem.seller = event.params.seller

  activeItem.nftAddress = event.params.nftAddress
  activeItem.tokenId = event.params.tokenId
  activeItem.price = event.params.price
  activeItem.seller = event.params.seller
  activeItem.buyer = Address.fromString("0x0000000000000000000000000000000000000000")

  addedItem.save()
  activeItem.save()
}

export function handleBuyNFT(event: BuyNFTEvent): void {
  let itemBought = BuyNFT.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  if (!itemBought) {
    itemBought = new BuyNFT(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  itemBought.buyer = event.params.buyer
  itemBought.nftAddress = event.params.nftAddress
  itemBought.tokenId = event.params.tokenId
  activeItem!.buyer = event.params.buyer

  itemBought.save()
  activeItem!.save()
}

export function handleDeletedItem(event: DeletedItemEvent): void {
  let itemCanceled = DeletedItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  if (!itemCanceled) {
    itemCanceled = new DeletedItem(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  itemCanceled.seller = event.params.seller
  itemCanceled.nftAddress = event.params.nftAddress
  itemCanceled.tokenId = event.params.tokenId
  activeItem!.buyer = Address.fromString("0x000000000000000000000000000000000000dEaD")

  itemCanceled.save()
  activeItem!.save()
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}