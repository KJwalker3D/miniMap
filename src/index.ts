import { pointerShape, mapTitle, jumpIn, teleportButtonPos, mapTitleEntity, pointerA, pointerB, pointerC, pointerD, pointerE, pointerF, pointerG, teleport } from './resources'
import { POINTER_POSITIONS } from './mapData'
import { createBaseMap, createButton, createHoverEffect } from './factory'



export function main() {

  createBaseMap()

  // create map title
 createButton(mapTitleEntity, teleportButtonPos.position, mapTitle, 'Click', 'null', 'null')
 createHoverEffect(mapTitleEntity, 0.05, 0.75)

// create teleport button
createButton(teleport, teleportButtonPos.position, jumpIn, 'Teleport, choose pointer', 'teleport', 'A')

  //create pointers
  createButton(pointerA, POINTER_POSITIONS[0].position, pointerShape, POINTER_POSITIONS[0].name, 'pointer', 'A')
  createButton(pointerB, POINTER_POSITIONS[1].position, pointerShape, POINTER_POSITIONS[1].name, 'pointer', 'B')
  createButton(pointerC, POINTER_POSITIONS[2].position, pointerShape, POINTER_POSITIONS[2].name, 'pointer', 'C')
  createButton(pointerD, POINTER_POSITIONS[3].position, pointerShape, POINTER_POSITIONS[3].name, 'pointer', 'D')
  createButton(pointerE, POINTER_POSITIONS[4].position, pointerShape, POINTER_POSITIONS[4].name, 'pointer', 'E')
  createButton(pointerF, POINTER_POSITIONS[5].position, pointerShape, POINTER_POSITIONS[5].name, 'pointer', 'F')
  createButton(pointerG, POINTER_POSITIONS[6].position, pointerShape, POINTER_POSITIONS[6].name, 'pointer', 'G')


}
