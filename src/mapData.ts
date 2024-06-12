import { Vector3 } from "@dcl/sdk/math"

interface PointerData {
  position: Vector3, // position of pointer on mini map
  id: string, // letter identifier, could be redundant
  name: string, // pointer name = hover text
  mapPos: Vector3, // position to teleport player to when pointer is selected
  details: string // text to display on the data panel
}

export const POINTER_POSITIONS: PointerData[] = [
  { 
    position: Vector3.create(-.625, 1.2, -.67), 
    id: 'A', 
    name: 'Info Booth', 
    mapPos: Vector3.create(1, 1, 1),
    details: 'info booth ---------- learn about the project' 
   },
  { 
    position: Vector3.create(-.2, 1.05, -.7),
    id: 'B', 
    name: 'Eco Game', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'eco game ---------- play jumper game and learn - wip' 
   },
   { 
    position: Vector3.create(-.6, 1.1, .68),
    id: 'C', 
    name: 'Spawn Point', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'spawn point ---------- you arrived here' 
   },
   { 
    position: Vector3.create(-.268, 1.4, .64),
    id: 'D', 
    name: 'Mount Point', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'mountx ---------- special view and cloud lift' 
   },
   { 
    position: Vector3.create(.1, 1.79, .03),
    id: 'E', 
    name: 'Cloud Gallery', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'art gallery ---------- access via tower or cloud lift' 
   },
   { 
    position: Vector3.create(.6, 1.11, .46),
    id: 'F', 
    name: 'Pixel Art', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'pixel art ---------- paint pixel art here' 
   },
   { 
    position: Vector3.create(.82, 1.7, .68),
    id: 'G', 
    name: 'Owl Tower', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'owl tower ---------- tour the island on an owl here' 
   },
]
