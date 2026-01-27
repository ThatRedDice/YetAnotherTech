declare module "net.mehvahdjukaar.supplementaries.mixins.PlayerAccessor" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export interface $PlayerAccessor$$Interface {
}

export class $PlayerAccessor implements $PlayerAccessor$$Interface {
 "invokeSetShoulderEntityRight"(arg0: $CompoundTag$$Type): void
 "invokeSetShoulderEntityLeft"(arg0: $CompoundTag$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerAccessor$$Type = ($PlayerAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerAccessor$$Original = $PlayerAccessor;}
declare module "net.mehvahdjukaar.supplementaries.mixins.AgeableListAccessor" {
import {$Iterable, $Iterable$$Type} from "java.lang.Iterable"
import {$ModelPart, $ModelPart$$Type} from "net.minecraft.client.model.geom.ModelPart"

export interface $AgeableListAccessor$$Interface {

(): $Iterable$$Type<($ModelPart$$Type)>
}

export class $AgeableListAccessor implements $AgeableListAccessor$$Interface {
 "invokeBodyParts"(): $Iterable<($ModelPart)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AgeableListAccessor$$Type = (() => $Iterable$$Type<($ModelPart$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AgeableListAccessor$$Original = $AgeableListAccessor;}
declare module "net.mehvahdjukaar.supplementaries.mixins.neoforge.FireBlockAccessor" {
import {$RandomSource, $RandomSource$$Type} from "net.minecraft.util.RandomSource"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $FireBlockAccessor$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: integer, arg3: $RandomSource, arg4: integer, arg5: $Direction): void
}

export class $FireBlockAccessor implements $FireBlockAccessor$$Interface {
 "invokeTryCatchFire"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: integer, arg3: $RandomSource$$Type, arg4: integer, arg5: $Direction$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FireBlockAccessor$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: integer, arg3: $RandomSource, arg4: integer, arg5: $Direction) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FireBlockAccessor$$Original = $FireBlockAccessor;}
declare module "net.mehvahdjukaar.supplementaries.mixins.neoforge.ItemStackAccessor" {
import {$InteractionResult, $InteractionResult$$Type} from "net.minecraft.world.InteractionResult"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$UseOnContext, $UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"

export interface $ItemStackAccessor$$Interface {

(arg0: $UseOnContext, arg1: $Function<($UseOnContext), ($InteractionResult$$Type)>): $InteractionResult$$Type
}

export class $ItemStackAccessor implements $ItemStackAccessor$$Interface {
 "invokeOnItemUse"(arg0: $UseOnContext$$Type, arg1: $Function$$Type<($UseOnContext), ($InteractionResult$$Type)>): $InteractionResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStackAccessor$$Type = ((arg0: $UseOnContext, arg1: $Function<($UseOnContext), ($InteractionResult)>) => $InteractionResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStackAccessor$$Original = $ItemStackAccessor;}
declare module "net.mehvahdjukaar.supplementaries.mixins.LivingEntityAccessor" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $LivingEntityAccessor$$Interface {
set "useItem"(value: $ItemStack$$Type)
}

export class $LivingEntityAccessor implements $LivingEntityAccessor$$Interface {
 "invokeShouldDropLoot"(): boolean
 "setUseItem"(arg0: $ItemStack$$Type): void
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
declare module "net.mehvahdjukaar.supplementaries.mixins.EntityAccessor" {
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $EntityAccessor$$Interface {
}

export class $EntityAccessor implements $EntityAccessor$$Interface {
 "invokeCanAddPassenger"(arg0: $Entity$$Type): boolean
 "invokeCanRide"(arg0: $Entity$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccessor$$Type = ($EntityAccessor);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccessor$$Original = $EntityAccessor;}
