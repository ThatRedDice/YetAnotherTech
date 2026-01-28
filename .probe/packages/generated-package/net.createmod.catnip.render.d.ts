declare module "net.createmod.catnip.render.SpriteShiftEntry" {
import {$TextureAtlasSprite, $TextureAtlasSprite$$Type} from "net.minecraft.client.renderer.texture.TextureAtlasSprite"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"

export class $SpriteShiftEntry {
constructor()

public static "getUnInterpolatedU"(arg0: $TextureAtlasSprite$$Type, arg1: float): float
public static "getUnInterpolatedV"(arg0: $TextureAtlasSprite$$Type, arg1: float): float
public "getTargetU"(arg0: float): float
public "getTargetV"(arg0: float): float
public "getOriginalResourceLocation"(): $ResourceLocation
public "getTargetResourceLocation"(): $ResourceLocation
public "set"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): void
public "getTarget"(): $TextureAtlasSprite
public "getOriginal"(): $TextureAtlasSprite
get "originalResourceLocation"(): $ResourceLocation
get "targetResourceLocation"(): $ResourceLocation
get "target"(): $TextureAtlasSprite
get "original"(): $TextureAtlasSprite
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpriteShiftEntry$$Type = ($SpriteShiftEntry);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpriteShiftEntry$$Original = $SpriteShiftEntry;}
declare module "net.createmod.catnip.render.SuperByteBuffer" {
import {$Quaternionfc$$Type} from "org.joml.Quaternionfc"
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$Matrix4f$$Type} from "org.joml.Matrix4f"
import {$TransformStack$$Interface} from "dev.engine_room.flywheel.lib.transform.TransformStack"
import {$PoseStack$Pose$$Type} from "com.mojang.blaze3d.vertex.PoseStack$Pose"
import {$Direction$Axis$$Type} from "net.minecraft.core.Direction$Axis"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$Matrix4fc$$Type} from "org.joml.Matrix4fc"
import {$Vector3ic$$Type} from "org.joml.Vector3ic"
import {$Axis$$Type} from "com.mojang.math.Axis"
import {$Vec3i$$Type} from "net.minecraft.core.Vec3i"
import {$Matrix3fc$$Type} from "org.joml.Matrix3fc"
import {$BlockAndTintGetter$$Type} from "net.minecraft.world.level.BlockAndTintGetter"
import {$Color$$Type} from "net.createmod.catnip.theme.Color"
import {$SpriteShiftEntry$$Type} from "net.createmod.catnip.render.SpriteShiftEntry"
import {$PoseTransformStack} from "dev.engine_room.flywheel.lib.transform.PoseTransformStack"
import {$Vector3fc$$Type} from "org.joml.Vector3fc"
import {$AxisAngle4f$$Type} from "org.joml.AxisAngle4f"

export interface $SuperByteBuffer$$Interface extends $TransformStack$$Interface<($SuperByteBuffer)> {
get "transforms"(): $PoseStack
get "empty"(): boolean
}

export class $SuperByteBuffer implements $SuperByteBuffer$$Interface {
 "getTransforms"(): $PoseStack
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$$Type): Self
 "useLevelLight"<Self extends $SuperByteBuffer>(arg0: $BlockAndTintGetter$$Type, arg1: $Matrix4f$$Type): Self
 "renderInto"(arg0: $PoseStack$$Type, arg1: $VertexConsumer$$Type): void
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float): Self
 "shiftUVScrolling"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float, arg2: float): Self
static "maxLight"(arg0: integer, arg1: integer): integer
 "shiftUVtoSheet"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type, arg1: float, arg2: float, arg3: integer): Self
 "shiftUV"<Self extends $SuperByteBuffer>(arg0: $SpriteShiftEntry$$Type): Self
 "reset"<Self extends $SuperByteBuffer>(): Self
 "isEmpty"(): boolean
 "delete"(): void
 "color"<Self extends $SuperByteBuffer>(arg0: $Color$$Type): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "color"<Self extends $SuperByteBuffer>(arg0: integer, arg1: integer, arg2: integer, arg3: integer): Self
 "rotate"<Self extends $SuperByteBuffer>(arg0: $Direction$Axis$$Type, arg1: float): Self
 "overlay"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "light"<Self extends $SuperByteBuffer>(arg0: integer): Self
 "disableDiffuse"<Self extends $SuperByteBuffer>(): Self
static "of"(stack: $PoseStack$$Type): $PoseTransformStack
 "pushPose"(): $SuperByteBuffer
 "popPose"(): $SuperByteBuffer
 "mulNormal"(arg0: $Matrix3fc$$Type): $SuperByteBuffer
 "transform"(pose: $PoseStack$Pose$$Type): $SuperByteBuffer
 "transform"(stack: $PoseStack$$Type): $SuperByteBuffer
 "transform"(pose: $Matrix4fc$$Type, normal: $Matrix3fc$$Type): $SuperByteBuffer
 "mulPose"(arg0: $Matrix4fc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateCentered"(q: $Quaternionfc$$Type): $SuperByteBuffer
 "rotateCentered"(radians: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateCenteredDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateXCentered"(radians: float): $SuperByteBuffer
 "rotateYCentered"(radians: float): $SuperByteBuffer
 "rotateZCentered"(radians: float): $SuperByteBuffer
 "rotateXCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateYCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateZCenteredDegrees"(degrees: float): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$$Type, vec: $Vector3fc$$Type): $SuperByteBuffer
 "rotateAround"(quaternion: $Quaternionfc$$Type, x: float, y: float, z: float): $SuperByteBuffer
 "uncenter"(): $SuperByteBuffer
 "translateY"(y: float): $SuperByteBuffer
 "translateZ"(z: float): $SuperByteBuffer
 "nudge"(seed: integer): $SuperByteBuffer
 "translateBack"(vec: $Vec3i$$Type): $SuperByteBuffer
 "translateBack"(v: float): $SuperByteBuffer
 "translateBack"(x: double, y: double, z: double): $SuperByteBuffer
 "translateBack"(x: float, y: float, z: float): $SuperByteBuffer
 "translateBack"(vec: $Vector3ic$$Type): $SuperByteBuffer
 "translateBack"(vec: $Vec3$$Type): $SuperByteBuffer
 "translateBack"(vec: $Vector3fc$$Type): $SuperByteBuffer
 "translateX"(x: float): $SuperByteBuffer
 "center"(): $SuperByteBuffer
 "translate"(v: float): $SuperByteBuffer
 "translate"(x: double, y: double, z: double): $SuperByteBuffer
 "translate"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "translate"(vec: $Vector3fc$$Type): $SuperByteBuffer
 "translate"(vec: $Vector3ic$$Type): $SuperByteBuffer
 "translate"(vec: $Vec3i$$Type): $SuperByteBuffer
 "translate"(vec: $Vec3$$Type): $SuperByteBuffer
 "rotateYDegrees"(degrees: float): $SuperByteBuffer
 "rotateXDegrees"(degrees: float): $SuperByteBuffer
 "rotateToFace"(facing: $Direction$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotateDegrees"(degrees: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotateZDegrees"(degrees: float): $SuperByteBuffer
 "self"(): $SuperByteBuffer
 "rotate"(radians: float, axis: $Vector3fc$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Axis$$Type): $SuperByteBuffer
 "rotate"(radians: float, axisX: float, axisY: float, axisZ: float): $SuperByteBuffer
 "rotate"(axisAngle: $AxisAngle4f$$Type): $SuperByteBuffer
 "rotate"(arg0: $Quaternionfc$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$Axis$$Type): $SuperByteBuffer
 "rotate"(radians: float, axis: $Direction$$Type): $SuperByteBuffer
 "rotateX"(radians: float): $SuperByteBuffer
 "rotateY"(radians: float): $SuperByteBuffer
 "rotateZ"(radians: float): $SuperByteBuffer
 "rotateTo"(from: $Vector3fc$$Type, to: $Vector3fc$$Type): $SuperByteBuffer
 "rotateTo"(from: $Direction$$Type, to: $Direction$$Type): $SuperByteBuffer
 "rotateTo"(fromX: float, fromY: float, fromZ: float, toX: float, toY: float, toZ: float): $SuperByteBuffer
 "scaleX"(factor: float): $SuperByteBuffer
 "scaleY"(factor: float): $SuperByteBuffer
 "scaleZ"(factor: float): $SuperByteBuffer
 "scale"(factors: $Vector3fc$$Type): $SuperByteBuffer
 "scale"(arg0: float, arg1: float, arg2: float): $SuperByteBuffer
 "scale"(factor: float): $SuperByteBuffer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SuperByteBuffer$$Type = ($SuperByteBuffer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SuperByteBuffer$$Original = $SuperByteBuffer;}
