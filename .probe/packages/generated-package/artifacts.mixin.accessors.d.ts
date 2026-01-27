declare module "artifacts.mixin.accessors.MobAccessor" {
import {$GoalSelector, $GoalSelector$$Type} from "net.minecraft.world.entity.ai.goal.GoalSelector"

export interface $MobAccessor$$Interface {

(): $GoalSelector$$Type
get "goalSelector"(): $GoalSelector
}

export class $MobAccessor implements $MobAccessor$$Interface {
 "getGoalSelector"(): $GoalSelector
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccessor$$Type = (() => $GoalSelector$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobAccessor$$Original = $MobAccessor;}
declare module "artifacts.mixin.accessors.EntityAccessor" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $EntityAccessor$$Interface {

(): $BlockPos$$Type
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "callGetBlockPosBelowThatAffectsMyMovement"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = (() => $BlockPos$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
declare module "artifacts.mixin.accessors.LivingEntityAccessor" {
import {$Player} from "net.minecraft.world.entity.player.Player"

export interface $LivingEntityAccessor$$Interface {
get "lastHurtByPlayerTime"(): integer
get "lastHurtByPlayer"(): $Player
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "getLastHurtByPlayerTime"(): integer
 "getLastHurtByPlayer"(): $Player
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LivingEntityAccessor$$Type = ($LivingEntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LivingEntityAccessor$$Original = $LivingEntityAccessor;}
