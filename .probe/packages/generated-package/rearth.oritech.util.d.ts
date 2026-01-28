declare module "rearth.oritech.util.MachineAddonController$BaseAddonData" {
import {$Codec} from "com.mojang.serialization.Codec"
import {$Record} from "java.lang.Record"

export class $MachineAddonController$BaseAddonData extends $Record {
static readonly "CODEC": $Codec<($MachineAddonController$BaseAddonData)>
static readonly "DEFAULT_ADDON_DATA": $MachineAddonController$BaseAddonData

constructor(speed: float, efficiency: float, energyBonusCapacity: long, energyBonusTransfer: long, extraChambers: integer, maxBurstTicks: integer)

public "energyBonusCapacity"(): long
public "energyBonusTransfer"(): long
public "extraChambers"(): integer
public "maxBurstTicks"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "speed"(): float
public "efficiency"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAddonController$BaseAddonData$$Type = ({"extraChambers"?: integer, "energyBonusTransfer"?: long, "maxBurstTicks"?: integer, "energyBonusCapacity"?: long, "speed"?: float, "efficiency"?: float}) | ([extraChambers?: integer, energyBonusTransfer?: long, maxBurstTicks?: integer, energyBonusCapacity?: long, speed?: float, efficiency?: float]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineAddonController$BaseAddonData$$Original = $MachineAddonController$BaseAddonData;}
declare module "rearth.oritech.util.ColorableMachine" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ColorableMachine$ColorVariant, $ColorableMachine$ColorVariant$$Type} from "rearth.oritech.util.ColorableMachine$ColorVariant"

export interface $ColorableMachine$$Interface {
get "defaultColor"(): $ColorableMachine$ColorVariant
get "currentColor"(): $ColorableMachine$ColorVariant
}

export class $ColorableMachine implements $ColorableMachine$$Interface {
 "getDefaultColor"(): $ColorableMachine$ColorVariant
 "addColorToNbt"(arg0: $CompoundTag$$Type): void
 "loadColorFromNbt"(arg0: $CompoundTag$$Type): void
 "getCurrentColor"(): $ColorableMachine$ColorVariant
 "assignColor"(arg0: $ColorableMachine$ColorVariant$$Type): void
 "supportRecoloring"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorableMachine$$Type = ($ColorableMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorableMachine$$Original = $ColorableMachine;}
declare module "rearth.oritech.util.ScreenProvider$GuiSlot" {
import {$Record} from "java.lang.Record"

export class $ScreenProvider$GuiSlot extends $Record {
constructor(arg0: integer, arg1: integer, arg2: integer)
constructor(index: integer, x: integer, y: integer, output: boolean)

public "output"(): boolean
public "index"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenProvider$GuiSlot$$Type = ({"x"?: integer, "output"?: boolean, "index"?: integer, "y"?: integer}) | ([x?: integer, output?: boolean, index?: integer, y?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenProvider$GuiSlot$$Original = $ScreenProvider$GuiSlot;}
declare module "rearth.oritech.util.FluidIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$Endec} from "io.wispforest.endec.Endec"
import {$List} from "java.util.List"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$Component} from "net.minecraft.network.chat.Component"
import {$ByteBuf} from "io.netty.buffer.ByteBuf"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Fluid, $Fluid$$Type} from "net.minecraft.world.level.material.Fluid"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey, $TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Either, $Either$$Type} from "com.mojang.datafixers.util.Either"
import {$FluidStack, $FluidStack$$Type} from "dev.architectury.fluid.FluidStack"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$Record} from "java.lang.Record"

export class $FluidIngredient extends $Record implements $Predicate$$Interface<($FluidStack)> {
static readonly "FLUID_TAG_KEY_CODEC": $StreamCodec<($ByteBuf), ($TagKey<($Fluid)>)>
static readonly "FLUID_CONTENT_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($Either<($TagKey<($Fluid)>), ($ResourceLocation)>)>
static readonly "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($FluidIngredient)>
static readonly "FLUID_INGREDIENT_ENDEC": $Endec<($FluidIngredient)>
static readonly "EMPTY": $FluidIngredient

constructor()
constructor(fluidContent: $Either$$Type<($TagKey$$Type<($Fluid$$Type)>), ($ResourceLocation$$Type)>, amount: long)

public "getFluid"(): $Fluid
public "hasTag"(): boolean
public "fluidContent"(): $Either<($TagKey<($Fluid)>), ($ResourceLocation)>
public "matchesFluid"(arg0: $FluidStack$$Type): boolean
public "matchesFluid"(arg0: $Fluid$$Type): boolean
public "withSpecificAmount"(arg0: long): $FluidIngredient
public static "ofStack"(arg0: $FluidStack$$Type): $FluidIngredient
public "getFluidStacks"(): $List<($FluidStack)>
public "withAmount"(arg0: long): $FluidIngredient
public "withAmount"(arg0: float): $FluidIngredient
public "withContent"(arg0: $ResourceKey$$Type<($Fluid)>): $FluidIngredient
public "withContent"(arg0: $Fluid$$Type): $FluidIngredient
public "withContent"(arg0: $TagKey$$Type<($Fluid)>): $FluidIngredient
public "withContent"(arg0: $ResourceLocation$$Type): $FluidIngredient
public "amount"(): long
public "getTag"(): $TagKey<($Fluid)>
public "name"(): $Component
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: any): boolean
public "test"(arg0: $FluidStack$$Type): boolean
public "isEmpty"(): boolean
public static "not"<T>(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($FluidStack)>
public "negate"(): $Predicate<($FluidStack)>
public "and"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
public "or"(arg0: $Predicate$$Type<($FluidStack)>): $Predicate<($FluidStack)>
get "fluid"(): $Fluid
get "fluidStacks"(): $List<($FluidStack)>
get "tag"(): $TagKey<($Fluid)>
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FluidIngredient$$Type = ({"amount"?: long, "fluidContent"?: $Either$$Type<($TagKey$$Type<($Fluid$$Type)>), ($ResourceLocation$$Type)>}) | ([amount?: long, fluidContent?: $Either$$Type<($TagKey$$Type<($Fluid$$Type)>), ($ResourceLocation$$Type)>]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FluidIngredient$$Original = $FluidIngredient;}
declare module "rearth.oritech.util.ScreenProvider" {
import {$ScreenProvider$ArrowConfiguration} from "rearth.oritech.util.ScreenProvider$ArrowConfiguration"
import {$Optional} from "java.util.Optional"
import {$List} from "java.util.List"
import {$Direction} from "net.minecraft.core.Direction"
import {$ScreenProvider$GuiSlot} from "rearth.oritech.util.ScreenProvider$GuiSlot"
import {$InventoryInputMode} from "rearth.oritech.util.InventoryInputMode"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Tuple} from "net.minecraft.util.Tuple"
import {$ScreenProvider$BarConfiguration} from "rearth.oritech.util.ScreenProvider$BarConfiguration"
import {$Container} from "net.minecraft.world.Container"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$Property} from "net.minecraft.world.level.block.state.properties.Property"

export interface $ScreenProvider$$Interface {
get "extraExtensionLabels"(): $List<($Tuple<($Component), ($Component)>)>
get "guiSlots"(): $List<($ScreenProvider$GuiSlot)>
get "displayedEnergyUsage"(): float
get "inventoryInputMode"(): $InventoryInputMode
get "displayedInventory"(): $Container
get "displayedEnergyTransfer"(): float
get "screenHandlerType"(): $MenuType<(never)>
get "blockFacingProperty"(): $Property<($Direction)>
get "energyConfiguration"(): $ScreenProvider$BarConfiguration
get "fluidConfiguration"(): $ScreenProvider$BarConfiguration
get "wikiLink"(): $Optional<(StringJS)>
get "indicatorConfiguration"(): $ScreenProvider$ArrowConfiguration
get "progress"(): float
}

export class $ScreenProvider implements $ScreenProvider$$Interface {
 "showProgress"(): boolean
 "getExtraExtensionLabels"(): $List<($Tuple<($Component), ($Component)>)>
 "getGuiSlots"(): $List<($ScreenProvider$GuiSlot)>
 "getDisplayedEnergyUsage"(): float
 "getInventoryInputMode"(): $InventoryInputMode
 "inputOptionsEnabled"(): boolean
 "getDisplayedInventory"(): $Container
 "getDisplayedEnergyTransfer"(): float
 "getScreenHandlerType"(): $MenuType<(never)>
 "getBlockFacingProperty"(): $Property<($Direction)>
 "hasRedstoneControlAvailable"(): boolean
 "receivedRedstoneSignal"(): integer
 "currentRedstoneEffect"(): StringJS
 "showEnergy"(): boolean
 "showArmor"(): boolean
 "showExpansionPanel"(): boolean
 "getEnergyConfiguration"(): $ScreenProvider$BarConfiguration
 "getFluidConfiguration"(): $ScreenProvider$BarConfiguration
 "getWikiLink"(): $Optional<(StringJS)>
 "getIndicatorConfiguration"(): $ScreenProvider$ArrowConfiguration
 "getProgress"(): float
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenProvider$$Type = ($ScreenProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenProvider$$Original = $ScreenProvider;}
declare module "rearth.oritech.util.MultiblockMachineController" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ArrayList} from "java.util.ArrayList"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$List} from "java.util.List"
import {$EnergyApi$EnergyStorage} from "rearth.oritech.api.energy.EnergyApi$EnergyStorage"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$ItemApi$InventoryStorage} from "rearth.oritech.api.item.ItemApi$InventoryStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $MultiblockMachineController$$Interface {
get "connectedCores"(): $ArrayList<($BlockPos)>
get "facingForMultiblock"(): $Direction
get "posForMultiblock"(): $BlockPos
get "worldForMultiblock"(): $Level
get "coreQuality"(): float
set "coreQuality"(value: float)
get "inventoryForMultiblock"(): $ItemApi$InventoryStorage
get "corePositions"(): $List<($Vec3i)>
get "nextMissingCore"(): $BlockPos
}

export class $MultiblockMachineController implements $MultiblockMachineController$$Interface {
 "addMultiblockToNbt"(arg0: $CompoundTag$$Type): void
 "loadMultiblockNbtData"(arg0: $CompoundTag$$Type): void
 "getConnectedCores"(): $ArrayList<($BlockPos)>
 "getFacingForMultiblock"(): $Direction
 "getPosForMultiblock"(): $BlockPos
 "getWorldForMultiblock"(): $Level
 "getCoreQuality"(): float
 "setCoreQuality"(arg0: float): void
 "getInventoryForMultiblock"(): $ItemApi$InventoryStorage
 "getEnergyStorageForMultiblock"(arg0: $Direction$$Type): $EnergyApi$EnergyStorage
 "getCorePositions"(): $List<($Vec3i)>
 "triggerSetupAnimation"(): void
 "tryPlaceNextCore"(arg0: $Player$$Type): boolean
 "initMultiblock"(arg0: $BlockState$$Type): boolean
 "onCoreBroken"(arg0: $BlockPos$$Type): void
 "onControllerBroken"(): void
 "getNextMissingCore"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MultiblockMachineController$$Type = ($MultiblockMachineController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MultiblockMachineController$$Original = $MultiblockMachineController;}
declare module "rearth.oritech.util.MachineAddonController$AddonBlock" {
import {$MachineAddonBlock, $MachineAddonBlock$$Type} from "rearth.oritech.block.blocks.addons.MachineAddonBlock"
import {$AddonBlockEntity, $AddonBlockEntity$$Type} from "rearth.oritech.block.entity.addons.AddonBlockEntity"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Record} from "java.lang.Record"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $MachineAddonController$AddonBlock extends $Record {
constructor(addonBlock: $MachineAddonBlock$$Type, state: $BlockState$$Type, pos: $BlockPos$$Type, addonEntity: $AddonBlockEntity$$Type)

public "addonEntity"(): $AddonBlockEntity
public "addonBlock"(): $MachineAddonBlock
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "state"(): $BlockState
public "pos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAddonController$AddonBlock$$Type = ({"state"?: $BlockState$$Type, "addonEntity"?: $AddonBlockEntity$$Type, "pos"?: $BlockPos$$Type, "addonBlock"?: $MachineAddonBlock$$Type}) | ([state?: $BlockState$$Type, addonEntity?: $AddonBlockEntity$$Type, pos?: $BlockPos$$Type, addonBlock?: $MachineAddonBlock$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineAddonController$AddonBlock$$Original = $MachineAddonController$AddonBlock;}
declare module "rearth.oritech.util.MachineAddonProvider" {
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $MachineAddonProvider$$Interface {
set "controllerPos"(value: $BlockPos$$Type)
get "controllerPos"(): $BlockPos
}

export class $MachineAddonProvider implements $MachineAddonProvider$$Interface {
 "setControllerPos"(arg0: $BlockPos$$Type): void
 "getControllerPos"(): $BlockPos
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAddonProvider$$Type = ($MachineAddonProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineAddonProvider$$Original = $MachineAddonProvider;}
declare module "rearth.oritech.util.ColorableMachine$ColorVariant" {
import {$Enum} from "java.lang.Enum"

export class $ColorableMachine$ColorVariant extends $Enum<($ColorableMachine$ColorVariant)> {
static readonly "WHITE": $ColorableMachine$ColorVariant
static readonly "NETHERITE": $ColorableMachine$ColorVariant
static readonly "REDSTONE": $ColorableMachine$ColorVariant
static readonly "DIAMOND": $ColorableMachine$ColorVariant
static readonly "SCULK": $ColorableMachine$ColorVariant
static readonly "FLUXITE": $ColorableMachine$ColorVariant
static readonly "INDUSTRIAL": $ColorableMachine$ColorVariant
static readonly "ORANGE": $ColorableMachine$ColorVariant
static readonly "CAMO": $ColorableMachine$ColorVariant

public static "values"(): ($ColorableMachine$ColorVariant)[]
public static "valueOf"(arg0: StringJS): $ColorableMachine$ColorVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ColorableMachine$ColorVariant$$Type = (("orange") | ("diamond") | ("camo") | ("fluxite") | ("white") | ("industrial") | ("netherite") | ("redstone") | ("sculk"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ColorableMachine$ColorVariant$$Original = $ColorableMachine$ColorVariant;}
declare module "rearth.oritech.util.InventoryInputMode" {
import {$Enum} from "java.lang.Enum"

export class $InventoryInputMode extends $Enum<($InventoryInputMode)> {
static readonly "FILL_LEFT_TO_RIGHT": $InventoryInputMode
static readonly "FILL_EVENLY": $InventoryInputMode
static readonly "SIDED": $InventoryInputMode

public static "values"(): ($InventoryInputMode)[]
public static "valueOf"(arg0: StringJS): $InventoryInputMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryInputMode$$Type = (("fill_left_to_right") | ("fill_evenly") | ("sided"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryInputMode$$Original = $InventoryInputMode;}
declare module "rearth.oritech.util.ScreenProvider$BarConfiguration" {
import {$Record} from "java.lang.Record"

export class $ScreenProvider$BarConfiguration extends $Record {
constructor(x: integer, y: integer, width: integer, height: integer)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "y"(): integer
public "width"(): integer
public "height"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenProvider$BarConfiguration$$Type = ({"height"?: integer, "x"?: integer, "y"?: integer, "width"?: integer}) | ([height?: integer, x?: integer, y?: integer, width?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenProvider$BarConfiguration$$Original = $ScreenProvider$BarConfiguration;}
declare module "rearth.oritech.util.MachineAddonController" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Vec3i} from "net.minecraft.core.Vec3i"
import {$DynamicEnergyStorage} from "rearth.oritech.api.energy.containers.DynamicEnergyStorage"
import {$List, $List$$Type} from "java.util.List"
import {$MachineAddonController$AddonBlock, $MachineAddonController$AddonBlock$$Type} from "rearth.oritech.util.MachineAddonController$AddonBlock"
import {$ScreenProvider} from "rearth.oritech.util.ScreenProvider"
import {$Direction} from "net.minecraft.core.Direction"
import {$Level} from "net.minecraft.world.level.Level"
import {$ItemApi$InventoryStorage} from "rearth.oritech.api.item.ItemApi$InventoryStorage"
import {$MachineAddonController$BaseAddonData, $MachineAddonController$BaseAddonData$$Type} from "rearth.oritech.util.MachineAddonController$BaseAddonData"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"

export interface $MachineAddonController$$Interface {
get "defaultCapacity"(): long
get "defaultInsertRate"(): long
get "coreQuality"(): float
get "connectedAddons"(): $List<($BlockPos)>
get "openAddonSlots"(): $List<($BlockPos)>
get "facingForAddon"(): $Direction
get "storageForAddon"(): $DynamicEnergyStorage
get "inventoryForAddon"(): $ItemApi$InventoryStorage
get "screenProvider"(): $ScreenProvider
get "addonSlots"(): $List<($Vec3i)>
get "baseAddonData"(): $MachineAddonController$BaseAddonData
set "baseAddonData"(value: $MachineAddonController$BaseAddonData$$Type)
get "posForAddon"(): $BlockPos
get "worldForAddon"(): $Level
}

export class $MachineAddonController implements $MachineAddonController$$Interface {
 "getDefaultCapacity"(): long
 "getDefaultInsertRate"(): long
 "gatherAddonStats"(arg0: $List$$Type<($MachineAddonController$AddonBlock$$Type)>): void
 "getAdditionalStatFromAddon"(arg0: $MachineAddonController$AddonBlock$$Type): void
 "writeAddonToNbt"(arg0: $CompoundTag$$Type): void
 "loadAddonNbtData"(arg0: $CompoundTag$$Type): void
 "updateEnergyContainer"(): void
 "getCoreQuality"(): float
 "getConnectedAddons"(): $List<($BlockPos)>
 "getOpenAddonSlots"(): $List<($BlockPos)>
 "getFacingForAddon"(): $Direction
 "getStorageForAddon"(): $DynamicEnergyStorage
 "getInventoryForAddon"(): $ItemApi$InventoryStorage
 "getScreenProvider"(): $ScreenProvider
 "getAddonSlots"(): $List<($Vec3i)>
 "getBaseAddonData"(): $MachineAddonController$BaseAddonData
 "setBaseAddonData"(arg0: $MachineAddonController$BaseAddonData$$Type): void
 "getPosForAddon"(): $BlockPos
 "getWorldForAddon"(): $Level
 "getAllAddons"(arg0: $BlockPos$$Type): $List<($MachineAddonController$AddonBlock)>
 "writeAddons"(arg0: $List$$Type<($MachineAddonController$AddonBlock$$Type)>): void
 "initAddons"(arg0: $BlockPos$$Type): void
 "initAddons"(): void
 "resetAddons"(): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineAddonController$$Type = ($MachineAddonController);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineAddonController$$Original = $MachineAddonController;}
declare module "rearth.oritech.util.ScreenProvider$ArrowConfiguration" {
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Record} from "java.lang.Record"

export class $ScreenProvider$ArrowConfiguration extends $Record {
constructor(empty: $ResourceLocation$$Type, full: $ResourceLocation$$Type, x: integer, y: integer, width: integer, height: integer, horizontal: boolean)

public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "x"(): integer
public "empty"(): $ResourceLocation
public "full"(): $ResourceLocation
public "y"(): integer
public "width"(): integer
public "height"(): integer
public "horizontal"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ScreenProvider$ArrowConfiguration$$Type = ({"empty"?: $ResourceLocation$$Type, "horizontal"?: boolean, "height"?: integer, "x"?: integer, "width"?: integer, "y"?: integer, "full"?: $ResourceLocation$$Type}) | ([empty?: $ResourceLocation$$Type, horizontal?: boolean, height?: integer, x?: integer, width?: integer, y?: integer, full?: $ResourceLocation$$Type]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ScreenProvider$ArrowConfiguration$$Original = $ScreenProvider$ArrowConfiguration;}
declare module "rearth.oritech.util.SizedIngredient" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type, $Predicate$$Interface} from "java.util.function.Predicate"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$Record} from "java.lang.Record"

export class $SizedIngredient extends $Record implements $Predicate$$Interface<($ItemStack)> {
static "CODEC": $MapCodec<($SizedIngredient)>
static "PACKET_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SizedIngredient)>

constructor(count: integer, ingredient: $Ingredient$$Type)

public "ingredient"(): $Ingredient
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "test"(arg0: $ItemStack$$Type): boolean
public "test"(arg0: any): boolean
public "count"(): integer
public static "not"<T>(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public static "isEqual"<T>(arg0: any): $Predicate<($ItemStack)>
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizedIngredient$$Type = ({"ingredient"?: $Ingredient$$Type, "count"?: integer}) | ([ingredient?: $Ingredient$$Type, count?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizedIngredient$$Original = $SizedIngredient;}
declare module "rearth.oritech.util.ComparatorOutputProvider" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FluidApi$SingleSlotStorage$$Type} from "rearth.oritech.api.fluid.FluidApi$SingleSlotStorage"

export interface $ComparatorOutputProvider$$Interface {

(): integer
get "comparatorOutput"(): integer
}

export class $ComparatorOutputProvider implements $ComparatorOutputProvider$$Interface {
 "getComparatorOutput"(): integer
static "getItemStackComparatorOutput"(arg0: $ItemStack$$Type): integer
static "getFluidStorageComparatorOutput"(arg0: $FluidApi$SingleSlotStorage$$Type): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ComparatorOutputProvider$$Type = (() => integer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ComparatorOutputProvider$$Original = $ComparatorOutputProvider;}
