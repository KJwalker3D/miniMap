import { Vector3 } from "@dcl/sdk/math"

/**
 * Interface for pointer data on the minimap.
 */
interface PointerData {
  position: Vector3; // Position of pointer on the minimap
  id: string; // Letter identifier, could be redundant
  name: string; // Pointer name used as hover text
  mapPos: Vector3; // Position to teleport player to when pointer is selected
  details: string; // Text to display on the data panel
}

/**
 * List of pointers with their respective data for the minimap.
 */
export const POINTER_POSITIONS: PointerData[] = [
  { 
    position: Vector3.create(-0.625, 1.2, -0.67), 
    id: 'A', 
    name: 'Info Booth', 
    mapPos: Vector3.create(1, 1, 1),
    details: 'info booth ---------- learn about the project' 
  },
  { 
    position: Vector3.create(-0.2, 1.05, -0.7),
    id: 'B', 
    name: 'Eco Game', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'eco game ---------- play jumper game and learn - wip' 
  },
  { 
    position: Vector3.create(-0.6, 1.1, 0.68),
    id: 'C', 
    name: 'Spawn Point', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'spawn point ---------- you arrived here' 
  },
  { 
    position: Vector3.create(-0.268, 1.4, 0.64),
    id: 'D', 
    name: 'Mt Maromokotro', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'maromokotro ---------- special view and cloud lift' 
  },
  { 
    position: Vector3.create(0.1, 1.79, 0.03),
    id: 'E', 
    name: 'Cloud Gallery', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'art gallery ---------- access via tower or cloud lift' 
  },
  { 
    position: Vector3.create(0.6, 1.11, 0.46),
    id: 'F', 
    name: 'Pixel Art', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'pixel art ---------- paint pixel art here' 
  },
  { 
    position: Vector3.create(0.82, 1.7, 0.68),
    id: 'G', 
    name: 'Owl Tower', 
    mapPos: Vector3.create(1, 2, 1),
    details: 'owl tower ---------- tour the island on an owl here' 
  },
]

export { PointerData }
