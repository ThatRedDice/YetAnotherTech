declare module "dev.engine_room.flywheel.lib.transform.Translate" {
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"

export interface $Translate$$Interface<Self extends $Translate<(object)>> {

(arg0: float, arg1: float, arg2: float): Self
}

export class $Translate<Self extends $Translate<(object)>> implements $Translate$$Interface {
static readonly "CENTER": float

 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateX"(x: float): Self
 "center"(): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Translate$$Type<Self> = ((arg0: float, arg1: float, arg2: float) => Self);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Translate$$Original<Self> = $Translate<(Self)>;}
declare module "dev.engine_room.flywheel.lib.transform.TransformStack" {
import {$Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Transform$$Interface} from "dev.engine_room.flywheel.lib.transform.Transform"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$PoseTransformStack} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"
import {$AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $TransformStack$$Interface<Self extends $TransformStack<(object)>> extends $Transform$$Interface<(Self)> {
}

export class $TransformStack<Self extends $TransformStack<(object)>> implements $TransformStack$$Interface {
static "of"(stack: $PoseStack$$Type): $PoseTransformStack
 "pushPose"(): Self
 "popPose"(): Self
 "mulNormal"(arg0: $Matrix3fc$$Type): Self
 "transform"(pose: $PoseStack$Pose$$Type): Self
 "transform"(stack: $PoseStack$$Type): Self
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
 "mulPose"(arg0: $Matrix4fc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateX"(x: float): Self
 "center"(): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateZDegrees"(degrees: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scale"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TransformStack$$Type<Self> = ($TransformStack<(Self)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TransformStack$$Original<Self> = $TransformStack<(Self)>;}
declare module "dev.engine_room.flywheel.lib.transform.Transform" {
import {$Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Affine$$Interface} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $Transform$$Interface<Self extends $Transform<(object)>> extends $Affine$$Interface<(Self)> {
}

export class $Transform<Self extends $Transform<(object)>> implements $Transform$$Interface {
 "mulNormal"(arg0: $Matrix3fc$$Type): Self
 "transform"(pose: $PoseStack$Pose$$Type): Self
 "transform"(stack: $PoseStack$$Type): Self
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): Self
 "mulPose"(arg0: $Matrix4fc$$Type): Self
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateX"(x: float): Self
 "center"(): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateZDegrees"(degrees: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scale"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Transform$$Type<Self> = ($Transform<(Self)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Transform$$Original<Self> = $Transform<(Self)>;}
declare module "dev.engine_room.flywheel.lib.transform.Affine" {
import {$Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Scale$$Interface} from "dev.engine_room.flywheel.lib.transform.Scale"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Rotate$$Interface} from "dev.engine_room.flywheel.lib.transform.Rotate"
import {$Translate$$Interface} from "dev.engine_room.flywheel.lib.transform.Translate"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $Affine$$Interface<Self extends $Affine<(object)>> extends $Translate$$Interface<(Self)>, $Rotate$$Interface<(Self)>, $Scale$$Interface<(Self)> {
}

export class $Affine<Self extends $Affine<(object)>> implements $Affine$$Interface {
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateCentered"(radians: float, axis: $Direction$$Type): Self
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): Self
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotateCentered"(q: $Quaternionfc$$Type): Self
 "rotateCentered"(radians: float, axis: $Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateXCentered"(radians: float): Self
 "rotateYCentered"(radians: float): Self
 "rotateZCentered"(radians: float): Self
 "rotateXCenteredDegrees"(degrees: float): Self
 "rotateYCenteredDegrees"(degrees: float): Self
 "rotateZCenteredDegrees"(degrees: float): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): Self
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): Self
 "uncenter"(): Self
 "translateY"(y: float): Self
 "translateZ"(z: float): Self
 "nudge"(seed: integer): Self
 "translateBack"(vec: $Vec3i$$Type): Self
 "translateBack"(v: float): Self
 "translateBack"(x: double, y: double, z: double): Self
 "translateBack"(x: float, y: float, z: float): Self
 "translateBack"(vec: $Vector3ic$$Type): Self
 "translateBack"(vec: $Vec3$$Type): Self
 "translateBack"(vec: $Vector3fc$$Type): Self
 "translateX"(x: float): Self
 "center"(): Self
 "translate"(v: float): Self
 "translate"(x: double, y: double, z: double): Self
 "translate"(arg0: float, arg1: float, arg2: float): Self
 "translate"(vec: $Vector3fc$$Type): Self
 "translate"(vec: $Vector3ic$$Type): Self
 "translate"(vec: $Vec3i$$Type): Self
 "translate"(vec: $Vec3$$Type): Self
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateZDegrees"(degrees: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scale"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Affine$$Type<Self> = ($Affine<(Self)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Affine$$Original<Self> = $Affine<(Self)>;}
declare module "dev.engine_room.flywheel.lib.transform.Rotate" {
import {$Quaternionfc, $Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Axis$$Type} from "com.mojang.math.Axis"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $Rotate$$Interface<Self extends $Rotate<(object)>> {

(arg0: $Quaternionfc): Self
}

export class $Rotate<Self extends $Rotate<(object)>> implements $Rotate$$Interface {
 "rotateYDegrees"(degrees: float): Self
 "rotateXDegrees"(degrees: float): Self
 "rotateToFace"(facing: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): Self
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): Self
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): Self
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): Self
 "rotateZDegrees"(degrees: float): Self
 "self"(): Self
 "rotate"(radians: float, axis: $Vector3fc$$Type): Self
 "rotate"(radians: float, axis: $Axis$$Type): Self
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): Self
 "rotate"(axisAngle: $AxisAngle4f$$Type): Self
 "rotate"(arg0: $Quaternionfc$$Type): Self
 "rotate"(radians: float, axis: $Direction$Axis$$Type): Self
 "rotate"(radians: float, axis: $Direction$$Type): Self
 "rotateX"(radians: float): Self
 "rotateY"(radians: float): Self
 "rotateZ"(radians: float): Self
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): Self
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): Self
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Rotate$$Type<Self> = ((arg0: $Quaternionfc) => Self);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Rotate$$Original<Self> = $Rotate<(Self)>;}
declare module "dev.engine_room.flywheel.lib.model.baked.PartialModel" {
import {$AccessorPartialModel$$Interface} from "com.railwayteam.railways.mixin.client.AccessorPartialModel"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$BakedModel, $BakedModel$$Type} from "net.minecraft.client.resources.model.BakedModel"
import {$ConcurrentMap} from "java.util.concurrent.ConcurrentMap"

export class $PartialModel implements $AccessorPartialModel$$Interface {
public static "setPopulateOnInit$railways_$md$a93e73$1"(arg0: boolean): void
public static "getPopulateOnInit$railways_$md$a93e73$2"(): boolean
public "railways$setBakedModel"(arg0: $BakedModel$$Type): void
public static "getALL$railways_$md$a93e73$0"(): $ConcurrentMap
public "get"(): $BakedModel
public static "of"(modelLocation: $ResourceLocation$$Type): $PartialModel
public "modelLocation"(): $ResourceLocation
public static "railways$getALL"(): $ConcurrentMap<($ResourceLocation), ($PartialModel)>
public static "railways$setPopulateOnInit"(arg0: boolean): void
public static "railways$getPopulateOnInit"(): boolean
public static set "populateOnInit$railways_$md$a93e73$1"(value: boolean)
public static get "populateOnInit$railways_$md$a93e73$2"(): boolean
public static get "ALL$railways_$md$a93e73$0"(): $ConcurrentMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PartialModel$$Type = ($PartialModel);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PartialModel$$Original = $PartialModel;}
declare module "dev.engine_room.flywheel.lib.transform.Scale" {
import {$Vector3fc$$Type} from "org.joml.Vector3fc"

export interface $Scale$$Interface<Self extends $Scale<(object)>> {

(arg0: float, arg1: float, arg2: float): Self
}

export class $Scale<Self extends $Scale<(object)>> implements $Scale$$Interface {
 "scaleZ"(factor: float): Self
 "scaleX"(factor: float): Self
 "scaleY"(factor: float): Self
 "scale"(factors: $Vector3fc$$Type): Self
 "scale"(arg0: float, arg1: float, arg2: float): Self
 "scale"(factor: float): Self
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Scale$$Type<Self> = ((arg0: float, arg1: float, arg2: float) => Self);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Scale$$Original<Self> = $Scale<(Self)>;}
declare module "dev.engine_room.flywheel.lib.transform.PoseTransformStack" {
import {$Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$Affine} from "dev.engine_room.flywheel.lib.transform.Affine"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Rotate} from "dev.engine_room.flywheel.lib.transform.Rotate"
import {$TransformStack, $TransformStack$$Interface} from "dev.engine_room.flywheel.lib.transform.TransformStack"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export class $PoseTransformStack implements $TransformStack$$Interface<($PoseTransformStack)> {
constructor(stack: $PoseStack$$Type)

public "mulNormal"(normal: $Matrix3fc$$Type): $PoseTransformStack
public "scale"(factorX: float, factorY: float, factorZ: float): $PoseTransformStack
public "unwrap"(): $PoseStack
public "rotate"(arg0: $Quaternionfc$$Type): $Rotate
public "translate"(x: float, y: float, z: float): $PoseTransformStack
public "pushPose"(): $TransformStack
public "popPose"(): $PoseTransformStack
public "mulPose"(pose: $Matrix4fc$$Type): $PoseTransformStack
public "rotateAround"(arg0: $Quaternionfc$$Type, arg1: float, arg2: float, arg3: float): $Affine
public static "of"(stack: $PoseStack$$Type): $PoseTransformStack
public "transform"(pose: $PoseStack$Pose$$Type): $PoseTransformStack
public "transform"(stack: $PoseStack$$Type): $PoseTransformStack
public "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateCentered"(q: $Quaternionfc$$Type): $PoseTransformStack
public "rotateCentered"(radians: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateXCentered"(radians: float): $PoseTransformStack
public "rotateYCentered"(radians: float): $PoseTransformStack
public "rotateZCentered"(radians: float): $PoseTransformStack
public "rotateXCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateYCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateZCenteredDegrees"(degrees: float): $PoseTransformStack
public "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): $PoseTransformStack
public "uncenter"(): $PoseTransformStack
public "translateY"(y: float): $PoseTransformStack
public "translateZ"(z: float): $PoseTransformStack
public "nudge"(seed: integer): $PoseTransformStack
public "translateBack"(vec: $Vec3i$$Type): $PoseTransformStack
public "translateBack"(v: float): $PoseTransformStack
public "translateBack"(x: double, y: double, z: double): $PoseTransformStack
public "translateBack"(x: float, y: float, z: float): $PoseTransformStack
public "translateBack"(vec: $Vector3ic$$Type): $PoseTransformStack
public "translateBack"(vec: $Vec3$$Type): $PoseTransformStack
public "translateBack"(vec: $Vector3fc$$Type): $PoseTransformStack
public "translateX"(x: float): $PoseTransformStack
public "center"(): $PoseTransformStack
public "translate"(v: float): $PoseTransformStack
public "translate"(x: double, y: double, z: double): $PoseTransformStack
public "translate"(vec: $Vector3fc$$Type): $PoseTransformStack
public "translate"(vec: $Vector3ic$$Type): $PoseTransformStack
public "translate"(vec: $Vec3i$$Type): $PoseTransformStack
public "translate"(vec: $Vec3$$Type): $PoseTransformStack
public "rotateYDegrees"(degrees: float): $PoseTransformStack
public "rotateXDegrees"(degrees: float): $PoseTransformStack
public "rotateToFace"(facing: $Direction$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Axis$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotateZDegrees"(degrees: float): $PoseTransformStack
public "self"(): $PoseTransformStack
public "rotate"(radians: float, axis: $Vector3fc$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Axis$$Type): $PoseTransformStack
public "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $PoseTransformStack
public "rotate"(axisAngle: $AxisAngle4f$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$Axis$$Type): $PoseTransformStack
public "rotate"(radians: float, axis: $Direction$$Type): $PoseTransformStack
public "rotateX"(radians: float): $PoseTransformStack
public "rotateY"(radians: float): $PoseTransformStack
public "rotateZ"(radians: float): $PoseTransformStack
public "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): $PoseTransformStack
public "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): $PoseTransformStack
public "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $PoseTransformStack
public "scaleZ"(factor: float): $PoseTransformStack
public "scaleX"(factor: float): $PoseTransformStack
public "scaleY"(factor: float): $PoseTransformStack
public "scale"(factors: $Vector3fc$$Type): $PoseTransformStack
public "scale"(factor: float): $PoseTransformStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PoseTransformStack$$Type = ($PoseTransformStack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PoseTransformStack$$Original = $PoseTransformStack;}
