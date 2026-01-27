declare module "appeng.crafting.execution.ElapsedTimeTracker" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"

export class $ElapsedTimeTracker {
constructor()
constructor(arg0: $CompoundTag$$Type)

public "writeToNBT"(): $CompoundTag
public "getProgress"(): float
public "getElapsedTime"(): long
/**
 * 
 * @deprecated
 */
public "getRemainingItemCount"(): long
/**
 * 
 * @deprecated
 */
public "getStartItemCount"(): long
get "progress"(): float
get "elapsedTime"(): long
get "remainingItemCount"(): long
get "startItemCount"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ElapsedTimeTracker$$Type = ($ElapsedTimeTracker);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ElapsedTimeTracker$$Original = $ElapsedTimeTracker;}
declare module "appeng.crafting.execution.CraftingCpuLogic" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingService$$Type} from "appeng.me.service.CraftingService"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$ICraftingSubmitResult} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$ICraftingLink} from "appeng.api.networking.crafting.ICraftingLink"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$ListCraftingInventory} from "appeng.crafting.inv.ListCraftingInventory"
import {$ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$CraftingCPUCluster$$Type} from "appeng.me.cluster.implementations.CraftingCPUCluster"
import {$Set$$Type} from "java.util.Set"
import {$IGrid$$Type} from "appeng.api.networking.IGrid"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ElapsedTimeTracker} from "appeng.crafting.execution.ElapsedTimeTracker"
import {$IEnergyService$$Type} from "appeng.api.networking.energy.IEnergyService"
import {$GenericStack} from "appeng.api.stacks.GenericStack"
import {$ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export class $CraftingCpuLogic {
constructor(arg0: $CraftingCPUCluster$$Type)

public "storeItems"(): void
public "executeCrafting"(arg0: integer, arg1: $CraftingService$$Type, arg2: $IEnergyService$$Type, arg3: $Level$$Type): integer
public "trySubmitJob"(arg0: $IGrid$$Type, arg1: $ICraftingPlan$$Type, arg2: $IActionSource$$Type, arg3: $ICraftingRequester$$Type): $ICraftingSubmitResult
public "hasJob"(): boolean
public "getFinalJobOutput"(): $GenericStack
public "getElapsedTimeTracker"(): $ElapsedTimeTracker
public "getStored"(arg0: $AEKey$$Type): long
public "readFromNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "writeToNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public "tickCraftingLogic"(arg0: $IEnergyService$$Type, arg1: $CraftingService$$Type): void
public "getLastModifiedOnTick"(): long
public "getAllWaitingFor"(arg0: $Set$$Type<($AEKey$$Type)>): void
public "getLastLink"(): $ICraftingLink
public "getWaitingFor"(arg0: $AEKey$$Type): long
public "isJobSuspended"(): boolean
public "setJobSuspended"(arg0: boolean): void
public "isCantStoreItems"(): boolean
public "insert"(arg0: $AEKey$$Type, arg1: long, arg2: $Actionable$$Type): long
public "cancel"(): void
public "removeListener"(arg0: $Consumer$$Type<($AEKey)>): void
public "addListener"(arg0: $Consumer$$Type<($AEKey)>): void
public "getInventory"(): $ListCraftingInventory
public "getAllItems"(arg0: $KeyCounter$$Type): void
public "getPendingOutputs"(arg0: $AEKey$$Type): long
get "finalJobOutput"(): $GenericStack
get "elapsedTimeTracker"(): $ElapsedTimeTracker
get "lastModifiedOnTick"(): long
get "lastLink"(): $ICraftingLink
get "jobSuspended"(): boolean
set "jobSuspended"(value: boolean)
get "cantStoreItems"(): boolean
get "inventory"(): $ListCraftingInventory
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingCpuLogic$$Type = ($CraftingCpuLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingCpuLogic$$Original = $CraftingCpuLogic;}
