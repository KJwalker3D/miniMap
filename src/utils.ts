import { GltfContainer, Transform } from '@dcl/sdk/ecs';
import { Vector3 } from '@dcl/sdk/math';
import { movePlayerTo } from '~system/RestrictedActions'
import { add3DText, clear3DText } from './helpers';
import { mapEntity, mapRot, displayEntity, displayPanelPopUp, mapTitleEntity, dataPanelParent, pointerDataPanel } from './resources';
import { POINTER_POSITIONS } from './mapData';
import { activePointerId, textEntities, stopHover } from './factory';

// Change pointer text pos here
Transform.create(dataPanelParent, {position: Vector3.create(6.01, 1.9, 8.35)})


let dataPanelVisible = false

export function getActivePointerId() {
  return activePointerId
}

// show pointer details on display panel
export function togglePointerDetails(id: string) {

  //clear existing 3d text
  clear3DText(textEntities)
  stopHover(mapTitleEntity)

  if (!dataPanelVisible) {
    Transform.create(pointerDataPanel, {
      position: Vector3.create(0, 0, 0),
      rotation: mapRot,
      parent: mapEntity
    })
    dataPanelVisible = true
     GltfContainer.deleteFrom(displayEntity)
    
    }
    const pointerData = POINTER_POSITIONS.find(pointer => pointer.id === id)
    if (pointerData) {
      add3DText(textEntities, dataPanelParent, `${pointerData.details}`, 0, -0.2, false)
      GltfContainer.createOrReplace(pointerDataPanel, { src: displayPanelPopUp })
  }


}

// move player to selected area
export function teleportPlayer() {
  let activePointerId = getActivePointerId()

  if (activePointerId != null) {

    let teleportDestination = calculateTeleportDestination(activePointerId);
      movePlayerTo({
        newRelativePosition: teleportDestination,
        cameraTarget: teleportDestination,
      })
  
    } else {
      console.error(`Invalid active pointer ID: ${activePointerId}`)
    }
  }

/// Calculate which area to teleport the player to depending on the pointer they clicked
export function calculateTeleportDestination(activePointerId: string): Vector3 {
  let teleportDestination: Vector3 = Vector3.Zero();

  for (const PointerData of POINTER_POSITIONS) {
    if (PointerData.id === activePointerId) {
      teleportDestination = PointerData.mapPos;
      break
    }
  }
  return teleportDestination
}