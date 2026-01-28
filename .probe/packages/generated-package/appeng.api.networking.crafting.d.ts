declare module "appeng.api.networking.crafting.ICraftingProvider" {
import {$KeyCounter$$Type} from "appeng.api.stacks.KeyCounter"
import {$IManagedGridNode$$Type} from "appeng.api.networking.IManagedGridNode"
import {$IPatternDetails, $IPatternDetails$$Type} from "appeng.api.crafting.IPatternDetails"
import {$List} from "java.util.List"
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"
import {$Set} from "java.util.Set"
import {$AEKey} from "appeng.api.stacks.AEKey"

export interface $ICraftingProvider$$Interface extends $IGridNodeService$$Interface {
get "patternPriority"(): integer
get "emitableItems"(): $Set<($AEKey)>
get "availablePatterns"(): $List<($IPatternDetails)>
get "busy"(): boolean
}

export class $ICraftingProvider implements $ICraftingProvider$$Interface {
 "getPatternPriority"(): integer
 "pushPattern"(arg0: $IPatternDetails$$Type, arg1: ($KeyCounter$$Type)[]): boolean
 "getEmitableItems"(): $Set<($AEKey)>
 "getAvailablePatterns"(): $List<($IPatternDetails)>
 "isBusy"(): boolean
static "requestUpdate"(arg0: $IManagedGridNode$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingProvider$$Type = ($ICraftingProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingProvider$$Original = $ICraftingProvider;}
declare module "appeng.api.networking.crafting.ICraftingSimulationRequester" {
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$IActionSource, $IActionSource$$Type} from "appeng.api.networking.security.IActionSource"

export interface $ICraftingSimulationRequester$$Interface {

(): $IActionSource$$Type
get "actionSource"(): $IActionSource
get "gridNode"(): $IGridNode
}

export class $ICraftingSimulationRequester implements $ICraftingSimulationRequester$$Interface {
 "getActionSource"(): $IActionSource
 "getGridNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingSimulationRequester$$Type = (() => $IActionSource$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingSimulationRequester$$Original = $ICraftingSimulationRequester;}
declare module "appeng.api.networking.crafting.ICraftingPlan" {
import {$KeyCounter} from "appeng.api.stacks.KeyCounter"
import {$Map} from "java.util.Map"
import {$IPatternDetails} from "appeng.api.crafting.IPatternDetails"
import {$GenericStack} from "appeng.api.stacks.GenericStack"

export interface $ICraftingPlan$$Interface {
}

export class $ICraftingPlan implements $ICraftingPlan$$Interface {
 "simulation"(): boolean
 "finalOutput"(): $GenericStack
 "multiplePaths"(): boolean
 "usedItems"(): $KeyCounter
 "emittedItems"(): $KeyCounter
 "missingItems"(): $KeyCounter
 "patternTimes"(): $Map<($IPatternDetails), (long)>
 "bytes"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingPlan$$Type = ($ICraftingPlan);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingPlan$$Original = $ICraftingPlan;}
declare module "appeng.api.networking.crafting.CalculationStrategy" {
import {$Enum} from "java.lang.Enum"

export class $CalculationStrategy extends $Enum<($CalculationStrategy)> {
static readonly "CRAFT_LESS": $CalculationStrategy
static readonly "REPORT_MISSING_ITEMS": $CalculationStrategy

public static "values"(): ($CalculationStrategy)[]
public static "valueOf"(arg0: StringJS): $CalculationStrategy
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CalculationStrategy$$Type = (("report_missing_items") | ("craft_less"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CalculationStrategy$$Original = $CalculationStrategy;}
declare module "appeng.api.networking.crafting.ICraftingRequester" {
import {$IGridNode} from "appeng.api.networking.IGridNode"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$IActionHost$$Interface} from "appeng.api.networking.security.IActionHost"
import {$IGridNodeService$$Interface} from "appeng.api.networking.IGridNodeService"
import {$Actionable$$Type} from "appeng.api.config.Actionable"
import {$AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingLink, $ICraftingLink$$Type} from "appeng.api.networking.crafting.ICraftingLink"

export interface $ICraftingRequester$$Interface extends $IActionHost$$Interface, $IGridNodeService$$Interface {
get "requestedJobs"(): $ImmutableSet<($ICraftingLink)>
get "actionableNode"(): $IGridNode
}

export class $ICraftingRequester implements $ICraftingRequester$$Interface {
 "insertCraftedItems"(arg0: $ICraftingLink$$Type, arg1: $AEKey$$Type, arg2: long, arg3: $Actionable$$Type): long
 "jobStateChange"(arg0: $ICraftingLink$$Type): void
 "getRequestedJobs"(): $ImmutableSet<($ICraftingLink)>
 "getActionableNode"(): $IGridNode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingRequester$$Type = ($ICraftingRequester);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingRequester$$Original = $ICraftingRequester;}
declare module "appeng.api.networking.crafting.CraftingSubmitErrorCode" {
import {$Enum} from "java.lang.Enum"

export class $CraftingSubmitErrorCode extends $Enum<($CraftingSubmitErrorCode)> {
static readonly "INCOMPLETE_PLAN": $CraftingSubmitErrorCode
static readonly "MISSING_INGREDIENT": $CraftingSubmitErrorCode
static readonly "NO_CPU_FOUND": $CraftingSubmitErrorCode
static readonly "CPU_BUSY": $CraftingSubmitErrorCode
static readonly "CPU_OFFLINE": $CraftingSubmitErrorCode
static readonly "CPU_TOO_SMALL": $CraftingSubmitErrorCode
static readonly "NO_SUITABLE_CPU_FOUND": $CraftingSubmitErrorCode

public static "values"(): ($CraftingSubmitErrorCode)[]
public static "valueOf"(arg0: StringJS): $CraftingSubmitErrorCode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingSubmitErrorCode$$Type = (("incomplete_plan") | ("no_cpu_found") | ("no_suitable_cpu_found") | ("cpu_busy") | ("cpu_offline") | ("cpu_too_small") | ("missing_ingredient"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingSubmitErrorCode$$Original = $CraftingSubmitErrorCode;}
declare module "appeng.api.networking.crafting.ICraftingService" {
import {$Collection} from "java.util.Collection"
import {$CalculationStrategy$$Type} from "appeng.api.networking.crafting.CalculationStrategy"
import {$AEKeyFilter$$Type} from "appeng.api.storage.AEKeyFilter"
import {$ImmutableSet} from "com.google.common.collect.ImmutableSet"
import {$IActionSource$$Type} from "appeng.api.networking.security.IActionSource"
import {$Future} from "java.util.concurrent.Future"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ICraftingSubmitResult} from "appeng.api.networking.crafting.ICraftingSubmitResult"
import {$IGridNode$$Type} from "appeng.api.networking.IGridNode"
import {$ICraftingProvider$$Type} from "appeng.api.networking.crafting.ICraftingProvider"
import {$ICraftingSimulationRequester$$Type} from "appeng.api.networking.crafting.ICraftingSimulationRequester"
import {$ICraftingRequester$$Type} from "appeng.api.networking.crafting.ICraftingRequester"
import {$IPatternDetails} from "appeng.api.crafting.IPatternDetails"
import {$IGridService$$Interface} from "appeng.api.networking.IGridService"
import {$Set} from "java.util.Set"
import {$AEKey, $AEKey$$Type} from "appeng.api.stacks.AEKey"
import {$ICraftingCPU, $ICraftingCPU$$Type} from "appeng.api.networking.crafting.ICraftingCPU"
import {$ICraftingPlan, $ICraftingPlan$$Type} from "appeng.api.networking.crafting.ICraftingPlan"

export interface $ICraftingService$$Interface extends $IGridService$$Interface {
get "cpus"(): $ImmutableSet<($ICraftingCPU)>
get "requestingAny"(): boolean
}

export class $ICraftingService implements $ICraftingService$$Interface {
 "getCraftingFor"(arg0: $AEKey$$Type): $Collection<($IPatternDetails)>
 "addGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "getFuzzyCraftable"(arg0: $AEKey$$Type, arg1: $AEKeyFilter$$Type): $AEKey
 "beginCraftingCalculation"(arg0: $Level$$Type, arg1: $ICraftingSimulationRequester$$Type, arg2: $AEKey$$Type, arg3: long, arg4: $CalculationStrategy$$Type): $Future<($ICraftingPlan)>
 "submitJob"(arg0: $ICraftingPlan$$Type, arg1: $ICraftingRequester$$Type, arg2: $ICraftingCPU$$Type, arg3: boolean, arg4: $IActionSource$$Type): $ICraftingSubmitResult
 "getCpus"(): $ImmutableSet<($ICraftingCPU)>
 "canEmitFor"(arg0: $AEKey$$Type): boolean
 "getCraftables"(arg0: $AEKeyFilter$$Type): $Set<($AEKey)>
 "isRequesting"(arg0: $AEKey$$Type): boolean
 "getRequestedAmount"(arg0: $AEKey$$Type): long
 "isRequestingAny"(): boolean
 "refreshNodeCraftingProvider"(arg0: $IGridNode$$Type): void
 "removeGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "refreshGlobalCraftingProvider"(arg0: $ICraftingProvider$$Type): void
 "isCraftable"(arg0: $AEKey$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingService$$Type = ($ICraftingService);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingService$$Original = $ICraftingService;}
declare module "appeng.api.networking.crafting.ICraftingLink" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$UUID} from "java.util.UUID"

export interface $ICraftingLink$$Interface {
get "craftingID"(): $UUID
get "standalone"(): boolean
get "done"(): boolean
get "canceled"(): boolean
}

export class $ICraftingLink implements $ICraftingLink$$Interface {
 "writeToNBT"(arg0: $CompoundTag$$Type): void
 "getCraftingID"(): $UUID
 "isStandalone"(): boolean
 "isDone"(): boolean
 "cancel"(): void
 "isCanceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingLink$$Type = ($ICraftingLink);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingLink$$Original = $ICraftingLink;}
declare module "appeng.api.networking.crafting.ICraftingCPU" {
import {$CpuSelectionMode} from "appeng.api.config.CpuSelectionMode"
import {$CraftingJobStatus} from "appeng.api.networking.crafting.CraftingJobStatus"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $ICraftingCPU$$Interface {
get "coProcessors"(): integer
get "busy"(): boolean
get "availableStorage"(): long
get "jobStatus"(): $CraftingJobStatus
get "selectionMode"(): $CpuSelectionMode
get "name"(): $Component
}

export class $ICraftingCPU implements $ICraftingCPU$$Interface {
 "getCoProcessors"(): integer
 "isBusy"(): boolean
 "getAvailableStorage"(): long
 "getJobStatus"(): $CraftingJobStatus
 "cancelJob"(): void
 "getSelectionMode"(): $CpuSelectionMode
 "getName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingCPU$$Type = ($ICraftingCPU);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingCPU$$Original = $ICraftingCPU;}
declare module "appeng.api.networking.crafting.ICraftingSubmitResult" {
import {$CraftingSubmitErrorCode} from "appeng.api.networking.crafting.CraftingSubmitErrorCode"
import {$ICraftingLink} from "appeng.api.networking.crafting.ICraftingLink"

export interface $ICraftingSubmitResult$$Interface {
}

export class $ICraftingSubmitResult implements $ICraftingSubmitResult$$Interface {
 "errorDetail"(): any
 "errorCode"(): $CraftingSubmitErrorCode
 "link"(): $ICraftingLink
 "successful"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICraftingSubmitResult$$Type = ($ICraftingSubmitResult);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICraftingSubmitResult$$Original = $ICraftingSubmitResult;}
declare module "appeng.api.networking.crafting.CraftingJobStatus" {
import {$GenericStack, $GenericStack$$Type} from "appeng.api.stacks.GenericStack"
import {$Record} from "java.lang.Record"

export class $CraftingJobStatus extends $Record {
constructor(crafting: $GenericStack$$Type, totalItems: long, progress: long, elapsedTimeNanos: long)

public "totalItems"(): long
public "elapsedTimeNanos"(): long
public "progress"(): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "crafting"(): $GenericStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingJobStatus$$Type = ({"crafting"?: $GenericStack$$Type, "totalItems"?: long, "progress"?: long, "elapsedTimeNanos"?: long}) | ([crafting?: $GenericStack$$Type, totalItems?: long, progress?: long, elapsedTimeNanos?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingJobStatus$$Original = $CraftingJobStatus;}
