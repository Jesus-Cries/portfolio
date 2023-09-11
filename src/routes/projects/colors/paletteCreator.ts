import type { ColorProps, PaletteConfig } from "$lib/interfaces"

/** Determines if nearest bright hue is up or down from main hue */
enum HueRotationDirection {
    "Up" = 1,
    "None" = 0,
    "Down" = -1,
}

export class PaletteCreator {
    /** Determines direction to nearest bright hue */
    getHueRotationDirection(mainColor: ColorProps): HueRotationDirection {
        // Distances to nearest bright hues
        const distanceToYellow: number = mainColor.hue - 60
        const distanceToCyan: number = mainColor.hue - 180
        const distanceToMagenta: number = mainColor.hue - 300
        const distances: number[] = [distanceToYellow, distanceToCyan, distanceToMagenta]

        let hueRotationDirection: HueRotationDirection = HueRotationDirection.None

        /** Currently smallest distance to nearest bright hue */
        let smallestDistance = 360

        // Finds smallest distance and sets correct hue rotation direction
        distances.forEach((distance: number) => {
            if (Math.abs(distance) < Math.abs(smallestDistance)) {
                smallestDistance = distance
                if (distance === 0) hueRotationDirection = HueRotationDirection.None
                else if (distance < 0) hueRotationDirection = HueRotationDirection.Up
                else if (distance > 0) hueRotationDirection = HueRotationDirection.Down
            }
        })

        return hueRotationDirection
    }

    /** Creates hue palette based on hue of main color
     * Rotates hue to nearest bright hue
     */
    modifyHues(paletteConfig: PaletteConfig): number[] {
        // Hue modifiers to choose from that are added to main hue
        const maxHueModifiers: number[] = [20, 10, 5, 2, 0, 2, 5, 10, 20]

        const hueRotationDirection: HueRotationDirection = this.getHueRotationDirection(
            paletteConfig.mainColor
        )

        // Creates hues based on amount of hue rotation and rotation direction
        const hues: number[] = maxHueModifiers.map(
            (hueModifier: number) =>
                paletteConfig.mainColor.hue +
                (hueModifier / 100) * paletteConfig.hueRotationAmount * hueRotationDirection
        )

        return hues
    }

    /** Creates saturation palette based on saturation of main color
     * Divides remaining saturation space evenly between main saturation and max saturation
     */
    modifySaturations(mainColor: ColorProps): number[] {
        const mainSaturation: number = mainColor.saturation
        const maxSaturation = 100
        // Distances to max saturation
        const mainToMax = maxSaturation - mainSaturation

        // Divides remaining saturation space evenly between main saturation and max saturation
        const saturations: number[] = [
            maxSaturation,
            mainSaturation + mainToMax * 0.75,
            mainSaturation + mainToMax * 0.5,
            mainSaturation + mainToMax * 0.25,
            mainSaturation,
            mainSaturation + mainToMax * 0.25,
            mainSaturation + mainToMax * 0.5,
            mainSaturation + mainToMax * 0.75,
            maxSaturation,
        ]

        return saturations
    }

    /** Creates lightness palette based on lightness of main color
     * Divides remaining lightnesses evenly between main lightness and min / max lightness
     */
    modifyLightnesses(mainColor: ColorProps): number[] {
        const mainLightness: number = mainColor.lightness
        const minLightness = 10
        const maxLightness = 96

        // Distances to min and max lightness
        const mainToMin = mainLightness - minLightness
        const mainToMax = maxLightness - mainLightness

        // Divides remaining lightnesses evenly between main lightness and min / max lightness
        const lightnesses: number[] = [
            minLightness,
            mainLightness - mainToMin * 0.75,
            mainLightness - mainToMin * 0.5,
            mainLightness - mainToMin * 0.25,
            mainLightness,
            mainLightness + mainToMax * 0.25,
            mainLightness + mainToMax * 0.5,
            mainLightness + mainToMax * 0.75,
            maxLightness,
        ]

        return lightnesses
    }

    /** Creates a more balanced color palette */
    createPalette(paletteConfig: PaletteConfig): ColorProps[] {
        const hues: number[] = this.modifyHues(paletteConfig)
        const saturations: number[] = this.modifySaturations(paletteConfig.mainColor)
        const lightnesses: number[] = this.modifyLightnesses(paletteConfig.mainColor)

        const colors: ColorProps[] = []

        // Creates color palette based on modified hues, saturations and lightnesses
        const amountofColors = 9
        for (let i = 0; i < amountofColors; i++) {
            colors.push({
                hue: hues[i],
                saturation: saturations[i],
                lightness: lightnesses[i],
            })
        }

        return colors
    }
}
