declare module "com.hrznstudio.titanium.api.client.IAssetType" {
import {$IAsset, $IAsset$$Type} from "com.hrznstudio.titanium.api.client.IAsset"

export interface $IAssetType$$Interface<T extends $IAsset> {
get "defaultAsset"(): T
}

export class $IAssetType<T extends $IAsset> implements $IAssetType$$Interface {
 "getDefaultAsset"(): T
 "castOrDefault"(arg0: $IAsset$$Type): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAssetType$$Type<T> = ($IAssetType<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAssetType$$Original<T> = $IAssetType<(T)>;}
declare module "com.hrznstudio.titanium.api.filter.IFilter$Type" {
import {$Enum} from "java.lang.Enum"
import {$Predicate} from "java.util.function.Predicate"

export class $IFilter$Type extends $Enum<($IFilter$Type)> {
static readonly "BLACKLIST": $IFilter$Type
static readonly "WHITELIST": $IFilter$Type

public "getFilter"(): $Predicate<(boolean)>
public static "values"(): ($IFilter$Type)[]
public static "valueOf"(arg0: StringJS): $IFilter$Type
get "filter"(): $Predicate<(boolean)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilter$Type$$Type = (("whitelist") | ("blacklist"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFilter$Type$$Original = $IFilter$Type;}
declare module "com.hrznstudio.titanium.api.ISpecialCreativeTabItem" {
import {$BuildCreativeModeTabContentsEvent, $BuildCreativeModeTabContentsEvent$$Type} from "net.neoforged.neoforge.event.BuildCreativeModeTabContentsEvent"

export interface $ISpecialCreativeTabItem$$Interface {

(arg0: $BuildCreativeModeTabContentsEvent): void
}

export class $ISpecialCreativeTabItem implements $ISpecialCreativeTabItem$$Interface {
 "addToTab"(arg0: $BuildCreativeModeTabContentsEvent$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ISpecialCreativeTabItem$$Type = ((arg0: $BuildCreativeModeTabContentsEvent) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ISpecialCreativeTabItem$$Original = $ISpecialCreativeTabItem;}
declare module "com.hrznstudio.titanium.api.IFactory" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IFactory$$Interface<T> {

(): T
}

export class $IFactory<T> implements $IFactory$$Interface {
 "create"(): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFactory$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFactory$$Original<T> = $IFactory<(T)>;}
declare module "com.hrznstudio.titanium.api.filter.FilterSlot" {
import {$DyeColor$$Type} from "net.minecraft.world.item.DyeColor"

export class $FilterSlot<T> {
constructor(arg0: integer, arg1: integer, arg2: integer, arg3: T)

public "getFilterID"(): integer
public "setColor"(arg0: integer): void
public "setColor"(arg0: $DyeColor$$Type): void
public "getFilter"(): T
public "setFilter"(arg0: T): void
public "getY"(): integer
public "getX"(): integer
public "getColor"(): integer
get "filterID"(): integer
set "color"(value: integer)
set "color"(value: $DyeColor$$Type)
get "filter"(): T
set "filter"(value: T)
get "y"(): integer
get "x"(): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterSlot$$Type<T> = ($FilterSlot<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterSlot$$Original<T> = $FilterSlot<(T)>;}
declare module "com.hrznstudio.titanium.api.client.assets.types.ITankAsset" {
import {$IAsset$$Interface} from "com.hrznstudio.titanium.api.client.IAsset"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Rectangle} from "java.awt.Rectangle"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Point} from "java.awt.Point"

export interface $ITankAsset$$Interface extends $IAsset$$Interface {
get "area"(): $Rectangle
get "offset"(): $Point
get "resourceLocation"(): $ResourceLocation
}

export class $ITankAsset implements $ITankAsset$$Interface {
 "getFluidRenderPadding"(arg0: $Direction$$Type): integer
 "getArea"(): $Rectangle
 "getOffset"(): $Point
 "getResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITankAsset$$Type = ($ITankAsset);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITankAsset$$Original = $ITankAsset;}
declare module "com.hrznstudio.titanium.api.IRecipeProvider" {
import {$RecipeOutput, $RecipeOutput$$Type} from "net.minecraft.data.recipes.RecipeOutput"

export interface $IRecipeProvider$$Interface {

(arg0: $RecipeOutput): void
}

export class $IRecipeProvider implements $IRecipeProvider$$Interface {
 "registerRecipe"(arg0: $RecipeOutput$$Type): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRecipeProvider$$Type = ((arg0: $RecipeOutput) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRecipeProvider$$Original = $IRecipeProvider;}
declare module "com.hrznstudio.titanium.api.filter.IFilter" {
import {$FilterAction} from "com.hrznstudio.titanium.api.filter.FilterAction"
import {$IScreenAddon} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$CompoundTag, $CompoundTag$$Type} from "net.minecraft.nbt.CompoundTag"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IFilter$Type} from "com.hrznstudio.titanium.api.filter.IFilter$Type"
import {$IFactory} from "com.hrznstudio.titanium.api.IFactory"
import {$IScreenAddonProvider$$Interface} from "com.hrznstudio.titanium.api.client.IScreenAddonProvider"
import {$FilterSlot, $FilterSlot$$Type} from "com.hrznstudio.titanium.api.filter.FilterSlot"
import {$INBTSerializable$$Interface} from "net.neoforged.neoforge.common.util.INBTSerializable"
import {$HolderLookup$Provider$$Type} from "net.minecraft.core.HolderLookup$Provider"

export interface $IFilter$$Interface<T> extends $INBTSerializable$$Interface<($CompoundTag)>, $IScreenAddonProvider$$Interface {
get "filterSlots"(): ($FilterSlot<(T)>)[]
get "name"(): StringJS
get "type"(): $IFilter$Type
get "action"(): $FilterAction<(T)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}

export class $IFilter<T> implements $IFilter$$Interface {
 "getFilterSlots"(): ($FilterSlot<(T)>)[]
 "acceptsAsFilter"(arg0: $ItemStack$$Type): boolean
 "toggleFilterMode"(): void
 "selectNextFilter"(): void
 "setFilter"(arg0: integer, arg1: $FilterSlot$$Type<(T)>): void
 "setFilter"(arg0: integer, arg1: $ItemStack$$Type): void
 "getName"(): StringJS
 "matches"(arg0: T): boolean
 "getType"(): $IFilter$Type
 "getAction"(): $FilterAction<(T)>
 "deserializeNBT"(arg0: $HolderLookup$Provider$$Type, arg1: $CompoundTag$$Type): void
 "serializeNBT"(arg0: $HolderLookup$Provider$$Type): $CompoundTag
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IFilter$$Type<T> = ($IFilter<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IFilter$$Original<T> = $IFilter<(T)>;}
declare module "com.hrznstudio.titanium.api.client.IScreenAddon" {
import {$GuiEventListener$$Interface} from "net.minecraft.client.gui.components.events.GuiEventListener"
import {$FocusNavigationEvent$$Type} from "net.minecraft.client.gui.navigation.FocusNavigationEvent"
import {$IAssetProvider$$Type} from "com.hrznstudio.titanium.client.screen.asset.IAssetProvider"
import {$ScreenRectangle} from "net.minecraft.client.gui.navigation.ScreenRectangle"
import {$GuiGraphics$$Type} from "net.minecraft.client.gui.GuiGraphics"
import {$Screen$$Type} from "net.minecraft.client.gui.screens.Screen"
import {$List} from "java.util.List"
import {$ComponentPath} from "net.minecraft.client.gui.ComponentPath"
import {$Component} from "net.minecraft.network.chat.Component"

export interface $IScreenAddon$$Interface extends $GuiEventListener$$Interface {
get "background"(): boolean
get "tooltipLines"(): $List<($Component)>
set "focused"(value: boolean)
get "focused"(): boolean
get "currentFocusPath"(): $ComponentPath
get "rectangle"(): $ScreenRectangle
get "tabOrderGroup"(): integer
}

export class $IScreenAddon implements $IScreenAddon$$Interface {
 "drawForegroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "isBackground"(): boolean
 "drawBackgroundLayer"(arg0: $GuiGraphics$$Type, arg1: $Screen$$Type, arg2: $IAssetProvider$$Type, arg3: integer, arg4: integer, arg5: integer, arg6: integer, arg7: float): void
 "init"(arg0: integer, arg1: integer): void
 "keyPressed"(arg0: integer, arg1: integer, arg2: integer): boolean
 "mouseClicked"(arg0: double, arg1: double, arg2: integer): boolean
 "getTooltipLines"(): $List<($Component)>
 "setFocused"(arg0: boolean): void
 "mouseReleased"(arg0: double, arg1: double, arg2: integer): boolean
 "mouseDragged"(arg0: double, arg1: double, arg2: integer, arg3: double, arg4: double): boolean
 "mouseScrolled"(arg0: double, arg1: double, arg2: double, arg3: double): boolean
 "keyReleased"(arg0: integer, arg1: integer, arg2: integer): boolean
 "charTyped"(arg0: character, arg1: integer): boolean
 "isFocused"(): boolean
 "isMouseOver"(arg0: double, arg1: double): boolean
 "mouseMoved"(arg0: double, arg1: double): void
 "nextFocusPath"(arg0: $FocusNavigationEvent$$Type): $ComponentPath
 "getCurrentFocusPath"(): $ComponentPath
 "getRectangle"(): $ScreenRectangle
 "getTabOrderGroup"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenAddon$$Type = ($IScreenAddon);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenAddon$$Original = $IScreenAddon;}
declare module "com.hrznstudio.titanium.api.redstone.IRedstoneState" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IRedstoneState$$Interface {

(): boolean
get "receivingRedstone"(): boolean
}

export class $IRedstoneState implements $IRedstoneState$$Interface {
 "isReceivingRedstone"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneState$$Type = (() => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRedstoneState$$Original = $IRedstoneState;}
declare module "com.hrznstudio.titanium.api.filter.FilterAction" {
import {$IFilter, $IFilter$$Type} from "com.hrznstudio.titanium.api.filter.IFilter"
import {$BiPredicate, $BiPredicate$$Type} from "java.util.function.BiPredicate"

export class $FilterAction<T> {
constructor(arg0: $BiPredicate$$Type<($IFilter<(T)>), (T)>)

public "getFilterCheck"(): $BiPredicate<($IFilter<(T)>), (T)>
get "filterCheck"(): $BiPredicate<($IFilter<(T)>), (T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterAction$$Type<T> = ($FilterAction<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterAction$$Original<T> = $FilterAction<(T)>;}
declare module "com.hrznstudio.titanium.api.IMachine" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$List} from "java.util.List"
import {$IAugmentType$$Type} from "com.hrznstudio.titanium.api.augment.IAugmentType"

export interface $IMachine$$Interface {
get "installedAugments"(): $List<($ItemStack)>
get "active"(): boolean
get "paused"(): boolean
}

export class $IMachine implements $IMachine$$Interface {
 "canAcceptAugment"(arg0: $ItemStack$$Type): boolean
 "hasAugmentInstalled"(arg0: $IAugmentType$$Type): boolean
 "getInstalledAugments"(arg0: $IAugmentType$$Type): $List<($ItemStack)>
 "getInstalledAugments"(): $List<($ItemStack)>
 "isActive"(): boolean
 "isPaused"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IMachine$$Type = ($IMachine);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IMachine$$Original = $IMachine;}
declare module "com.hrznstudio.titanium.api.augment.IAugmentType" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $IAugmentType$$Interface {

(): StringJS
get "type"(): StringJS
}

export class $IAugmentType implements $IAugmentType$$Interface {
 "getType"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAugmentType$$Type = (() => StringJS);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAugmentType$$Original = $IAugmentType;}
declare module "com.hrznstudio.titanium.api.IEnumValues" {
import {$List} from "java.util.List"

export interface $IEnumValues$$Interface<T> {
get "values"(): $List<(T)>
}

export class $IEnumValues<T> implements $IEnumValues$$Interface {
 "getValues"(): $List<(T)>
 "getValue"(arg0: StringJS): T
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnumValues$$Type<T> = ($IEnumValues<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnumValues$$Original<T> = $IEnumValues<(T)>;}
declare module "com.hrznstudio.titanium.api.redstone.IRedstoneAction" {
import {$IRedstoneState$$Type} from "com.hrznstudio.titanium.api.redstone.IRedstoneState"

export interface $IRedstoneAction$$Interface {
get "name"(): StringJS
}

export class $IRedstoneAction implements $IRedstoneAction$$Interface {
 "canRun"(arg0: $IRedstoneState$$Type): boolean
 "startsOnChange"(): boolean
 "getName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneAction$$Type = ($IRedstoneAction);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRedstoneAction$$Original = $IRedstoneAction;}
declare module "com.hrznstudio.titanium.api.redstone.IRedstoneReader" {
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$IRedstoneState, $IRedstoneState$$Type} from "com.hrznstudio.titanium.api.redstone.IRedstoneState"

export interface $IRedstoneReader$$Interface {

(arg0: boolean, arg1: $Direction): $IRedstoneState$$Type
}

export class $IRedstoneReader implements $IRedstoneReader$$Interface {
 "getEnvironmentValue"(arg0: boolean, arg1: $Direction$$Type): $IRedstoneState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IRedstoneReader$$Type = ((arg0: boolean, arg1: $Direction) => $IRedstoneState$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IRedstoneReader$$Original = $IRedstoneReader;}
declare module "com.hrznstudio.titanium.api.client.IScreenAddonProvider" {
import {$IScreenAddon, $IScreenAddon$$Type} from "com.hrznstudio.titanium.api.client.IScreenAddon"
import {$List, $List$$Type} from "java.util.List"
import {$IFactory, $IFactory$$Type} from "com.hrznstudio.titanium.api.IFactory"

export interface $IScreenAddonProvider$$Interface {

(): $List$$Type<($IFactory$$Type<($IScreenAddon$$Type)>)>
get "screenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}

export class $IScreenAddonProvider implements $IScreenAddonProvider$$Interface {
 "getScreenAddons"(): $List<($IFactory<($IScreenAddon)>)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IScreenAddonProvider$$Type = (() => $List$$Type<($IFactory$$Type<($IScreenAddon$$Type)>)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IScreenAddonProvider$$Original = $IScreenAddonProvider;}
declare module "com.hrznstudio.titanium.api.client.IAsset" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Rectangle, $Rectangle$$Type} from "java.awt.Rectangle"
import {$Point} from "java.awt.Point"

export interface $IAsset$$Interface {

(): $Rectangle$$Type
get "area"(): $Rectangle
get "offset"(): $Point
get "resourceLocation"(): $ResourceLocation
}

export class $IAsset implements $IAsset$$Interface {
 "getArea"(): $Rectangle
 "getOffset"(): $Point
 "getResourceLocation"(): $ResourceLocation
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IAsset$$Type = (() => $Rectangle$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IAsset$$Original = $IAsset;}
