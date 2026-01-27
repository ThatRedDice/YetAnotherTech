declare module "me.desht.pneumaticcraft.mixin.accessors.EntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $EntityAccess$$Interface {
get "boardingCooldown"(): integer
set "boardingCooldown"(value: integer)
}

export class $EntityAccess implements $EntityAccess$$Interface {
 "getBoardingCooldown"(): integer
 "setBoardingCooldown"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityAccess$$Type = ($EntityAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityAccess$$Original = $EntityAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.ItemEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ItemEntityAccess$$Interface {
set "age"(value: integer)
get "age"(): integer
}

export class $ItemEntityAccess implements $ItemEntityAccess$$Interface {
 "setAge"(arg0: integer): void
 "getAge"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntityAccess$$Type = ($ItemEntityAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntityAccess$$Original = $ItemEntityAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.BaseContainerBlockEntityAccess" {
import {$LockCode, $LockCode$$Type} from "net.minecraft.world.LockCode"

export interface $BaseContainerBlockEntityAccess$$Interface {

(): $LockCode$$Type
get "lockKey"(): $LockCode
}

export class $BaseContainerBlockEntityAccess implements $BaseContainerBlockEntityAccess$$Interface {
 "getLockKey"(): $LockCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseContainerBlockEntityAccess$$Type = (() => $LockCode$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseContainerBlockEntityAccess$$Original = $BaseContainerBlockEntityAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.BaseSpawnerAccess" {
import {$SpawnData} from "net.minecraft.world.level.SpawnData"

export interface $BaseSpawnerAccess$$Interface {
get "spin"(): double
get "requiredPlayerRange"(): integer
get "nextSpawnData"(): $SpawnData
set "requiredPlayerRange"(value: integer)
get "spawnDelay"(): integer
set "spawnDelay"(value: integer)
set "OSpin"(value: double)
}

export class $BaseSpawnerAccess implements $BaseSpawnerAccess$$Interface {
 "getSpin"(): double
 "getRequiredPlayerRange"(): integer
 "getNextSpawnData"(): $SpawnData
 "setRequiredPlayerRange"(arg0: integer): void
 "getSpawnDelay"(): integer
 "setSpawnDelay"(arg0: integer): void
 "setOSpin"(arg0: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSpawnerAccess$$Type = ($BaseSpawnerAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseSpawnerAccess$$Original = $BaseSpawnerAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.ServerPlayerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerAccess$$Interface {

(arg0: boolean): void
set "isChangingDimension"(value: boolean)
}

export class $ServerPlayerAccess implements $ServerPlayerAccess$$Interface {
 "setIsChangingDimension"(arg0: boolean): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerAccess$$Type = ((arg0: boolean) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerAccess$$Original = $ServerPlayerAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.BlockEntityTypeAccess" {
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Set, $Set$$Type} from "java.util.Set"

export interface $BlockEntityTypeAccess$$Interface {

(): $Set$$Type<($Block$$Type)>
get "validBlocks"(): $Set<($Block)>
}

export class $BlockEntityTypeAccess implements $BlockEntityTypeAccess$$Interface {
 "getValidBlocks"(): $Set<($Block)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityTypeAccess$$Type = (() => $Set$$Type<($Block$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityTypeAccess$$Original = $BlockEntityTypeAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.ShulkerAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ShulkerAccess$$Interface {

(arg0: integer): void
}

export class $ShulkerAccess implements $ShulkerAccess$$Interface {
 "callSetRawPeekAmount"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerAccess$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerAccess$$Original = $ShulkerAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.StructureTemplatePoolAccess" {
import {$Pair, $Pair$$Type} from "com.mojang.datafixers.util.Pair"
import {$List, $List$$Type} from "java.util.List"
import {$StructurePoolElement, $StructurePoolElement$$Type} from "net.minecraft.world.level.levelgen.structure.pools.StructurePoolElement"
import {$ObjectArrayList} from "it.unimi.dsi.fastutil.objects.ObjectArrayList"

export interface $StructureTemplatePoolAccess$$Interface {
get "templates"(): $ObjectArrayList<($StructurePoolElement)>
get "rawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
set "rawTemplates"(value: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>)
}

export class $StructureTemplatePoolAccess implements $StructureTemplatePoolAccess$$Interface {
 "getTemplates"(): $ObjectArrayList<($StructurePoolElement)>
 "getRawTemplates"(): $List<($Pair<($StructurePoolElement), (integer)>)>
 "setRawTemplates"(arg0: $List$$Type<($Pair$$Type<($StructurePoolElement$$Type), (integer)>)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StructureTemplatePoolAccess$$Type = ($StructureTemplatePoolAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StructureTemplatePoolAccess$$Original = $StructureTemplatePoolAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.BoatItemAccess" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$HitResult, $HitResult$$Type} from "net.minecraft.world.phys.HitResult"
import {$Boat, $Boat$$Type} from "net.minecraft.world.entity.vehicle.Boat"

export interface $BoatItemAccess$$Interface {

(arg0: $Level, arg1: $HitResult, arg2: $ItemStack, arg3: $Player): $Boat$$Type
}

export class $BoatItemAccess implements $BoatItemAccess$$Interface {
 "invokeGetBoat"(arg0: $Level$$Type, arg1: $HitResult$$Type, arg2: $ItemStack$$Type, arg3: $Player$$Type): $Boat
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoatItemAccess$$Type = ((arg0: $Level, arg1: $HitResult, arg2: $ItemStack, arg3: $Player) => $Boat$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoatItemAccess$$Original = $BoatItemAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.WitchAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $WitchAccess$$Interface {

(arg0: integer): void
set "usingTime"(value: integer)
}

export class $WitchAccess implements $WitchAccess$$Interface {
 "setUsingTime"(arg0: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WitchAccess$$Type = ((arg0: integer) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WitchAccess$$Original = $WitchAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.ShapedRecipeAccess" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$ShapedRecipePattern} from "net.minecraft.world.item.crafting.ShapedRecipePattern"

export interface $ShapedRecipeAccess$$Interface {
get "result"(): $ItemStack
get "pattern"(): $ShapedRecipePattern
}

export class $ShapedRecipeAccess implements $ShapedRecipeAccess$$Interface {
 "getResult"(): $ItemStack
 "getPattern"(): $ShapedRecipePattern
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShapedRecipeAccess$$Type = ($ShapedRecipeAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShapedRecipeAccess$$Original = $ShapedRecipeAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.TooltipAccess" {
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $TooltipAccess$$Interface {

(): $Component$$Type
get "message"(): $Component
}

export class $TooltipAccess implements $TooltipAccess$$Interface {
 "getMessage"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipAccess$$Type = (() => $Component$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipAccess$$Original = $TooltipAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.ServerPlayerGameModeAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ServerPlayerGameModeAccess$$Interface {
get "destroyingBlock"(): boolean
}

export class $ServerPlayerGameModeAccess implements $ServerPlayerGameModeAccess$$Interface {
 "hasDelayedDestroy"(): boolean
 "isDestroyingBlock"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ServerPlayerGameModeAccess$$Type = ($ServerPlayerGameModeAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ServerPlayerGameModeAccess$$Original = $ServerPlayerGameModeAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.AbstractFurnaceBlockEntityAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $AbstractFurnaceBlockEntityAccess$$Interface {
get "litTime"(): integer
set "litTime"(value: integer)
set "litDuration"(value: integer)
get "cookingProgress"(): integer
}

export class $AbstractFurnaceBlockEntityAccess implements $AbstractFurnaceBlockEntityAccess$$Interface {
 "getLitTime"(): integer
 "setLitTime"(arg0: integer): void
 "setLitDuration"(arg0: integer): void
 "getCookingProgress"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceBlockEntityAccess$$Type = ($AbstractFurnaceBlockEntityAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFurnaceBlockEntityAccess$$Original = $AbstractFurnaceBlockEntityAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.MinecartItemAccess" {
import {$AbstractMinecart$Type, $AbstractMinecart$Type$$Type} from "net.minecraft.world.entity.vehicle.AbstractMinecart$Type"

export interface $MinecartItemAccess$$Interface {

(): $AbstractMinecart$Type$$Type
get "type"(): $AbstractMinecart$Type
}

export class $MinecartItemAccess implements $MinecartItemAccess$$Interface {
 "getType"(): $AbstractMinecart$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MinecartItemAccess$$Type = (() => $AbstractMinecart$Type$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MinecartItemAccess$$Original = $MinecartItemAccess;}
declare module "me.desht.pneumaticcraft.mixin.accessors.MobAccess" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $MobAccess$$Interface {
get "armorDropChances"(): (float)[]
get "handDropChances"(): (float)[]
}

export class $MobAccess implements $MobAccess$$Interface {
 "getArmorDropChances"(): (float)[]
 "getHandDropChances"(): (float)[]
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobAccess$$Type = ($MobAccess);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobAccess$$Original = $MobAccess;}
