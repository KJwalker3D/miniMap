import { pointerShape, mapTitle, jumpIn, teleportButtonPos, mapTitleEntity, pointerA, pointerB, pointerC, pointerD, pointerE, pointerF, pointerG, teleport } from './resources'
import { POINTER_POSITIONS } from './mapData'
import { createBaseMap, createButton, createHoverEffect } from './factory'

/**
 * Function to create and initialize the mini map with all its components.
 */
function createMiniMap() {
  // Create the base map
  createBaseMap()

  // Create the map title
  createButton(mapTitleEntity, teleportButtonPos.position, mapTitle, 'Click', 'null', 'null')
  createHoverEffect(mapTitleEntity, 0.05, 0.75)

  // Create the teleport button
  createButton(teleport, teleportButtonPos.position, jumpIn, 'Teleport, choose pointer', 'teleport', 'A')

  // Create pointers
  createButton(pointerA, POINTER_POSITIONS[0].position, pointerShape, POINTER_POSITIONS[0].name, 'pointer', 'A')
  createButton(pointerB, POINTER_POSITIONS[1].position, pointerShape, POINTER_POSITIONS[1].name, 'pointer', 'B')
  createButton(pointerC, POINTER_POSITIONS[2].position, pointerShape, POINTER_POSITIONS[2].name, 'pointer', 'C')
  createButton(pointerD, POINTER_POSITIONS[3].position, pointerShape, POINTER_POSITIONS[3].name, 'pointer', 'D')
  createButton(pointerE, POINTER_POSITIONS[4].position, pointerShape, POINTER_POSITIONS[4].name, 'pointer', 'E')
  createButton(pointerF, POINTER_POSITIONS[5].position, pointerShape, POINTER_POSITIONS[5].name, 'pointer', 'F')
  createButton(pointerG, POINTER_POSITIONS[6].position, pointerShape, POINTER_POSITIONS[6].name, 'pointer', 'G')
}




/**
 * Main entry point of the application.
 */
export function main() {
  createMiniMap()
}
