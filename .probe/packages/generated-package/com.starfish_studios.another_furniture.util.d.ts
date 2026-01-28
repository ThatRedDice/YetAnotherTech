declare module "com.starfish_studios.another_furniture.util.block.HammerableBlock" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SoundEvent} from "net.minecraft.sounds.SoundEvent"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Property$$Type} from "net.minecraft.world.level.block.state.properties.Property"

export interface $HammerableBlock$$Interface {
get "useSound"(): $SoundEvent
}

export class $HammerableBlock implements $HammerableBlock$$Interface {
 "tryHammerBlock"(property: $Property$$Type<(never)>, stack: $ItemStack$$Type, state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
 "updateAfterCycle"(state: $BlockState$$Type, level: $LevelAccessor$$Type, pos: $BlockPos$$Type): $BlockState
 "getUseSound"(): $SoundEvent
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HammerableBlock$$Type = ($HammerableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HammerableBlock$$Original = $HammerableBlock;}
declare module "com.starfish_studios.another_furniture.util.block.TuckableBlock" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BooleanProperty} from "net.minecraft.world.level.block.state.properties.BooleanProperty"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $TuckableBlock$$Interface {
}

export class $TuckableBlock implements $TuckableBlock$$Interface {
static readonly "TUCKED": $BooleanProperty

static "canTuckUnderBlockInfront"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): boolean
static "tryTuck"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type, player: $Player$$Type): boolean
static "isBlockedFromTucking"(state: $BlockState$$Type, level: $Level$$Type, pos: $BlockPos$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TuckableBlock$$Type = ($TuckableBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TuckableBlock$$Original = $TuckableBlock;}
