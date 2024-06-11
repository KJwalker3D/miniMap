// We define the empty imports so the auto-complete feature works as expected.
import { Vector3 } from '@dcl/sdk/math'
import { engine } from '@dcl/sdk/ecs'

import { changeColorSystem, circularSystem } from './systems'
import { createHoverEffect, buttonEntity_1, createButton, mapEntity, mapRot, mapScale, mapTransform, buttonTransform_1 } from './utils'

export function main() {
  // Defining behavior. See `src/systems.ts` file.
  engine.addSystem(circularSystem)
  engine.addSystem(changeColorSystem)

  // draw UI. Here is the logic to spawn cubes.
const buttonDemo = createButton(buttonEntity_1, buttonTransform_1, 'null', 'null')

  createHoverEffect(buttonEntity_1, 0.25, 2)

}
