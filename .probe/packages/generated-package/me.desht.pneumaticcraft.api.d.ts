declare module "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe$AssemblyProgramType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $AssemblyRecipe$AssemblyProgramType extends $Enum<($AssemblyRecipe$AssemblyProgramType)> implements $StringRepresentable$$Interface {
static readonly "DRILL_LASER": $AssemblyRecipe$AssemblyProgramType
static readonly "CODEC": $Codec<($AssemblyRecipe$AssemblyProgramType)>
static readonly "LASER": $AssemblyRecipe$AssemblyProgramType
static readonly "DRILL": $AssemblyRecipe$AssemblyProgramType

public "getRecipeType"(): $ResourceLocation
public "getRegistryName"(): StringJS
public static "values"(): ($AssemblyRecipe$AssemblyProgramType)[]
public static "valueOf"(arg0: StringJS): $AssemblyRecipe$AssemblyProgramType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "recipeType"(): $ResourceLocation
get "registryName"(): StringJS
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipe$AssemblyProgramType$$Type = (("drill") | ("laser") | ("drill_laser"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyRecipe$AssemblyProgramType$$Original = $AssemblyRecipe$AssemblyProgramType;}
declare module "me.desht.pneumaticcraft.api.semiblock.SemiblockEvent$PlaceEvent" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SemiblockEvent} from "me.desht.pneumaticcraft.api.semiblock.SemiblockEvent"
import {$ISemiBlock$$Type} from "me.desht.pneumaticcraft.api.semiblock.ISemiBlock"

export class $SemiblockEvent$PlaceEvent extends $SemiblockEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ISemiBlock$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemiblockEvent$PlaceEvent$$Type = ($SemiblockEvent$PlaceEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemiblockEvent$PlaceEvent$$Original = $SemiblockEvent$PlaceEvent;}
declare module "me.desht.pneumaticcraft.api.drone.IPathNavigator" {
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IPathNavigator$$Interface {
get "goingToTeleport"(): boolean
}

export class $IPathNavigator implements $IPathNavigator$$Interface {
 "moveToXYZ"(arg0: double, arg1: double, arg2: double): boolean
 "moveToEntity"(arg0: $Entity$$Type): boolean
 "hasNoPath"(): boolean
 "isGoingToTeleport"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPathNavigator$$Type = ($IPathNavigator);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPathNavigator$$Original = $IPathNavigator;}
declare module "me.desht.pneumaticcraft.api.item.IInventoryItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ItemContainerContents$$Type} from "net.minecraft.world.item.component.ItemContainerContents"

export interface $IInventoryItem$$Interface {

(arg0: $ItemStack, arg1: $List<($ItemStack)>): void
get "inventoryHeader"(): $Component
}

export class $IInventoryItem implements $IInventoryItem$$Interface {
 "getStacksInItem"(arg0: $ItemStack$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
 "getTooltipPrefix"(arg0: $ItemStack$$Type): StringJS
 "getInventoryHeader"(): $Component
static "getStacks"(arg0: $ItemContainerContents$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInventoryItem$$Type = ((arg0: $ItemStack, arg1: $List<($ItemStack)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInventoryItem$$Original = $IInventoryItem;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.HeatFrameCoolingRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$FluidContainerIngredient} from "me.desht.pneumaticcraft.api.crafting.ingredient.FluidContainerIngredient"
import {$Either} from "com.mojang.datafixers.util.Either"

export class $HeatFrameCoolingRecipe extends $PneumaticCraftRecipe {
constructor()

public "calculateOutputQuantity"(arg0: double): integer
public "getThresholdTemperature"(): integer
public "getBonusMultiplier"(): float
public "getBonusLimit"(): float
public "getInput"(): $Either<($Ingredient), ($FluidContainerIngredient)>
public "getOutput"(): $ItemStack
public "matches"(arg0: $ItemStack$$Type): boolean
get "thresholdTemperature"(): integer
get "bonusMultiplier"(): float
get "bonusLimit"(): float
get "input"(): $Either<($Ingredient), ($FluidContainerIngredient)>
get "output"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatFrameCoolingRecipe$$Type = ($HeatFrameCoolingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatFrameCoolingRecipe$$Original = $HeatFrameCoolingRecipe;}
declare module "me.desht.pneumaticcraft.api.client.pneumatic_helmet.BlockTrackEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $BlockTrackEvent extends $Event implements $ICancellableEvent$$Interface {
readonly "te": $BlockEntity
readonly "world": $Level
readonly "pos": $BlockPos

constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockEntity$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockTrackEvent$$Type = ($BlockTrackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockTrackEvent$$Original = $BlockTrackEvent;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.HeatPropertiesRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$Map} from "java.util.Map"
import {$Optional} from "java.util.Optional"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$HeatPropertiesRecipe$Transforms} from "me.desht.pneumaticcraft.api.crafting.recipe.HeatPropertiesRecipe$Transforms"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IHeatExchangerLogic} from "me.desht.pneumaticcraft.api.heat.IHeatExchangerLogic"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HeatPropertiesRecipe extends $PneumaticCraftRecipe {
constructor()

public "getLogic"(): $IHeatExchangerLogic
public "getThermalResistance"(): $Optional<(double)>
public "getTemperature"(): integer
public "getTransforms"(): $HeatPropertiesRecipe$Transforms
public "getTransformHot"(): $Optional<($BlockState)>
public "getTransformCold"(): $Optional<($BlockState)>
public "getTransformHotFlowing"(): $Optional<($BlockState)>
public "getTransformColdFlowing"(): $Optional<($BlockState)>
public "getInputDisplayName"(): $Component
public "getHeatCapacity"(): $Optional<(integer)>
public "getBlockStatePredicates"(): $Map<(StringJS), (StringJS)>
public "getBlock"(): $Block
public "matchState"(arg0: $BlockState$$Type): boolean
public "getBlockState"(): $BlockState
public "getDescriptionKey"(): StringJS
get "logic"(): $IHeatExchangerLogic
get "thermalResistance"(): $Optional<(double)>
get "temperature"(): integer
get "transforms"(): $HeatPropertiesRecipe$Transforms
get "transformHot"(): $Optional<($BlockState)>
get "transformCold"(): $Optional<($BlockState)>
get "transformHotFlowing"(): $Optional<($BlockState)>
get "transformColdFlowing"(): $Optional<($BlockState)>
get "inputDisplayName"(): $Component
get "heatCapacity"(): $Optional<(integer)>
get "blockStatePredicates"(): $Map<(StringJS), (StringJS)>
get "block"(): $Block
get "blockState"(): $BlockState
get "descriptionKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipe$$Type = ($HeatPropertiesRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPropertiesRecipe$$Original = $HeatPropertiesRecipe;}
declare module "me.desht.pneumaticcraft.api.harvesting.HoeHandler" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Consumer} from "java.util.function.Consumer"

export class $HoeHandler implements $Predicate$$Interface<($ItemStack)> {
constructor(arg0: $Predicate$$Type<($ItemStack)>, arg1: $BiConsumer$$Type<($ItemStack), ($Player)>)

public "getConsumer"(arg0: $ItemStack$$Type): $Consumer<($Player)>
public "test"(arg0: any): boolean
public "test"(arg0: $ItemStack$$Type): boolean
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.PneumaticcraftHoeHandlers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PneumaticcraftHoeHandlersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeHandler$$Type = (Special.PneumaticcraftHoeHandlers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoeHandler$$Original = $HoeHandler;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe$RecipeSlot" {
import {$Record} from "java.lang.Record"

export class $PressureChamberRecipe$RecipeSlot extends $Record {
constructor(input: boolean, index: integer)

public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "input"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipe$RecipeSlot$$Type = ({"index"?: integer, "input"?: boolean}) | ([index?: integer, input?: boolean]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberRecipe$RecipeSlot$$Original = $PressureChamberRecipe$RecipeSlot;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe$Inputs" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$SizedFluidIngredient, $SizedFluidIngredient$$Type} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$Record} from "java.lang.Record"

export class $ThermoPlantRecipe$Inputs extends $Record {
static readonly "CODEC": $Codec<($ThermoPlantRecipe$Inputs)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ThermoPlantRecipe$Inputs)>

constructor(inputFluid: ($SizedFluidIngredient$$Type)?, inputItem: ($Ingredient$$Type)?)

public "inputItem"(): $Optional<($Ingredient)>
public "inputFluid"(): $Optional<($SizedFluidIngredient)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public static "of"(arg0: $SizedFluidIngredient$$Type, arg1: $Ingredient$$Type): $ThermoPlantRecipe$Inputs
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipe$Inputs$$Type = ({"inputFluid"?: ($SizedFluidIngredient$$Type)?, "inputItem"?: ($Ingredient$$Type)?}) | ([inputFluid?: ($SizedFluidIngredient$$Type)?, inputItem?: ($Ingredient$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoPlantRecipe$Inputs$$Original = $ThermoPlantRecipe$Inputs;}
declare module "me.desht.pneumaticcraft.api.heat.IHeatExchangerLogic" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$HeatBehaviour} from "me.desht.pneumaticcraft.api.heat.HeatBehaviour"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Class$$Type} from "java.lang.Class"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$TemperatureListener$$Type} from "me.desht.pneumaticcraft.api.heat.TemperatureListener"
import {$LevelAccessor, $LevelAccessor$$Type} from "net.minecraft.world.level.LevelAccessor"

export interface $IHeatExchangerLogic$$Interface {
get "ambientTemperature"(): double
get "temperatureAsInt"(): integer
set "temperature"(value: double)
set "thermalCapacity"(value: double)
set "thermalResistance"(value: double)
get "thermalCapacity"(): double
get "thermalResistance"(): double
get "temperature"(): double
}

export class $IHeatExchangerLogic implements $IHeatExchangerLogic$$Interface {
static readonly "ALL_BLOCKS": $BiPredicate<($LevelAccessor), ($BlockPos)>

 "isSideConnected"(arg0: $Direction$$Type): boolean
 "getAmbientTemperature"(): double
 "getHeatBehaviour"<T extends $HeatBehaviour>(arg0: $BlockPos$$Type, arg1: $Class$$Type<(T)>): $Optional<(T)>
 "getTemperatureAsInt"(): integer
 "setTemperature"(arg0: double): void
 "initializeAsHull"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BiPredicate$$Type<($LevelAccessor), ($BlockPos)>, ...arg3: ($Direction$$Type)[]): void
 "setThermalCapacity"(arg0: double): void
 "setThermalResistance"(arg0: double): void
 "addConnectedExchanger"(arg0: $IHeatExchangerLogic$$Type): void
 "addConnectedExchanger"(arg0: $IHeatExchangerLogic$$Type, arg1: boolean): void
 "getThermalCapacity"(): double
 "removeConnectedExchanger"(arg0: $IHeatExchangerLogic$$Type): void
 "removeConnectedExchanger"(arg0: $IHeatExchangerLogic$$Type, arg1: boolean): void
 "getThermalResistance"(): double
 "addTemperatureListener"(arg0: $TemperatureListener$$Type): void
 "removeTemperatureListener"(arg0: $TemperatureListener$$Type): void
 "initializeAmbientTemperature"(arg0: $Level$$Type, arg1: $BlockPos$$Type): void
 "getTemperature"(): double
 "addHeat"(arg0: double): void
 "tick"(): void
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHeatExchangerLogic$$Type = ($IHeatExchangerLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHeatExchangerLogic$$Original = $IHeatExchangerLogic;}
declare module "me.desht.pneumaticcraft.api.crafting.AmadronTradeResource" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Function$$Type} from "java.util.function.Function"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$IFluidHandler$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$Record} from "java.lang.Record"

export class $AmadronTradeResource extends $Record {
static readonly "CODEC": $Codec<($AmadronTradeResource)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AmadronTradeResource)>

constructor(resource: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>)

public "totalSpaceRequired"(arg0: integer): integer
public "findSpaceInFluidOutput"(arg0: $IFluidHandler$$Type, arg1: integer): integer
public "findSpaceInItemOutput"(arg0: $IItemHandler$$Type, arg1: integer): integer
public "getFluid"(): $FluidStack
public "countTradesInInventory"(arg0: $IItemHandler$$Type): integer
public "countTradesInTank"(arg0: $IFluidHandler$$Type): integer
public "resource"(): $Either<($ItemStack), ($FluidStack)>
public "getItem"(): $ItemStack
public "getName"(): StringJS
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isEmpty"(): boolean
public "apply"<T>(arg0: $Function$$Type<($ItemStack), (T)>, arg1: $Function$$Type<($FluidStack), (T)>): T
public static "of"(arg0: $ItemStack$$Type): $AmadronTradeResource
public static "of"(arg0: $FluidStack$$Type): $AmadronTradeResource
public "validate"(): $AmadronTradeResource
public "accept"(arg0: $Consumer$$Type<($ItemStack)>, arg1: $Consumer$$Type<($FluidStack)>): void
public "getId"(): $ResourceLocation
public "equivalentTo"(arg0: $AmadronTradeResource$$Type): boolean
public "getAmount"(): integer
get "fluid"(): $FluidStack
get "item"(): $ItemStack
get "name"(): StringJS
get "empty"(): boolean
get "id"(): $ResourceLocation
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronTradeResource$$Type = ({"resource"?: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>}) | ([resource?: $Either$$Type<($ItemStack$$Type), ($FluidStack$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronTradeResource$$Original = $AmadronTradeResource;}
declare module "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent$ItemVariable$Drone" {
import {$SpecialVariableRetrievalEvent$ItemVariable} from "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent$ItemVariable"
import {$IDrone, $IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"

export class $SpecialVariableRetrievalEvent$ItemVariable$Drone extends $SpecialVariableRetrievalEvent$ItemVariable {
readonly "specialVarName": StringJS
readonly "drone": $IDrone

constructor(arg0: $IDrone$$Type, arg1: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialVariableRetrievalEvent$ItemVariable$Drone$$Type = ($SpecialVariableRetrievalEvent$ItemVariable$Drone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialVariableRetrievalEvent$ItemVariable$Drone$$Original = $SpecialVariableRetrievalEvent$ItemVariable$Drone;}
declare module "me.desht.pneumaticcraft.api.remote.WidgetSettings" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Record} from "java.lang.Record"

export class $WidgetSettings extends $Record {
static readonly "CODEC": $Codec<($WidgetSettings)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($WidgetSettings)>

constructor(x: integer, y: integer, width: integer, height: integer, title: $Component$$Type, tooltip: $Component$$Type)

public "withText"(arg0: $Component$$Type, arg1: $Component$$Type): $WidgetSettings
public "copyToPos"(arg0: integer, arg1: integer): $WidgetSettings
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "copy"(): $WidgetSettings
public "resize"(arg0: integer, arg1: integer): $WidgetSettings
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "title"(): $Component
public "tooltip"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $WidgetSettings$$Type = ({"width"?: integer, "height"?: integer, "x"?: integer, "y"?: integer, "title"?: $Component$$Type, "tooltip"?: $Component$$Type}) | ([width?: integer, height?: integer, x?: integer, y?: integer, title?: $Component$$Type, tooltip?: $Component$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $WidgetSettings$$Original = $WidgetSettings;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.RefineryRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$TemperatureRange} from "me.desht.pneumaticcraft.api.crafting.TemperatureRange"
import {$List} from "java.util.List"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack} from "net.neoforged.neoforge.fluids.FluidStack"

export class $RefineryRecipe extends $PneumaticCraftRecipe {
static readonly "MAX_OUTPUTS": integer

constructor()

public "getOperatingTemp"(): $TemperatureRange
public "getInput"(): $SizedFluidIngredient
public "getOutputs"(): $List<($FluidStack)>
get "operatingTemp"(): $TemperatureRange
get "input"(): $SizedFluidIngredient
get "outputs"(): $List<($FluidStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefineryRecipe$$Type = ($RefineryRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefineryRecipe$$Original = $RefineryRecipe;}
declare module "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine$Connection" {
import {$Direction} from "net.minecraft.core.Direction"
import {$IAirHandlerMachine} from "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine"

export interface $IAirHandlerMachine$Connection$$Interface {
get "airHandler"(): $IAirHandlerMachine
get "maxDispersion"(): integer
get "direction"(): $Direction
set "maxDispersion"(value: integer)
set "airToDisperse"(value: integer)
get "dispersedAir"(): integer
}

export class $IAirHandlerMachine$Connection implements $IAirHandlerMachine$Connection$$Interface {
 "getAirHandler"(): $IAirHandlerMachine
 "getMaxDispersion"(): integer
 "getDirection"(): $Direction
 "setMaxDispersion"(arg0: integer): void
 "setAirToDisperse"(arg0: integer): void
 "getDispersedAir"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirHandlerMachine$Connection$$Type = ($IAirHandlerMachine$Connection);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAirHandlerMachine$Connection$$Original = $IAirHandlerMachine$Connection;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.AmadronRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AmadronTradeResource} from "me.desht.pneumaticcraft.api.crafting.AmadronTradeResource"
import {$IPlayerFilter} from "me.desht.pneumaticcraft.api.misc.IPlayerFilter"
import {$List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export class $AmadronRecipe extends $PneumaticCraftRecipe {
constructor()

public "isRemovableBy"(arg0: $Player$$Type): boolean
public "getMaxStock"(): integer
public "getStock"(): integer
public "setStock"(arg0: integer): void
public "getVendorName"(): $Component
public "isStaticOffer"(): boolean
public "getTradeLevel"(): integer
public "isVillagerTrade"(): boolean
public "getBlacklist"(): $IPlayerFilter
public "passesQuery"(arg0: StringJS): boolean
public "addAvailabilityData"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
public "isLocationLimited"(): boolean
public "isUsableByPlayer"(arg0: $Player$$Type): boolean
public "getWhitelist"(): $IPlayerFilter
public "getInput"(): $AmadronTradeResource
public "getOutput"(): $AmadronTradeResource
get "maxStock"(): integer
get "stock"(): integer
set "stock"(value: integer)
get "vendorName"(): $Component
get "staticOffer"(): boolean
get "tradeLevel"(): integer
get "villagerTrade"(): boolean
get "blacklist"(): $IPlayerFilter
get "locationLimited"(): boolean
get "whitelist"(): $IPlayerFilter
get "input"(): $AmadronTradeResource
get "output"(): $AmadronTradeResource
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronRecipe$$Type = ($AmadronRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronRecipe$$Original = $AmadronRecipe;}
declare module "me.desht.pneumaticcraft.api.client.pneumatic_helmet.InventoryTrackEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IItemHandler} from "net.neoforged.neoforge.items.IItemHandler"

export class $InventoryTrackEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $BlockEntity$$Type)

public "getTileEntity"(): $BlockEntity
public "getInventory"(): $IItemHandler
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "tileEntity"(): $BlockEntity
get "inventory"(): $IItemHandler
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryTrackEvent$$Type = ($InventoryTrackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryTrackEvent$$Original = $InventoryTrackEvent;}
declare module "me.desht.pneumaticcraft.api.crafting.ingredient.FluidContainerIngredient$TagWithAmount" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Record} from "java.lang.Record"

export class $FluidContainerIngredient$TagWithAmount extends $Record {
static readonly "CODEC": $Codec<($FluidContainerIngredient$TagWithAmount)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidContainerIngredient$TagWithAmount)>

constructor(tag: $TagKey$$Type<($Fluid)>, amount: integer)

public "amount"(): integer
public "tag"(): $TagKey<($Fluid)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerIngredient$TagWithAmount$$Type = ({"amount"?: integer, "tag"?: $TagKey$$Type<($Fluid)>}) | ([amount?: integer, tag?: $TagKey$$Type<($Fluid)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidContainerIngredient$TagWithAmount$$Original = $FluidContainerIngredient$TagWithAmount;}
declare module "me.desht.pneumaticcraft.api.item.IFilteringItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IFilteringItem$$Interface {

(arg0: $ItemStack, arg1: $ItemStack): boolean
}

export class $IFilteringItem implements $IFilteringItem$$Interface {
 "matchFilter"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilteringItem$$Type = ((arg0: $ItemStack, arg1: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFilteringItem$$Original = $IFilteringItem;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.FuelQualityRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidIngredient} from "net.neoforged.neoforge.fluids.crafting.FluidIngredient"

export class $FuelQualityRecipe extends $PneumaticCraftRecipe {
constructor()

public "getFuel"(): $FluidIngredient
public "matchesFluid"(arg0: $Fluid$$Type): boolean
public "getBurnRate"(): float
public "getAirPerBucket"(): integer
get "fuel"(): $FluidIngredient
get "burnRate"(): float
get "airPerBucket"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FuelQualityRecipe$$Type = ($FuelQualityRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FuelQualityRecipe$$Original = $FuelQualityRecipe;}
declare module "me.desht.pneumaticcraft.api.client.pneumatic_helmet.EntityTrackEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export class $EntityTrackEvent extends $Event implements $ICancellableEvent$$Interface {
readonly "trackingEntity": $Entity

constructor(arg0: $Entity$$Type)

public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityTrackEvent$$Type = ($EntityTrackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityTrackEvent$$Original = $EntityTrackEvent;}
declare module "me.desht.pneumaticcraft.api.drone.area.AreaType" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$AreaTypeSerializer} from "me.desht.pneumaticcraft.api.drone.area.AreaTypeSerializer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$AreaTypeWidget$$Type} from "me.desht.pneumaticcraft.api.drone.area.AreaTypeWidget"
import {$List$$Type} from "java.util.List"
import {$EnumOldAreaType$$Type} from "me.desht.pneumaticcraft.api.drone.area.EnumOldAreaType"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $AreaType {
static readonly "CODEC": $Codec<($AreaType)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($AreaType)>

constructor(arg0: StringJS)

public "addArea"(arg0: $Consumer$$Type<($BlockPos)>, arg1: $BlockPos$$Type, arg2: $BlockPos$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: integer, arg8: integer): void
public "addUIWidgets"(arg0: $List$$Type<($AreaTypeWidget$$Type)>): void
public "convertFromLegacy"(arg0: $EnumOldAreaType$$Type, arg1: integer): void
public "isDeterministic"(): boolean
public "getSerializer"(): $AreaTypeSerializer<($AreaType)>
public "getTranslationKey"(): StringJS
public "getName"(): StringJS
public "copy"(): $AreaType
get "deterministic"(): boolean
get "serializer"(): $AreaTypeSerializer<($AreaType)>
get "translationKey"(): StringJS
get "name"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaType$$Type = ($AreaType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AreaType$$Original = $AreaType;}
declare module "me.desht.pneumaticcraft.api.item.IProgrammable" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IProgrammable$$Interface {
}

export class $IProgrammable implements $IProgrammable$$Interface {
static readonly "NBT_WIDGETS": StringJS

 "canProgram"(arg0: $ItemStack$$Type): boolean
 "usesPieces"(arg0: $ItemStack$$Type): boolean
 "showProgramTooltip"(): boolean
static "isProgrammable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgrammable$$Type = ($IProgrammable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProgrammable$$Original = $IProgrammable;}
declare module "me.desht.pneumaticcraft.api.semiblock.ISemiBlock" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$EntityCapability$$Type} from "net.neoforged.neoforge.capabilities.EntityCapability"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $ISemiBlock$$Interface {
get "semiblockId"(): $ResourceLocation
get "semiblockDisplayName"(): $Component
get "cachedTileEntity"(): $BlockEntity
get "trackingId"(): integer
get "world"(): $Level
get "drops"(): $NonNullList<($ItemStack)>
get "valid"(): boolean
get "color"(): integer
get "blockPos"(): $BlockPos
}

export class $ISemiBlock implements $ISemiBlock$$Interface {
 "killedByEntity"(arg0: $Entity$$Type): void
 "onRightClickWithConfigurator"(arg0: $Player$$Type, arg1: $Direction$$Type): boolean
 "canCoexist"(arg0: $ISemiBlock$$Type): boolean
 "getSemiblockId"(): $ResourceLocation
 "getSemiblockDisplayName"(): $Component
 "getCachedTileEntity"(): $BlockEntity
 "getTrackingId"(): integer
 "writeToBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "readFromBuf"(arg0: $RegistryFriendlyByteBuf$$Type): void
 "getSemiblockCapability"<T>(arg0: $EntityCapability$$Type<(T), (void)>): $Optional<(T)>
 "getSemiblockCapability"<T>(arg0: $EntityCapability$$Type<(T), ($Direction$$Type)>, arg1: $Direction$$Type): $Optional<(T)>
static "byTrackingId"(arg0: $Level$$Type, arg1: integer): $ISemiBlock
 "getWorld"(): $Level
 "getDrops"(): $NonNullList<($ItemStack)>
 "addTooltip"(arg0: $Consumer$$Type<($Component)>, arg1: $Player$$Type, arg2: $CompoundTag$$Type, arg3: boolean): void
 "canPlace"(arg0: $Direction$$Type): boolean
 "onPlaced"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $Direction$$Type): void
 "isValid"(): boolean
 "tick"(): void
 "getColor"(): integer
 "getBlockPos"(): $BlockPos
 "serializeNBT"(arg0: $CompoundTag$$Type, arg1: $HolderLookup$Provider$$Type): $CompoundTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISemiBlock$$Type = ($ISemiBlock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISemiBlock$$Original = $ISemiBlock;}
declare module "me.desht.pneumaticcraft.api.misc.IPlayerFilter" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IPlayerMatcher} from "me.desht.pneumaticcraft.api.misc.IPlayerMatcher"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$List, $List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IPlayerFilter$$Interface extends $Predicate$$Interface<($Player)> {
get "real"(): boolean
}

export class $IPlayerFilter implements $IPlayerFilter$$Interface {
 "matchAll"(): boolean
 "getDescription"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "matchers"(): $List<($IPlayerMatcher)>
 "isReal"(): boolean
 "or"(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
static "isEqual"<T>(arg0: any): $Predicate<($Player)>
 "negate"(): $Predicate<($Player)>
 "and"(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
static "not"<T>(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
 "test"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerFilter$$Type = ($IPlayerFilter);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerFilter$$Original = $IPlayerFilter;}
declare module "me.desht.pneumaticcraft.api.crafting.TemperatureRange" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$TemperatureRange$TemperatureScale$$Type} from "me.desht.pneumaticcraft.api.crafting.TemperatureRange$TemperatureScale"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"

export class $TemperatureRange {
static readonly "CODEC": $Codec<($TemperatureRange)>
static "STREAM_CODEC": $StreamCodec<($ByteBuf), ($TemperatureRange)>

public "isAny"(): boolean
public "hasMin"(): boolean
public "hasMax"(): boolean
public "inRange"(arg0: integer): boolean
public "inRange"(arg0: double): boolean
public static "invalid"(): $TemperatureRange
public static "min"(arg0: integer): $TemperatureRange
public static "max"(arg0: integer): $TemperatureRange
public static "of"(arg0: integer, arg1: integer): $TemperatureRange
public static "any"(): $TemperatureRange
public "getMax"(): integer
public "getMin"(): integer
public "asString"(arg0: $TemperatureRange$TemperatureScale$$Type): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureRange$$Type = ($TemperatureRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemperatureRange$$Original = $TemperatureRange;}
declare module "me.desht.pneumaticcraft.api.pressure.PressureTier" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $PressureTier$$Interface {
get "criticalPressure"(): float
get "dangerPressure"(): float
}

export class $PressureTier implements $PressureTier$$Interface {
static readonly "TIER_TWO": $PressureTier
static readonly "TIER_ONE_HALF": $PressureTier
static readonly "TIER_ONE": $PressureTier

 "getCriticalPressure"(): float
 "getDangerPressure"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureTier$$Type = ($PressureTier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureTier$$Original = $PressureTier;}
declare module "me.desht.pneumaticcraft.api.harvesting.HarvestHandler" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandler {
constructor()

public "harvestAndReplant"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
public "addFilterItems"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): $List<($ItemStack)>
public "harvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): void
public "canHarvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.PneumaticcraftHarvestHandlers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PneumaticcraftHarvestHandlersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandler$$Type = (Special.PneumaticcraftHarvestHandlers);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandler$$Original = $HarvestHandler;}
declare module "me.desht.pneumaticcraft.api.drone.AmadronRetrievalEvent" {
import {$IDrone, $IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Event} from "net.neoforged.bus.api.Event"

export class $AmadronRetrievalEvent extends $Event {
readonly "drone": $IDrone

constructor(arg0: $IDrone$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AmadronRetrievalEvent$$Type = ($AmadronRetrievalEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AmadronRetrievalEvent$$Original = $AmadronRetrievalEvent;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe$SlotCycle" {
import {$PressureChamberRecipe$RecipeSlot, $PressureChamberRecipe$RecipeSlot$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe$RecipeSlot"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"
import {$Record} from "java.lang.Record"

export class $PressureChamberRecipe$SlotCycle extends $Record {
constructor(slot: $PressureChamberRecipe$RecipeSlot$$Type, cycle: $IntList$$Type)

public "slot"(): $PressureChamberRecipe$RecipeSlot
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "cycle"(): $IntList
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipe$SlotCycle$$Type = ({"cycle"?: $IntList$$Type, "slot"?: $PressureChamberRecipe$RecipeSlot$$Type}) | ([cycle?: $IntList$$Type, slot?: $PressureChamberRecipe$RecipeSlot$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberRecipe$SlotCycle$$Original = $PressureChamberRecipe$SlotCycle;}
declare module "me.desht.pneumaticcraft.api.item.ICustomDurabilityBar" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $ICustomDurabilityBar$$Interface {
}

export class $ICustomDurabilityBar implements $ICustomDurabilityBar$$Interface {
 "shouldShowCustomDurabilityBar"(arg0: $ItemStack$$Type): boolean
 "getCustomDurabilityColour"(arg0: $ItemStack$$Type): integer
 "getCustomDurability"(arg0: $ItemStack$$Type): float
 "isShowingOtherBar"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ICustomDurabilityBar$$Type = ($ICustomDurabilityBar);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ICustomDurabilityBar$$Original = $ICustomDurabilityBar;}
declare module "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent$ItemVariable" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SpecialVariableRetrievalEvent} from "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent"

export class $SpecialVariableRetrievalEvent$ItemVariable extends $SpecialVariableRetrievalEvent {
readonly "specialVarName": StringJS

public "getItem"(): $ItemStack
get "item"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialVariableRetrievalEvent$ItemVariable$$Type = ($SpecialVariableRetrievalEvent$ItemVariable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialVariableRetrievalEvent$ItemVariable$$Original = $SpecialVariableRetrievalEvent$ItemVariable;}
declare module "me.desht.pneumaticcraft.api.tileentity.IAirListener" {
import {$List, $List$$Type} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$IAirHandlerMachine, $IAirHandlerMachine$$Type} from "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine"

export interface $IAirListener$$Interface {
}

export class $IAirListener implements $IAirListener$$Interface {
 "addConnectedPneumatics"(arg0: $List$$Type<($IAirHandlerMachine$$Type)>): $List<($IAirHandlerMachine)>
 "onAirDispersion"(arg0: $IAirHandlerMachine$$Type, arg1: $Direction$$Type, arg2: integer): void
 "getMaxDispersion"(arg0: $IAirHandlerMachine$$Type, arg1: $Direction$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirListener$$Type = ($IAirListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAirListener$$Original = $IAirListener;}
declare module "me.desht.pneumaticcraft.api.semiblock.IDirectionalSemiblock" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$ISemiBlock$$Type} from "me.desht.pneumaticcraft.api.semiblock.ISemiBlock"

export interface $IDirectionalSemiblock$$Interface {
get "side"(): $Direction
set "side"(value: $Direction$$Type)
}

export class $IDirectionalSemiblock implements $IDirectionalSemiblock$$Interface {
 "getSide"(): $Direction
 "setSide"(arg0: $Direction$$Type): void
static "getDirection"(arg0: $ISemiBlock$$Type): $Direction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDirectionalSemiblock$$Type = ($IDirectionalSemiblock);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDirectionalSemiblock$$Original = $IDirectionalSemiblock;}
declare module "me.desht.pneumaticcraft.api.misc.ITranslatableEnum" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITranslatableEnum$$Interface {

(): StringJS
get "translationKey"(): StringJS
}

export class $ITranslatableEnum implements $ITranslatableEnum$$Interface {
 "getTranslationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITranslatableEnum$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITranslatableEnum$$Original = $ITranslatableEnum;}
declare module "me.desht.pneumaticcraft.api.semiblock.SemiblockEvent$BreakEvent" {
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$SemiblockEvent} from "me.desht.pneumaticcraft.api.semiblock.SemiblockEvent"
import {$ISemiBlock$$Type} from "me.desht.pneumaticcraft.api.semiblock.ISemiBlock"

export class $SemiblockEvent$BreakEvent extends $SemiblockEvent {
constructor(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ISemiBlock$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemiblockEvent$BreakEvent$$Type = ($SemiblockEvent$BreakEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemiblockEvent$BreakEvent$$Original = $SemiblockEvent$BreakEvent;}
declare module "me.desht.pneumaticcraft.api.misc.IPlayerMatcher" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$IPlayerMatcher$MatcherType} from "me.desht.pneumaticcraft.api.misc.IPlayerMatcher$MatcherType"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$List$$Type} from "java.util.List"
import {$Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IPlayerMatcher$$Interface extends $Predicate$$Interface<($Player)> {
}

export class $IPlayerMatcher implements $IPlayerMatcher$$Interface {
static readonly "CODEC": $Codec<($IPlayerMatcher)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IPlayerMatcher)>

 "standardTooltip"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Component$$Type, arg3: $List$$Type<($Component$$Type)>): void
 "addDescription"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
 "type"(): $IPlayerMatcher$MatcherType<($IPlayerMatcher)>
 "or"(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
static "isEqual"<T>(arg0: any): $Predicate<($Player)>
 "negate"(): $Predicate<($Player)>
 "and"(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
static "not"<T>(arg0: $Predicate$$Type<($Player)>): $Predicate<($Player)>
 "test"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerMatcher$$Type = ($IPlayerMatcher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerMatcher$$Original = $IPlayerMatcher;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.ExplosionCraftingRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$SizedIngredient} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export class $ExplosionCraftingRecipe extends $PneumaticCraftRecipe {
constructor()

public "getLossRate"(): integer
public "getInput"(): $SizedIngredient
public "matches"(arg0: $ItemStack$$Type): boolean
public "getOutputs"(): $List<($ItemStack)>
public "getAmount"(): integer
get "lossRate"(): integer
get "input"(): $SizedIngredient
get "outputs"(): $List<($ItemStack)>
get "amount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ExplosionCraftingRecipe$$Type = ($ExplosionCraftingRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ExplosionCraftingRecipe$$Original = $ExplosionCraftingRecipe;}
declare module "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent" {
import {$Event} from "net.neoforged.bus.api.Event"

export class $SpecialVariableRetrievalEvent extends $Event {
readonly "specialVarName": StringJS

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialVariableRetrievalEvent$$Type = ($SpecialVariableRetrievalEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialVariableRetrievalEvent$$Original = $SpecialVariableRetrievalEvent;}
declare module "me.desht.pneumaticcraft.api.drone.ProgWidgetType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IProgWidget, $IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $ProgWidgetType<P extends $IProgWidget> {
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), ($IProgWidget)>
public "getTranslationKey"(): StringJS
public "cast"(arg0: $IProgWidget$$Type): P
public "create"(): P
public "codec"(): $MapCodec<($IProgWidget)>
public static "createType"<P extends $IProgWidget>(arg0: $Supplier$$Type<(P)>, arg1: $MapCodec$$Type<(P)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>): $ProgWidgetType<(P)>
get "translationKey"(): StringJS
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.PneumaticcraftProgWidgets
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PneumaticcraftProgWidgetsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProgWidgetType$$Type<P> = (Special.PneumaticcraftProgWidgets);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProgWidgetType$$Original<P> = $ProgWidgetType<(P)>;}
declare module "me.desht.pneumaticcraft.api.remote.BaseSettings" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Codec} from "com.mojang.serialization.Codec"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $BaseSettings extends $Record {
static readonly "CODEC": $Codec<($BaseSettings)>
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($BaseSettings)>
static readonly "DEFAULT": $BaseSettings

constructor(enableVariable: StringJS, enablingValue: $BlockPos$$Type)

public "enableVariable"(): StringJS
public "enablingValue"(): $BlockPos
public "withVariable"(arg0: StringJS): $BaseSettings
public "withEnablingValue"(arg0: $BlockPos$$Type): $BaseSettings
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BaseSettings$$Type = ({"enableVariable"?: StringJS, "enablingValue"?: $BlockPos$$Type}) | ([enableVariable?: StringJS, enablingValue?: $BlockPos$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BaseSettings$$Original = $BaseSettings;}
declare module "me.desht.pneumaticcraft.api.heat.HeatBehaviour" {
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$IHeatExchangerLogic, $IHeatExchangerLogic$$Type} from "me.desht.pneumaticcraft.api.heat.IHeatExchangerLogic"
import {$BlockState} from "net.minecraft.world.level.block.state.BlockState"

export class $HeatBehaviour {
constructor()

public "getHeatExchanger"(): $IHeatExchangerLogic
public "getCachedTileEntity"(): $BlockEntity
public "getWorld"(): $Level
public "tick"(): void
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public "initialize"(arg0: $IHeatExchangerLogic$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type): $HeatBehaviour
public "getId"(): $ResourceLocation
public "isApplicable"(): boolean
public "getDirection"(): $Direction
public "getBlockState"(): $BlockState
public "deserializeNBT"(arg0: $CompoundTag$$Type): void
public "serializeNBT"(): $CompoundTag
public "getPos"(): $BlockPos
get "heatExchanger"(): $IHeatExchangerLogic
get "cachedTileEntity"(): $BlockEntity
get "world"(): $Level
get "id"(): $ResourceLocation
get "applicable"(): boolean
get "direction"(): $Direction
get "blockState"(): $BlockState
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatBehaviour$$Type = ($HeatBehaviour);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatBehaviour$$Original = $HeatBehaviour;}
declare module "me.desht.pneumaticcraft.api.drone.IProgWidget$WidgetDifficulty" {
import {$Enum} from "java.lang.Enum"

export class $IProgWidget$WidgetDifficulty extends $Enum<($IProgWidget$WidgetDifficulty)> {
static readonly "EASY": $IProgWidget$WidgetDifficulty
static readonly "MEDIUM": $IProgWidget$WidgetDifficulty
static readonly "ADVANCED": $IProgWidget$WidgetDifficulty

public "getTooltipTranslationKey"(): StringJS
public "isNotMoreDifficult"(arg0: $IProgWidget$WidgetDifficulty$$Type): boolean
public "getTranslationKey"(): StringJS
public static "values"(): ($IProgWidget$WidgetDifficulty)[]
public static "valueOf"(arg0: StringJS): $IProgWidget$WidgetDifficulty
get "tooltipTranslationKey"(): StringJS
get "translationKey"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgWidget$WidgetDifficulty$$Type = (("easy") | ("medium") | ("advanced"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProgWidget$WidgetDifficulty$$Original = $IProgWidget$WidgetDifficulty;}
declare module "me.desht.pneumaticcraft.api.semiblock.SemiblockEvent" {
import {$Direction} from "net.minecraft.core.Direction"
import {$Event} from "net.neoforged.bus.api.Event"
import {$Level} from "net.minecraft.world.level.Level"
import {$BlockPos} from "net.minecraft.core.BlockPos"
import {$ISemiBlock} from "me.desht.pneumaticcraft.api.semiblock.ISemiBlock"

export class $SemiblockEvent extends $Event {
public "getSemiblock"(): $ISemiBlock
public "getWorld"(): $Level
public "getSide"(): $Direction
public "getPos"(): $BlockPos
get "semiblock"(): $ISemiBlock
get "world"(): $Level
get "side"(): $Direction
get "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SemiblockEvent$$Type = ($SemiblockEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SemiblockEvent$$Original = $SemiblockEvent;}
declare module "me.desht.pneumaticcraft.api.block.ITubeNetworkConnector" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $ITubeNetworkConnector$$Interface {

(arg0: $Level, arg1: $BlockPos, arg2: $Direction, arg3: $BlockState): boolean
}

export class $ITubeNetworkConnector implements $ITubeNetworkConnector$$Interface {
 "canConnectToNetwork"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $BlockState$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITubeNetworkConnector$$Type = ((arg0: $Level, arg1: $BlockPos, arg2: $Direction, arg3: $BlockState) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITubeNetworkConnector$$Original = $ITubeNetworkConnector;}
declare module "me.desht.pneumaticcraft.api.misc.IPneumaticCraftProbeable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IPneumaticCraftProbeable$$Interface {
}

export class $IPneumaticCraftProbeable implements $IPneumaticCraftProbeable$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPneumaticCraftProbeable$$Type = ($IPneumaticCraftProbeable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPneumaticCraftProbeable$$Original = $IPneumaticCraftProbeable;}
declare module "me.desht.pneumaticcraft.api.harvesting.HoeHandler$DefaultHoeHandler" {
import {$HoeHandler} from "me.desht.pneumaticcraft.api.harvesting.HoeHandler"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"

export class $HoeHandler$DefaultHoeHandler extends $HoeHandler {
constructor()

public "test"(arg0: any): boolean
public static "isEqual"<T>(arg0: any): $Predicate<(T)>
public static "not"<T>(arg0: $Predicate$$Type<(T)>): $Predicate<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HoeHandler$DefaultHoeHandler$$Type = ($HoeHandler$DefaultHoeHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HoeHandler$DefaultHoeHandler$$Original = $HoeHandler$DefaultHoeHandler;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe$Outputs" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$Record} from "java.lang.Record"

export class $ThermoPlantRecipe$Outputs extends $Record {
static readonly "CODEC": $Codec<($ThermoPlantRecipe$Outputs)>
static "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($ThermoPlantRecipe$Outputs)>

constructor(outputFluid: $FluidStack$$Type, outputItem: $ItemStack$$Type)

public "outputItem"(): $ItemStack
public "outputFluid"(): $FluidStack
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipe$Outputs$$Type = ({"outputItem"?: $ItemStack$$Type, "outputFluid"?: $FluidStack$$Type}) | ([outputItem?: $ItemStack$$Type, outputFluid?: $FluidStack$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoPlantRecipe$Outputs$$Original = $ThermoPlantRecipe$Outputs;}
declare module "me.desht.pneumaticcraft.api.remote.RemoteWidgetType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IRemoteWidget} from "me.desht.pneumaticcraft.api.remote.IRemoteWidget"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $RemoteWidgetType<R extends $IRemoteWidget> {
constructor(arg0: $MapCodec$$Type<(R)>, arg1: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (R)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (R)>
public "codec"(): $MapCodec<(R)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.PneumaticcraftRemoteWidgets
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PneumaticcraftRemoteWidgetsTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RemoteWidgetType$$Type<R> = (Special.PneumaticcraftRemoteWidgets);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RemoteWidgetType$$Original<R> = $RemoteWidgetType<(R)>;}
declare module "me.desht.pneumaticcraft.api.drone.DroneConstructingEvent" {
import {$IDrone, $IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Event} from "net.neoforged.bus.api.Event"

export class $DroneConstructingEvent extends $Event {
readonly "drone": $IDrone

constructor(arg0: $IDrone$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneConstructingEvent$$Type = ($DroneConstructingEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneConstructingEvent$$Original = $DroneConstructingEvent;}
declare module "me.desht.pneumaticcraft.api.drone.IDrone" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID} from "java.util.UUID"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$FakePlayer} from "net.neoforged.neoforge.common.util.FakePlayer"
import {$SoundEvent$$Type} from "net.minecraft.sounds.SoundEvent"
import {$Player} from "net.minecraft.world.entity.player.Player"
import {$Vec3} from "net.minecraft.world.phys.Vec3"
import {$IProgWidget, $IProgWidget$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget"
import {$SoundSource$$Type} from "net.minecraft.sounds.SoundSource"
import {$GoalSelector} from "net.minecraft.world.entity.ai.goal.GoalSelector"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IPathNavigator} from "me.desht.pneumaticcraft.api.drone.IPathNavigator"
import {$ProgWidgetType$$Type} from "me.desht.pneumaticcraft.api.drone.ProgWidgetType"
import {$IDroneDebugger} from "me.desht.pneumaticcraft.api.drone.debug.IDroneDebugger"
import {$ItemEntity$$Type} from "net.minecraft.world.entity.item.ItemEntity"
import {$PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$FluidTank} from "net.neoforged.neoforge.fluids.capability.templates.FluidTank"
import {$IItemHandlerModifiable} from "net.neoforged.neoforge.items.IItemHandlerModifiable"
import {$IEnergyStorage} from "net.neoforged.neoforge.energy.IEnergyStorage"

export interface $IDrone$$Interface {
get "energyStorage"(): $IEnergyStorage
get "controllerPos"(): $BlockPos
get "fluidTank"(): $FluidTank
get "droneStillValid"(): boolean
get "debugger"(): $IDroneDebugger
get "deployPos"(): $BlockPos
get "droneLevel"(): $Level
get "dronePos"(): $Vec3
get "pathNavigator"(): $IPathNavigator
set "dugBlock"(value: $BlockPos$$Type)
get "progWidgets"(): $List<($IProgWidget)>
set "activeProgram"(value: $IProgWidget$$Type)
get "targetAI"(): $GoalSelector
set "carryingEntity"(value: $Entity$$Type)
get "carryingEntities"(): $List<($Entity)>
get "AIOverridden"(): boolean
get "dronePressure"(): float
get "activeWidgetIndex"(): integer
get "droneName"(): $Component
get "activeWidget"(): $IProgWidget
get "ownerUUID"(): $UUID
get "label"(): StringJS
set "name"(value: $Component$$Type)
get "owner"(): $Player
get "fakePlayer"(): $FakePlayer
get "inv"(): $IItemHandlerModifiable
}

export class $IDrone implements $IDrone$$Interface {
 "getEnergyStorage"(): $IEnergyStorage
 "getControllerPos"(): $BlockPos
 "getFluidTank"(): $FluidTank
 "getUpgrades"(arg0: $PNCUpgrade$$Type): integer
 "setEmittingRedstone"(arg0: $Direction$$Type, arg1: integer): void
 "getEmittingRedstone"(arg0: $Direction$$Type): integer
 "isDroneStillValid"(): boolean
 "getDebugger"(): $IDroneDebugger
 "onVariableChanged"(arg0: StringJS, arg1: boolean): void
 "getDeployPos"(): $BlockPos
 "getDroneLevel"(): $Level
 "getDronePos"(): $Vec3
 "getPathNavigator"(): $IPathNavigator
 "sendWireframeToClient"(arg0: $BlockPos$$Type): void
 "isBlockValidPathfindBlock"(arg0: $BlockPos$$Type): boolean
 "setDugBlock"(arg0: $BlockPos$$Type): void
 "setDugBlock"(arg0: $BlockPos$$Type, arg1: $Direction$$Type): void
 "getProgWidgets"(): $List<($IProgWidget)>
 "setActiveProgram"(arg0: $IProgWidget$$Type): void
 "isProgramApplicable"(arg0: $ProgWidgetType$$Type<(never)>): boolean
 "getTargetAI"(): $GoalSelector
 "setCarryingEntity"(arg0: $Entity$$Type): void
 "getCarryingEntities"(): $List<($Entity)>
 "isAIOverridden"(): boolean
 "onItemPickupEvent"(arg0: $ItemEntity$$Type, arg1: integer): void
 "overload"(arg0: StringJS, ...arg1: (any)[]): void
 "updateLabel"(): void
 "addAirToDrone"(arg0: integer): void
 "canMoveIntoFluid"(arg0: $Fluid$$Type): boolean
 "getDronePressure"(): float
 "getActiveWidgetIndex"(): integer
 "getDroneName"(): $Component
 "storeTrackerData"(arg0: $ItemStack$$Type): void
 "getActiveWidget"(): $IProgWidget
 "resetAttackCount"(): void
 "dropItem"(arg0: $ItemStack$$Type): void
 "getOwnerUUID"(): $UUID
 "getLabel"(): StringJS
 "setName"(arg0: $Component$$Type): void
 "getOwner"(): $Player
 "playSound"(arg0: $SoundEvent$$Type, arg1: $SoundSource$$Type, arg2: float, arg3: float): void
 "getFakePlayer"(): $FakePlayer
 "getInv"(): $IItemHandlerModifiable
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDrone$$Type = ($IDrone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDrone$$Original = $IDrone;}
declare module "me.desht.pneumaticcraft.api.misc.IVariableProvider" {
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$UUID$$Type} from "java.util.UUID"
import {$BlockPos} from "net.minecraft.core.BlockPos"

export interface $IVariableProvider$$Interface {
}

export class $IVariableProvider implements $IVariableProvider$$Interface {
 "getStack"(arg0: $UUID$$Type, arg1: StringJS): $ItemStack
 "getCoordinate"(arg0: $UUID$$Type, arg1: StringJS): $Optional<($BlockPos)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IVariableProvider$$Type = ($IVariableProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IVariableProvider$$Original = $IVariableProvider;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$TemperatureRange} from "me.desht.pneumaticcraft.api.crafting.TemperatureRange"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Optional} from "java.util.Optional"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$ThermoPlantRecipe$Inputs} from "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe$Inputs"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$ThermoPlantRecipe$Outputs} from "me.desht.pneumaticcraft.api.crafting.recipe.ThermoPlantRecipe$Outputs"

export class $ThermoPlantRecipe extends $PneumaticCraftRecipe {
constructor()

public "getInputFluidAmount"(): integer
public "getOperatingTemperature"(): $TemperatureRange
public "getRecipeSpeed"(): float
public "airUsed"(): integer
public "getAirUseMultiplier"(): float
public "heatUsed"(arg0: double): double
public "getOutputFluid"(): $FluidStack
public "getOutputItem"(): $ItemStack
public "getInputItem"(): $Optional<($Ingredient)>
public "getRequiredPressure"(): float
public "testItem"(arg0: $ItemStack$$Type): boolean
public "isExothermic"(): boolean
public "getInputFluid"(): $Optional<($SizedFluidIngredient)>
public "testFluid"(arg0: $FluidStack$$Type): boolean
public "inputs"(): $ThermoPlantRecipe$Inputs
public "matches"(arg0: $FluidStack$$Type, arg1: $ItemStack$$Type): boolean
public "outputs"(): $ThermoPlantRecipe$Outputs
get "inputFluidAmount"(): integer
get "operatingTemperature"(): $TemperatureRange
get "recipeSpeed"(): float
get "airUseMultiplier"(): float
get "outputFluid"(): $FluidStack
get "outputItem"(): $ItemStack
get "inputItem"(): $Optional<($Ingredient)>
get "requiredPressure"(): float
get "exothermic"(): boolean
get "inputFluid"(): $Optional<($SizedFluidIngredient)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ThermoPlantRecipe$$Type = ($ThermoPlantRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ThermoPlantRecipe$$Original = $ThermoPlantRecipe;}
declare module "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Collection$$Type} from "java.util.Collection"
import {$List, $List$$Type} from "java.util.List"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IAirHandler$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IAirHandler"
import {$IAirHandlerMachine$Connection} from "me.desht.pneumaticcraft.api.tileentity.IAirHandlerMachine$Connection"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IManoMeasurable$$Interface} from "me.desht.pneumaticcraft.api.tileentity.IManoMeasurable"
import {$FloatPredicate$$Type} from "it.unimi.dsi.fastutil.floats.FloatPredicate"
import {$Tag} from "net.minecraft.nbt.Tag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export interface $IAirHandlerMachine$$Interface extends $IAirHandler$$Interface, $IManoMeasurable$$Interface {
set "sideLeaking"(value: $Direction$$Type)
set "connectableFaces"(value: $Collection$$Type<($Direction$$Type)>)
set "pressure"(value: float)
get "criticalPressure"(): float
set "volumeUpgrades"(value: integer)
get "dangerPressure"(): float
get "sideLeaking"(): $Direction
get "pressure"(): float
get "baseVolume"(): integer
set "baseVolume"(value: integer)
get "air"(): integer
get "volume"(): integer
}

export class $IAirHandlerMachine implements $IAirHandlerMachine$$Interface {
 "addPendingAir"(arg0: integer): void
 "setSideLeaking"(arg0: $Direction$$Type): void
 "enableSafetyVenting"(arg0: $FloatPredicate$$Type, arg1: $Direction$$Type): void
 "disableSafetyVenting"(): void
 "setConnectableFaces"(arg0: $Collection$$Type<($Direction$$Type)>): void
 "setPressure"(arg0: float): void
 "getCriticalPressure"(): float
 "getConnectedAirHandlers"(arg0: $BlockEntity$$Type): $List<($IAirHandlerMachine$Connection)>
 "setVolumeUpgrades"(arg0: integer): void
 "getDangerPressure"(): float
 "getSideLeaking"(): $Direction
 "tick"(arg0: $BlockEntity$$Type): void
 "deserializeNBT"(arg0: $CompoundTag$$Type): void
 "serializeNBT"(): $Tag
 "getPressure"(): float
 "getBaseVolume"(): integer
 "setBaseVolume"(arg0: integer): void
 "maxPressure"(): float
 "addAir"(arg0: integer): void
 "getAir"(): integer
 "getVolume"(): integer
 "printManometerMessage"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirHandlerMachine$$Type = ($IAirHandlerMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAirHandlerMachine$$Original = $IAirHandlerMachine;}
declare module "me.desht.pneumaticcraft.api.drone.IProgWidget" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$List, $List$$Type} from "java.util.List"
import {$DyeColor} from "net.minecraft.world.item.DyeColor"
import {$Goal} from "net.minecraft.world.entity.ai.goal.Goal"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$IProgWidget$WidgetDifficulty, $IProgWidget$WidgetDifficulty$$Type} from "me.desht.pneumaticcraft.api.drone.IProgWidget$WidgetDifficulty"
import {$ProgWidgetType, $ProgWidgetType$$Type} from "me.desht.pneumaticcraft.api.drone.ProgWidgetType"

export interface $IProgWidget$$Interface {
get "typeID"(): $ResourceLocation
get "connectedParameters"(): ($IProgWidget)[]
get "extraStringInfo"(): $List<($Component)>
get "maxUV"(): $Pair<(float), (float)>
set "outputWidget"(value: $IProgWidget$$Type)
get "outputWidget"(): $IProgWidget
set "x"(value: integer)
get "translationKey"(): StringJS
get "width"(): integer
get "height"(): integer
get "available"(): boolean
set "parent"(value: $IProgWidget$$Type)
get "y"(): integer
get "parent"(): $IProgWidget
get "type"(): $ProgWidgetType<(never)>
get "parameters"(): $List<($ProgWidgetType<(never)>)>
get "texture"(): $ResourceLocation
get "x"(): integer
get "color"(): $DyeColor
get "difficulty"(): $IProgWidget$WidgetDifficulty
set "y"(value: integer)
}

export class $IProgWidget implements $IProgWidget$$Interface {
 "freeToUse"(): boolean
 "getTypeID"(): $ResourceLocation
 "hasStepInput"(): boolean
 "hasStepOutput"(): boolean
 "getConnectedParameters"(): ($IProgWidget)[]
 "getWidgetAI"(arg0: $IDrone$$Type, arg1: $IProgWidget$$Type): $Goal
 "getExtraStringInfo"(): $List<($Component)>
 "addWarnings"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($IProgWidget$$Type)>): void
 "addErrors"(arg0: $List$$Type<($Component$$Type)>, arg1: $List$$Type<($IProgWidget$$Type)>): void
 "getMaxUV"(): $Pair<(float), (float)>
 "getWidgetTargetAI"(arg0: $IDrone$$Type, arg1: $IProgWidget$$Type): $Goal
 "canSetParameter"(arg0: integer): boolean
 "setOutputWidget"(arg0: $IProgWidget$$Type): void
 "getOutputWidget"(arg0: $IDrone$$Type, arg1: $List$$Type<($IProgWidget$$Type)>): $IProgWidget
 "getOutputWidget"(): $IProgWidget
 "copyWidget"(): $IProgWidget
 "canBeRunByComputers"(arg0: $IDrone$$Type, arg1: $IProgWidget$$Type): boolean
 "isDifficultyOK"(arg0: $IProgWidget$WidgetDifficulty$$Type): boolean
 "setX"(arg0: integer): void
 "getTranslationKey"(): StringJS
 "getWidth"(): integer
 "getHeight"(): integer
 "isAvailable"(): boolean
 "setParent"(arg0: $IProgWidget$$Type): void
 "setParameter"(arg0: integer, arg1: $IProgWidget$$Type): void
 "getY"(): integer
 "returnType"(): $ProgWidgetType<(never)>
 "getParent"(): $IProgWidget
 "getType"(): $ProgWidgetType<(never)>
 "getParameters"(): $List<($ProgWidgetType<(never)>)>
static "create"(arg0: $ProgWidgetType$$Type<(never)>): $IProgWidget
 "getTexture"(): $ResourceLocation
 "getX"(): integer
 "getColor"(): $DyeColor
 "getDifficulty"(): $IProgWidget$WidgetDifficulty
 "getTooltip"(arg0: $List$$Type<($Component$$Type)>): void
 "setY"(arg0: integer): void
 "setPosition"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IProgWidget$$Type = ($IProgWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IProgWidget$$Original = $IProgWidget;}
declare module "me.desht.pneumaticcraft.api.tileentity.IManoMeasurable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$List, $List$$Type} from "java.util.List"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"

export interface $IManoMeasurable$$Interface {

(arg0: $Player, arg1: $List<($Component)>): void
}

export class $IManoMeasurable implements $IManoMeasurable$$Interface {
 "printManometerMessage"(arg0: $Player$$Type, arg1: $List$$Type<($Component$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IManoMeasurable$$Type = ((arg0: $Player, arg1: $List<($Component)>) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IManoMeasurable$$Original = $IManoMeasurable;}
declare module "me.desht.pneumaticcraft.api.drone.debug.DroneDebugEntry" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"

export class $DroneDebugEntry extends $Record {
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($DroneDebugEntry)>

constructor(progWidgetIndex: integer, message: StringJS, pos: ($BlockPos$$Type)?, receivedTime: long)

public "progWidgetIndex"(): integer
public "receivedTime"(): long
public "hasPos"(): boolean
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "message"(): StringJS
public static "create"(arg0: StringJS, arg1: $BlockPos$$Type, arg2: integer): $DroneDebugEntry
public "pos"(): $Optional<($BlockPos)>
public "getPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneDebugEntry$$Type = ({"receivedTime"?: long, "message"?: StringJS, "progWidgetIndex"?: integer, "pos"?: ($BlockPos$$Type)?}) | ([receivedTime?: long, message?: StringJS, progWidgetIndex?: integer, pos?: ($BlockPos$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneDebugEntry$$Original = $DroneDebugEntry;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe" {
import {$CraftingInput$$Type} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$RecipeInput$$Type} from "net.minecraft.world.item.crafting.RecipeInput"
import {$RecipeType} from "net.minecraft.world.item.crafting.RecipeType"
import {$CraftingBookCategory} from "net.minecraft.world.item.crafting.CraftingBookCategory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$CraftingRecipe$$Interface} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$RecipeSerializer} from "net.minecraft.world.item.crafting.RecipeSerializer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PneumaticCraftRecipe implements $CraftingRecipe$$Interface {
public "assemble"(arg0: $CraftingInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "assemble"(arg0: $RecipeInput$$Type, arg1: $HolderLookup$Provider$$Type): $ItemStack
public "canCraftInDimensions"(arg0: integer, arg1: integer): boolean
public "getResultItem"(arg0: $HolderLookup$Provider$$Type): $ItemStack
public "category"(): $CraftingBookCategory
public "matches"(arg0: $RecipeInput$$Type, arg1: $Level$$Type): boolean
public "matches"(arg0: $CraftingInput$$Type, arg1: $Level$$Type): boolean
public "isSpecial"(): boolean
public "getType"(): $RecipeType<(never)>
public "getRemainingItems"(arg0: $CraftingInput$$Type): $NonNullList<($ItemStack)>
public "getSerializer"(): $RecipeSerializer<(never)>
public "getIngredients"(): $NonNullList<($Ingredient)>
public "showNotification"(): boolean
public "getToastSymbol"(): $ItemStack
public "isIncomplete"(): boolean
public "getGroup"(): StringJS
get "special"(): boolean
get "type"(): $RecipeType<(never)>
get "serializer"(): $RecipeSerializer<(never)>
get "ingredients"(): $NonNullList<($Ingredient)>
get "toastSymbol"(): $ItemStack
get "incomplete"(): boolean
get "group"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PneumaticCraftRecipe$$Type = ($PneumaticCraftRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PneumaticCraftRecipe$$Original = $PneumaticCraftRecipe;}
declare module "me.desht.pneumaticcraft.api.item.IPositionProvider" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$UUID, $UUID$$Type} from "java.util.UUID"
import {$List, $List$$Type} from "java.util.List"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IPositionProvider$$Interface {

(arg0: $UUID, arg1: $ItemStack): $List$$Type<($BlockPos$$Type)>
}

export class $IPositionProvider implements $IPositionProvider$$Interface {
 "getStoredPositions"(arg0: $UUID$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
 "getRenderColor"(arg0: integer): integer
 "syncVariables"(arg0: $ServerPlayer$$Type, arg1: $ItemStack$$Type): void
 "getRawStoredPositions"(arg0: $Player$$Type, arg1: $ItemStack$$Type): $List<($BlockPos)>
 "disableDepthTest"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPositionProvider$$Type = ((arg0: $UUID, arg1: $ItemStack) => $List$$Type<($BlockPos$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPositionProvider$$Original = $IPositionProvider;}
declare module "me.desht.pneumaticcraft.api.harvesting.HarvestHandler$SimpleHarvestHandler" {
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$HarvestHandler} from "me.desht.pneumaticcraft.api.harvesting.HarvestHandler"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HarvestHandler$SimpleHarvestHandler extends $HarvestHandler {
constructor(...arg0: ($Block$$Type)[])

public "canHarvest"(arg0: $Level$$Type, arg1: $BlockGetter$$Type, arg2: $BlockPos$$Type, arg3: $BlockState$$Type, arg4: $IDrone$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HarvestHandler$SimpleHarvestHandler$$Type = ($HarvestHandler$SimpleHarvestHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HarvestHandler$SimpleHarvestHandler$$Original = $HarvestHandler$SimpleHarvestHandler;}
declare module "me.desht.pneumaticcraft.api.pneumatic_armor.hacking.IHackableEntity" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$Class} from "java.lang.Class"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"

export interface $IHackableEntity$$Interface<T extends $Entity> {
get "hackableId"(): $ResourceLocation
get "hackableClass"(): $Class<(T)>
}

export class $IHackableEntity<T extends $Entity> implements $IHackableEntity$$Interface {
 "canHack"(arg0: $Entity$$Type, arg1: $Player$$Type): boolean
 "onHackFinished"(arg0: T, arg1: $Player$$Type): void
 "getHackTime"(arg0: T, arg1: $Player$$Type): integer
 "addPostHackInfo"(arg0: T, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
 "addHackInfo"(arg0: T, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
 "getHackableId"(): $ResourceLocation
 "getHackableClass"(): $Class<(T)>
 "afterHackTick"(arg0: T): boolean
 "_afterHackTick"(arg0: $Entity$$Type): boolean
 "_getHackTime"(arg0: $Entity$$Type, arg1: $Player$$Type): integer
 "_onHackFinished"(arg0: $Entity$$Type, arg1: $Player$$Type): void
 "_addHackInfo"(arg0: $Entity$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
 "_addPostHackInfo"(arg0: $Entity$$Type, arg1: $List$$Type<($Component$$Type)>, arg2: $Player$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IHackableEntity$$Type<T> = ($IHackableEntity<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IHackableEntity$$Original<T> = $IHackableEntity<(T)>;}
declare module "me.desht.pneumaticcraft.api.remote.IRemoteWidget" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$WidgetSettings} from "me.desht.pneumaticcraft.api.remote.WidgetSettings"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$BaseSettings} from "me.desht.pneumaticcraft.api.remote.BaseSettings"
import {$UUID$$Type} from "java.util.UUID"
import {$Set$$Type} from "java.util.Set"
import {$RemoteWidgetType, $RemoteWidgetType$$Type} from "me.desht.pneumaticcraft.api.remote.RemoteWidgetType"

export interface $IRemoteWidget$$Interface {
get "translationKey"(): StringJS
get "type"(): $RemoteWidgetType<($IRemoteWidget)>
}

export class $IRemoteWidget implements $IRemoteWidget$$Interface {
static readonly "CODEC": $Codec<($IRemoteWidget)>
static readonly "TRAY_WIDGET_X": integer
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($IRemoteWidget)>

static "getTooltipTranslationKey"(arg0: $RemoteWidgetType$$Type<(never)>): StringJS
 "discoverVariables"(arg0: $Set$$Type<(StringJS)>, arg1: $UUID$$Type): void
 "widgetSettings"(): $WidgetSettings
 "copyToPos"(arg0: integer, arg1: integer): $IRemoteWidget
 "baseSettings"(): $BaseSettings
 "hasConfigurableText"(): boolean
static "getTranslationKey"(arg0: $RemoteWidgetType$$Type<(never)>): StringJS
 "getTranslationKey"(): StringJS
 "isEnabled"(arg0: $Player$$Type): boolean
 "getType"(): $RemoteWidgetType<($IRemoteWidget)>
 "copy"(): $IRemoteWidget
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRemoteWidget$$Type = ($IRemoteWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRemoteWidget$$Original = $IRemoteWidget;}
declare module "me.desht.pneumaticcraft.api.drone.debug.IDroneDebugger" {
import {$Collection} from "java.util.Collection"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$DroneDebugEntry, $DroneDebugEntry$$Type} from "me.desht.pneumaticcraft.api.drone.debug.DroneDebugEntry"
import {$ServerPlayer, $ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $IDroneDebugger$$Interface {
get "debuggingPlayers"(): $Collection<($ServerPlayer)>
}

export class $IDroneDebugger implements $IDroneDebugger$$Interface {
 "getDebuggingPlayers"(): $Collection<($ServerPlayer)>
 "getDebugEntry"(arg0: integer): $DroneDebugEntry
 "trackAsDebugged"(arg0: $ServerPlayer$$Type): void
 "addEntry"(arg0: $DroneDebugEntry$$Type): void
 "addEntry"(arg0: StringJS, arg1: $BlockPos$$Type): void
 "addEntry"(arg0: StringJS): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IDroneDebugger$$Type = ($IDroneDebugger);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IDroneDebugger$$Original = $IDroneDebugger;}
declare module "me.desht.pneumaticcraft.api.block.IPneumaticWrenchable" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionHand, $InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $IPneumaticWrenchable$$Interface {

(arg0: $Level, arg1: $Player, arg2: $BlockPos, arg3: $Direction, arg4: $InteractionHand): boolean
}

export class $IPneumaticWrenchable implements $IPneumaticWrenchable$$Interface {
static "forBlock"(arg0: $Block$$Type): $IPneumaticWrenchable
 "onWrenched"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $Direction$$Type, arg4: $InteractionHand$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPneumaticWrenchable$$Type = ((arg0: $Level, arg1: $Player, arg2: $BlockPos, arg3: $Direction, arg4: $InteractionHand) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPneumaticWrenchable$$Original = $IPneumaticWrenchable;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$AssemblyRecipe$AssemblyProgramType} from "me.desht.pneumaticcraft.api.crafting.recipe.AssemblyRecipe$AssemblyProgramType"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SizedIngredient} from "net.neoforged.neoforge.common.crafting.SizedIngredient"

export class $AssemblyRecipe extends $PneumaticCraftRecipe {
constructor()

public "getInputAmount"(): integer
public "getProgramType"(): $AssemblyRecipe$AssemblyProgramType
public "getInput"(): $SizedIngredient
public "getOutput"(): $ItemStack
public "matches"(arg0: $ItemStack$$Type): boolean
get "inputAmount"(): integer
get "programType"(): $AssemblyRecipe$AssemblyProgramType
get "input"(): $SizedIngredient
get "output"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AssemblyRecipe$$Type = ($AssemblyRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AssemblyRecipe$$Original = $AssemblyRecipe;}
declare module "me.desht.pneumaticcraft.api.upgrade.IUpgradeItem" {
import {$PNCUpgrade, $PNCUpgrade$$Type} from "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade"

export interface $IUpgradeItem$$Interface {

(): $PNCUpgrade$$Type
get "upgradeTier"(): integer
get "upgradeType"(): $PNCUpgrade
}

export class $IUpgradeItem implements $IUpgradeItem$$Interface {
 "getUpgradeTier"(): integer
 "getUpgradeType"(): $PNCUpgrade
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IUpgradeItem$$Type = (() => $PNCUpgrade$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IUpgradeItem$$Original = $IUpgradeItem;}
declare module "me.desht.pneumaticcraft.api.crafting.ingredient.FluidContainerIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$IngredientType} from "net.neoforged.neoforge.common.crafting.IngredientType"
import {$ItemStackSet} from "dev.latvian.mods.kubejs.item.ItemStackSet"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidContainerIngredient$TagWithAmount, $FluidContainerIngredient$TagWithAmount$$Type} from "me.desht.pneumaticcraft.api.crafting.ingredient.FluidContainerIngredient$TagWithAmount"
import {$Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$ICustomIngredient$$Interface} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$ItemPredicate} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$Set} from "java.util.Set"
import {$Stream} from "java.util.stream.Stream"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $FluidContainerIngredient extends $Record implements $ICustomIngredient$$Interface {
static readonly "CODEC": $Codec<($FluidContainerIngredient)>
static readonly "MAP_CODEC": $MapCodec<($FluidContainerIngredient)>
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidContainerIngredient)>

constructor(either: $Either$$Type<($FluidStack$$Type), ($FluidContainerIngredient$TagWithAmount$$Type)>)

public "getItems"(): $Stream<($ItemStack)>
public "amount"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public static "of"(arg0: $TagKey$$Type<($Fluid)>, arg1: integer): $FluidContainerIngredient
public static "of"(arg0: $Fluid$$Type, arg1: integer): $FluidContainerIngredient
public "getType"(): $IngredientType<(never)>
public "isSimple"(): boolean
public "either"(): $Either<($FluidStack), ($FluidContainerIngredient$TagWithAmount)>
public "toVanilla"(): $Ingredient
public "asIngredient"(): $Ingredient
public "canBeUsedForMatching"(): boolean
public "getStackArray"(): ($ItemStack)[]
public "getDisplayStacks"(): $ItemStackSet
public "getStacks"(): $ItemStackSet
public "testItem"(item: $Item$$Type): boolean
public "getItemStream"(): $Stream<($Item)>
public "getItemTypes"(): $Set<($Item)>
public "getItemIds"(): $Set<(StringJS)>
public "getFirst"(): $ItemStack
public "test"(itemStack: any): boolean
public static "wrap"(from: any): $ItemPredicate
public "isWildcard"(): boolean
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
get "items"(): $Stream<($ItemStack)>
get "type"(): $IngredientType<(never)>
get "simple"(): boolean
get "stackArray"(): ($ItemStack)[]
get "displayStacks"(): $ItemStackSet
get "stacks"(): $ItemStackSet
get "itemStream"(): $Stream<($Item)>
get "itemTypes"(): $Set<($Item)>
get "itemIds"(): $Set<(StringJS)>
get "first"(): $ItemStack
get "wildcard"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidContainerIngredient$$Type = ({"either"?: $Either$$Type<($FluidStack$$Type), ($FluidContainerIngredient$TagWithAmount$$Type)>}) | ([either?: $Either$$Type<($FluidStack$$Type), ($FluidContainerIngredient$TagWithAmount$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidContainerIngredient$$Original = $FluidContainerIngredient;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.HeatPropertiesRecipe$Transforms" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $HeatPropertiesRecipe$Transforms extends $Record {
static readonly "CODEC": $Codec<($HeatPropertiesRecipe$Transforms)>
static readonly "NONE": $HeatPropertiesRecipe$Transforms
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($HeatPropertiesRecipe$Transforms)>

constructor(hot: ($BlockState$$Type)?, cold: ($BlockState$$Type)?, hotFlowing: ($BlockState$$Type)?, coldFlowing: ($BlockState$$Type)?)

public "cold"(): $Optional<($BlockState)>
public "hot"(): $Optional<($BlockState)>
public "hotFlowing"(): $Optional<($BlockState)>
public "coldFlowing"(): $Optional<($BlockState)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HeatPropertiesRecipe$Transforms$$Type = ({"hotFlowing"?: ($BlockState$$Type)?, "coldFlowing"?: ($BlockState$$Type)?, "cold"?: ($BlockState$$Type)?, "hot"?: ($BlockState$$Type)?}) | ([hotFlowing?: ($BlockState$$Type)?, coldFlowing?: ($BlockState$$Type)?, cold?: ($BlockState$$Type)?, hot?: ($BlockState$$Type)?]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HeatPropertiesRecipe$Transforms$$Original = $HeatPropertiesRecipe$Transforms;}
declare module "me.desht.pneumaticcraft.api.drone.area.AreaTypeWidget" {
import {$Component} from "net.minecraft.network.chat.Component"

export class $AreaTypeWidget {
constructor(arg0: StringJS)

public "getTranslationKey"(): StringJS
public "getDisplayName"(): $Component
get "translationKey"(): StringJS
get "displayName"(): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaTypeWidget$$Type = ($AreaTypeWidget);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AreaTypeWidget$$Original = $AreaTypeWidget;}
declare module "me.desht.pneumaticcraft.api.pressure.IPressurizableItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IPressurizableItem$$Interface {
get "baseVolume"(): integer
get "maxPressure"(): float
}

export class $IPressurizableItem implements $IPressurizableItem$$Interface {
 "getPressure"(arg0: $ItemStack$$Type): float
 "getBaseVolume"(): integer
 "getVolumeUpgrades"(arg0: $ItemStack$$Type): integer
 "getMaxPressure"(): float
 "getEffectiveVolume"(arg0: $ItemStack$$Type): integer
 "getAir"(arg0: $ItemStack$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPressurizableItem$$Type = ($IPressurizableItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPressurizableItem$$Original = $IPressurizableItem;}
declare module "me.desht.pneumaticcraft.api.misc.IPlayerMatcher$MatcherType" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$IPlayerMatcher} from "me.desht.pneumaticcraft.api.misc.IPlayerMatcher"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $IPlayerMatcher$MatcherType<P extends $IPlayerMatcher> extends $Record {
constructor(codec: $MapCodec$$Type<(P)>, streamCodec: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>)

public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (P)>
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "codec"(): $MapCodec<(P)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.PneumaticcraftPlayerMatchers
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PneumaticcraftPlayerMatchersTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IPlayerMatcher$MatcherType$$Type<P> = (Special.PneumaticcraftPlayerMatchers) | ({"streamCodec"?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>, "codec"?: $MapCodec$$Type<(P)>}) | ([streamCodec?: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (P)>, codec?: $MapCodec$$Type<(P)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IPlayerMatcher$MatcherType$$Original<P> = $IPlayerMatcher$MatcherType<(P)>;}
declare module "me.desht.pneumaticcraft.api.client.pneumatic_helmet.FluidTrackEvent" {
import {$ICancellableEvent$$Interface} from "net.neoforged.bus.api.ICancellableEvent"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Event} from "net.neoforged.bus.api.Event"
import {$IFluidHandler} from "net.neoforged.neoforge.fluids.capability.IFluidHandler"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $FluidTrackEvent extends $Event implements $ICancellableEvent$$Interface {
constructor(arg0: $BlockEntity$$Type)

public "getFluidHandler"(): $IFluidHandler
public "getFluidHandler"(arg0: $Direction$$Type): $IFluidHandler
public "setCanceled"(arg0: boolean): void
public "isCanceled"(): boolean
get "fluidHandler"(): $IFluidHandler
set "canceled"(value: boolean)
get "canceled"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidTrackEvent$$Type = ($FluidTrackEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidTrackEvent$$Original = $FluidTrackEvent;}
declare module "me.desht.pneumaticcraft.api.client.IFOVModifierItem" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EquipmentSlot, $EquipmentSlot$$Type} from "net.minecraft.world.entity.EquipmentSlot"

export interface $IFOVModifierItem$$Interface {

(arg0: $ItemStack, arg1: $Player, arg2: $EquipmentSlot): float
}

export class $IFOVModifierItem implements $IFOVModifierItem$$Interface {
 "getFOVModifier"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $EquipmentSlot$$Type): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFOVModifierItem$$Type = ((arg0: $ItemStack, arg1: $Player, arg2: $EquipmentSlot) => float);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFOVModifierItem$$Original = $IFOVModifierItem;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.FluidMixerRecipe" {
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SizedFluidIngredient} from "net.neoforged.neoforge.fluids.crafting.SizedFluidIngredient"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"

export class $FluidMixerRecipe extends $PneumaticCraftRecipe {
constructor()

public "getOutputFluid"(): $FluidStack
public "getOutputItem"(): $ItemStack
public "getRequiredPressure"(): float
public "getInput1"(): $SizedFluidIngredient
public "getInput2"(): $SizedFluidIngredient
public "getProcessingTime"(): integer
public "matches"(arg0: $FluidStack$$Type, arg1: $FluidStack$$Type): boolean
get "outputFluid"(): $FluidStack
get "outputItem"(): $ItemStack
get "requiredPressure"(): float
get "input1"(): $SizedFluidIngredient
get "input2"(): $SizedFluidIngredient
get "processingTime"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidMixerRecipe$$Type = ($FluidMixerRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidMixerRecipe$$Original = $FluidMixerRecipe;}
declare module "me.desht.pneumaticcraft.api.heat.TemperatureListener" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TemperatureListener$$Interface {

(arg0: double, arg1: double): void
}

export class $TemperatureListener implements $TemperatureListener$$Interface {
 "onTemperatureChanged"(arg0: double, arg1: double): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureListener$$Type = ((arg0: double, arg1: double) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemperatureListener$$Original = $TemperatureListener;}
declare module "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent$CoordinateVariable$Drone" {
import {$SpecialVariableRetrievalEvent$CoordinateVariable} from "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent$CoordinateVariable"
import {$IDrone, $IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"

export class $SpecialVariableRetrievalEvent$CoordinateVariable$Drone extends $SpecialVariableRetrievalEvent$CoordinateVariable {
readonly "specialVarName": StringJS
readonly "drone": $IDrone

constructor(arg0: $IDrone$$Type, arg1: StringJS)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialVariableRetrievalEvent$CoordinateVariable$Drone$$Type = ($SpecialVariableRetrievalEvent$CoordinateVariable$Drone);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialVariableRetrievalEvent$CoordinateVariable$Drone$$Original = $SpecialVariableRetrievalEvent$CoordinateVariable$Drone;}
declare module "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe" {
import {$PressureChamberRecipe$SlotCycle$$Type} from "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe$SlotCycle"
import {$PneumaticCraftRecipe} from "me.desht.pneumaticcraft.api.crafting.recipe.PneumaticCraftRecipe"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$IntCollection} from "it.unimi.dsi.fastutil.ints.IntCollection"
import {$PressureChamberRecipe$RecipeSlot} from "me.desht.pneumaticcraft.api.crafting.recipe.PressureChamberRecipe$RecipeSlot"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$SizedIngredient} from "net.neoforged.neoforge.common.crafting.SizedIngredient"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PressureChamberRecipe extends $PneumaticCraftRecipe {
constructor()

public "getPressure"(): float
public "getCraftingPressure"(arg0: $IItemHandler$$Type, arg1: $IntList$$Type): float
public "craftRecipe"(arg0: $IItemHandler$$Type, arg1: $IntList$$Type, arg2: boolean): $List<($ItemStack)>
public "findIngredients"(arg0: $IItemHandler$$Type): $IntCollection
public "getInputsForDisplay"(arg0: $HolderLookup$Provider$$Type): $List<($List<($ItemStack)>)>
public "isValidInputItem"(arg0: $ItemStack$$Type): boolean
public "getTooltipKey"(arg0: boolean, arg1: StringJS): StringJS
public "getCraftingPressureForDisplay"(): float
public "getResultsForDisplay"(arg0: $HolderLookup$Provider$$Type): $List<($List<($ItemStack)>)>
public "getSyncForDisplay"(arg0: $PressureChamberRecipe$SlotCycle$$Type): $Map<($PressureChamberRecipe$RecipeSlot), ($IntList)>
public "getInputs"(): $List<($SizedIngredient)>
public "getOutputs"(): $List<($ItemStack)>
get "pressure"(): float
get "craftingPressureForDisplay"(): float
get "inputs"(): $List<($SizedIngredient)>
get "outputs"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PressureChamberRecipe$$Type = ($PressureChamberRecipe);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PressureChamberRecipe$$Original = $PressureChamberRecipe;}
declare module "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent$CoordinateVariable" {
import {$SpecialVariableRetrievalEvent} from "me.desht.pneumaticcraft.api.drone.SpecialVariableRetrievalEvent"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $SpecialVariableRetrievalEvent$CoordinateVariable extends $SpecialVariableRetrievalEvent {
readonly "specialVarName": StringJS

public "setCoordinate"(arg0: $BlockPos$$Type): void
public "getCoordinate"(): $BlockPos
set "coordinate"(value: $BlockPos$$Type)
get "coordinate"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpecialVariableRetrievalEvent$CoordinateVariable$$Type = ($SpecialVariableRetrievalEvent$CoordinateVariable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpecialVariableRetrievalEvent$CoordinateVariable$$Original = $SpecialVariableRetrievalEvent$CoordinateVariable;}
declare module "me.desht.pneumaticcraft.api.drone.area.EnumOldAreaType" {
import {$Enum} from "java.lang.Enum"

export class $EnumOldAreaType extends $Enum<($EnumOldAreaType)> {
static readonly "X_PYRAMID": $EnumOldAreaType
static readonly "WALL": $EnumOldAreaType
static readonly "FILL": $EnumOldAreaType
static readonly "Y_PYRAMID": $EnumOldAreaType
readonly "utilizesTypeInfo": boolean
static readonly "SPHERE": $EnumOldAreaType
static readonly "RANDOM": $EnumOldAreaType
static readonly "GRID": $EnumOldAreaType
static readonly "X_CYLINDER": $EnumOldAreaType
static readonly "FRAME": $EnumOldAreaType
static readonly "Y_WALL": $EnumOldAreaType
static readonly "Z_CYLINDER": $EnumOldAreaType
static readonly "LINE": $EnumOldAreaType
static readonly "Z_WALL": $EnumOldAreaType
static readonly "Z_PYRAMID": $EnumOldAreaType
static readonly "X_WALL": $EnumOldAreaType
static readonly "Y_CYLINDER": $EnumOldAreaType

public "toString"(): StringJS
public static "values"(): ($EnumOldAreaType)[]
public static "valueOf"(arg0: StringJS): $EnumOldAreaType
public static "byName"(arg0: StringJS): $EnumOldAreaType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnumOldAreaType$$Type = (("fill") | ("frame") | ("wall") | ("sphere") | ("line") | ("x_wall") | ("y_wall") | ("z_wall") | ("x_cylinder") | ("y_cylinder") | ("z_cylinder") | ("x_pyramid") | ("y_pyramid") | ("z_pyramid") | ("grid") | ("random"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnumOldAreaType$$Original = $EnumOldAreaType;}
declare module "me.desht.pneumaticcraft.api.tileentity.IAirHandler" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAirHandler$$Interface {
get "pressure"(): float
get "baseVolume"(): integer
set "baseVolume"(value: integer)
get "air"(): integer
get "volume"(): integer
}

export class $IAirHandler implements $IAirHandler$$Interface {
 "getPressure"(): float
 "getBaseVolume"(): integer
 "setBaseVolume"(arg0: integer): void
 "maxPressure"(): float
 "addAir"(arg0: integer): void
 "getAir"(): integer
 "getVolume"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAirHandler$$Type = ($IAirHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAirHandler$$Original = $IAirHandler;}
declare module "me.desht.pneumaticcraft.api.upgrade.PNCUpgrade" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"

export interface $PNCUpgrade$$Interface {
get "maxTier"(): integer
get "itemRegistryName"(): $ResourceLocation
get "cacheId"(): integer
get "dependencyLoaded"(): boolean
get "item"(): $Item
get "id"(): $ResourceLocation
get "itemStack"(): $ItemStack
}

export class $PNCUpgrade implements $PNCUpgrade$$Interface {
 "getMaxTier"(): integer
 "getItemRegistryName"(arg0: integer): $ResourceLocation
 "getItemRegistryName"(): $ResourceLocation
 "getCacheId"(): integer
 "isDependencyLoaded"(): boolean
 "getItem"(): $Item
 "getItem"(arg0: integer): $Item
static "from"(arg0: $ItemStack$$Type): $PNCUpgrade
 "getId"(): $ResourceLocation
 "getItemStack"(): $ItemStack
 "getItemStack"(arg0: integer): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PNCUpgrade$$Type = ($PNCUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PNCUpgrade$$Original = $PNCUpgrade;}
declare module "me.desht.pneumaticcraft.api.drone.area.AreaTypeSerializer" {
import {$StreamCodec, $StreamCodec$$Type} from "net.minecraft.network.codec.StreamCodec"
import {$RegistryFriendlyByteBuf, $RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AreaType} from "me.desht.pneumaticcraft.api.drone.area.AreaType"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"

export class $AreaTypeSerializer<A extends $AreaType> {
constructor(arg0: $Supplier$$Type<(A)>, arg1: $MapCodec$$Type<(A)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (A)>)

public "createDefaultInstance"(): A
public "streamCodec"(): $StreamCodec<($RegistryFriendlyByteBuf), (A)>
public "codec"(): $MapCodec<(A)>
public static "createType"<A extends $AreaType>(arg0: $Supplier$$Type<(A)>, arg1: $MapCodec$$Type<(A)>, arg2: $StreamCodec$$Type<($RegistryFriendlyByteBuf$$Type), (A)>): $AreaTypeSerializer<(A)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.PneumaticcraftProgWidgetAreaTypes
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.PneumaticcraftProgWidgetAreaTypesTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AreaTypeSerializer$$Type<A> = (Special.PneumaticcraftProgWidgetAreaTypes);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AreaTypeSerializer$$Original<A> = $AreaTypeSerializer<(A)>;}
declare module "me.desht.pneumaticcraft.api.drone.DroneSuicideEvent" {
import {$IDrone, $IDrone$$Type} from "me.desht.pneumaticcraft.api.drone.IDrone"
import {$Event} from "net.neoforged.bus.api.Event"

export class $DroneSuicideEvent extends $Event {
readonly "drone": $IDrone

constructor(arg0: $IDrone$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DroneSuicideEvent$$Type = ($DroneSuicideEvent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DroneSuicideEvent$$Original = $DroneSuicideEvent;}
declare module "me.desht.pneumaticcraft.api.crafting.TemperatureRange$TemperatureScale" {
import {$Enum} from "java.lang.Enum"

export class $TemperatureRange$TemperatureScale extends $Enum<($TemperatureRange$TemperatureScale)> {
static readonly "KELVIN": $TemperatureRange$TemperatureScale
static readonly "FAHRENHEIT": $TemperatureRange$TemperatureScale
static readonly "CELSIUS": $TemperatureRange$TemperatureScale

public "convertFromKelvin"(arg0: float): float
public "symbol"(): StringJS
public static "values"(): ($TemperatureRange$TemperatureScale)[]
public static "valueOf"(arg0: StringJS): $TemperatureRange$TemperatureScale
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TemperatureRange$TemperatureScale$$Type = (("kelvin") | ("celsius") | ("fahrenheit"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TemperatureRange$TemperatureScale$$Original = $TemperatureRange$TemperatureScale;}
