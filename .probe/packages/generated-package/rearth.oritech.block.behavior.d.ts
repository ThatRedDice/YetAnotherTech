declare module "rearth.oritech.block.behavior.LaserArmBlockBehavior" {
import {$LaserArmBlockEntity$$Type} from "rearth.oritech.block.entity.interaction.LaserArmBlockEntity"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LaserArmBlockBehavior {
constructor()

public static "registerDefaults"(): void
public "fireAtBlock"(arg0: $Level$$Type, arg1: $LaserArmBlockEntity$$Type, arg2: $Block$$Type, arg3: $BlockPos$$Type, arg4: $BlockState$$Type, arg5: $BlockEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserArmBlockBehavior$$Type = ($LaserArmBlockBehavior);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserArmBlockBehavior$$Original = $LaserArmBlockBehavior;}
declare module "rearth.oritech.block.behavior.LaserArmEntityBehavior" {
import {$LaserArmBlockEntity$$Type} from "rearth.oritech.block.entity.interaction.LaserArmBlockEntity"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"

export class $LaserArmEntityBehavior {
constructor()

public static "registerDefaults"(): void
public "fireAtEntity"(arg0: $Level$$Type, arg1: $LaserArmBlockEntity$$Type, arg2: $LivingEntity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserArmEntityBehavior$$Type = ($LaserArmEntityBehavior);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserArmEntityBehavior$$Original = $LaserArmEntityBehavior;}
