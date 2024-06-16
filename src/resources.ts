import { TransformType, engine } from "@dcl/sdk/ecs"
import { Vector3, Quaternion } from "@dcl/sdk/math"

/**
 * To do: 
 * Add sfx
 */

// Model paths
export const displayPanel = 'assets/models/displayPanel.glb'
export const displayPanelPopUp = 'assets/models/displayPanel-popUp.glb'
export const jumpIn = 'assets/models/jumpIn.glb'
export const mapTitle = 'assets/models/mapTitle.glb'
export const pointerShape = 'assets/models/pointer.glb'
export const mapTable = 'assets/models/mapTable.glb'

// Transform properties
export const mapTransform = Vector3.create(8, 0, 8)
export const mapScale = Vector3.One()
export const mapRot = Quaternion.fromEulerDegrees(0, 0, 0)

// Entity creation
export const mapEntity = engine.addEntity()
export const displayEntity = engine.addEntity()
export const mapTitleEntity = engine.addEntity()

// Pointers
export const pointerA = engine.addEntity()
export const pointerB = engine.addEntity()
export const pointerC = engine.addEntity()
export const pointerD = engine.addEntity()
export const pointerE = engine.addEntity()
export const pointerF = engine.addEntity()
export const pointerG = engine.addEntity()

// Data panels
export const pointerDataPanel = engine.addEntity()
export const dataPanelParent = engine.addEntity()

// Teleport button
export const teleport = engine.addEntity()
export const teleportButtonPos: TransformType = {
  position: Vector3.create(0, 0, 0),
  rotation: mapRot,
  scale: mapScale,
  parent: mapEntity
}
