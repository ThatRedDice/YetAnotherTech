declare module "com.buuz135.industrial.item.infinity.ItemInfinity" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ISpecialCreativeTabItem$$Interface} from "com.hrznstudio.titanium.api.ISpecialCreativeTabItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$IButtonHandler$$Interface} from "com.hrznstudio.titanium.network.IButtonHandler"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$MenuProvider$$Interface} from "net.minecraft.world.MenuProvider"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$InfinityEnergyStorage} from "com.buuz135.industrial.item.infinity.InfinityEnergyStorage"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IScreenInfoProvider$$Interface} from "com.hrznstudio.titanium.block.tile.IScreenInfoProvider"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$InfinityTankStorage} from "com.buuz135.industrial.item.infinity.InfinityTankStorage"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$InfinityTier, $InfinityTier$$Type} from "com.buuz135.industrial.item.infinity.InfinityTier"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$IInfinityDrillScreenAddons$$Interface} from "com.buuz135.industrial.item.infinity.IInfinityDrillScreenAddons"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ItemInfinity extends $IFCustomItem implements $MenuProvider$$Interface, $IButtonHandler$$Interface, $IInfinityDrillScreenAddons$$Interface, $ISpecialCreativeTabItem$$Interface, $IScreenInfoProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $TitaniumTab$$Type, arg2: $Item$Properties$$Type, arg3: integer, arg4: integer, arg5: boolean)

public "consumeFuel"(arg0: $ItemStack$$Type): void
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public static "getSelectedTier"(arg0: $ItemStack$$Type): $InfinityTier
public "getFuelFromStack"(arg0: $ItemStack$$Type): integer
public "getFormattedArea"(arg0: $ItemStack$$Type, arg1: $InfinityTier$$Type, arg2: integer, arg3: boolean): StringJS
public "addNbt"(arg0: $ItemStack$$Type, arg1: long, arg2: integer, arg3: boolean): void
public "enoughFuel"(arg0: $ItemStack$$Type): boolean
public static "getPowerFromStack"(arg0: $ItemStack$$Type): long
public static "canCharge"(arg0: $ItemStack$$Type): boolean
public "setSelectedDrillTier"(arg0: $ItemStack$$Type, arg1: $InfinityTier$$Type): void
public "setCanCharge"(arg0: $ItemStack$$Type, arg1: boolean): void
public "isSpecialEnabled"(arg0: $ItemStack$$Type): boolean
public "setSpecialEnabled"(arg0: $ItemStack$$Type, arg1: boolean): void
public "disableArea"(): void
public "getArea"(arg0: $BlockPos$$Type, arg1: $Direction$$Type, arg2: $InfinityTier$$Type, arg3: boolean): $Pair<($BlockPos), ($BlockPos)>
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $List<($IFactory<($IScreenAddon)>)>
public "getTankConstructor"(arg0: $ItemStack$$Type): $IFactory<($InfinityTankStorage)>
public "getEnergyConstructor"(arg0: $ItemStack$$Type): $IFactory<($InfinityEnergyStorage<(object)>)>
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "getEnchantmentValue"(): integer
public "shouldCauseReequipAnimation"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public "getDisplayName"(): $Component
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "isSpecial"(arg0: $ItemStack$$Type): boolean
public "isBarVisible"(arg0: $ItemStack$$Type): boolean
public "getBarWidth"(arg0: $ItemStack$$Type): integer
public "getBarColor"(arg0: $ItemStack$$Type): integer
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "createStack"(arg0: long, arg1: integer, arg2: boolean): $ItemStack
public "getTitleColor"(): integer
public "getTitleXPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
public "getTitleYPos"(arg0: float, arg1: float, arg2: float, arg3: float, arg4: float): float
public "shouldTriggerClientSideContainerClosingOnOpen"(): boolean
public "writeClientSideData"(arg0: $AbstractContainerMenu$$Type, arg1: $RegistryFriendlyByteBuf$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "enchantmentValue"(): integer
get "displayName"(): $Component
get "titleColor"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinity$$Type = ($ItemInfinity);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinity$$Original = $ItemInfinity;}
declare module "com.buuz135.industrial.item.infinity.InfinityTankStorage$TankDefinition" {
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$FluidTankComponent$Type, $FluidTankComponent$Type$$Type} from "com.hrznstudio.titanium.component.fluid.FluidTankComponent$Type"
import {$Record} from "java.lang.Record"

export class $InfinityTankStorage$TankDefinition extends $Record {
constructor(name: StringJS, capacity: integer, x: integer, y: integer, filter: $Predicate$$Type<($FluidStack)>, extract: boolean, insert: boolean, type: $FluidTankComponent$Type$$Type, definedFluidStack: $FluidStack$$Type)

public "definedFluidStack"(): $FluidStack
public "name"(): StringJS
public "type"(): $FluidTankComponent$Type
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "extract"(): boolean
public "insert"(): boolean
public "x"(): integer
public "filter"(): $Predicate<($FluidStack)>
public "capacity"(): integer
public "y"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityTankStorage$TankDefinition$$Type = ({"capacity"?: integer, "type"?: $FluidTankComponent$Type$$Type, "extract"?: boolean, "name"?: StringJS, "definedFluidStack"?: $FluidStack$$Type, "insert"?: boolean, "filter"?: $Predicate$$Type<($FluidStack$$Type)>, "x"?: integer, "y"?: integer}) | ([capacity?: integer, type?: $FluidTankComponent$Type$$Type, extract?: boolean, name?: StringJS, definedFluidStack?: $FluidStack$$Type, insert?: boolean, filter?: $Predicate$$Type<($FluidStack$$Type)>, x?: integer, y?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityTankStorage$TankDefinition$$Original = $InfinityTankStorage$TankDefinition;}
declare module "com.buuz135.industrial.item.addon.RangeAddonItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ISpecialCreativeTabItem$$Interface} from "com.hrznstudio.titanium.api.ISpecialCreativeTabItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IAugmentType} from "com.hrznstudio.titanium.api.augment.IAugmentType"
import {$AddonItem} from "com.buuz135.industrial.item.addon.AddonItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $RangeAddonItem extends $AddonItem implements $ISpecialCreativeTabItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "RANGE": $IAugmentType
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public "getDescriptionId"(): StringJS
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RangeAddonItem$$Type = ($RangeAddonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RangeAddonItem$$Original = $RangeAddonItem;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityDrill" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemInfinityDrill extends $ItemInfinity {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityDrill$$Type = ($ItemInfinityDrill);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityDrill$$Original = $ItemInfinityDrill;}
declare module "com.buuz135.industrial.item.HydroponicSimulationProcessorItem" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $HydroponicSimulationProcessorItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public static "calculateEfficiency"(arg0: long): double
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HydroponicSimulationProcessorItem$$Type = ($HydroponicSimulationProcessorItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HydroponicSimulationProcessorItem$$Original = $HydroponicSimulationProcessorItem;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityTrident" {
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$List, $List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ItemInfinityTrident extends $ItemInfinity {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getCurrentRiptide"(arg0: $ItemStack$$Type): integer
public "getCurrentLoyalty"(arg0: $ItemStack$$Type): integer
public "getMaxLoyalty"(arg0: $ItemStack$$Type): integer
public "setLoyalty"(arg0: $ItemStack$$Type, arg1: integer): void
public "setRiptide"(arg0: $ItemStack$$Type, arg1: integer): void
public "getMaxRiptide"(arg0: $ItemStack$$Type): integer
public "canChanneling"(arg0: $ItemStack$$Type): boolean
public "getCurrentChanneling"(arg0: $ItemStack$$Type): boolean
public "setChanneling"(arg0: $ItemStack$$Type, arg1: boolean): void
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "addNbt"(arg0: $ItemStack$$Type, arg1: long, arg2: integer, arg3: boolean): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $List<($IFactory<($IScreenAddon)>)>
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityTrident$$Type = ($ItemInfinityTrident);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityTrident$$Original = $ItemInfinityTrident;}
declare module "com.buuz135.industrial.item.addon.SpeedAddonItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ISpecialCreativeTabItem$$Interface} from "com.hrznstudio.titanium.api.ISpecialCreativeTabItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AddonItem} from "com.buuz135.industrial.item.addon.AddonItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $SpeedAddonItem extends $AddonItem implements $ISpecialCreativeTabItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public "getDescriptionId"(): StringJS
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SpeedAddonItem$$Type = ($SpeedAddonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SpeedAddonItem$$Original = $SpeedAddonItem;}
declare module "com.buuz135.industrial.item.ItemConveyorUpgrade" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ConveyorUpgradeFactory$$Type} from "com.buuz135.industrial.api.conveyor.ConveyorUpgradeFactory"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $ItemConveyorUpgrade extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $ConveyorUpgradeFactory$$Type, arg1: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "getDescriptionId"(arg0: $ItemStack$$Type): StringJS
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemConveyorUpgrade$$Type = ($ItemConveyorUpgrade);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemConveyorUpgrade$$Original = $ItemConveyorUpgrade;}
declare module "com.buuz135.industrial.item.infinity.InfinityTier" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $InfinityTier extends $Enum<($InfinityTier)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($InfinityTier)>
static readonly "RARE": $InfinityTier
static readonly "EPIC": $InfinityTier
static readonly "ARTIFACT": $InfinityTier
static readonly "POOR": $InfinityTier
static readonly "UNCOMMON": $InfinityTier
static readonly "COMMON": $InfinityTier
static readonly "LEGENDARY": $InfinityTier

public static "getTierBraquet"(arg0: long): $Pair<($InfinityTier), ($InfinityTier)>
public "getPowerNeeded"(): long
public "getPrev"(arg0: $InfinityTier$$Type): $InfinityTier
public "getTextureColor"(): integer
public "setPowerNeeded"(arg0: long): void
public "getRadius"(): integer
public "setRadius"(arg0: integer): void
public "getLocalizedName"(): StringJS
public "getNext"(arg0: $InfinityTier$$Type): $InfinityTier
public "getName"(): StringJS
public static "values"(): ($InfinityTier)[]
public static "valueOf"(arg0: StringJS): $InfinityTier
public "getSerializedName"(): StringJS
public "getColor"(): $ChatFormatting
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "powerNeeded"(): long
get "textureColor"(): integer
set "powerNeeded"(value: long)
get "radius"(): integer
set "radius"(value: integer)
get "localizedName"(): StringJS
get "name"(): StringJS
get "serializedName"(): StringJS
get "color"(): $ChatFormatting
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityTier$$Type = (("poor") | ("common") | ("uncommon") | ("rare") | ("epic") | ("legendary") | ("artifact"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityTier$$Original = $InfinityTier;}
declare module "com.buuz135.industrial.item.MeatFeederItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $MeatFeederItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public static "meatTick"(arg0: $ItemStack$$Type, arg1: $Player$$Type): boolean
public "getFilledAmount"(arg0: $ItemStack$$Type): integer
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "onCraftedPostProcess"(arg0: $ItemStack$$Type, arg1: $Level$$Type): void
public "drain"(arg0: $ItemStack$$Type, arg1: integer): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MeatFeederItem$$Type = ($MeatFeederItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MeatFeederItem$$Original = $MeatFeederItem;}
declare module "com.buuz135.industrial.item.ItemTransporterType" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$TransporterTypeFactory, $TransporterTypeFactory$$Type} from "com.buuz135.industrial.api.transporter.TransporterTypeFactory"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $ItemTransporterType extends $IFCustomItem {
 "factory": $TransporterTypeFactory
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TransporterTypeFactory$$Type, arg1: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemTransporterType$$Type = ($ItemTransporterType);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemTransporterType$$Original = $ItemTransporterType;}
declare module "com.buuz135.industrial.item.RecipelessCustomItem" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $RecipelessCustomItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $TitaniumTab$$Type)
constructor(arg0: StringJS, arg1: $TitaniumTab$$Type, arg2: $Item$Properties$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipelessCustomItem$$Type = ($RecipelessCustomItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipelessCustomItem$$Original = $RecipelessCustomItem;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityLauncher" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$List, $List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$ItemInfinityLauncher$PlungerAction, $ItemInfinityLauncher$PlungerAction$$Type} from "com.buuz135.industrial.item.infinity.item.ItemInfinityLauncher$PlungerAction"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ItemInfinityLauncher extends $ItemInfinity {
static "PLUNGER_NBT": StringJS
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "getPlungerAction"(arg0: $ItemStack$$Type): $ItemInfinityLauncher$PlungerAction
public static "getArrowVelocity"(arg0: integer): float
public "setPlungerAction"(arg0: $ItemStack$$Type, arg1: $ItemInfinityLauncher$PlungerAction$$Type): void
public "addNbt"(arg0: $ItemStack$$Type, arg1: long, arg2: integer, arg3: boolean): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $List<($IFactory<($IScreenAddon)>)>
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "releaseUsing"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type, arg3: integer): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityLauncher$$Type = ($ItemInfinityLauncher);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityLauncher$$Original = $ItemInfinityLauncher;}
declare module "com.buuz135.industrial.item.addon.ProcessingAddonItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ISpecialCreativeTabItem$$Interface} from "com.hrznstudio.titanium.api.ISpecialCreativeTabItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IAugmentType} from "com.hrznstudio.titanium.api.augment.IAugmentType"
import {$AddonItem} from "com.buuz135.industrial.item.addon.AddonItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ProcessingAddonItem extends $AddonItem implements $ISpecialCreativeTabItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "PROCESSING": $IAugmentType
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public "getDescriptionId"(): StringJS
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ProcessingAddonItem$$Type = ($ProcessingAddonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ProcessingAddonItem$$Original = $ProcessingAddonItem;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityBackpack" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$Optional} from "java.util.Optional"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$InfinityEnergyStorage} from "com.buuz135.industrial.item.infinity.InfinityEnergyStorage"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$PlayerInventoryFinder$Target} from "com.hrznstudio.titanium.network.locator.PlayerInventoryFinder$Target"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$InfinityTankStorage} from "com.buuz135.industrial.item.infinity.InfinityTankStorage"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockPlaceContext, $BlockPlaceContext$$Type} from "net.minecraft.world.item.context.BlockPlaceContext"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ItemInfinityBackpack extends $ItemInfinity {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "consumeFuel"(arg0: $ItemStack$$Type): void
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "findAllBackpacks"(arg0: $Player$$Type): $List<($PlayerInventoryFinder$Target)>
public static "findFirstBackpack"(arg0: $Player$$Type): $Optional<($PlayerInventoryFinder$Target)>
public static "setPickUpMode"(arg0: $ItemStack$$Type, arg1: integer): void
public static "getPickUpMode"(arg0: $ItemStack$$Type): integer
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public static "isMagnetEnabled"(arg0: $ItemStack$$Type): boolean
public static "getSlotSize"(arg0: $ItemStack$$Type): integer
public static "setMagnet"(arg0: $ItemStack$$Type, arg1: boolean): void
public "addNbt"(arg0: $ItemStack$$Type, arg1: long, arg2: integer, arg3: boolean): void
public "enoughFuel"(arg0: $ItemStack$$Type): boolean
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type, arg3: $ItemStack$$Type): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $List<($IFactory<($IScreenAddon)>)>
public "getTankConstructor"(arg0: $ItemStack$$Type): $IFactory<($InfinityTankStorage)>
public "getEnergyConstructor"(arg0: $ItemStack$$Type): $IFactory<($InfinityEnergyStorage<(object)>)>
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "inventoryTick"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Entity$$Type, arg3: integer, arg4: boolean): void
public "isEnchantable"(arg0: $ItemStack$$Type): boolean
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
public "updatePlacementContext"(arg0: $BlockPlaceContext$$Type): $BlockPlaceContext
public "updateCustomBlockEntityTag"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $BlockPos$$Type, arg3: $ItemStack$$Type): boolean
public "getBlock"(): $Block
public "place"(arg0: $BlockPlaceContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "sync"(arg0: $Level$$Type, arg1: StringJS, arg2: $ServerPlayer$$Type): void
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "block"(): $Block
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityBackpack$$Type = ($ItemInfinityBackpack);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityBackpack$$Original = $ItemInfinityBackpack;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityHammer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$List, $List$$Type} from "java.util.List"
import {$ItemAttributeModifiers} from "net.minecraft.world.item.component.ItemAttributeModifiers"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function} from "java.util.function.Function"
import {$Item} from "net.minecraft.world.item.Item"
import {$Class} from "java.lang.Class"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"
import {$CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$Map} from "java.util.Map"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$HashMap} from "java.util.HashMap"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$GameProfile$$Type} from "com.mojang.authlib.GameProfile"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ItemInfinityHammer extends $ItemInfinity {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static "ATTACK_SPEED": float
static "HEADS": $HashMap<($Class<(never)>), ($Function<($Entity), ($ItemStack)>)>
static readonly "MAX_BAR_WIDTH": integer
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "BEHEADING_NBT": StringJS
static "FUEL_CONSUMPTION": integer
static "DAMAGE": integer
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "POWER_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "createHead"(arg0: $GameProfile$$Type): $ItemStack
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "addNbt"(arg0: $ItemStack$$Type, arg1: long, arg2: integer, arg3: boolean): void
public "handleButtonMessage"(arg0: integer, arg1: $Player$$Type, arg2: $CompoundTag$$Type): void
public "getScreenAddons"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $List<($IFactory<($IScreenAddon)>)>
public "getCurrentBeheading"(arg0: $ItemStack$$Type): integer
public "getMaxBeheading"(arg0: $ItemStack$$Type): integer
public "setBeheading"(arg0: $ItemStack$$Type, arg1: integer): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "getDefaultAttributeModifiers"(arg0: $ItemStack$$Type): $ItemAttributeModifiers
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "onEntitySwing"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public "getDestroySpeed"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): float
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public "hurtEnemy"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type, arg2: $LivingEntity$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityHammer$$Type = ($ItemInfinityHammer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityHammer$$Original = $ItemInfinityHammer;}
declare module "com.buuz135.industrial.item.FertilizerItem" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $FertilizerItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FertilizerItem$$Type = ($FertilizerItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FertilizerItem$$Original = $FertilizerItem;}
declare module "com.buuz135.industrial.item.infinity.InfinityEnergyStorage" {
import {$EnergyStorageComponent} from "com.hrznstudio.titanium.component.energy.EnergyStorageComponent"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$IComponentHarness} from "com.hrznstudio.titanium.component.IComponentHarness"
import {$List} from "java.util.List"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$Tag, $Tag$$Type} from "net.minecraft.nbt.Tag"
import {$IContainerAddon} from "com.hrznstudio.titanium.container.addon.IContainerAddon"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $InfinityEnergyStorage<T extends $IComponentHarness> extends $EnergyStorageComponent<(T)> {
constructor(arg0: long, arg1: integer, arg2: integer)

public "canExtract"(): boolean
public "extractEnergy"(arg0: integer, arg1: boolean): integer
public "receiveEnergy"(arg0: integer, arg1: boolean): integer
public "canReceive"(): boolean
public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getContainerAddons"(): $List<($IFactory<($IContainerAddon)>)>
public "setEnergyStored"(arg0: long): void
public "getLongEnergyStored"(): long
public "getLongCapacity"(): long
public "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $Tag$$Type): void
public "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $Tag
public "getEnergyStored"(): integer
public "getMaxEnergyStored"(): integer
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "containerAddons"(): $List<($IFactory<($IContainerAddon)>)>
set "energyStored"(value: long)
get "longEnergyStored"(): long
get "longCapacity"(): long
get "energyStored"(): integer
get "maxEnergyStored"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityEnergyStorage$$Type<T> = ($InfinityEnergyStorage<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityEnergyStorage$$Original<T> = $InfinityEnergyStorage<(T)>;}
declare module "com.buuz135.industrial.item.infinity.IInfinityDrillScreenAddons" {
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Supplier, $Supplier$$Type} from "java.util.function.Supplier"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"

export interface $IInfinityDrillScreenAddons$$Interface {

(arg0: $Supplier<($ItemStack$$Type)>): $List$$Type<($IFactory$$Type<($IScreenAddon$$Type)>)>
}

export class $IInfinityDrillScreenAddons implements $IInfinityDrillScreenAddons$$Interface {
 "getScreenAddons"(arg0: $Supplier$$Type<($ItemStack$$Type)>): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IInfinityDrillScreenAddons$$Type = ((arg0: $Supplier<($ItemStack)>) => $List$$Type<($IFactory$$Type<($IScreenAddon$$Type)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IInfinityDrillScreenAddons$$Original = $IInfinityDrillScreenAddons;}
declare module "com.buuz135.industrial.item.MachineSettingCopier" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $MachineSettingCopier extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MachineSettingCopier$$Type = ($MachineSettingCopier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MachineSettingCopier$$Original = $MachineSettingCopier;}
declare module "com.buuz135.industrial.item.addon.AddonItem" {
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $AddonItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $TitaniumTab$$Type)
constructor(arg0: StringJS, arg1: $TitaniumTab$$Type, arg2: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AddonItem$$Type = ($AddonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AddonItem$$Original = $AddonItem;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityNuke" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$InfinityTier$$Type} from "com.buuz135.industrial.item.infinity.InfinityTier"

export class $ItemInfinityNuke extends $ItemInfinity {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getFormattedArea"(arg0: $ItemStack$$Type, arg1: $InfinityTier$$Type, arg2: integer, arg3: boolean): StringJS
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public static "getRadius"(arg0: $ItemStack$$Type): integer
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityNuke$$Type = ($ItemInfinityNuke);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityNuke$$Original = $ItemInfinityNuke;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinitySaw" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ItemInfinity} from "com.buuz135.industrial.item.infinity.ItemInfinity"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$LoadingCache} from "com.google.common.cache.LoadingCache"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$Enchantment$$Type} from "net.minecraft.world.item.enchantment.Enchantment"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TreeCache} from "com.buuz135.industrial.utils.apihandlers.plant.TreeCache"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$Pair} from "org.apache.commons.lang3.tuple.Pair"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ItemInfinitySaw extends $ItemInfinity {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static "SAW_CACHE": $LoadingCache<($Pair<($Level), ($BlockPos)>), ($TreeCache)>
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static "POWER_CONSUMPTION": integer
static "FUEL_CONSUMPTION": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "mineBlock"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockState$$Type, arg3: $BlockPos$$Type, arg4: $LivingEntity$$Type): boolean
public "supportsEnchantment"(arg0: $ItemStack$$Type, arg1: $Holder$$Type<($Enchantment)>): boolean
public "isCorrectToolForDrops"(arg0: $ItemStack$$Type, arg1: $BlockState$$Type): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinitySaw$$Type = ($ItemInfinitySaw);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinitySaw$$Original = $ItemInfinitySaw;}
declare module "com.buuz135.industrial.item.ItemStraw" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$UseAnim} from "net.minecraft.world.item.UseAnim"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $ItemStraw extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public "getUseDuration"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): integer
public "getUseAnimation"(arg0: $ItemStack$$Type): $UseAnim
public "finishUsingItem"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $LivingEntity$$Type): $ItemStack
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemStraw$$Type = ($ItemStraw);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemStraw$$Original = $ItemStraw;}
declare module "com.buuz135.industrial.item.infinity.item.ItemInfinityLauncher$PlungerAction" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$ChatFormatting} from "net.minecraft.ChatFormatting"

export class $ItemInfinityLauncher$PlungerAction extends $Enum<($ItemInfinityLauncher$PlungerAction)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($ItemInfinityLauncher$PlungerAction)>
static readonly "RELEASE": $ItemInfinityLauncher$PlungerAction
static readonly "CAPTURE": $ItemInfinityLauncher$PlungerAction
static readonly "DAMAGE": $ItemInfinityLauncher$PlungerAction

public static "getFromId"(arg0: integer): $ItemInfinityLauncher$PlungerAction
public static "values"(): ($ItemInfinityLauncher$PlungerAction)[]
public static "valueOf"(arg0: StringJS): $ItemInfinityLauncher$PlungerAction
public "getId"(): integer
public "getSerializedName"(): StringJS
public "getColor"(): $ChatFormatting
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "id"(): integer
get "serializedName"(): StringJS
get "color"(): $ChatFormatting
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemInfinityLauncher$PlungerAction$$Type = (("release") | ("capture") | ("damage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemInfinityLauncher$PlungerAction$$Original = $ItemInfinityLauncher$PlungerAction;}
declare module "com.buuz135.industrial.item.LaserLensItem" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"

export class $LaserLensItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $DyeColor$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "getName"(arg0: $ItemStack$$Type): $Component
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LaserLensItem$$Type = ($LaserLensItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LaserLensItem$$Original = $LaserLensItem;}
declare module "com.buuz135.industrial.item.addon.EfficiencyAddonItem" {
import {$BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ISpecialCreativeTabItem$$Interface} from "com.hrznstudio.titanium.api.ISpecialCreativeTabItem"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$AddonItem} from "com.buuz135.industrial.item.addon.AddonItem"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $EfficiencyAddonItem extends $AddonItem implements $ISpecialCreativeTabItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: integer, arg1: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
public "getDescriptionId"(): StringJS
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "descriptionId"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EfficiencyAddonItem$$Type = ($EfficiencyAddonItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EfficiencyAddonItem$$Original = $EfficiencyAddonItem;}
declare module "com.buuz135.industrial.item.MobImprisonmentToolItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List$$Type} from "java.util.List"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$LivingEntity$$Type} from "net.minecraft.world.entity.LivingEntity"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IFCustomItem} from "com.buuz135.industrial.item.IFCustomItem"
import {$Entity} from "net.minecraft.world.entity.Entity"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"
import {$EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $MobImprisonmentToolItem extends $IFCustomItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $TitaniumTab$$Type)

public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "containsEntity"(arg0: $ItemStack$$Type): boolean
public "getEntityFromStack"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: boolean, arg3: boolean): $Entity
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isBlacklisted"(arg0: $EntityType$$Type<(never)>): boolean
public "getID"(arg0: $ItemStack$$Type): StringJS
public "getName"(arg0: $ItemStack$$Type): $Component
public "release"(arg0: $Player$$Type, arg1: $BlockPos$$Type, arg2: $Direction$$Type, arg3: $Level$$Type, arg4: $ItemStack$$Type): boolean
public "capture"(arg0: $ItemStack$$Type, arg1: $LivingEntity$$Type): boolean
public "interactLivingEntity"(arg0: $ItemStack$$Type, arg1: $Player$$Type, arg2: $LivingEntity$$Type, arg3: $InteractionHand$$Type): $InteractionResult
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MobImprisonmentToolItem$$Type = ($MobImprisonmentToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MobImprisonmentToolItem$$Original = $MobImprisonmentToolItem;}
declare module "com.buuz135.industrial.item.infinity.InfinityTankStorage" {
import {$IFluidHandler$FluidAction$$Type} from "net.neoforged.neoforge.fluids.capability.IFluidHandler$FluidAction"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IFluidHandlerItem$$Interface} from "net.neoforged.neoforge.fluids.capability.IFluidHandlerItem"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$FluidStack, $FluidStack$$Type} from "net.neoforged.neoforge.fluids.FluidStack"
import {$InfinityTankStorage$TankDefinition$$Type} from "com.buuz135.industrial.item.infinity.InfinityTankStorage$TankDefinition"

export class $InfinityTankStorage implements $IFluidHandlerItem$$Interface, $IScreenAddonProvider$$Interface {
constructor(arg0: $ItemStack$$Type, ...arg1: ($InfinityTankStorage$TankDefinition$$Type)[])

public "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
public "getTanks"(): integer
public "getFluidInTank"(arg0: integer): $FluidStack
public "getTankCapacity"(arg0: integer): integer
public "isFluidValid"(arg0: integer, arg1: $FluidStack$$Type): boolean
public "getContainer"(): $ItemStack
public "fill"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): integer
public "save"(): void
public "drain"(arg0: integer, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
public "drain"(arg0: $FluidStack$$Type, arg1: $IFluidHandler$FluidAction$$Type): $FluidStack
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
get "tanks"(): integer
get "container"(): $ItemStack
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InfinityTankStorage$$Type = ($InfinityTankStorage);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InfinityTankStorage$$Original = $InfinityTankStorage;}
declare module "com.buuz135.industrial.item.IFCustomItem" {
import {$RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$BasicItem} from "com.hrznstudio.titanium.item.BasicItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$TitaniumTab$$Type} from "com.hrznstudio.titanium.tab.TitaniumTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IRecipeProvider$$Interface} from "com.hrznstudio.titanium.api.IRecipeProvider"

export class $IFCustomItem extends $BasicItem implements $IRecipeProvider$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: StringJS, arg1: $TitaniumTab$$Type)
constructor(arg0: StringJS, arg1: $TitaniumTab$$Type, arg2: $Item$Properties$$Type)

public "getCreatorModId"(arg0: $ItemStack$$Type): StringJS
public "registerRecipe"(arg0: $RecipeOutput$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFCustomItem$$Type = ($IFCustomItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFCustomItem$$Original = $IFCustomItem;}
