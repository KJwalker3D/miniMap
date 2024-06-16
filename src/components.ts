import { Entity, GltfContainer, Transform, engine } from '@dcl/sdk/ecs'
import { Vector3, Quaternion } from '@dcl/sdk/math';


/**
 * CustomComponent class represents a reusable entity with a model, position, rotation, and scale.
 */
export class CustomComponent {
    entity: Entity
  
    /**
     * Creates an instance of CustomComponent.
     * @param model - Path to the model file.
     * @param position - Object containing x, y, z coordinates.
     * @param rotation - Object containing x, y, z rotation values in degrees.
     * @param scale - Object containing x, y, z scale values.
     */
    constructor(model: string, position: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 }, rotation: { x: number; y: number; z: number } = { x: 0, y: 0, z: 0 }, scale: { x: number; y: number; z: number } = { x: 1, y: 1, z: 1 }) {
      this.entity = engine.addEntity()
      GltfContainer.create(this.entity, { src: model })
      Transform.create(this.entity, {
        position: Vector3.create(position.x, position.y, position.z),
        rotation: Quaternion.fromEulerDegrees(rotation.x, rotation.y, rotation.z),
        scale: Vector3.create(scale.x, scale.y, scale.z)
      })
    }
  }