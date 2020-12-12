import tinycolor from 'tinycolor2'
import convert from 'color-convert'

class Palettizer {

    bases = {primary: "primary", secondary: "secondary", tertiary: "tertiary", success: "success", warning: "warning", danger: "danger", neutralCool: "neutral-cool",neutral: "neutral"}
    weights = ['900', '800', '700', '600', '500', '400', '300', '200', '100', '075', '050', '025', '015'];

    constructor(paperWhite, shadeTargetMultiplier) {
        this.paperWhite = paperWhite
        this.shadeTargetMultiplier = shadeTargetMultiplier
    }

    createSwatchRow(hexString) {

        let color = tinycolor(hexString)
        let shadeTargets = this.createShadeTargets(color)
        let tintTargets = this.createTintTargets(color)

        let swatch900 = this.darkenToTarget(color.clone().saturate(10), shadeTargets.L_900)
        let swatch800 = this.darkenToTarget(color.clone().saturate(5), shadeTargets.L_800)
        let swatch700 = this.darkenToTarget(color.clone().saturate(3), shadeTargets.L_700)
        let swatch600 = this.darkenToTarget(color.clone().saturate(2), shadeTargets.L_600)
        let swatch500 = this.darkenToTarget(color.clone().saturate(0), shadeTargets.L_500)
        let swatch400 = color
        let swatch300 = this.lightenToTarget(color.clone().saturate(0), tintTargets.L_300)
        let swatch200 = this.lightenToTarget(color.clone().saturate(0), tintTargets.L_200)
        let swatch100 = this.lightenToTarget(color.clone().saturate(0), tintTargets.L_100)
        let swatch075 = this.lightenToTarget(color.clone().saturate(3), tintTargets.L_075)
        let swatch050 = this.lightenToTarget(color.clone().saturate(5), tintTargets.L_050)
        let swatch025 = this.lightenToTarget(color.clone().saturate(10), tintTargets.L_025)
        let swatch015 = this.lightenToTarget(color.clone().saturate(15), tintTargets.L_015)

        return {
            swatch900: swatch900.toHexString(),
            swatch800: swatch800.toHexString(),
            swatch700: swatch700.toHexString(),
            swatch600: swatch600.toHexString(),
            swatch500: swatch500.toHexString(),
            swatch400: swatch400.toHexString(),
            swatch300: swatch300.toHexString(),
            swatch200: swatch200.toHexString(),
            swatch100: swatch100.toHexString(),
            swatch075: swatch075.toHexString(),
            swatch050: swatch050.toHexString(),
            swatch025: swatch025.toHexString(),
            swatch015: swatch015.toHexString()
        }

    }

    getLightnessValue(hexString) {
        return convert.hex.lab(hexString)[0]
    }

    darken(color) {
        return tinycolor(color.clone()).darken(1)
    }

    lighten(color) {
        return tinycolor(color.clone()).lighten(1)
    }

    darkenToTarget(color, targetValue) {
        let result = color.clone()

        while (this.getLightnessValue(result) > targetValue) {
            result = this.darken(result)
        }

        return result

    }

    lightenToTarget(color, targetValue) {
        let result = color.clone()

        while (this.getLightnessValue(result) < targetValue) {
            result = this.lighten(result)
        }

        return result
    }

    createShadeTargets(base) {
        let L_400 = this.getLightnessValue(base)
        let L_900 = L_400 * this.shadeTargetMultiplier

        let stepValue = (L_400 - L_900) / 5

        let L_800 = L_900 + (stepValue * 1)
        let L_700 = L_900 + (stepValue * 2)
        let L_600 = L_900 + (stepValue * 3)
        let L_500 = L_900 + (stepValue * 4)

        return {
            L_900: L_900,
            L_800: L_800,
            L_700: L_700,
            L_600: L_600,
            L_500: L_500
        }
    }

    createTintTargets(base) {
        let L_400 = this.getLightnessValue(base)

        let stepValue = (this.paperWhite - L_400) / 6

        let L_300 = L_400 + (stepValue * 1)
        let L_200 = L_400 + (stepValue * 2)
        let L_100 = L_400 + (stepValue * 3)
        let L_075 = L_400 + (stepValue * 4)
        let L_050 = L_400 + (stepValue * 5)

        // Want a tint between 050 and 015
        let L_025 = ((L_050 - this.paperWhite) / 2) + this.paperWhite
        // if *L value not equal to paperWhite, make slightly lighter
        if ( (L_025) + 2 >= this.paperWhite) {
            L_025 = L_025;
        } else {
            L_025 = L_025 + 1;

        }

        return {
            L_300: L_300,
            L_200: L_200,
            L_100: L_100,
            L_075: L_075,
            L_050: L_050,
            L_025: L_025,
            L_015: this.paperWhite,
        }
    }

    isDark(hexString) {
        return tinycolor(hexString).isDark()
    }

}

export default Palettizer;
