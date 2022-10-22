import {
  StreamCreated as StreamCreatedEvent,
  withdraw as withdrawEvent
} from "../generated/StreamFactory/StreamFactory"
import { StreamCreated, withdraw } from "../generated/schema"

export function handleStreamCreated(event: StreamCreatedEvent): void {
  let entity = new StreamCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount
  entity.startTime = event.params.startTime
  entity.stopTime = event.params.stopTime
  entity.interval = event.params.interval
  entity.save()
}

export function handlewithdraw(event: withdrawEvent): void {
  let entity = new withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.sender = event.params.sender
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount
  entity.save()
}
