declare module "software.bernie.geckolib.cache.object.GeoBone" {
import {$List} from "java.util.List"
import {$BoneSnapshot} from "software.bernie.geckolib.animation.state.BoneSnapshot"
import {$GeoCube} from "software.bernie.geckolib.cache.object.GeoCube"
import {$Matrix4f, $Matrix4f$$Type} from "org.joml.Matrix4f"
import {$Vector3d, $Vector3d$$Type} from "org.joml.Vector3d"
import {$Matrix3f, $Matrix3f$$Type} from "org.joml.Matrix3f"

export class $GeoBone {
constructor(arg0: $GeoBone$$Type, arg1: StringJS, arg2: boolean, arg3: double, arg4: boolean, arg5: boolean)

public "getPosX"(): float
public "getPosY"(): float
public "updateRotation"(arg0: float, arg1: float, arg2: float): void
public "getRotY"(): float
public "setRotY"(arg0: float): void
public "getRotX"(): float
public "setRotX"(arg0: float): void
public "getWorldPosition"(): $Vector3d
public "isTrackingMatrices"(): boolean
public "setModelSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setLocalSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "setWorldSpaceMatrix"(arg0: $Matrix4f$$Type): void
public "getCubes"(): $List<($GeoCube)>
public "isHidingChildren"(): boolean
public "getChildBones"(): $List<($GeoBone)>
public "getScaleX"(): float
public "getScaleY"(): float
public "getInitialSnapshot"(): $BoneSnapshot
public "updatePosition"(arg0: float, arg1: float, arg2: float): void
public "setHidden"(arg0: boolean): void
public "updatePivot"(arg0: float, arg1: float, arg2: float): void
public "getInflate"(): double
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "isHidden"(): boolean
public "getParent"(): $GeoBone
public "getMirror"(): boolean
public "getRotationVector"(): $Vector3d
public "saveSnapshot"(): $BoneSnapshot
public "setPosX"(arg0: float): void
public "setPosY"(arg0: float): void
public "getPivotX"(): float
public "getPivotY"(): float
public "updateScale"(arg0: float, arg1: float, arg2: float): void
public "getPivotZ"(): float
public "getRotZ"(): float
public "setRotZ"(arg0: float): void
public "setTrackingMatrices"(arg0: boolean): void
public "hasScaleChanged"(): boolean
public "hasRotationChanged"(): boolean
public "hasPositionChanged"(): boolean
public "resetStateChanges"(): void
public "saveInitialSnapshot"(): void
public "shouldNeverRender"(): boolean
public "getReset"(): boolean
public "setWorldSpaceNormal"(arg0: $Matrix3f$$Type): void
public "getWorldSpaceNormal"(): $Matrix3f
public "getLocalPosition"(): $Vector3d
public "getModelPosition"(): $Vector3d
public "setModelPosition"(arg0: $Vector3d$$Type): void
public "getModelRotationMatrix"(): $Matrix4f
public "getPositionVector"(): $Vector3d
public "getScaleVector"(): $Vector3d
public "addRotationOffsetFromBone"(arg0: $GeoBone$$Type): void
public "markRotationAsChanged"(): void
public "markPositionAsChanged"(): void
public "setPosZ"(arg0: float): void
public "markScaleAsChanged"(): void
public "setScaleX"(arg0: float): void
public "setScaleY"(arg0: float): void
public "setScaleZ"(arg0: float): void
public "setChildrenHidden"(arg0: boolean): void
public "setPivotX"(arg0: float): void
public "setPivotY"(arg0: float): void
public "setPivotZ"(arg0: float): void
public "getLocalSpaceMatrix"(): $Matrix4f
public "getModelSpaceMatrix"(): $Matrix4f
public "getWorldSpaceMatrix"(): $Matrix4f
public "getPosZ"(): float
public "getScaleZ"(): float
get "posX"(): float
get "posY"(): float
get "rotY"(): float
set "rotY"(value: float)
get "rotX"(): float
set "rotX"(value: float)
get "worldPosition"(): $Vector3d
get "trackingMatrices"(): boolean
set "modelSpaceMatrix"(value: $Matrix4f$$Type)
set "localSpaceMatrix"(value: $Matrix4f$$Type)
set "worldSpaceMatrix"(value: $Matrix4f$$Type)
get "cubes"(): $List<($GeoCube)>
get "hidingChildren"(): boolean
get "childBones"(): $List<($GeoBone)>
get "scaleX"(): float
get "scaleY"(): float
get "initialSnapshot"(): $BoneSnapshot
set "hidden"(value: boolean)
get "inflate"(): double
get "name"(): StringJS
get "hidden"(): boolean
get "parent"(): $GeoBone
get "mirror"(): boolean
get "rotationVector"(): $Vector3d
set "posX"(value: float)
set "posY"(value: float)
get "pivotX"(): float
get "pivotY"(): float
get "pivotZ"(): float
get "rotZ"(): float
set "rotZ"(value: float)
set "trackingMatrices"(value: boolean)
get "reset"(): boolean
set "worldSpaceNormal"(value: $Matrix3f$$Type)
get "worldSpaceNormal"(): $Matrix3f
get "localPosition"(): $Vector3d
get "modelPosition"(): $Vector3d
set "modelPosition"(value: $Vector3d$$Type)
get "modelRotationMatrix"(): $Matrix4f
get "positionVector"(): $Vector3d
get "scaleVector"(): $Vector3d
set "posZ"(value: float)
set "scaleX"(value: float)
set "scaleY"(value: float)
set "scaleZ"(value: float)
set "childrenHidden"(value: boolean)
set "pivotX"(value: float)
set "pivotY"(value: float)
set "pivotZ"(value: float)
get "localSpaceMatrix"(): $Matrix4f
get "modelSpaceMatrix"(): $Matrix4f
get "worldSpaceMatrix"(): $Matrix4f
get "posZ"(): float
get "scaleZ"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoBone$$Type = ($GeoBone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoBone$$Original = $GeoBone;}
declare module "software.bernie.geckolib.cache.object.GeoCube" {
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$GeoQuad, $GeoQuad$$Type} from "software.bernie.geckolib.cache.object.GeoQuad"
import {$Record} from "java.lang.Record"

export class $GeoCube extends $Record {
constructor(quads: ($GeoQuad$$Type)[], pivot: $Vec3$$Type, rotation: $Vec3$$Type, size: $Vec3$$Type, inflate: double, mirror: boolean)

public "quads"(): ($GeoQuad)[]
public "pivot"(): $Vec3
public "size"(): $Vec3
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "inflate"(): double
public "mirror"(): boolean
public "rotation"(): $Vec3
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoCube$$Type = ({"pivot"?: $Vec3$$Type, "mirror"?: boolean, "inflate"?: double, "size"?: $Vec3$$Type, "rotation"?: $Vec3$$Type, "quads"?: ($GeoQuad$$Type)[]}) | ([pivot?: $Vec3$$Type, mirror?: boolean, inflate?: double, size?: $Vec3$$Type, rotation?: $Vec3$$Type, quads?: ($GeoQuad$$Type)[]]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoCube$$Original = $GeoCube;}
declare module "software.bernie.geckolib.cache.object.BakedGeoModel" {
import {$ModelProperties, $ModelProperties$$Type} from "software.bernie.geckolib.loading.json.raw.ModelProperties"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$GeoBone, $GeoBone$$Type} from "software.bernie.geckolib.cache.object.GeoBone"
import {$Record} from "java.lang.Record"

export class $BakedGeoModel extends $Record {
constructor(topLevelBones: $List$$Type<($GeoBone$$Type)>, properties: $ModelProperties$$Type)

public "getBone"(arg0: StringJS): $Optional<($GeoBone)>
public "topLevelBones"(): $List<($GeoBone)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "properties"(): $ModelProperties
public "searchForChildBone"(arg0: $GeoBone$$Type, arg1: StringJS): $GeoBone
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BakedGeoModel$$Type = ({"properties"?: $ModelProperties$$Type, "topLevelBones"?: $List$$Type<($GeoBone$$Type)>}) | ([properties?: $ModelProperties$$Type, topLevelBones?: $List$$Type<($GeoBone$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BakedGeoModel$$Original = $BakedGeoModel;}
declare module "software.bernie.geckolib.cache.object.GeoVertex" {
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $GeoVertex extends $Record {
constructor(arg0: double, arg1: double, arg2: double)
constructor(position: $Vector3f$$Type, texU: float, texV: float)

public "texU"(): float
public "texV"(): float
public "withUVs"(arg0: float, arg1: float): $GeoVertex
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "position"(): $Vector3f
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoVertex$$Type = ({"texU"?: float, "texV"?: float, "position"?: $Vector3f$$Type}) | ([texU?: float, texV?: float, position?: $Vector3f$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoVertex$$Original = $GeoVertex;}
declare module "software.bernie.geckolib.cache.object.GeoQuad" {
import {$GeoVertex, $GeoVertex$$Type} from "software.bernie.geckolib.cache.object.GeoVertex"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$FaceUV$Rotation$$Type} from "software.bernie.geckolib.loading.json.raw.FaceUV$Rotation"
import {$Vector3f, $Vector3f$$Type} from "org.joml.Vector3f"
import {$Record} from "java.lang.Record"

export class $GeoQuad extends $Record {
constructor(vertices: ($GeoVertex$$Type)[], normal: $Vector3f$$Type, direction: $Direction$$Type)

public "vertices"(): ($GeoVertex)[]
public "normal"(): $Vector3f
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "direction"(): $Direction
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: float, arg4: float, arg5: boolean, arg6: $Direction$$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: $FaceUV$Rotation$$Type, arg6: float, arg7: float, arg8: boolean, arg9: $Direction$$Type): $GeoQuad
/**
 * 
 * @deprecated
 */
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: float, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: boolean, arg8: $Direction$$Type): $GeoQuad
public static "build"(arg0: ($GeoVertex$$Type)[], arg1: (double)[], arg2: (double)[], arg3: $FaceUV$Rotation$$Type, arg4: float, arg5: float, arg6: boolean, arg7: $Direction$$Type): $GeoQuad
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GeoQuad$$Type = ({"direction"?: $Direction$$Type, "vertices"?: ($GeoVertex$$Type)[], "normal"?: $Vector3f$$Type}) | ([direction?: $Direction$$Type, vertices?: ($GeoVertex$$Type)[], normal?: $Vector3f$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GeoQuad$$Original = $GeoQuad;}
