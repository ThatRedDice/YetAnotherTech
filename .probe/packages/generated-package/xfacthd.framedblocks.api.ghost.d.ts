declare module "xfacthd.framedblocks.api.ghost.GhostRenderBehaviour" {
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$CamoList, $CamoList$$Type} from "xfacthd.framedblocks.api.util.CamoList"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Vector3fc} from "org.joml.Vector3fc"
import {$ModelData, $ModelData$$Type} from "net.neoforged.neoforge.client.model.data.ModelData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $GhostRenderBehaviour$$Interface {
}

export class $GhostRenderBehaviour implements $GhostRenderBehaviour$$Interface {
static readonly "OFFSET_ZERO": $Vector3fc

 "getProxiedStack"(arg0: $ItemStack$$Type): $ItemStack
 "mayRender"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
 "getPassCount"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): integer
 "getRenderPos"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type, arg3: $BlockPlaceContext$$Type, arg4: $BlockState$$Type, arg5: $BlockPos$$Type, arg6: integer): $BlockPos
 "canRenderAt"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type, arg3: $BlockPlaceContext$$Type, arg4: $BlockState$$Type, arg5: $BlockState$$Type, arg6: $BlockPos$$Type): boolean
 "postProcessCamo"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockPlaceContext$$Type, arg3: $BlockState$$Type, arg4: integer, arg5: $CamoList$$Type): $CamoList
 "buildModelData"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockPlaceContext$$Type, arg3: $BlockState$$Type, arg4: integer, arg5: $CamoList$$Type): $ModelData
 "appendModelData"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockPlaceContext$$Type, arg3: $BlockState$$Type, arg4: integer, arg5: $ModelData$$Type): $ModelData
 "getRenderState"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockHitResult$$Type, arg3: $BlockPlaceContext$$Type, arg4: $BlockState$$Type, arg5: integer): $BlockState
 "readCamo"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: integer): $CamoList
 "getRenderOffset"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $BlockPlaceContext$$Type, arg3: $BlockState$$Type, arg4: integer, arg5: $ModelData$$Type): $Vector3fc
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GhostRenderBehaviour$$Type = ($GhostRenderBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GhostRenderBehaviour$$Original = $GhostRenderBehaviour;}
declare module "xfacthd.framedblocks.api.ghost.RegisterGhostRenderBehavioursEvent" {
import {$List$$Type} from "java.util.List"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$GhostRenderBehaviour$$Type} from "xfacthd.framedblocks.api.ghost.GhostRenderBehaviour"
import {$IModBusEvent$$Interface} from "net.neoforged.fml.event.IModBusEvent"
import {$Holder$$Type} from "net.minecraft.core.Holder"

export class $RegisterGhostRenderBehavioursEvent extends $Event implements $IModBusEvent$$Interface {
constructor(arg0: $BiConsumer$$Type<($GhostRenderBehaviour), (($Block)[])>, arg1: $BiConsumer$$Type<($GhostRenderBehaviour), (($Item)[])>)

public "registerBlock"(arg0: $GhostRenderBehaviour$$Type, arg1: $Holder$$Type<($Block)>): void
public "registerItem"(arg0: $GhostRenderBehaviour$$Type, arg1: $Holder$$Type<($Item)>): void
public "registerBlocks"(arg0: $GhostRenderBehaviour$$Type, ...arg1: ($Block$$Type)[]): void
public "registerBlocks"(arg0: $GhostRenderBehaviour$$Type, arg1: $List$$Type<($Holder$$Type<($Block$$Type)>)>): void
public "registerItems"(arg0: $GhostRenderBehaviour$$Type, arg1: $List$$Type<($Holder$$Type<($Item$$Type)>)>): void
public "registerItems"(arg0: $GhostRenderBehaviour$$Type, ...arg1: ($Item$$Type)[]): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegisterGhostRenderBehavioursEvent$$Type = ($RegisterGhostRenderBehavioursEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegisterGhostRenderBehavioursEvent$$Original = $RegisterGhostRenderBehavioursEvent;}
