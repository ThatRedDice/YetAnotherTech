declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralTileEntity" {
import {$CompoundTag} from "net.minecraft.nbt.CompoundTag"
import {$BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $IPeripheralTileEntity$$Interface {
get "peripheralSettings"(): $CompoundTag
}

export class $IPeripheralTileEntity implements $IPeripheralTileEntity$$Interface {
 "handleTick"<T extends $BlockEntity>(arg0: $Level$$Type, arg1: $BlockState$$Type, arg2: $BlockEntityType$$Type<(T)>): void
 "getPeripheralSettings"(): $CompoundTag
 "markSettingsChanged"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralTileEntity$$Type = ($IPeripheralTileEntity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheralTileEntity$$Original = $IPeripheralTileEntity;}
declare module "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral" {
import {$Iterable} from "java.lang.Iterable"
import {$Map} from "java.util.Map"
import {$ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$IDynamicPeripheral$$Interface} from "dan200.computercraft.api.peripheral.IDynamicPeripheral"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Set} from "java.util.Set"
import {$IBasePeripheral$$Interface} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$IPeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export class $BasePeripheral<O extends $IPeripheralOwner> implements $IBasePeripheral$$Interface<(O)>, $IDynamicPeripheral$$Interface {
public "callMethod"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: integer, arg3: $IArguments$$Type): $MethodResult
public "getConnectedComputers"(): $Iterable<($IComputerAccess)>
public "getPeripheralConfiguration"(): $Map<(StringJS), (any)>
public "getPeripheralOwner"(): O
public "detach"(arg0: $IComputerAccess$$Type): void
public "getName"(): StringJS
public "equals"(arg0: $IPeripheral$$Type): boolean
public "getType"(): StringJS
public "getTarget"(): any
public "attach"(arg0: $IComputerAccess$$Type): void
public "getConfiguration"(): $Map<(StringJS), (any)>
public "getMethodNames"(): (StringJS)[]
public "isEnabled"(): boolean
public "getAdditionalTypes"(): $Set<(StringJS)>
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheralConfiguration"(): $Map<(StringJS), (any)>
get "peripheralOwner"(): O
get "name"(): StringJS
get "type"(): StringJS
get "target"(): any
get "configuration"(): $Map<(StringJS), (any)>
get "methodNames"(): (StringJS)[]
get "enabled"(): boolean
get "additionalTypes"(): $Set<(StringJS)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePeripheral$$Type<O> = ($BasePeripheral<(O)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasePeripheral$$Original<O> = $BasePeripheral<(O)>;}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralCheck" {
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"

export interface $IPeripheralCheck$$Interface<T> {

(arg0: T): $MethodResult$$Type
}

export class $IPeripheralCheck<T> implements $IPeripheralCheck$$Interface {
 "checkAlso"(arg0: $IPeripheralCheck$$Type<(T)>): $IPeripheralCheck<(T)>
 "check"(arg0: T): $MethodResult
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralCheck$$Type<T> = ((arg0: T) => $MethodResult$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheralCheck$$Original<T> = $IPeripheralCheck<(T)>;}
declare module "de.srendi.advancedperipherals.lib.pocket.BasePocketUpgrade" {
import {$IPocketAccess$$Type} from "dan200.computercraft.api.pocket.IPocketAccess"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$AbstractPocketUpgrade} from "dan200.computercraft.api.pocket.AbstractPocketUpgrade"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPocketUpgrade} from "dan200.computercraft.api.pocket.IPocketUpgrade"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $BasePocketUpgrade<T extends $IBasePeripheral<(object)>> extends $AbstractPocketUpgrade {
public "createPeripheral"(arg0: $IPocketAccess$$Type): $IPeripheral
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($IPocketUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BasePocketUpgrade$$Type<T> = ($BasePocketUpgrade<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BasePocketUpgrade$$Original<T> = $BasePocketUpgrade<(T)>;}
declare module "de.srendi.advancedperipherals.lib.peripherals.AutomataCorePeripheral" {
import {$Map} from "java.util.Map"
import {$TurtlePeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.TurtlePeripheralOwner"
import {$MethodResult, $MethodResult$$Type} from "dan200.computercraft.api.lua.MethodResult"
import {$List} from "java.util.List"
import {$IPeripheralCheck$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralCheck"
import {$Direction} from "net.minecraft.core.Direction"
import {$SingleOperationContext, $SingleOperationContext$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperationContext"
import {$IPeripheralFunction$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralFunction"
import {$BasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.BasePeripheral"
import {$IPeripheralOperation, $IPeripheralOperation$$Type} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$SingleOperation$$Type} from "de.srendi.advancedperipherals.common.addons.computercraft.operations.SingleOperation"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $AutomataCorePeripheral extends $BasePeripheral<($TurtlePeripheralOwner)> {
static readonly "ATTR_STORING_TOOL_DURABILITY": StringJS

public "getInteractionRadius"(): integer
public "addRotationCycle"(arg0: integer): void
public "addRotationCycle"(): void
public "possibleOperations"(): $List<($IPeripheralOperation<(never)>)>
public "forUnknownDistance"(): $SingleOperationContext
public "toDistance"(arg0: $BlockPos$$Type): $SingleOperationContext
public "getPeripheralConfiguration"(): $Map<(StringJS), (any)>
public "withOperation"(arg0: $SingleOperation$$Type, arg1: $IPeripheralFunction$$Type<($SingleOperationContext), ($MethodResult$$Type)>, arg2: $IPeripheralCheck$$Type<($SingleOperationContext)>): $MethodResult
public "withOperation"(arg0: $SingleOperation$$Type, arg1: $IPeripheralFunction$$Type<($SingleOperationContext), ($MethodResult$$Type)>): $MethodResult
public "withOperation"<T>(arg0: $IPeripheralOperation$$Type<(T)>, arg1: T, arg2: $IPeripheralFunction$$Type<(T), ($MethodResult$$Type)>, arg3: $IPeripheralCheck$$Type<(T)>): $MethodResult
public "validateSide"(arg0: StringJS): $Direction
public "setAttribute"(arg0: StringJS): void
public "hasAttribute"(arg0: StringJS): boolean
get "interactionRadius"(): integer
get "peripheralConfiguration"(): $Map<(StringJS), (any)>
set "attribute"(value: StringJS)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AutomataCorePeripheral$$Type = ($AutomataCorePeripheral);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AutomataCorePeripheral$$Original = $AutomataCorePeripheral;}
declare module "de.srendi.advancedperipherals.lib.turtle.ClockwiseAnimatedTurtleUpgrade" {
import {$DataComponentPatch, $DataComponentPatch$$Type} from "net.minecraft.core.component.DataComponentPatch"
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$PeripheralTurtleUpgrade} from "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"

export class $ClockwiseAnimatedTurtleUpgrade<T extends $IBasePeripheral<(object)>> extends $PeripheralTurtleUpgrade<(T)> {
public "getUpgradeData"(arg0: $ItemStack$$Type): $DataComponentPatch
public "getUpgradeItem"(arg0: $DataComponentPatch$$Type): $ItemStack
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "chargeConsumingCallback"(): void
public "update"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): void
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClockwiseAnimatedTurtleUpgrade$$Type<T> = ($ClockwiseAnimatedTurtleUpgrade<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClockwiseAnimatedTurtleUpgrade$$Original<T> = $ClockwiseAnimatedTurtleUpgrade<(T)>;}
declare module "de.srendi.advancedperipherals.lib.metaphysics.IFeedableAutomataCore" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFeedableAutomataCore$$Interface {
}

export class $IFeedableAutomataCore implements $IFeedableAutomataCore$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFeedableAutomataCore$$Type = ($IFeedableAutomataCore);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFeedableAutomataCore$$Original = $IFeedableAutomataCore;}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralPlugin" {
import {$IPeripheralOperation} from "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation"
import {$List} from "java.util.List"
import {$IPeripheral$$Type} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$BoundMethod} from "de.srendi.advancedperipherals.lib.peripherals.BoundMethod"

export interface $IPeripheralPlugin$$Interface {
get "operations"(): ($IPeripheralOperation<(never)>)[]
get "methods"(): $List<($BoundMethod)>
}

export class $IPeripheralPlugin implements $IPeripheralPlugin$$Interface {
 "isSuitable"(arg0: $IPeripheral$$Type): boolean
 "getOperations"(): ($IPeripheralOperation<(never)>)[]
 "getMethods"(): $List<($BoundMethod)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralPlugin$$Type = ($IPeripheralPlugin);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheralPlugin$$Original = $IPeripheralPlugin;}
declare module "de.srendi.advancedperipherals.lib.peripherals.IDataComponentProvider" {
import {$DataComponentType, $DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"

export interface $IDataComponentProvider$$Interface<T> {

(): $DataComponentType$$Type<(T)>
}

export class $IDataComponentProvider<T> implements $IDataComponentProvider$$Interface {
 "dataComponentType"(): $DataComponentType<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDataComponentProvider$$Type<T> = (() => $DataComponentType$$Type<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDataComponentProvider$$Original<T> = $IDataComponentProvider<(T)>;}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralOperation" {
import {$IConfigHandler$$Interface} from "de.srendi.advancedperipherals.lib.misc.IConfigHandler"
import {$Map} from "java.util.Map"
import {$IDataComponentProvider$$Interface} from "de.srendi.advancedperipherals.lib.peripherals.IDataComponentProvider"
import {$DataComponentType} from "net.minecraft.core.component.DataComponentType"
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export interface $IPeripheralOperation$$Interface<T> extends $IConfigHandler$$Interface, $IDataComponentProvider$$Interface<(long)> {
get "initialCooldown"(): integer
get "tingsPostfix"(): StringJS
get "tingsName"(): StringJS
}

export class $IPeripheralOperation<T> implements $IPeripheralOperation$$Interface {
 "getCost"(arg0: T): integer
 "getCooldown"(arg0: T): integer
 "getInitialCooldown"(): integer
 "computerDescription"(): $Map<(StringJS), (any)>
 "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
 "settingsPostfix"(): StringJS
 "settingsName"(): StringJS
 "name"(): StringJS
 "dataComponentType"(): $DataComponentType<(long)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralOperation$$Type<T> = ($IPeripheralOperation<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheralOperation$$Original<T> = $IPeripheralOperation<(T)>;}
declare module "de.srendi.advancedperipherals.lib.turtle.PeripheralTurtleUpgrade" {
import {$ITurtleUpgrade} from "dan200.computercraft.api.turtle.ITurtleUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ModelResourceLocation} from "net.minecraft.client.resources.model.ModelResourceLocation"
import {$ITurtleAccess$$Type} from "dan200.computercraft.api.turtle.ITurtleAccess"
import {$IBasePeripheral} from "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral"
import {$UpgradeType} from "dan200.computercraft.api.upgrades.UpgradeType"
import {$AbstractTurtleUpgrade} from "dan200.computercraft.api.turtle.AbstractTurtleUpgrade"
import {$ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Registry} from "net.minecraft.core.Registry"
import {$TurtleSide$$Type} from "dan200.computercraft.api.turtle.TurtleSide"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$IPeripheral} from "dan200.computercraft.api.peripheral.IPeripheral"

export class $PeripheralTurtleUpgrade<T extends $IBasePeripheral<(object)>> extends $AbstractTurtleUpgrade {
public "createPeripheral"(arg0: $ITurtleAccess$$Type, arg1: $TurtleSide$$Type): $IPeripheral
public "isItemSuitable"(arg0: $ItemStack$$Type): boolean
public "getLeftModel"(): $ModelResourceLocation
public "getRightModel"(): $ModelResourceLocation
public static "createKey"(arg0: $ResourceLocation$$Type): $ResourceKey<($ITurtleUpgrade)>
public static "typeRegistry"(): $ResourceKey<($Registry<($UpgradeType<($ITurtleUpgrade)>)>)>
public static "getDefaultAdjective"(arg0: $ResourceLocation$$Type): StringJS
get "leftModel"(): $ModelResourceLocation
get "rightModel"(): $ModelResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PeripheralTurtleUpgrade$$Type<T> = ($PeripheralTurtleUpgrade<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PeripheralTurtleUpgrade$$Original<T> = $PeripheralTurtleUpgrade<(T)>;}
declare module "de.srendi.advancedperipherals.lib.peripherals.IPeripheralFunction" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPeripheralFunction$$Interface<T, R> {

(arg0: T): R
}

export class $IPeripheralFunction<T, R> implements $IPeripheralFunction$$Interface {
 "apply"(arg0: T): R
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPeripheralFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPeripheralFunction$$Original<T, R> = $IPeripheralFunction<(T), (R)>;}
declare module "de.srendi.advancedperipherals.lib.misc.IConfigHandler" {
import {$ModConfigSpec$Builder$$Type} from "net.neoforged.neoforge.common.ModConfigSpec$Builder"

export interface $IConfigHandler$$Interface {
get "tingsPostfix"(): StringJS
get "tingsName"(): StringJS
}

export class $IConfigHandler implements $IConfigHandler$$Interface {
 "addToConfig"(arg0: $ModConfigSpec$Builder$$Type): void
 "settingsPostfix"(): StringJS
 "settingsName"(): StringJS
 "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IConfigHandler$$Type = ($IConfigHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IConfigHandler$$Original = $IConfigHandler;}
declare module "de.srendi.advancedperipherals.lib.peripherals.BoundMethod" {
import {$ILuaContext$$Type} from "dan200.computercraft.api.lua.ILuaContext"
import {$MethodResult} from "dan200.computercraft.api.lua.MethodResult"
import {$IArguments$$Type} from "dan200.computercraft.api.lua.IArguments"
import {$IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$PeripheralMethod$$Type} from "dan200.computercraft.core.methods.PeripheralMethod"

export class $BoundMethod {
constructor(arg0: any, arg1: StringJS, arg2: $PeripheralMethod$$Type)

public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "apply"(arg0: $IComputerAccess$$Type, arg1: $ILuaContext$$Type, arg2: $IArguments$$Type): $MethodResult
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BoundMethod$$Type = ($BoundMethod);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BoundMethod$$Original = $BoundMethod;}
declare module "de.srendi.advancedperipherals.lib.peripherals.IBasePeripheral" {
import {$Iterable} from "java.lang.Iterable"
import {$IComputerAccess, $IComputerAccess$$Type} from "dan200.computercraft.api.peripheral.IComputerAccess"
import {$Set} from "java.util.Set"
import {$IPeripheral$$Type, $IPeripheral$$Interface} from "dan200.computercraft.api.peripheral.IPeripheral"
import {$IPeripheralOwner} from "de.srendi.advancedperipherals.common.addons.computercraft.owner.IPeripheralOwner"

export interface $IBasePeripheral$$Interface<T extends $IPeripheralOwner> extends $IPeripheral$$Interface {
get "connectedComputers"(): $Iterable<($IComputerAccess)>
get "peripheralOwner"(): T
get "enabled"(): boolean
get "additionalTypes"(): $Set<(StringJS)>
get "type"(): StringJS
get "target"(): any
}

export class $IBasePeripheral<T extends $IPeripheralOwner> implements $IBasePeripheral$$Interface {
 "getConnectedComputers"(): $Iterable<($IComputerAccess)>
 "getPeripheralOwner"(): T
 "isEnabled"(): boolean
 "getAdditionalTypes"(): $Set<(StringJS)>
 "detach"(arg0: $IComputerAccess$$Type): void
 "equals"(arg0: $IPeripheral$$Type): boolean
 "getType"(): StringJS
 "getTarget"(): any
 "attach"(arg0: $IComputerAccess$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IBasePeripheral$$Type<T> = ($IBasePeripheral<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IBasePeripheral$$Original<T> = $IBasePeripheral<(T)>;}
