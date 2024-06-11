import * as utils from '@dcl-sdk/utils'
import { ColliderLayer, Entity, GltfContainer, InputAction, MeshCollider, MeshRenderer, Transform, TransformType, engine, pointerEventsSystem } from '@dcl/sdk/ecs';
import { Quaternion, Vector3 } from '@dcl/sdk/math';

export function getRandomHexColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function createHoverEffect(entity: Entity, displacement: number, duration: number) {

  let hoverOn = true 
  const transform = Transform.getMutable(entity)

  const basePos = transform.position
  const upPos = Vector3.create(basePos.x, basePos.y + displacement, basePos.z)
  const downPos = Vector3.create(basePos.x, basePos.y - displacement, basePos.z)

  function moveUp() {
    utils.tweens.startTranslation(entity, upPos, downPos, duration, utils.InterpolationType.EASEQUAD, moveDown)
  }


  function moveDown() {
    utils.tweens.startTranslation(entity, downPos, upPos, duration, utils.InterpolationType.EASEQUAD, moveUp)
  }

  
  moveUp()

}

export function createButton(entity: Entity, transform: TransformType, shape: string, callback: string) {
  Transform.create(entity, {
    position: transform.position,
    rotation: transform.rotation,
    scale: transform.scale,
    parent: mapEntity
  })
  //GltfContainer.create(entity, { src: shape, invisibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS || ColliderLayer.CL_POINTER })
  MeshRenderer.setBox(entity)
  MeshCollider.setBox(entity)

  pointerEventsSystem.onPointerDown(
    {
      entity: entity,
      opts: {
        button: InputAction.IA_POINTER,
        hoverText: 'Click'
      }
    },
    function () {
      if (callback === 'null') {
        console.log('run click action')
       // createHoverEffect(entity, 0.25, 1)
      }
      else {
        console.log('do not run click action')
      }
    }
  )
}

export const mapTransform = Vector3.create(8, 0, 8)
export const mapScale = Vector3.One()
export const mapRot = Quaternion.fromEulerDegrees(0, 0, 0)

export const mapEntity = engine.addEntity()
Transform.create(mapEntity, {
  position: mapTransform,
  rotation: mapRot,
  scale: mapScale
})

export const buttonEntity_1 = engine.addEntity()
export const buttonTransform_1: TransformType = {
  position: Vector3.create(0, 0, 0),
  rotation: mapRot,
  scale: mapScale,
  parent: mapEntity
}

