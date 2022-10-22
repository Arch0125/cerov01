import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  StreamCreated,
  withdraw
} from "../generated/StreamFactory/StreamFactory"

export function createStreamCreatedEvent(
  sender: Address,
  receiver: Address,
  amount: BigInt,
  startTime: BigInt,
  stopTime: BigInt,
  interval: BigInt
): StreamCreated {
  let streamCreatedEvent = changetype<StreamCreated>(newMockEvent())

  streamCreatedEvent.parameters = new Array()

  streamCreatedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "stopTime",
      ethereum.Value.fromUnsignedBigInt(stopTime)
    )
  )
  streamCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "interval",
      ethereum.Value.fromUnsignedBigInt(interval)
    )
  )

  return streamCreatedEvent
}

export function createwithdrawEvent(
  sender: Address,
  receiver: Address,
  amount: BigInt
): withdraw {
  let withdrawEvent = changetype<withdraw>(newMockEvent())

  withdrawEvent.parameters = new Array()

  withdrawEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  withdrawEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return withdrawEvent
}
