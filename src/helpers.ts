import { Entity, engine, GltfContainer, ColliderLayer, Transform } from "@dcl/sdk/ecs"
import { Vector3, Quaternion } from "@dcl/sdk/math"

export let alphabet: any[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "#"]

export const MAX_LINE_WIDTH = 1

export function add3DText(array: any, parent: Entity, text: string, xStart: number, yStart: number, center?: boolean, colliders?: boolean) {
    let digitOffset = 0.085
    let lineHeight = 0.15

    const lines = text.split('\n');

    lines.forEach(line => {
        let offset = xStart;
        let lineWidth = 0;

        if (center) {
            let lineLength = line.length;
            let lineMiddle = lineLength * digitOffset / 2;
            offset = xStart - lineMiddle;
        }

        let words = line.split(' ');
        words.forEach((word, wordIndex) => {
            let wordWidth = word.length * digitOffset;

            if (lineWidth + wordWidth > MAX_LINE_WIDTH && lineWidth > 0) {
                offset = xStart;
                yStart -= lineHeight;
                lineWidth = 0;

                if (center) {
                    let remainingWords = words.slice(wordIndex);
                    let remainingLength = remainingWords.join(' ').length;
                    let remainingMiddle = remainingLength * digitOffset / 2;
                    offset = xStart - remainingMiddle;
                }
            }

            word.split('').forEach((digit: string) => {
                if (digit === " ") {
                    offset += digitOffset;
                    lineWidth += digitOffset;
                } else {
                    let letterIndex = alphabet.findIndex(letter => letter === digit);
                    if (letterIndex >= 0) {
                        let ent = engine.addEntity();
                        GltfContainer.create(ent, { src: "assets/models/alphaNum/" + alphabet[letterIndex] + ".glb", visibleMeshesCollisionMask: ColliderLayer.CL_NONE, invisibleMeshesCollisionMask: ColliderLayer.CL_NONE });

                        Transform.create(ent, { parent: parent, scale: Vector3.create(0.2, .2, .2), position: Vector3.create(offset, yStart, 0), rotation: Quaternion.fromEulerDegrees(0, 180, 0) });
                        offset += digitOffset;
                        lineWidth += digitOffset;

                        array.push(ent);
                    }
                }
            });

            if (wordIndex < words.length - 1) {
                offset += digitOffset; // Add space between words
                lineWidth += digitOffset;
            }
        });

        yStart -= lineHeight;
    });
}

export function clear3DText(array: any) {
    array.forEach((entity: Entity) => {
        engine.removeEntity(entity);
    });
    array.length = 0;
}

export function addLineBreak(text: string, bubble?: boolean, lineCount?: number) {
    return lineBreak(text, lineCount ? lineCount : 20);
}

function lineBreak(text: string, maxLineLength: number): string {
    const words = text.split(' ');
    let currentLine = '';
    const lines = [];

    words.forEach(word => {
        if (currentLine.length + word.length + 1 <= maxLineLength) {
            currentLine += `${currentLine ? ' ' : ''}${word}`;
        } else {
            lines.push(currentLine);
            currentLine = word;
        }
    });

    lines.push(currentLine);  // Add the last line
    return lines.join('\n');
}
