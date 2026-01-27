declare module "owmii.powah.lib.client.handler.IHudItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Vec3, $Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IHudItem$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $Player, arg3: $InteractionHand, arg4: $Direction, arg5: $Vec3): boolean
}

export class $IHudItem implements $IHudItem$$Interface {
 "renderHud"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHudItem$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Player, arg3: $InteractionHand, arg4: $Direction, arg5: $Vec3) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHudItem$$Original = $IHudItem;}
declare module "owmii.powah.lib.client.handler.IHud" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$GuiGraphics, $GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IHud$$Interface {

(arg0: $GuiGraphics, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $BlockHitResult, arg6: $BlockEntity): boolean
}

export class $IHud implements $IHud$$Interface {
 "renderHud"(arg0: $GuiGraphics$$Type, arg1: $BlockState$$Type, arg2: $Level$$Type, arg3: $BlockPos$$Type, arg4: $Player$$Type, arg5: $BlockHitResult$$Type, arg6: $BlockEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHud$$Type = ((arg0: $GuiGraphics, arg1: $BlockState, arg2: $Level, arg3: $BlockPos, arg4: $Player, arg5: $BlockHitResult, arg6: $BlockEntity) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHud$$Original = $IHud;}
