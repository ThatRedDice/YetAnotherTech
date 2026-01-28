declare module "java.awt.image.renderable.RenderContext" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$AffineTransform, $AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RenderingHints, $RenderingHints$$Type} from "java.awt.RenderingHints"

export class $RenderContext implements $Cloneable$$Interface {
constructor(arg0: $AffineTransform$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $RenderingHints$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $Shape$$Type)
constructor(arg0: $AffineTransform$$Type, arg1: $Shape$$Type, arg2: $RenderingHints$$Type)

/**
 * 
 * @deprecated
 */
public "preConcetenateTransform"(arg0: $AffineTransform$$Type): void
/**
 * 
 * @deprecated
 */
public "concetenateTransform"(arg0: $AffineTransform$$Type): void
public "preConcatenateTransform"(arg0: $AffineTransform$$Type): void
public "concatenateTransform"(arg0: $AffineTransform$$Type): void
public "setAreaOfInterest"(arg0: $Shape$$Type): void
public "getAreaOfInterest"(): $Shape
public "getTransform"(): $AffineTransform
public "setTransform"(arg0: $AffineTransform$$Type): void
public "getRenderingHints"(): $RenderingHints
public "setRenderingHints"(arg0: $RenderingHints$$Type): void
public "clone"(): any
set "areaOfInterest"(value: $Shape$$Type)
get "areaOfInterest"(): $Shape
get "transform"(): $AffineTransform
set "transform"(value: $AffineTransform$$Type)
get "renderingHints"(): $RenderingHints
set "renderingHints"(value: $RenderingHints$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderContext$$Type = ($RenderContext);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderContext$$Original = $RenderContext;}
declare module "java.awt.image.renderable.RenderableImage" {
import {$Vector} from "java.util.Vector"
import {$RenderingHints$$Type} from "java.awt.RenderingHints"
import {$RenderContext$$Type} from "java.awt.image.renderable.RenderContext"
import {$RenderedImage} from "java.awt.image.RenderedImage"

export interface $RenderableImage$$Interface {
get "width"(): float
get "height"(): float
get "minX"(): float
get "minY"(): float
get "sources"(): $Vector<($RenderableImage)>
get "propertyNames"(): (StringJS)[]
get "dynamic"(): boolean
}

export class $RenderableImage implements $RenderableImage$$Interface {
static readonly "HINTS_OBSERVED": StringJS

 "createScaledRendering"(arg0: integer, arg1: integer, arg2: $RenderingHints$$Type): $RenderedImage
 "createDefaultRendering"(): $RenderedImage
 "createRendering"(arg0: $RenderContext$$Type): $RenderedImage
 "getWidth"(): float
 "getHeight"(): float
 "getMinX"(): float
 "getMinY"(): float
 "getSources"(): $Vector<($RenderableImage)>
 "getPropertyNames"(): (StringJS)[]
 "isDynamic"(): boolean
 "getProperty"(arg0: StringJS): any
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RenderableImage$$Type = ($RenderableImage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RenderableImage$$Original = $RenderableImage;}
