import { Entity, Transform, InputAction, ColliderLayer, GltfContainer, pointerEventsSystem } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { mapEntity, mapTransform, mapRot, mapScale, mapTable, displayEntity, displayPanel } from './resources'
import { togglePointerDetails, calculateTeleportDestination, teleportPlayer } from './utils'
import * as utils from '@dcl-sdk/utils'

export let activePointerId = ''
export let currentHoverPointer: Entity | null = null

export const textEntities: Entity[] = []

export function createButton(entity: Entity, position: Vector3, shape: string, hoverText: string, callback: string, id: string) {
  Transform.createOrReplace(entity, {
    position: position,
    parent: mapEntity
    })
    
    GltfContainer.createOrReplace(entity, { src: shape, invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS | ColliderLayer.CL_POINTER })

  pointerEventsSystem.onPointerDown(
    {
      entity: entity,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: hoverText
      }
    },
    function () {
      if (callback === 'null') {
        console.log('run click action')

      }
      else if (callback === 'pointer') {
        console.log('run pointer action');
        activePointerId = id;
        console.log('Active pointer id:', activePointerId);

        // stop hover effect on previous pointers
        if (currentHoverPointer && currentHoverPointer !== entity) {
          stopHover(currentHoverPointer)
        }

        // start hover on new pointer
        createHoverEffect(entity, 0.15, 1)
        currentHoverPointer = entity

        // show display panel with corresponding data
        togglePointerDetails(activePointerId)

      }
      else if (callback === 'teleport') {
        const teleportDestination = calculateTeleportDestination(activePointerId);
        teleportPlayer();
        console.log(`teleport player to ${teleportDestination}`)
      }
      else {
        console.log('do not run click action')
      }
    }
  )

  
}

export function createBaseMap() {
  Transform.create(mapEntity, {
    position: mapTransform,
    rotation: mapRot,
    scale: mapScale
  })
  GltfContainer.createOrReplace(mapEntity, { src: mapTable, invisibleMeshesCollisionMask: ColliderLayer.CL_POINTER | ColliderLayer.CL_PHYSICS})
Transform.createOrReplace(displayEntity, { parent: mapEntity })
GltfContainer.createOrReplace(displayEntity, { src: displayPanel, invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS})
}

export function createHoverEffect(entity: Entity, displacement: number, duration: number) {
  let transform = Transform.getMutable(entity)

  const basePos = transform.position
  const upPos = Vector3.create(basePos.x, basePos.y + displacement, basePos.z)
  const downPos = Vector3.create(basePos.x, basePos.y - displacement, basePos.z)

  function moveUp() {
    utils.tweens.startTranslation(entity, upPos, downPos, duration, utils.InterpolationType.EASESINE, moveDown)
  }


  function moveDown() {
    utils.tweens.startTranslation(entity, downPos, upPos, duration, utils.InterpolationType.EASESINE, moveUp)
  }


  moveUp()
  }

  export function stopHover(entity: Entity) {
    utils.tweens.stopTranslation(entity)
  }