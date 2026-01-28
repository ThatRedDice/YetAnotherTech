declare module "java.awt.geom.AffineTransform" {
import {$Shape, $Shape$$Type} from "java.awt.Shape"
import {$Serializable$$Interface} from "java.io.Serializable"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $AffineTransform implements $Cloneable$$Interface, $Serializable$$Interface {
static readonly "TYPE_QUADRANT_ROTATION": integer
static readonly "TYPE_TRANSLATION": integer
static readonly "TYPE_IDENTITY": integer
static readonly "TYPE_UNIFORM_SCALE": integer
static readonly "TYPE_MASK_SCALE": integer
static readonly "TYPE_MASK_ROTATION": integer
static readonly "TYPE_GENERAL_SCALE": integer
static readonly "TYPE_FLIP": integer
static readonly "TYPE_GENERAL_ROTATION": integer
static readonly "TYPE_GENERAL_TRANSFORM": integer

constructor(arg0: (double)[])
constructor(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double)
constructor(arg0: (float)[])
constructor(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float, arg5: float)
constructor(arg0: $AffineTransform$$Type)
constructor()

public "concatenate"(arg0: $AffineTransform$$Type): void
public "shear"(arg0: double, arg1: double): void
public "setTransform"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): void
public "setTransform"(arg0: $AffineTransform$$Type): void
public "invert"(): void
public "deltaTransform"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
public "deltaTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "createInverse"(): $AffineTransform
public "getMatrix"(arg0: (double)[]): void
public "getDeterminant"(): double
public "setToTranslation"(arg0: double, arg1: double): void
public "createTransformedShape"(arg0: $Shape$$Type): $Shape
public "inverseTransform"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
public "inverseTransform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "setToRotation"(arg0: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setToRotation"(arg0: double, arg1: double): void
public "setToRotation"(arg0: double, arg1: double, arg2: double): void
public "setToQuadrantRotation"(arg0: integer): void
public "setToQuadrantRotation"(arg0: integer, arg1: double, arg2: double): void
public "setToScale"(arg0: double, arg1: double): void
public "setToShear"(arg0: double, arg1: double): void
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double): $AffineTransform
public static "getRotateInstance"(arg0: double, arg1: double, arg2: double, arg3: double): $AffineTransform
public static "getRotateInstance"(arg0: double): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer): $AffineTransform
public static "getQuadrantRotateInstance"(arg0: integer, arg1: double, arg2: double): $AffineTransform
public static "getShearInstance"(arg0: double, arg1: double): $AffineTransform
public "quadrantRotate"(arg0: integer, arg1: double, arg2: double): void
public "quadrantRotate"(arg0: integer): void
public static "getTranslateInstance"(arg0: double, arg1: double): $AffineTransform
public "setToIdentity"(): void
public "getShearY"(): double
public "getShearX"(): double
public "getTranslateX"(): double
public "getTranslateY"(): double
public "preConcatenate"(arg0: $AffineTransform$$Type): void
public "getScaleX"(): double
public "getScaleY"(): double
public static "getScaleInstance"(arg0: double, arg1: double): $AffineTransform
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "clone"(): any
public "scale"(arg0: double, arg1: double): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (float)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "transform"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): $Point2D
public "transform"(arg0: (float)[], arg1: integer, arg2: (float)[], arg3: integer, arg4: integer): void
public "transform"(arg0: ($Point2D$$Type)[], arg1: integer, arg2: ($Point2D$$Type)[], arg3: integer, arg4: integer): void
public "transform"(arg0: (double)[], arg1: integer, arg2: (double)[], arg3: integer, arg4: integer): void
public "getType"(): integer
public "isIdentity"(): boolean
public "rotate"(arg0: double, arg1: double): void
public "rotate"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "rotate"(arg0: double): void
public "rotate"(arg0: double, arg1: double, arg2: double): void
public "translate"(arg0: double, arg1: double): void
get "determinant"(): double
set "toRotation"(value: double)
set "toQuadrantRotation"(value: integer)
get "toIdentity"(): void
get "shearY"(): double
get "shearX"(): double
get "translateX"(): double
get "translateY"(): double
get "scaleX"(): double
get "scaleY"(): double
get "type"(): integer
get "identity"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AffineTransform$$Type = ($AffineTransform);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AffineTransform$$Original = $AffineTransform;}
declare module "java.awt.geom.PathIterator" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PathIterator$$Interface {
get "windingRule"(): integer
get "done"(): boolean
}

export class $PathIterator implements $PathIterator$$Interface {
static readonly "WIND_EVEN_ODD": integer
static readonly "SEG_QUADTO": integer
static readonly "SEG_CLOSE": integer
static readonly "SEG_CUBICTO": integer
static readonly "SEG_LINETO": integer
static readonly "WIND_NON_ZERO": integer
static readonly "SEG_MOVETO": integer

 "currentSegment"(arg0: (double)[]): integer
 "currentSegment"(arg0: (float)[]): integer
 "getWindingRule"(): integer
 "next"(): void
 "isDone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PathIterator$$Type = ($PathIterator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PathIterator$$Original = $PathIterator;}
declare module "java.awt.geom.Dimension2D" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $Dimension2D implements $Cloneable$$Interface {
public "getWidth"(): double
public "getHeight"(): double
public "setSize"(arg0: $Dimension2D$$Type): void
public "setSize"(arg0: double, arg1: double): void
public "clone"(): any
get "width"(): double
get "height"(): double
set "size"(value: $Dimension2D$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Dimension2D$$Type = ($Dimension2D);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Dimension2D$$Original = $Dimension2D;}
declare module "java.awt.geom.Point2D" {
import {$Cloneable$$Interface} from "java.lang.Cloneable"

export class $Point2D implements $Cloneable$$Interface {
public static "distanceSq"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "distanceSq"(arg0: $Point2D$$Type): double
public "distanceSq"(arg0: double, arg1: double): double
public "getY"(): double
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "clone"(): any
public "distance"(arg0: $Point2D$$Type): double
public "distance"(arg0: double, arg1: double): double
public static "distance"(arg0: double, arg1: double, arg2: double, arg3: double): double
public "setLocation"(arg0: $Point2D$$Type): void
public "setLocation"(arg0: double, arg1: double): void
public "getX"(): double
get "y"(): double
set "location"(value: $Point2D$$Type)
get "x"(): double
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Point2D$$Type = ($Point2D);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Point2D$$Original = $Point2D;}
declare module "java.awt.geom.RectangularShape" {
import {$Shape$$Interface} from "java.awt.Shape"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Dimension2D$$Type} from "java.awt.geom.Dimension2D"
import {$Point2D$$Type} from "java.awt.geom.Point2D"
import {$PathIterator} from "java.awt.geom.PathIterator"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Rectangle} from "java.awt.Rectangle"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $RectangularShape implements $Shape$$Interface, $Cloneable$$Interface {
public "getFrame"(): $Rectangle2D
public "getCenterY"(): double
public "getMaxX"(): double
public "getMaxY"(): double
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "getWidth"(): double
public "getHeight"(): double
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "getMinX"(): double
public "getMinY"(): double
public "getY"(): double
public "setFrame"(arg0: $Point2D$$Type, arg1: $Dimension2D$$Type): void
public "setFrame"(arg0: $Rectangle2D$$Type): void
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromDiagonal"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setFrameFromDiagonal"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): void
public "setFrameFromCenter"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): void
public "setFrameFromCenter"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "clone"(): any
public "isEmpty"(): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "getBounds"(): $Rectangle
public "getX"(): double
public "getCenterX"(): double
public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
get "frame"(): $Rectangle2D
get "centerY"(): double
get "maxX"(): double
get "maxY"(): double
get "width"(): double
get "height"(): double
get "minX"(): double
get "minY"(): double
get "y"(): double
set "frame"(value: $Rectangle2D$$Type)
get "empty"(): boolean
get "bounds"(): $Rectangle
get "x"(): double
get "centerX"(): double
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RectangularShape$$Type = ($RectangularShape);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RectangularShape$$Original = $RectangularShape;}
declare module "java.awt.geom.Line2D" {
import {$Shape$$Interface} from "java.awt.Shape"
import {$Rectangle2D, $Rectangle2D$$Type} from "java.awt.geom.Rectangle2D"
import {$Point2D, $Point2D$$Type} from "java.awt.geom.Point2D"
import {$PathIterator} from "java.awt.geom.PathIterator"
import {$Cloneable$$Interface} from "java.lang.Cloneable"
import {$Rectangle} from "java.awt.Rectangle"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"

export class $Line2D implements $Shape$$Interface, $Cloneable$$Interface {
public "relativeCCW"(arg0: double, arg1: double): integer
public "relativeCCW"(arg0: $Point2D$$Type): integer
public static "relativeCCW"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): integer
public static "linesIntersect"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double, arg6: double, arg7: double): boolean
public "ptSegDistSq"(arg0: double, arg1: double): double
public static "ptSegDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptSegDistSq"(arg0: $Point2D$$Type): double
public "ptSegDist"(arg0: double, arg1: double): double
public static "ptSegDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptSegDist"(arg0: $Point2D$$Type): double
public "ptLineDistSq"(arg0: double, arg1: double): double
public "ptLineDistSq"(arg0: $Point2D$$Type): double
public static "ptLineDistSq"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public static "ptLineDist"(arg0: double, arg1: double, arg2: double, arg3: double, arg4: double, arg5: double): double
public "ptLineDist"(arg0: double, arg1: double): double
public "ptLineDist"(arg0: $Point2D$$Type): double
public "getP1"(): $Point2D
public "getP2"(): $Point2D
public "getX1"(): double
public "getY1"(): double
public "getX2"(): double
public "getY2"(): double
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "intersects"(arg0: $Rectangle2D$$Type): boolean
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "intersectsLine"(arg0: $Line2D$$Type): boolean
public "clone"(): any
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: $Rectangle2D$$Type): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "contains"(arg0: $Point2D$$Type): boolean
public "getBounds"(): $Rectangle
public "setLine"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "setLine"(arg0: $Line2D$$Type): void
public "setLine"(arg0: $Point2D$$Type, arg1: $Point2D$$Type): void
public "getBounds2D"(): $Rectangle2D
get "p1"(): $Point2D
get "p2"(): $Point2D
get "x1"(): double
get "y1"(): double
get "x2"(): double
get "y2"(): double
get "bounds"(): $Rectangle
set "line"(value: $Line2D$$Type)
get "bounds2D"(): $Rectangle2D
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Line2D$$Type = ($Line2D);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Line2D$$Original = $Line2D;}
declare module "java.awt.geom.Rectangle2D" {
import {$Point2D$$Type} from "java.awt.geom.Point2D"
import {$PathIterator} from "java.awt.geom.PathIterator"
import {$AffineTransform$$Type} from "java.awt.geom.AffineTransform"
import {$RectangularShape} from "java.awt.geom.RectangularShape"
import {$Line2D$$Type} from "java.awt.geom.Line2D"

export class $Rectangle2D extends $RectangularShape {
static readonly "OUT_TOP": integer
static readonly "OUT_RIGHT": integer
static readonly "OUT_BOTTOM": integer
static readonly "OUT_LEFT": integer

public "getBounds2D"(): $Rectangle2D
public "getPathIterator"(arg0: $AffineTransform$$Type): $PathIterator
public "getPathIterator"(arg0: $AffineTransform$$Type, arg1: double): $PathIterator
public "intersects"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public static "intersect"(arg0: $Rectangle2D$$Type, arg1: $Rectangle2D$$Type, arg2: $Rectangle2D$$Type): void
public static "union"(arg0: $Rectangle2D$$Type, arg1: $Rectangle2D$$Type, arg2: $Rectangle2D$$Type): void
public "setRect"(arg0: $Rectangle2D$$Type): void
public "setRect"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "outcode"(arg0: $Point2D$$Type): integer
public "outcode"(arg0: double, arg1: double): integer
public "createIntersection"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "createUnion"(arg0: $Rectangle2D$$Type): $Rectangle2D
public "intersectsLine"(arg0: $Line2D$$Type): boolean
public "intersectsLine"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
public "setFrame"(arg0: double, arg1: double, arg2: double, arg3: double): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "add"(arg0: double, arg1: double): void
public "add"(arg0: $Point2D$$Type): void
public "add"(arg0: $Rectangle2D$$Type): void
public "contains"(arg0: double, arg1: double): boolean
public "contains"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
get "bounds2D"(): $Rectangle2D
set "rect"(value: $Rectangle2D$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rectangle2D$$Type = ($Rectangle2D);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rectangle2D$$Original = $Rectangle2D;}
