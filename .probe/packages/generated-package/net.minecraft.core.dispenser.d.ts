declare module "net.minecraft.core.dispenser.DispenseItemBehavior" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BlockSource, $BlockSource$$Type} from "net.minecraft.core.dispenser.BlockSource"
import {$Logger} from "org.slf4j.Logger"

export interface $DispenseItemBehavior$$Interface {

(arg0: $BlockSource, arg1: $ItemStack): $ItemStack$$Type
}

export class $DispenseItemBehavior implements $DispenseItemBehavior$$Interface {
static readonly "NOOP": $DispenseItemBehavior
static readonly "LOGGER": $Logger

 "dispense"(arg0: $BlockSource$$Type, arg1: $ItemStack$$Type): $ItemStack
static "bootStrap"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenseItemBehavior$$Type = ((arg0: $BlockSource, arg1: $ItemStack) => $ItemStack$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenseItemBehavior$$Original = $DispenseItemBehavior;}
declare module "net.minecraft.core.dispenser.BlockSource" {
import {$IMovingBlockSource$$Interface} from "net.mehvahdjukaar.supplementaries.common.misc.IMovingBlockSource"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$DispenserBlockEntity, $DispenserBlockEntity$$Type} from "net.minecraft.world.level.block.entity.DispenserBlockEntity"
import {$ServerLevel, $ServerLevel$$Type} from "net.minecraft.server.level.ServerLevel"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$Record} from "java.lang.Record"

export class $BlockSource extends $Record implements $IMovingBlockSource$$Interface {
constructor(arg0: $ServerLevel$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $DispenserBlockEntity$$Type)

public "supp$setEntity"(entity: $Entity$$Type): void
public "supp$getEntity"(): $Entity
public "level"(): $ServerLevel
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "state"(): $BlockState
public "pos"(): $BlockPos
public "center"(): $Vec3
public "blockEntity"(): $DispenserBlockEntity
public static "create"(level: $ServerLevel$$Type, entity: $Entity$$Type, be: $DispenserBlockEntity$$Type): $BlockSource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockSource$$Type = ({"blockEntity"?: $DispenserBlockEntity$$Type, "state"?: $BlockState$$Type, "level"?: $ServerLevel$$Type, "pos"?: $BlockPos$$Type}) | ([blockEntity?: $DispenserBlockEntity$$Type, state?: $BlockState$$Type, level?: $ServerLevel$$Type, pos?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockSource$$Original = $BlockSource;}
