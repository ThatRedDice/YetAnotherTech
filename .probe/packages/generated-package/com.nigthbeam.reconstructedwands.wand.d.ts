declare module "com.nigthbeam.reconstructedwands.wand.WandJob" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult, $BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$WandOptions} from "com.nigthbeam.reconstructedwands.basics.option.WandOptions"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemWand} from "com.nigthbeam.reconstructedwands.items.wand.ItemWand"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Set} from "java.util.Set"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export class $WandJob {
readonly "rayTraceResult": $BlockHitResult
readonly "wandItem": $ItemWand
readonly "world": $Level
readonly "wand": $ItemStack
readonly "options": $WandOptions
readonly "player": $Player

constructor(arg0: $Player$$Type, arg1: $Level$$Type, arg2: $BlockHitResult$$Type, arg3: $ItemStack$$Type)

public "getBlockPositions"(): $Set<($BlockPos)>
public "doIt"(): boolean
public "getSnapshots"(): void
public "blockCount"(): integer
get "blockPositions"(): $Set<($BlockPos)>
get "snapshots"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WandJob$$Type = ($WandJob);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WandJob$$Original = $WandJob;}
declare module "com.nigthbeam.reconstructedwands.wand.undo.ISnapshot" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export interface $ISnapshot$$Interface {
get "requiredItems"(): $ItemStack
get "blockState"(): $BlockState
get "pos"(): $BlockPos
}

export class $ISnapshot implements $ISnapshot$$Interface {
 "restore"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
 "getRequiredItems"(): $ItemStack
 "canRestore"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
 "forceRestore"(arg0: $Level$$Type): void
 "execute"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockHitResult$$Type): boolean
 "getBlockState"(): $BlockState
 "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISnapshot$$Type = ($ISnapshot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISnapshot$$Original = $ISnapshot;}
declare module "com.nigthbeam.reconstructedwands.wand.undo.PlaceSnapshot" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$BlockHitResult$$Type} from "net.minecraft.world.phys.BlockHitResult"
import {$WandOptions$$Type} from "com.nigthbeam.reconstructedwands.basics.option.WandOptions"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockItem$$Type} from "net.minecraft.world.item.BlockItem"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ISnapshot$$Interface} from "com.nigthbeam.reconstructedwands.wand.undo.ISnapshot"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $PlaceSnapshot implements $ISnapshot$$Interface {
constructor(arg0: $BlockState$$Type, arg1: $BlockPos$$Type, arg2: $BlockItem$$Type, arg3: $BlockState$$Type, arg4: boolean)

public "restore"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
public "getRequiredItems"(): $ItemStack
public "canRestore"(arg0: $Level$$Type, arg1: $Player$$Type): boolean
public "forceRestore"(arg0: $Level$$Type): void
public static "get"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockHitResult$$Type, arg3: $BlockPos$$Type, arg4: $BlockItem$$Type, arg5: $BlockState$$Type, arg6: $WandOptions$$Type): $PlaceSnapshot
public "execute"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockHitResult$$Type): boolean
public "getBlockState"(): $BlockState
public "getPos"(): $BlockPos
get "requiredItems"(): $ItemStack
get "blockState"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlaceSnapshot$$Type = ($PlaceSnapshot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlaceSnapshot$$Original = $PlaceSnapshot;}
