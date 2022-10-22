import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { StreamCreated } from "../generated/schema"
import { StreamCreated as StreamCreatedEvent } from "../generated/StreamFactory/StreamFactory"
import { handleStreamCreated } from "../src/stream-factory"
import { createStreamCreatedEvent } from "./stream-factory-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let receiver = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amount = BigInt.fromI32(234)
    let startTime = BigInt.fromI32(234)
    let stopTime = BigInt.fromI32(234)
    let interval = BigInt.fromI32(234)
    let newStreamCreatedEvent = createStreamCreatedEvent(
      sender,
      receiver,
      amount,
      startTime,
      stopTime,
      interval
    )
    handleStreamCreated(newStreamCreatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("StreamCreated created and stored", () => {
    assert.entityCount("StreamCreated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "receiver",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amount",
      "234"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "startTime",
      "234"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "stopTime",
      "234"
    )
    assert.fieldEquals(
      "StreamCreated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "interval",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
