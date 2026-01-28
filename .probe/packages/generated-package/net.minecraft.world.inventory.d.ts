declare module "net.minecraft.world.inventory.BeaconMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Optional$$Type} from "java.util.Optional"
import {$List} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder, $Holder$$Type} from "net.minecraft.core.Holder"
import {$MobEffect, $MobEffect$$Type} from "net.minecraft.world.effect.MobEffect"
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"

export class $BeaconMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Container$$Type)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type, arg3: $ContainerLevelAccess$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public static "decodeEffect"(arg0: integer): $Holder<($MobEffect)>
public static "encodeEffect"(arg0: $Holder$$Type<($MobEffect)>): integer
public "getPrimaryEffect"(): $Holder<($MobEffect)>
public "getSecondaryEffect"(): $Holder<($MobEffect)>
public "updateEffects"(arg0: ($Holder$$Type<($MobEffect$$Type)>)?, arg1: ($Holder$$Type<($MobEffect$$Type)>)?): void
public "hasPayment"(): boolean
public "setData"(arg0: integer, arg1: integer): void
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getLevels"(): integer
get "primaryEffect"(): $Holder<($MobEffect)>
get "secondaryEffect"(): $Holder<($MobEffect)>
get "levels"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BeaconMenu$$Type = ($BeaconMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BeaconMenu$$Original = $BeaconMenu;}
declare module "net.minecraft.world.inventory.RecipeBookType" {
import {$Enum} from "java.lang.Enum"
import {$ExtensionInfo} from "net.neoforged.fml.common.asm.enumextension.ExtensionInfo"
import {$IExtensibleEnum$$Interface} from "net.neoforged.fml.common.asm.enumextension.IExtensibleEnum"

export class $RecipeBookType extends $Enum<($RecipeBookType)> implements $IExtensibleEnum$$Interface {
static readonly "FURNACE": $RecipeBookType
static readonly "BLAST_FURNACE": $RecipeBookType
static readonly "SMOKER": $RecipeBookType
static readonly "CRAFTING": $RecipeBookType

public static "values"(): ($RecipeBookType)[]
public static "valueOf"(arg0: StringJS): $RecipeBookType
public static "getExtensionInfo"(): $ExtensionInfo
public static get "extensionInfo"(): $ExtensionInfo
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookType$$Type = (("crafting") | ("furnace") | ("blast_furnace") | ("smoker"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookType$$Original = $RecipeBookType;}
declare module "net.minecraft.world.inventory.RecipeBookMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeInput} from "net.minecraft.world.item.crafting.RecipeInput"
import {$Recipe} from "net.minecraft.world.item.crafting.Recipe"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$RecipeBookCategories} from "net.minecraft.client.RecipeBookCategories"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $RecipeBookMenu<I extends $RecipeInput, R extends $Recipe<(object)>> extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer)

public "clearCraftingContent"(): void
public "recipeMatches"(arg0: $RecipeHolder$$Type<(R)>): boolean
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getGridHeight"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "shouldMoveToInventory"(arg0: integer): boolean
public "handlePlacement"(arg0: boolean, arg1: $RecipeHolder$$Type<(never)>, arg2: $ServerPlayer$$Type): void
public "getRecipeBookCategories"(): $List<($RecipeBookCategories)>
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "getSize"(): integer
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "gridHeight"(): integer
get "recipeBookType"(): $RecipeBookType
get "recipeBookCategories"(): $List<($RecipeBookCategories)>
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeBookMenu$$Type<I, R> = ($RecipeBookMenu<(I), (R)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeBookMenu$$Original<I, R> = $RecipeBookMenu<(I), (R)>;}
declare module "net.minecraft.world.inventory.ClickType" {
import {$Enum} from "java.lang.Enum"

export class $ClickType extends $Enum<($ClickType)> {
static readonly "QUICK_MOVE": $ClickType
static readonly "SWAP": $ClickType
static readonly "PICKUP_ALL": $ClickType
static readonly "THROW": $ClickType
static readonly "QUICK_CRAFT": $ClickType
static readonly "PICKUP": $ClickType
static readonly "CLONE": $ClickType

public static "values"(): ($ClickType)[]
public static "valueOf"(arg0: StringJS): $ClickType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickType$$Type = (("pickup") | ("quick_move") | ("swap") | ("clone") | ("throw") | ("quick_craft") | ("pickup_all"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickType$$Original = $ClickType;}
declare module "net.minecraft.world.inventory.ContainerSynchronizer" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$NonNullList$$Type} from "net.minecraft.core.NonNullList"

export interface $ContainerSynchronizer$$Interface {
}

export class $ContainerSynchronizer implements $ContainerSynchronizer$$Interface {
 "sendInitialData"(arg0: $AbstractContainerMenu$$Type, arg1: $NonNullList$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type, arg3: (integer)[]): void
 "sendSlotChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "sendDataChange"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
 "sendCarriedChange"(arg0: $AbstractContainerMenu$$Type, arg1: $ItemStack$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerSynchronizer$$Type = ($ContainerSynchronizer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerSynchronizer$$Original = $ContainerSynchronizer;}
declare module "net.minecraft.world.inventory.StonecutterMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$StonecutterRecipe} from "net.minecraft.world.item.crafting.StonecutterRecipe"
import {$RecipeHolder} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"

export class $StonecutterMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
readonly "container": $Container
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getSelectedRecipeIndex"(): integer
public "getRecipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
public "getNumRecipes"(): integer
public "hasInputItem"(): boolean
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "getType"(): $MenuType<(never)>
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
get "selectedRecipeIndex"(): integer
get "recipes"(): $List<($RecipeHolder<($StonecutterRecipe)>)>
get "numRecipes"(): integer
get "type"(): $MenuType<(never)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StonecutterMenu$$Type = ($StonecutterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StonecutterMenu$$Original = $StonecutterMenu;}
declare module "net.minecraft.world.inventory.DataSlot" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"

export class $DataSlot {
constructor()

public "checkAndClearUpdateFlag"(): boolean
public static "standalone"(): $DataSlot
public "get"(): integer
public "set"(arg0: integer): void
public static "shared"(arg0: (integer)[], arg1: integer): $DataSlot
public static "forContainer"(arg0: $ContainerData$$Type, arg1: integer): $DataSlot
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataSlot$$Type = ($DataSlot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataSlot$$Original = $DataSlot;}
declare module "net.minecraft.world.inventory.Slot" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$OwoSlotExtension$$Interface} from "io.wispforest.owo.util.pond.OwoSlotExtension"
import {$PositionedRectangle, $PositionedRectangle$$Type} from "io.wispforest.owo.ui.core.PositionedRectangle"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$Optional} from "java.util.Optional"
import {$Pair} from "com.mojang.datafixers.util.Pair"
import {$SlotAccessor$$Interface as $SlotAccessor$0$$Interface} from "io.wispforest.accessories.mixin.SlotAccessor"
import {$SlotAccessor$$Interface} from "io.wispforest.owo.mixin.ui.SlotAccessor"

export class $Slot implements $SlotAccessor$0$$Interface, $SlotAccessor$$Interface, $OwoSlotExtension$$Interface {
readonly "container": $Container
 "x": integer
 "index": integer
 "y": integer
readonly "slot": integer

constructor(arg0: $Container$$Type, arg1: integer, arg2: integer, arg3: integer)

public "setByPlayer"(arg0: $ItemStack$$Type): void
public "setByPlayer"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "safeInsert"(arg0: $ItemStack$$Type, arg1: integer): $ItemStack
public "safeInsert"(arg0: $ItemStack$$Type): $ItemStack
public "tryRemove"(arg0: integer, arg1: integer, arg2: $Player$$Type): $Optional<($ItemStack)>
public "onTake"(arg0: $Player$$Type, arg1: $ItemStack$$Type): void
public "safeTake"(arg0: integer, arg1: integer, arg2: $Player$$Type): $ItemStack
public "getContainerSlot"(): integer
public "onQuickCraft"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): void
public "allowModification"(arg0: $Player$$Type): boolean
public "getSlotIndex"(): integer
public "setBackground"(arg0: $ResourceLocation$$Type, arg1: $ResourceLocation$$Type): $Slot
public "owo$setDisabledOverride"(disabled: boolean): void
public "owo$getDisabledOverride"(): boolean
public "owo$setScissorArea"(scissor: $PositionedRectangle$$Type): void
public "accessories$setY"(arg0: integer): void
public "owo$setX"(arg0: integer): void
public "owo$setY"(arg0: integer): void
public "hasItem"(): boolean
public "getItem"(): $ItemStack
public "remove"(arg0: integer): $ItemStack
public "set"(arg0: $ItemStack$$Type): void
public "isActive"(): boolean
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "getMaxStackSize"(): integer
public "setChanged"(): void
public "getNoItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
public "isFake"(): boolean
public "mayPlace"(arg0: $ItemStack$$Type): boolean
public "mayPickup"(arg0: $Player$$Type): boolean
public "isSameInventory"(arg0: $Slot$$Type): boolean
public "owo$getScissorArea"(): $PositionedRectangle
public "isHighlightable"(): boolean
set "byPlayer"(value: $ItemStack$$Type)
get "containerSlot"(): integer
get "slotIndex"(): integer
get "item"(): $ItemStack
get "active"(): boolean
get "maxStackSize"(): integer
get "changed"(): void
get "noItemIcon"(): $Pair<($ResourceLocation), ($ResourceLocation)>
get "fake"(): boolean
get "highlightable"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Slot$$Type = ($Slot);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Slot$$Original = $Slot;}
declare module "net.minecraft.world.inventory.MerchantMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Merchant$$Type} from "net.minecraft.world.item.trading.Merchant"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$MerchantOffers, $MerchantOffers$$Type} from "net.minecraft.world.item.trading.MerchantOffers"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $MerchantMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Merchant$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "tryMoveItems"(arg0: integer): void
public "setXp"(arg0: integer): void
public "setOffers"(arg0: $MerchantOffers$$Type): void
public "getOffers"(): $MerchantOffers
public "canRestock"(): boolean
public "showProgressBar"(): boolean
public "getTraderLevel"(): integer
public "setMerchantLevel"(arg0: integer): void
public "setCanRestock"(arg0: boolean): void
public "setShowProgressBar"(arg0: boolean): void
public "setSelectionHint"(arg0: integer): void
public "getTraderXp"(): integer
public "getFutureTraderXp"(): integer
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
set "xp"(value: integer)
set "offers"(value: $MerchantOffers$$Type)
get "offers"(): $MerchantOffers
get "traderLevel"(): integer
set "merchantLevel"(value: integer)
set "selectionHint"(value: integer)
get "traderXp"(): integer
get "futureTraderXp"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MerchantMenu$$Type = ($MerchantMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MerchantMenu$$Original = $MerchantMenu;}
declare module "net.minecraft.world.inventory.RecipeCraftingHolder" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$List$$Type} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export interface $RecipeCraftingHolder$$Interface {
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "recipeUsed"(): $RecipeHolder<(never)>
}

export class $RecipeCraftingHolder implements $RecipeCraftingHolder$$Interface {
 "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
 "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
 "getRecipeUsed"(): $RecipeHolder<(never)>
 "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RecipeCraftingHolder$$Type = ($RecipeCraftingHolder);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RecipeCraftingHolder$$Original = $RecipeCraftingHolder;}
declare module "net.minecraft.world.inventory.CrafterMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener, $ContainerListener$$Interface} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $CrafterMenu extends $AbstractContainerMenu implements $ContainerListener$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $CraftingContainer$$Type, arg3: $ContainerData$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
public "isPowered"(): boolean
public "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "setSlotState"(arg0: integer, arg1: boolean): void
public "isSlotDisabled"(arg0: integer): boolean
public "getContainer"(): $Container
public "stillValid"(arg0: $Player$$Type): boolean
get "powered"(): boolean
get "container"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CrafterMenu$$Type = ($CrafterMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CrafterMenu$$Original = $CrafterMenu;}
declare module "net.minecraft.world.inventory.EnchantmentMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$DataSlot} from "net.minecraft.world.inventory.DataSlot"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RandomSource} from "net.minecraft.util.RandomSource"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"

export class $EnchantmentMenu extends $AbstractContainerMenu {
readonly "costs": (integer)[]
readonly "access": $ContainerLevelAccess
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "enchantmentSeed": $DataSlot
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
readonly "random": $RandomSource
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "enchantSlots": $Container
readonly "containerListeners": $List<($ContainerListener)>
readonly "enchantClue": (integer)[]
 "containerId": integer
readonly "levelClue": (integer)[]
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getGoldCount"(): integer
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getEnchantmentSeed"(): integer
get "goldCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnchantmentMenu$$Type = ($EnchantmentMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnchantmentMenu$$Original = $EnchantmentMenu;}
declare module "net.minecraft.world.inventory.SlotRange" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$IntList, $IntList$$Type} from "it.unimi.dsi.fastutil.ints.IntList"

export interface $SlotRange$$Interface extends $StringRepresentable$$Interface {
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}

export class $SlotRange implements $SlotRange$$Interface {
 "size"(): integer
static "of"(arg0: StringJS, arg1: $IntList$$Type): $SlotRange
 "slots"(): $IntList
static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
 "getSerializedName"(): StringJS
static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
 "getRemappedEnumConstantName"(): StringJS
static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotRange$$Type = ($SlotRange);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotRange$$Original = $SlotRange;}
declare module "net.minecraft.world.inventory.tooltip.TooltipComponent" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $TooltipComponent$$Interface {
}

export class $TooltipComponent implements $TooltipComponent$$Interface {
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $TooltipComponent$$Type = ($TooltipComponent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $TooltipComponent$$Original = $TooltipComponent;}
declare module "net.minecraft.world.inventory.CartographyTableMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$CallbackInfoReturnable$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfoReturnable"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapItemSavedData$$Type} from "net.minecraft.world.level.saveddata.maps.MapItemSavedData"

export class $CartographyTableMenu extends $AbstractContainerMenu {
readonly "container": $Container
static readonly "ADDITIONAL_SLOT": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "MAP_SLOT": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "handler$baj000$supplementaries$supp$getItem"(player: $Player$$Type, index: integer, cir: $CallbackInfoReturnable$$Type, itemStack: $ItemStack$$Type, slot: $Slot$$Type, itemStack2: $ItemStack$$Type): void
public "handler$baj000$supplementaries$supp$getItem"(mapStack: $ItemStack$$Type, firstSlotStack: $ItemStack$$Type, resultSlotStack: $ItemStack$$Type, level: $Level$$Type, blockPos: $BlockPos$$Type, ci: $CallbackInfo$$Type, mapItemSavedData: $MapItemSavedData$$Type): void
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CartographyTableMenu$$Type = ($CartographyTableMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CartographyTableMenu$$Original = $CartographyTableMenu;}
declare module "net.minecraft.world.inventory.ChestMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $ChestMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $Container$$Type, arg4: integer)

public static "threeRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public static "threeRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public static "oneRow"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "twoRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fourRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "fiveRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type): $ChestMenu
public static "sixRows"(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type): $ChestMenu
public "getRowCount"(): integer
public "getContainer"(): $Container
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
get "rowCount"(): integer
get "container"(): $Container
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ChestMenu$$Type = ($ChestMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ChestMenu$$Original = $ChestMenu;}
declare module "net.minecraft.world.inventory.ContainerListener" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"

export interface $ContainerListener$$Interface {
}

export class $ContainerListener implements $ContainerListener$$Interface {
 "slotChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: $ItemStack$$Type): void
 "dataChanged"(arg0: $AbstractContainerMenu$$Type, arg1: integer, arg2: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerListener$$Type = ($ContainerListener);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerListener$$Original = $ContainerListener;}
declare module "net.minecraft.world.inventory.MenuType$MenuSupplier" {
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuType$MenuSupplier$$Interface<T extends $AbstractContainerMenu> {

(arg0: integer, arg1: $Inventory): T
}

export class $MenuType$MenuSupplier<T extends $AbstractContainerMenu> implements $MenuType$MenuSupplier$$Interface {
 "create"(arg0: integer, arg1: $Inventory$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuType$MenuSupplier$$Type<T> = ((arg0: integer, arg1: $Inventory) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuType$MenuSupplier$$Original<T> = $MenuType$MenuSupplier<(T)>;}
declare module "net.minecraft.world.inventory.ContainerData" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ContainerData$$Interface {
get "count"(): integer
}

export class $ContainerData implements $ContainerData$$Interface {
 "get"(arg0: integer): integer
 "set"(arg0: integer, arg1: integer): void
 "getCount"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerData$$Type = ($ContainerData);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerData$$Original = $ContainerData;}
declare module "net.minecraft.world.inventory.SmokerMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $SmokerMenu extends $AbstractFurnaceMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmokerMenu$$Type = ($SmokerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmokerMenu$$Original = $SmokerMenu;}
declare module "net.minecraft.world.inventory.ContainerLevelAccess" {
import {$BiFunction, $BiFunction$$Type} from "java.util.function.BiFunction"
import {$Optional, $Optional$$Type} from "java.util.Optional"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$Level, $Level$$Type} from "net.minecraft.world.level.Level"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$ContainerLevelAccessMixin$$Interface} from "com.railwayteam.railways.neoforge.mixin.ContainerLevelAccessMixin"

export interface $ContainerLevelAccess$$Interface extends $ContainerLevelAccessMixin$$Interface {

(arg0: $BiFunction<($Level), ($BlockPos), (T)>): (T)?
}

export class $ContainerLevelAccess implements $ContainerLevelAccess$$Interface {
static readonly "NULL": $ContainerLevelAccess

 "evaluate"<T>(arg0: $BiFunction$$Type<($Level), ($BlockPos), (T)>, arg1: T): T
 "evaluate"<T>(arg0: $BiFunction$$Type<($Level), ($BlockPos), (T)>): $Optional<(T)>
 "execute"(arg0: $BiConsumer$$Type<($Level), ($BlockPos)>): void
static "create"(arg0: $Level$$Type, arg1: $BlockPos$$Type): $ContainerLevelAccess
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ContainerLevelAccess$$Type = ((arg0: $BiFunction<($Level), ($BlockPos), (T)>) => (T)?);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ContainerLevelAccess$$Original = $ContainerLevelAccess;}
declare module "net.minecraft.world.inventory.BrewingStandMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BrewingStandMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "getFuel"(): integer
public "getBrewingTicks"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
get "fuel"(): integer
get "brewingTicks"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BrewingStandMenu$$Type = ($BrewingStandMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BrewingStandMenu$$Original = $BrewingStandMenu;}
declare module "net.minecraft.world.inventory.GrindstoneMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $GrindstoneMenu extends $AbstractContainerMenu {
static readonly "INPUT_SLOT": integer
static readonly "ADDITIONAL_SLOT": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "computeResult"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type): $ItemStack
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $GrindstoneMenu$$Type = ($GrindstoneMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $GrindstoneMenu$$Original = $GrindstoneMenu;}
declare module "net.minecraft.world.inventory.AbstractFurnaceMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$SingleRecipeInput} from "net.minecraft.world.item.crafting.SingleRecipeInput"
import {$List} from "java.util.List"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$AbstractCookingRecipe, $AbstractCookingRecipe$$Type} from "net.minecraft.world.item.crafting.AbstractCookingRecipe"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $AbstractFurnaceMenu extends $RecipeBookMenu<($SingleRecipeInput), ($AbstractCookingRecipe)> {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "isLit"(): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "clearCraftingContent"(): void
public "recipeMatches"(arg0: $RecipeHolder$$Type<($AbstractCookingRecipe$$Type)>): boolean
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getGridHeight"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "shouldMoveToInventory"(arg0: integer): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "getBurnProgress"(): float
public "getLitProgress"(): float
public "getSize"(): integer
public "stillValid"(arg0: $Player$$Type): boolean
get "lit"(): boolean
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "gridHeight"(): integer
get "recipeBookType"(): $RecipeBookType
get "burnProgress"(): float
get "litProgress"(): float
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractFurnaceMenu$$Type = ($AbstractFurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractFurnaceMenu$$Original = $AbstractFurnaceMenu;}
declare module "net.minecraft.world.inventory.BlastFurnaceMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $BlastFurnaceMenu extends $AbstractFurnaceMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlastFurnaceMenu$$Type = ($BlastFurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlastFurnaceMenu$$Original = $BlastFurnaceMenu;}
declare module "net.minecraft.world.inventory.HopperMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $HopperMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "CONTAINER_SIZE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $HopperMenu$$Type = ($HopperMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $HopperMenu$$Original = $HopperMenu;}
declare module "net.minecraft.world.inventory.DispenserMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $DispenserMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DispenserMenu$$Type = ($DispenserMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DispenserMenu$$Original = $DispenserMenu;}
declare module "net.minecraft.world.inventory.AnvilMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$CallbackInfo$$Type} from "org.spongepowered.asm.mixin.injection.callback.CallbackInfo"
import {$List} from "java.util.List"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"

export class $AnvilMenu extends $ItemCombinerMenu {
 "repairItemCountCost": integer
readonly "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "itemName": StringJS
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "inputSlotIndexes": $List<(integer)>
static readonly "INPUT_SLOT": integer
readonly "resultSlotIndex": integer
 "stateId": integer
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "MAX_NAME_LENGTH": integer
readonly "inputSlots": $Container
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "handler$cgo000$inventoryprofilesnext$onTakeOutputPost"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $CallbackInfo$$Type): void
public "getCost"(): integer
public "setMaximumCost"(arg0: long): void
public static "calculateIncreasedRepairCost"(arg0: integer): integer
public "handler$cgo000$inventoryprofilesnext$onTakeOutputPre"(arg0: $Player$$Type, arg1: $ItemStack$$Type, arg2: $CallbackInfo$$Type): void
public "redirect$cig000$apothic_enchanting$apoth_chargeOptimalLevels"(arg0: $Player$$Type, arg1: integer): void
public "createResult"(): void
public "modifyExpressionValue$eei000$ae2$setAnnihilationPlaneThreadLocal"(arg0: boolean): boolean
public "constant$cig000$apothic_enchanting$apoth_removeLevelCap"(arg0: integer): integer
public "setItemName"(arg0: StringJS): boolean
get "cost"(): integer
set "maximumCost"(value: long)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilMenu$$Type = ($AnvilMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilMenu$$Original = $AnvilMenu;}
declare module "net.minecraft.world.inventory.CraftingMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$CraftingMenuAccessor$$Interface} from "io.wispforest.accessories.mixin.CraftingMenuAccessor"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer$$Type} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"
import {$ResultContainer$$Type} from "net.minecraft.world.inventory.ResultContainer"

export class $CraftingMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> implements $CraftingMenuAccessor$$Interface {
readonly "access": $ContainerLevelAccess
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "beginPlacingRecipe"(): void
public "finishPlacingRecipe"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
public "clearCraftingContent"(): void
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getGridHeight"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "shouldMoveToInventory"(arg0: integer): boolean
public static "slotChangedCraftingGrid$accessories_$md$b00d76$0"(arg0: $AbstractContainerMenu$$Type, arg1: $Level$$Type, arg2: $Player$$Type, arg3: $CraftingContainer$$Type, arg4: $ResultContainer$$Type, arg5: $RecipeHolder$$Type): void
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public static "accessories$slotChangedCraftingGrid"(abstractContainerMenu: $AbstractContainerMenu$$Type, level: $Level$$Type, player: $Player$$Type, craftingContainer: $CraftingContainer$$Type, resultContainer: $ResultContainer$$Type, recipeHolder: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): void
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "gridHeight"(): integer
get "recipeBookType"(): $RecipeBookType
get "size"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingMenu$$Type = ($CraftingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingMenu$$Original = $CraftingMenu;}
declare module "net.minecraft.world.inventory.AbstractContainerMenu" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$ScreenInternals$LocalPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$LocalPacket"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Set$$Type} from "java.util.Set"
import {$OwoScreenHandlerExtension$$Interface} from "io.wispforest.owo.util.pond.OwoScreenHandlerExtension"
import {$Class$$Type} from "java.lang.Class"
import {$ContainerAccess$$Interface} from "blusunrize.immersiveengineering.mixin.accessors.ContainerAccess"
import {$ClickType$$Type} from "net.minecraft.world.inventory.ClickType"
import {$Endec$$Type} from "io.wispforest.endec.Endec"
import {$ContainerListener, $ContainerListener$$Type} from "net.minecraft.world.inventory.ContainerListener"
import {$SyncedProperty} from "io.wispforest.owo.client.screens.SyncedProperty"
import {$OwoScreenHandler$$Interface} from "io.wispforest.owo.client.screens.OwoScreenHandler"
import {$ScreenHandlerInvoker$$Interface} from "io.wispforest.owo.mixin.ScreenHandlerInvoker"
import {$ContainerSynchronizer$$Type} from "net.minecraft.world.inventory.ContainerSynchronizer"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$ScreenInternals$SyncPropertiesPacket$$Type} from "io.wispforest.owo.client.screens.ScreenInternals$SyncPropertiesPacket"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ReflectiveEndecBuilder} from "io.wispforest.endec.impl.ReflectiveEndecBuilder"
import {$OptionalInt} from "java.util.OptionalInt"
import {$MenuType} from "net.minecraft.world.inventory.MenuType"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$Record, $Record$$Type} from "java.lang.Record"

export class $AbstractContainerMenu implements $ScreenHandlerInvoker$$Interface, $OwoScreenHandlerExtension$$Interface, $OwoScreenHandler$$Interface, $ContainerAccess$$Interface {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

public "addSlotListener"(arg0: $ContainerListener$$Type): void
public "setSynchronizer"(arg0: $ContainerSynchronizer$$Type): void
public "transferState"(arg0: $AbstractContainerMenu$$Type): void
public "setRemoteSlot"(arg0: integer, arg1: $ItemStack$$Type): void
public "owo$attachToPlayer"(player: $Player$$Type): void
public "setItem"(arg0: integer, arg1: integer, arg2: $ItemStack$$Type): void
public static "getRedstoneSignalFromBlockEntity"(arg0: $BlockEntity$$Type): integer
public static "getRedstoneSignalFromContainer"(arg0: $Container$$Type): integer
public "getItems"(): $NonNullList<($ItemStack)>
public "isValidSlotIndex"(arg0: integer): boolean
public "sendAllDataToRemote"(): void
public "removeSlotListener"(arg0: $ContainerListener$$Type): void
public "updateDataSlotListeners"(arg0: integer, arg1: integer): void
public "broadcastFullState"(): void
public "suppressRemoteUpdates"(): void
public "wrapOperation$zzd000$geckolib$forceGeckolibSlotChange"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public "wrapOperation$zzd000$geckolib$forceGeckolibIdSync"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Operation$$Type): boolean
public "setRemoteSlotNoCopy"(arg0: integer, arg1: $ItemStack$$Type): void
public "setRemoteCarried"(arg0: $ItemStack$$Type): void
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "clicked"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public "doClick"(arg0: integer, arg1: integer, arg2: $ClickType$$Type, arg3: $Player$$Type): void
public static "getQuickcraftHeader"(arg0: integer): integer
public static "getQuickcraftType"(arg0: integer): integer
public static "isValidQuickcraftType"(arg0: integer, arg1: $Player$$Type): boolean
public "wrapOperation$zzd000$geckolib$removeGeckolibIdOnCopy"(arg0: $ItemStack$$Type, arg1: integer, arg2: $Operation$$Type): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "initializeContents"(arg0: integer, arg1: $List$$Type<($ItemStack$$Type)>, arg2: $ItemStack$$Type): void
public "resumeRemoteUpdates"(): void
public "getStateId"(): integer
public "incrementStateId"(): integer
public "endecBuilder"(): $ReflectiveEndecBuilder
public "addServerboundMessage"(messageClass: $Class$$Type, endec: $Endec$$Type, handler: $Consumer$$Type): void
public "addClientboundMessage"(messageClass: $Class$$Type, endec: $Endec$$Type, handler: $Consumer$$Type): void
public "sendMessage"(message: $Record$$Type): void
public "owo$handlePacket"(packet: $ScreenInternals$LocalPacket$$Type, clientbound: boolean): void
public "owo$readPropertySync"(packet: $ScreenInternals$SyncPropertiesPacket$$Type): void
public "owo$insertItem"(arg0: $ItemStack$$Type, arg1: integer, arg2: integer, arg3: boolean): boolean
public "getLastSlots"(): $NonNullList
public "getRemoteSlots"(): $NonNullList
public "setData"(arg0: integer, arg1: integer): void
public "getType"(): $MenuType<(never)>
public "getSlot"(arg0: integer): $Slot
public "removed"(arg0: $Player$$Type): void
public "createProperty"(clazz: $Class$$Type, endec: $Endec$$Type, initial: any): $SyncedProperty
public "player"(): $Player
public "broadcastChanges"(): void
public "getCarried"(): $ItemStack
public "setCarried"(arg0: $ItemStack$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
public static "canItemQuickReplace"(arg0: $Slot$$Type, arg1: $ItemStack$$Type, arg2: boolean): boolean
public "canDragTo"(arg0: $Slot$$Type): boolean
public static "getQuickCraftPlaceCount"(arg0: $Set$$Type<($Slot$$Type)>, arg1: integer, arg2: $ItemStack$$Type): integer
public "findSlot"(arg0: $Container$$Type, arg1: integer): $OptionalInt
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
public static "getQuickcraftMask"(arg0: integer, arg1: integer): integer
public "addServerboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
public "addClientboundMessage"<R extends $Record>(messageClass: $Class$$Type<(R)>, handler: $Consumer$$Type<(R)>): void
public "createProperty"<T>(clazz: $Class$$Type<(T)>, initial: T): $SyncedProperty<(T)>
set "synchronizer"(value: $ContainerSynchronizer$$Type)
get "items"(): $NonNullList<($ItemStack)>
set "remoteCarried"(value: $ItemStack$$Type)
get "type"(): $MenuType<(never)>
get "carried"(): $ItemStack
set "carried"(value: $ItemStack$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AbstractContainerMenu$$Type = ($AbstractContainerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AbstractContainerMenu$$Original = $AbstractContainerMenu;}
declare module "net.minecraft.world.inventory.SmithingMenu" {
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container} from "net.minecraft.world.Container"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$ItemCombinerMenu} from "net.minecraft.world.inventory.ItemCombinerMenu"

export class $SmithingMenu extends $ItemCombinerMenu {
readonly "access": $ContainerLevelAccess
static readonly "ADDITIONAL_SLOT": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "ADDITIONAL_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
 "containerId": integer
static readonly "SLOT_Y_PLACEMENT": integer
static readonly "TEMPLATE_SLOT_X_PLACEMENT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "inputSlotIndexes": $List<(integer)>
readonly "resultSlotIndex": integer
static readonly "TEMPLATE_SLOT": integer
 "stateId": integer
 "lastSlots": $NonNullList<($ItemStack)>
readonly "inputSlots": $Container
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "BASE_SLOT_X_PLACEMENT": integer
static readonly "BASE_SLOT": integer
readonly "containerListeners": $List<($ContainerListener)>

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)

public "createResult"(): void
public "canMoveIntoInputSlots"(arg0: $ItemStack$$Type): boolean
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingMenu$$Type = ($SmithingMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingMenu$$Original = $SmithingMenu;}
declare module "net.minecraft.world.inventory.ClickAction" {
import {$Enum} from "java.lang.Enum"

export class $ClickAction extends $Enum<($ClickAction)> {
static readonly "SECONDARY": $ClickAction
static readonly "PRIMARY": $ClickAction

public static "values"(): ($ClickAction)[]
public static "valueOf"(arg0: StringJS): $ClickAction
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ClickAction$$Type = (("primary") | ("secondary"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ClickAction$$Original = $ClickAction;}
declare module "net.minecraft.world.inventory.PlayerEnderChestContainer" {
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$EnderChestBlockEntity$$Type} from "net.minecraft.world.level.block.entity.EnderChestBlockEntity"
import {$SimpleContainer} from "net.minecraft.world.SimpleContainer"
import {$ListTag, $ListTag$$Type} from "net.minecraft.nbt.ListTag"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export class $PlayerEnderChestContainer extends $SimpleContainer {
constructor()

public "setActiveChest"(arg0: $EnderChestBlockEntity$$Type): void
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "isActiveChest"(arg0: $EnderChestBlockEntity$$Type): boolean
public "createTag"(arg0: $HolderLookup$Provider$$Type): $ListTag
public "stillValid"(arg0: $Player$$Type): boolean
public "fromTag"(arg0: $ListTag$$Type, arg1: $HolderLookup$Provider$$Type): void
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public static "tryClear"(arg0: any): void
set "activeChest"(value: $EnderChestBlockEntity$$Type)
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $PlayerEnderChestContainer$$Type = ($PlayerEnderChestContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $PlayerEnderChestContainer$$Original = $PlayerEnderChestContainer;}
declare module "net.minecraft.world.inventory.ResultContainer" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List, $List$$Type} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$RecipeCraftingHolder$$Interface} from "net.minecraft.world.inventory.RecipeCraftingHolder"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$RecipeHolder, $RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"

export class $ResultContainer implements $Container$$Interface, $RecipeCraftingHolder$$Interface {
constructor()

public "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
public "clearContent"(): void
public "setRecipeUsed"(arg0: $RecipeHolder$$Type<(never)>): void
public "getRecipeUsed"(): $RecipeHolder<(never)>
public "getItem"(arg0: integer): $ItemStack
public "removeItem"(arg0: integer, arg1: integer): $ItemStack
public "isEmpty"(): boolean
public "setChanged"(): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getContainerSize"(): integer
public "removeItemNoUpdate"(arg0: integer): $ItemStack
public "startOpen"(arg0: $Player$$Type): void
public "stopOpen"(arg0: $Player$$Type): void
public "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
public "countItem"(arg0: $Item$$Type): integer
public "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
public "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
public static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
public "getMaxStackSize"(): integer
public "getMaxStackSize"(arg0: $ItemStack$$Type): integer
public "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
public "setRecipeUsed"(arg0: $Level$$Type, arg1: $ServerPlayer$$Type, arg2: $RecipeHolder$$Type<(never)>): boolean
public "awardUsedRecipes"(arg0: $Player$$Type, arg1: $List$$Type<($ItemStack$$Type)>): void
public static "tryClear"(arg0: any): void
public "self"(): $Container
public "isMutable"(): boolean
public "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
public "getSlots"(): integer
public "getStackInSlot"(slot: integer): $ItemStack
public "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
public "getSlotLimit"(slot: integer): integer
public "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
public "clear"(): void
public "getWidth"(): integer
public "getHeight"(): integer
public "getBlock"(level: $Level$$Type): $LevelBlock
public "setChanged"(): void
public "asContainer"(): $Container
public "setTransferCooldown"(arg0: long): void
public "canReceiveTransferCooldown"(): boolean
public "lithium$itemInsertionTestRequiresStackSize1"(): boolean
public "isEmpty"(): boolean
public "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
public "clear"(match: $ItemPredicate$$Type): void
public "find"(match: $ItemPredicate$$Type): integer
public "find"(): integer
public "count"(match: $ItemPredicate$$Type): integer
public "count"(): integer
public "countNonEmpty"(): integer
public "countNonEmpty"(match: $ItemPredicate$$Type): integer
public "getAllItems"(): $List<($ItemStack)>
set "recipeUsed"(value: $RecipeHolder$$Type<(never)>)
get "recipeUsed"(): $RecipeHolder<(never)>
get "empty"(): boolean
get "changed"(): void
get "containerSize"(): integer
get "maxStackSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ResultContainer$$Type = ($ResultContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ResultContainer$$Original = $ResultContainer;}
declare module "net.minecraft.world.inventory.StackedContentsCompatible" {
import {$StackedContents, $StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export interface $StackedContentsCompatible$$Interface {

(arg0: $StackedContents): void
}

export class $StackedContentsCompatible implements $StackedContentsCompatible$$Interface {
 "fillStackedContents"(arg0: $StackedContents$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StackedContentsCompatible$$Type = ((arg0: $StackedContents) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StackedContentsCompatible$$Original = $StackedContentsCompatible;}
declare module "net.minecraft.world.inventory.CraftingContainer" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$CraftingInput$Positioned} from "net.minecraft.world.item.crafting.CraftingInput$Positioned"
import {$List} from "java.util.List"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$StackedContentsCompatible$$Interface} from "net.minecraft.world.inventory.StackedContentsCompatible"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$LevelBlock} from "dev.latvian.mods.kubejs.level.LevelBlock"
import {$Container, $Container$$Type, $Container$$Interface} from "net.minecraft.world.Container"
import {$ItemPredicate$$Type} from "dev.latvian.mods.kubejs.item.ItemPredicate"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$Set$$Type} from "java.util.Set"
import {$BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export interface $CraftingContainer$$Interface extends $Container$$Interface, $StackedContentsCompatible$$Interface {
get "items"(): $List<($ItemStack)>
get "width"(): integer
get "height"(): integer
get "empty"(): boolean
get "maxStackSize"(): integer
get "changed"(): void
get "containerSize"(): integer
get "mutable"(): boolean
get "slots"(): integer
get "width"(): integer
get "height"(): integer
get "changed"(): void
set "transferCooldown"(value: long)
get "empty"(): boolean
get "allItems"(): $List<($ItemStack)>
}

export class $CraftingContainer implements $CraftingContainer$$Interface {
 "getItems"(): $List<($ItemStack)>
 "asCraftInput"(): $CraftingInput
 "asPositionedCraftInput"(): $CraftingInput$Positioned
 "getWidth"(): integer
 "getHeight"(): integer
 "setItem"(arg0: integer, arg1: $ItemStack$$Type): void
 "startOpen"(arg0: $Player$$Type): void
 "stopOpen"(arg0: $Player$$Type): void
 "canPlaceItem"(arg0: integer, arg1: $ItemStack$$Type): boolean
 "countItem"(arg0: $Item$$Type): integer
 "hasAnyOf"(arg0: $Set$$Type<($Item$$Type)>): boolean
 "hasAnyMatching"(arg0: $Predicate$$Type<($ItemStack)>): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type): boolean
static "stillValidBlockEntity"(arg0: $BlockEntity$$Type, arg1: $Player$$Type, arg2: float): boolean
 "getItem"(arg0: integer): $ItemStack
 "removeItem"(arg0: integer, arg1: integer): $ItemStack
 "isEmpty"(): boolean
 "getMaxStackSize"(): integer
 "getMaxStackSize"(arg0: $ItemStack$$Type): integer
 "setChanged"(): void
 "canTakeItem"(arg0: $Container$$Type, arg1: integer, arg2: $ItemStack$$Type): boolean
 "stillValid"(arg0: $Player$$Type): boolean
 "getContainerSize"(): integer
 "removeItemNoUpdate"(arg0: integer): $ItemStack
 "fillStackedContents"(arg0: $StackedContents$$Type): void
 "clearContent"(): void
static "tryClear"(arg0: any): void
 "self"(): $Container
 "isMutable"(): boolean
 "setStackInSlot"(slot: integer, stack: $ItemStack$$Type): void
 "getSlots"(): integer
 "getStackInSlot"(slot: integer): $ItemStack
 "insertItem"(slot: integer, stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "extractItem"(slot: integer, amount: integer, simulate: boolean): $ItemStack
 "getSlotLimit"(slot: integer): integer
 "isItemValid"(slot: integer, stack: $ItemStack$$Type): boolean
 "clear"(): void
 "getWidth"(): integer
 "getHeight"(): integer
 "getBlock"(level: $Level$$Type): $LevelBlock
 "setChanged"(): void
 "asContainer"(): $Container
 "setTransferCooldown"(arg0: long): void
 "canReceiveTransferCooldown"(): boolean
 "lithium$itemInsertionTestRequiresStackSize1"(): boolean
 "isEmpty"(): boolean
 "insertItem"(stack: $ItemStack$$Type, simulate: boolean): $ItemStack
 "clear"(match: $ItemPredicate$$Type): void
 "find"(match: $ItemPredicate$$Type): integer
 "find"(): integer
 "count"(match: $ItemPredicate$$Type): integer
 "count"(): integer
 "countNonEmpty"(): integer
 "countNonEmpty"(match: $ItemPredicate$$Type): integer
 "getAllItems"(): $List<($ItemStack)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CraftingContainer$$Type = ($CraftingContainer);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CraftingContainer$$Original = $CraftingContainer;}
declare module "net.minecraft.world.inventory.LoomMenu" {
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$Runnable$$Type} from "java.lang.Runnable"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Holder} from "net.minecraft.core.Holder"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Operation$$Type} from "com.llamalad7.mixinextras.injector.wrapoperation.Operation"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$BannerPattern} from "net.minecraft.world.level.block.entity.BannerPattern"
import {$Item} from "net.minecraft.world.item.Item"

export class $LoomMenu extends $AbstractContainerMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $ContainerLevelAccess$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getResultSlot"(): $Slot
public "getBannerSlot"(): $Slot
public "getDyeSlot"(): $Slot
public "getPatternSlot"(): $Slot
public "getSelectablePatterns"(): $List<($Holder<($BannerPattern)>)>
public "registerUpdateListener"(arg0: $Runnable$$Type): void
public "wrapOperation$bbn000$supplementaries$supp$flagStuff"(instance: $ItemStack$$Type, original: $Operation$$Type): $Item
public "getSelectedBannerPatternIndex"(): integer
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
get "resultSlot"(): $Slot
get "bannerSlot"(): $Slot
get "dyeSlot"(): $Slot
get "patternSlot"(): $Slot
get "selectablePatterns"(): $List<($Holder<($BannerPattern)>)>
get "selectedBannerPatternIndex"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LoomMenu$$Type = ($LoomMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LoomMenu$$Original = $LoomMenu;}
declare module "net.minecraft.world.inventory.FurnaceMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$List} from "java.util.List"
import {$AbstractFurnaceMenu} from "net.minecraft.world.inventory.AbstractFurnaceMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $FurnaceMenu extends $AbstractFurnaceMenu {
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "INGREDIENT_SLOT": integer
static readonly "DATA_COUNT": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_COUNT": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "FUEL_SLOT": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type, arg3: $ContainerData$$Type)

}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FurnaceMenu$$Type = ($FurnaceMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FurnaceMenu$$Original = $FurnaceMenu;}
declare module "net.minecraft.world.inventory.InventoryMenu" {
import {$CraftingInput} from "net.minecraft.world.item.crafting.CraftingInput"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$RecipeBookMenu} from "net.minecraft.world.inventory.RecipeBookMenu"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"
import {$Slot, $Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$RecipeHolder$$Type} from "net.minecraft.world.item.crafting.RecipeHolder"
import {$RecipeBookType} from "net.minecraft.world.inventory.RecipeBookType"
import {$CraftingRecipe, $CraftingRecipe$$Type} from "net.minecraft.world.item.crafting.CraftingRecipe"
import {$CraftingContainer} from "net.minecraft.world.inventory.CraftingContainer"
import {$StackedContents$$Type} from "net.minecraft.world.entity.player.StackedContents"

export class $InventoryMenu extends $RecipeBookMenu<($CraftingInput), ($CraftingRecipe)> {
static readonly "CRAFT_SLOT_END": integer
static readonly "BLOCK_ATLAS": $ResourceLocation
static readonly "EMPTY_ARMOR_SLOT_BOOTS": $ResourceLocation
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
static readonly "USE_ROW_SLOT_START": integer
static readonly "EMPTY_ARMOR_SLOT_CHESTPLATE": $ResourceLocation
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "CRAFT_SLOT_COUNT": integer
static readonly "SHIELD_SLOT": integer
static readonly "ARMOR_SLOT_START": integer
static readonly "ARMOR_SLOT_COUNT": integer
static readonly "INV_SLOT_START": integer
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
static readonly "CRAFT_SLOT_START": integer
readonly "owner": $Player
static readonly "EMPTY_ARMOR_SLOT_HELMET": $ResourceLocation
 "stateId": integer
readonly "active": boolean
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "ARMOR_SLOT_END": integer
static readonly "RESULT_SLOT": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "USE_ROW_SLOT_END": integer
static readonly "EMPTY_ARMOR_SLOT_SHIELD": $ResourceLocation
static readonly "SLOT_CLICKED_OUTSIDE": integer
static readonly "INV_SLOT_END": integer
static readonly "EMPTY_ARMOR_SLOT_LEGGINGS": $ResourceLocation
readonly "containerListeners": $List<($ContainerListener)>
static readonly "CONTAINER_ID": integer

constructor(arg0: $Inventory$$Type, arg1: boolean, arg2: $Player$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "clearCraftingContent"(): void
public "recipeMatches"(arg0: $RecipeHolder$$Type<($CraftingRecipe$$Type)>): boolean
public "getResultSlotIndex"(): integer
public "getGridWidth"(): integer
public "getGridHeight"(): integer
public "getRecipeBookType"(): $RecipeBookType
public "shouldMoveToInventory"(arg0: integer): boolean
public "fillCraftSlotsStackedContents"(arg0: $StackedContents$$Type): void
public "getSize"(): integer
public "removed"(arg0: $Player$$Type): void
public static "isHotbarSlot"(arg0: integer): boolean
public "getCraftSlots"(): $CraftingContainer
public "stillValid"(arg0: $Player$$Type): boolean
public "canTakeItemForPickAll"(arg0: $ItemStack$$Type, arg1: $Slot$$Type): boolean
get "resultSlotIndex"(): integer
get "gridWidth"(): integer
get "gridHeight"(): integer
get "recipeBookType"(): $RecipeBookType
get "size"(): integer
get "craftSlots"(): $CraftingContainer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryMenu$$Type = ($InventoryMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryMenu$$Original = $InventoryMenu;}
declare module "net.minecraft.world.inventory.MenuType" {
import {$MenuType$MenuSupplier$$Type} from "net.minecraft.world.inventory.MenuType$MenuSupplier"
import {$LoomMenu} from "net.minecraft.world.inventory.LoomMenu"
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$List} from "java.util.List"
import {$GrindstoneMenu} from "net.minecraft.world.inventory.GrindstoneMenu"
import {$IMenuTypeExtension$$Interface} from "net.neoforged.neoforge.common.extensions.IMenuTypeExtension"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$MenuTypeKJS$$Interface} from "dev.latvian.mods.kubejs.core.MenuTypeKJS"
import {$CartographyTableMenu} from "net.minecraft.world.inventory.CartographyTableMenu"
import {$Holder} from "net.minecraft.core.Holder"
import {$CraftingMenu} from "net.minecraft.world.inventory.CraftingMenu"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$FeatureElement$$Interface} from "net.minecraft.world.flag.FeatureElement"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BeaconMenu} from "net.minecraft.world.inventory.BeaconMenu"
import {$DispenserMenu} from "net.minecraft.world.inventory.DispenserMenu"
import {$AnvilMenu} from "net.minecraft.world.inventory.AnvilMenu"
import {$LecternMenu} from "net.minecraft.world.inventory.LecternMenu"
import {$EnchantmentMenu} from "net.minecraft.world.inventory.EnchantmentMenu"
import {$SmokerMenu} from "net.minecraft.world.inventory.SmokerMenu"
import {$CrafterMenu} from "net.minecraft.world.inventory.CrafterMenu"
import {$ChestMenu} from "net.minecraft.world.inventory.ChestMenu"
import {$IContainerFactory$$Type} from "net.neoforged.neoforge.network.IContainerFactory"
import {$StonecutterMenu} from "net.minecraft.world.inventory.StonecutterMenu"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$BlastFurnaceMenu} from "net.minecraft.world.inventory.BlastFurnaceMenu"
import {$ShulkerBoxMenu} from "net.minecraft.world.inventory.ShulkerBoxMenu"
import {$Registry} from "net.minecraft.core.Registry"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey} from "net.minecraft.tags.TagKey"
import {$SmithingMenu} from "net.minecraft.world.inventory.SmithingMenu"
import {$BrewingStandMenu} from "net.minecraft.world.inventory.BrewingStandMenu"
import {$HopperMenu} from "net.minecraft.world.inventory.HopperMenu"
import {$FurnaceMenu} from "net.minecraft.world.inventory.FurnaceMenu"
import {$MerchantMenu} from "net.minecraft.world.inventory.MerchantMenu"

export class $MenuType<T extends $AbstractContainerMenu> implements $FeatureElement$$Interface, $IMenuTypeExtension$$Interface<(T)>, $MenuTypeKJS$$Interface {
static readonly "ENCHANTMENT": $MenuType<($EnchantmentMenu)>
static readonly "LOOM": $MenuType<($LoomMenu)>
static readonly "BLAST_FURNACE": $MenuType<($BlastFurnaceMenu)>
static readonly "CARTOGRAPHY_TABLE": $MenuType<($CartographyTableMenu)>
static readonly "BEACON": $MenuType<($BeaconMenu)>
static readonly "MERCHANT": $MenuType<($MerchantMenu)>
static readonly "CRAFTER_3x3": $MenuType<($CrafterMenu)>
static readonly "FURNACE": $MenuType<($FurnaceMenu)>
static readonly "ANVIL": $MenuType<($AnvilMenu)>
static readonly "STONECUTTER": $MenuType<($StonecutterMenu)>
static readonly "GENERIC_3x3": $MenuType<($DispenserMenu)>
static readonly "CRAFTING": $MenuType<($CraftingMenu)>
static readonly "GENERIC_9x1": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x2": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x3": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x4": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x5": $MenuType<($ChestMenu)>
static readonly "GENERIC_9x6": $MenuType<($ChestMenu)>
static readonly "BREWING_STAND": $MenuType<($BrewingStandMenu)>
static readonly "SMOKER": $MenuType<($SmokerMenu)>
static readonly "SMITHING": $MenuType<($SmithingMenu)>
static readonly "HOPPER": $MenuType<($HopperMenu)>
static readonly "LECTERN": $MenuType<($LecternMenu)>
static readonly "GRINDSTONE": $MenuType<($GrindstoneMenu)>
static readonly "SHULKER_BOX": $MenuType<($ShulkerBoxMenu)>

constructor(arg0: $MenuType$MenuSupplier$$Type<(T)>, arg1: $FeatureFlagSet$$Type)

public "create"(arg0: integer, arg1: $Inventory$$Type, arg2: $RegistryFriendlyByteBuf$$Type): T
public "create"(arg0: integer, arg1: $Inventory$$Type): T
public "requiredFeatures"(): $FeatureFlagSet
public "getKey"(): $ResourceKey
public "getId"(): StringJS
public "isEnabled"(arg0: $FeatureFlagSet$$Type): boolean
public static "create"<T extends $AbstractContainerMenu>(arg0: $IContainerFactory$$Type<(T)>): $MenuType<(T)>
public "getRegistryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
public "getRegistry"(): $Registry<($MenuType<(never)>)>
public "asHolder"(): $Holder<($MenuType<(never)>)>
public "getIdLocation"(): $ResourceLocation
public "getMod"(): StringJS
public "getTagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
public "getTags"(): $List<($ResourceLocation)>
public "hasTag"(tag: $ResourceLocation$$Type): boolean
public "specialEquals"(o: any, shallow: boolean): boolean
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "key"(): $ResourceKey
get "id"(): StringJS
get "registryId"(): $ResourceKey<($Registry<($MenuType<(never)>)>)>
get "registry"(): $Registry<($MenuType<(never)>)>
get "idLocation"(): $ResourceLocation
get "mod"(): StringJS
get "tagKeys"(): $List<($TagKey<($MenuType<(never)>)>)>
get "tags"(): $List<($ResourceLocation)>
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Literal": Special.Menu
/**
 * This field is a type stub generated by ProbeJS and shall not be used in any sense.
 */
 "probejsInternal$$Tag": Special.MenuTag
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuType$$Type<T> = (Special.Menu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuType$$Original<T> = $MenuType<(T)>;}
declare module "net.minecraft.world.inventory.ItemCombinerMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$ContainerLevelAccess, $ContainerLevelAccess$$Type} from "net.minecraft.world.inventory.ContainerLevelAccess"
import {$MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $ItemCombinerMenu extends $AbstractContainerMenu {
readonly "access": $ContainerLevelAccess
readonly "resultSlotIndex": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
readonly "inputSlots": $Container
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer
readonly "inputSlotIndexes": $List<(integer)>

constructor(arg0: $MenuType$$Type<(never)>, arg1: integer, arg2: $Inventory$$Type, arg3: $ContainerLevelAccess$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "slotsChanged"(arg0: $Container$$Type): void
public "getResultSlot"(): integer
public "createResult"(): void
public "getSlotToQuickMoveTo"(arg0: $ItemStack$$Type): integer
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
get "resultSlot"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemCombinerMenu$$Type = ($ItemCombinerMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemCombinerMenu$$Original = $ItemCombinerMenu;}
declare module "net.minecraft.world.inventory.ShulkerBoxMenu" {
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container, $Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $ShulkerBoxMenu extends $AbstractContainerMenu {
readonly "container": $Container
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer, arg1: $Inventory$$Type, arg2: $Container$$Type)
constructor(arg0: integer, arg1: $Inventory$$Type)

public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "removed"(arg0: $Player$$Type): void
public "stillValid"(arg0: $Player$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ShulkerBoxMenu$$Type = ($ShulkerBoxMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ShulkerBoxMenu$$Original = $ShulkerBoxMenu;}
declare module "net.minecraft.world.inventory.LecternMenu" {
import {$ContainerData$$Type} from "net.minecraft.world.inventory.ContainerData"
import {$Slot} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$ContainerListener} from "net.minecraft.world.inventory.ContainerListener"
import {$ItemStack} from "net.minecraft.world.item.ItemStack"
import {$Container$$Type} from "net.minecraft.world.Container"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$List} from "java.util.List"
import {$NonNullList} from "net.minecraft.core.NonNullList"

export class $LecternMenu extends $AbstractContainerMenu {
static readonly "BUTTON_PREV_PAGE": integer
 "stateId": integer
static readonly "QUICKCRAFT_HEADER_START": integer
readonly "remoteSlots": $NonNullList<($ItemStack)>
 "lastSlots": $NonNullList<($ItemStack)>
static readonly "BUTTON_PAGE_JUMP_RANGE_START": integer
static readonly "QUICKCRAFT_HEADER_CONTINUE": integer
static readonly "BUTTON_NEXT_PAGE": integer
static readonly "QUICKCRAFT_TYPE_CLONE": integer
static readonly "QUICKCRAFT_TYPE_GREEDY": integer
static readonly "QUICKCRAFT_HEADER_END": integer
readonly "slots": $NonNullList<($Slot)>
static readonly "BUTTON_TAKE_BOOK": integer
static readonly "CARRIED_SLOT_SIZE": integer
static readonly "SLOT_CLICKED_OUTSIDE": integer
readonly "containerListeners": $List<($ContainerListener)>
 "containerId": integer
static readonly "QUICKCRAFT_TYPE_CHARITABLE": integer

constructor(arg0: integer)
constructor(arg0: integer, arg1: $Container$$Type, arg2: $ContainerData$$Type)

public "getBook"(): $ItemStack
public "clickMenuButton"(arg0: $Player$$Type, arg1: integer): boolean
public "quickMoveStack"(arg0: $Player$$Type, arg1: integer): $ItemStack
public "setData"(arg0: integer, arg1: integer): void
public "stillValid"(arg0: $Player$$Type): boolean
public "getPage"(): integer
get "book"(): $ItemStack
get "page"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LecternMenu$$Type = ($LecternMenu);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LecternMenu$$Original = $LecternMenu;}
declare module "net.minecraft.world.inventory.MenuConstructor" {
import {$Player, $Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$AbstractContainerMenu, $AbstractContainerMenu$$Type} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$Inventory, $Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"

export interface $MenuConstructor$$Interface {

(arg0: integer, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu$$Type
}

export class $MenuConstructor implements $MenuConstructor$$Interface {
 "createMenu"(arg0: integer, arg1: $Inventory$$Type, arg2: $Player$$Type): $AbstractContainerMenu
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuConstructor$$Type = ((arg0: integer, arg1: $Inventory, arg2: $Player) => $AbstractContainerMenu$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuConstructor$$Original = $MenuConstructor;}
