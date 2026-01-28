declare module "xfacthd.framedblocks.api.render.debug.BlockDebugRenderer" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$MultiBufferSource$$Type} from "net.minecraft.client.renderer.MultiBufferSource"
import {$PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$FramedBlockEntity, $FramedBlockEntity$$Type} from "xfacthd.framedblocks.api.block.blockentity.FramedBlockEntity"

export interface $BlockDebugRenderer$$Interface<T extends $FramedBlockEntity> {
get "enabled"(): boolean
}

export class $BlockDebugRenderer<T extends $FramedBlockEntity> implements $BlockDebugRenderer$$Interface {
 "isEnabled"(): boolean
 "render"(arg0: T, arg1: $BlockHitResult$$Type, arg2: float, arg3: $PoseStack$$Type, arg4: $MultiBufferSource$$Type, arg5: integer, arg6: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockDebugRenderer$$Type<T> = ($BlockDebugRenderer<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockDebugRenderer$$Original<T> = $BlockDebugRenderer<(T)>;}
declare module "xfacthd.framedblocks.api.render.RegisterOutlineRenderersEvent" {
import {$OutlineRenderer$$Type} from "xfacthd.framedblocks.api.render.OutlineRenderer"
import {$IBlockType$$Type} from "xfacthd.framedblocks.api.type.IBlockType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $RegisterOutlineRenderersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $BiConsumer$$Type<($IBlockType), ($OutlineRenderer)>)

public "register"(arg0: $IBlockType$$Type, arg1: $OutlineRenderer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterOutlineRenderersEvent$$Type = ($RegisterOutlineRenderersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterOutlineRenderersEvent$$Original = $RegisterOutlineRenderersEvent;}
declare module "xfacthd.framedblocks.api.render.OutlineRenderer" {
import {$PoseStack, $PoseStack$$Type} from "com.mojang.blaze3d.vertex.PoseStack"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$VertexConsumer, $VertexConsumer$$Type} from "com.mojang.blaze3d.vertex.VertexConsumer"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Quaternionf} from "org.joml.Quaternionf"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $OutlineRenderer$$Interface {

(arg0: $BlockState, arg1: $PoseStack, arg2: $VertexConsumer): void
}

export class $OutlineRenderer implements $OutlineRenderer$$Interface {
static readonly "YN_DIR": ($Quaternionf)[]

 "getRotationDir"(arg0: $BlockState$$Type): $Direction
static "makeQuaternionArray"(): ($Quaternionf)[]
 "rotateMatrix"(arg0: $PoseStack$$Type, arg1: $BlockState$$Type): void
static "mirrorHorizontally"(arg0: $PoseStack$$Type, arg1: boolean): void
static "drawLine"(arg0: $VertexConsumer$$Type, arg1: $PoseStack$$Type, arg2: float, arg3: float, arg4: float, arg5: float, arg6: float, arg7: float): void
 "draw"(arg0: $BlockState$$Type, arg1: $PoseStack$$Type, arg2: $VertexConsumer$$Type): void
 "draw"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $PoseStack$$Type, arg4: $VertexConsumer$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $OutlineRenderer$$Type = ((arg0: $BlockState, arg1: $PoseStack, arg2: $VertexConsumer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $OutlineRenderer$$Original = $OutlineRenderer;}
declare module "xfacthd.framedblocks.api.render.debug.AttachDebugRenderersEvent" {
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$FramedBlockEntity, $FramedBlockEntity$$Type} from "xfacthd.framedblocks.api.block.blockentity.FramedBlockEntity"
import {$BlockDebugRenderer$$Type} from "xfacthd.framedblocks.api.render.debug.BlockDebugRenderer"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"

export class $AttachDebugRenderersEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $BiConsumer$$Type<($BlockEntityType<($FramedBlockEntity)>), ($BlockDebugRenderer<(never)>)>)

public "attach"<RT extends $FramedBlockEntity, BT extends $FramedBlockEntity>(arg0: $BlockEntityType$$Type<(BT)>, arg1: $BlockDebugRenderer$$Type<(RT)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AttachDebugRenderersEvent$$Type = ($AttachDebugRenderersEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AttachDebugRenderersEvent$$Original = $AttachDebugRenderersEvent;}
