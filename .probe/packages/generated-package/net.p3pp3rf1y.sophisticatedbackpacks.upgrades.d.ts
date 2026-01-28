declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InventoryOrder" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $InventoryOrder extends $Enum<($InventoryOrder)> implements $StringRepresentable$$Interface {
static readonly "CODEC": $Codec<($InventoryOrder)>
static readonly "MAIN_FIRST": $InventoryOrder
static readonly "INCEPTED_FIRST": $InventoryOrder
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($InventoryOrder)>

public static "fromName"(arg0: StringJS): $InventoryOrder
public static "values"(): ($InventoryOrder)[]
public static "valueOf"(arg0: StringJS): $InventoryOrder
public "next"(): $InventoryOrder
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InventoryOrder$$Type = (("main_first") | ("incepted_first"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InventoryOrder$$Original = $InventoryOrder;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper$TargetSlot" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$Component} from "net.minecraft.network.chat.Component"

export class $RefillUpgradeWrapper$TargetSlot extends $Enum<($RefillUpgradeWrapper$TargetSlot)> implements $StringRepresentable$$Interface {
static readonly "TOOLBAR_2": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_3": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_1": $RefillUpgradeWrapper$TargetSlot
static readonly "CODEC": $Codec<($RefillUpgradeWrapper$TargetSlot)>
static readonly "MAIN_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "ANY": $RefillUpgradeWrapper$TargetSlot
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($RefillUpgradeWrapper$TargetSlot)>
static readonly "TOOLBAR_8": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_9": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_6": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_7": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_4": $RefillUpgradeWrapper$TargetSlot
static readonly "OFF_HAND": $RefillUpgradeWrapper$TargetSlot
static readonly "TOOLBAR_5": $RefillUpgradeWrapper$TargetSlot

public static "fromName"(arg0: StringJS): $RefillUpgradeWrapper$TargetSlot
public "getAcronym"(): $Component
public "getDescription"(): $Component
public static "values"(): ($RefillUpgradeWrapper$TargetSlot)[]
public static "valueOf"(arg0: StringJS): $RefillUpgradeWrapper$TargetSlot
public "next"(): $RefillUpgradeWrapper$TargetSlot
public "previous"(): $RefillUpgradeWrapper$TargetSlot
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "acronym"(): $Component
get "description"(): $Component
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$TargetSlot$$Type = (("any") | ("main_hand") | ("off_hand") | ("toolbar_1") | ("toolbar_2") | ("toolbar_3") | ("toolbar_4") | ("toolbar_5") | ("toolbar_6") | ("toolbar_7") | ("toolbar_8") | ("toolbar_9"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefillUpgradeWrapper$TargetSlot$$Original = $RefillUpgradeWrapper$TargetSlot;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem$Wrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$EverlastingUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $EverlastingUpgradeItem$Wrapper extends $UpgradeWrapperBase<($EverlastingUpgradeItem$Wrapper), ($EverlastingUpgradeItem)> {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "canBeDisabled"(): boolean
public "hideSettingsTab"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$Wrapper$$Type = ($EverlastingUpgradeItem$Wrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EverlastingUpgradeItem$Wrapper$$Original = $EverlastingUpgradeItem$Wrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$StatefulComponentItemHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler"
import {$AnvilUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeItem"

export class $AnvilUpgradeWrapper extends $UpgradeWrapperBase<($AnvilUpgradeWrapper), ($AnvilUpgradeItem)> {
public "getItemName"(): StringJS
public "setItemName"(arg0: StringJS): void
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
public "getInventory"(): $StatefulComponentItemHandler
get "itemName"(): StringJS
set "itemName"(value: StringJS)
set "shiftClickIntoStorage"(value: boolean)
get "inventory"(): $StatefulComponentItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeWrapper$$Type = ($AnvilUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilUpgradeWrapper$$Original = $AnvilUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeWrapper" {
import {$SmithingUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeItem"
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$StatefulComponentItemHandler} from "net.p3pp3rf1y.sophisticatedcore.inventory.StatefulComponentItemHandler"

export class $SmithingUpgradeWrapper extends $UpgradeWrapperBase<($SmithingUpgradeWrapper), ($SmithingUpgradeItem)> {
public "canBeDisabled"(): boolean
public "setShiftClickIntoStorage"(arg0: boolean): void
public "shouldShiftClickIntoStorage"(): boolean
public "getInventory"(): $StatefulComponentItemHandler
set "shiftClickIntoStorage"(value: boolean)
get "inventory"(): $StatefulComponentItemHandler
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingUpgradeWrapper$$Type = ($SmithingUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingUpgradeWrapper$$Original = $SmithingUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$EverlastingUpgradeItem$Wrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.everlasting.EverlastingUpgradeItem$Wrapper"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $EverlastingUpgradeItem extends $UpgradeItemBase<($EverlastingUpgradeItem$Wrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($EverlastingUpgradeItem$Wrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EverlastingUpgradeItem$$Type = ($EverlastingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EverlastingUpgradeItem$$Original = $EverlastingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$ToolSwapperUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeWrapper"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $ToolSwapperUpgradeItem extends $UpgradeItemBase<($ToolSwapperUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: boolean, arg1: boolean)

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "hasSettingsTab"(): boolean
public "shouldSwapToolOnKeyPress"(): boolean
public "getType"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($ToolSwapperUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeItem$$Type = ($ToolSwapperUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolSwapperUpgradeItem$$Original = $ToolSwapperUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeItem" {
import {$RestockUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeWrapper"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $RestockUpgradeItem extends $UpgradeItemBase<($RestockUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($RestockUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($RestockUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeItem$$Type = ($RestockUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RestockUpgradeItem$$Original = $RestockUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $ToolSwapMode extends $Enum<($ToolSwapMode)> implements $StringRepresentable$$Interface {
static readonly "ONLY_TOOLS": $ToolSwapMode
static readonly "CODEC": $Codec<($ToolSwapMode)>
static readonly "NO_SWAP": $ToolSwapMode
static readonly "ANY": $ToolSwapMode
static readonly "STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($ToolSwapMode)>

public static "fromName"(arg0: StringJS): $ToolSwapMode
public static "values"(): ($ToolSwapMode)[]
public static "valueOf"(arg0: StringJS): $ToolSwapMode
public "next"(): $ToolSwapMode
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapMode$$Type = (("name") | ("onlytools") | ("noswap"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolSwapMode$$Original = $ToolSwapMode;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeItem" {
import {$UpgradeSlotChangeResult} from "net.p3pp3rf1y.sophisticatedcore.common.gui.UpgradeSlotChangeResult"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item} from "net.minecraft.world.item.Item"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$InceptionUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeWrapper"

export class $InceptionUpgradeItem extends $UpgradeItemBase<($InceptionUpgradeWrapper)> {
static readonly "UPGRADE_CONFLICT_DEFINITIONS": $List<($IUpgradeItem$UpgradeConflictDefinition)>
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "TYPE": $UpgradeType<($InceptionUpgradeWrapper)>
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "canSwapUpgradeFor"(arg0: $ItemStack$$Type, arg1: integer, arg2: $IStorageWrapper$$Type, arg3: boolean): $UpgradeSlotChangeResult
public "canRemoveUpgradeFrom"(arg0: $IStorageWrapper$$Type, arg1: boolean): $UpgradeSlotChangeResult
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "canAddUpgradeTo"(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: boolean, arg3: boolean): $UpgradeSlotChangeResult
public "getType"(): $UpgradeType<($InceptionUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($InceptionUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeItem$$Type = ($InceptionUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InceptionUpgradeItem$$Original = $InceptionUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeItem" {
import {$DepositUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeWrapper"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $DepositUpgradeItem extends $UpgradeItemBase<($DepositUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($DepositUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($DepositUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeItem$$Type = ($DepositUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DepositUpgradeItem$$Original = $DepositUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$SmithingUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.smithing.SmithingUpgradeWrapper"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $SmithingUpgradeItem extends $UpgradeItemBase<($SmithingUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($SmithingUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($SmithingUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SmithingUpgradeItem$$Type = ($SmithingUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SmithingUpgradeItem$$Original = $SmithingUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$IEnergyStorageUpgradeWrapper$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IEnergyStorageUpgradeWrapper"
import {$InventoryOrder, $InventoryOrder$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InventoryOrder"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$IUpgradeAccessModifier$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeAccessModifier"
import {$ITrackedContentsItemHandler, $ITrackedContentsItemHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.inventory.ITrackedContentsItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$IUpgradeWrapperAccessor, $IUpgradeWrapperAccessor$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeWrapperAccessor"
import {$IStorageFluidHandler, $IStorageFluidHandler$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageFluidHandler"
import {$IFluidHandlerWrapperUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IFluidHandlerWrapperUpgrade"
import {$IEnergyStorage, $IEnergyStorage$$Type} from "net.neoforged.neoforge.energy.IEnergyStorage"
import {$IInventoryWrapperUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IInventoryWrapperUpgrade"
import {$InceptionUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.inception.InceptionUpgradeItem"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"

export class $InceptionUpgradeWrapper extends $UpgradeWrapperBase<($InceptionUpgradeWrapper), ($InceptionUpgradeItem)> implements $IInventoryWrapperUpgrade$$Interface, $IUpgradeAccessModifier$$Interface, $IFluidHandlerWrapperUpgrade$$Interface, $IEnergyStorageUpgradeWrapper$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "hideSettingsTab"(): boolean
public "wrapInventory"(arg0: $ITrackedContentsItemHandler$$Type): $ITrackedContentsItemHandler
public "wrapAccessor"(arg0: $IUpgradeWrapperAccessor$$Type): $IUpgradeWrapperAccessor
public "wrapHandler"(arg0: $IStorageFluidHandler$$Type, arg1: $ItemStack$$Type): $IStorageFluidHandler
public "wrapStorage"(arg0: $IEnergyStorage$$Type): $IEnergyStorage
public "setInventoryOrder"(arg0: $InventoryOrder$$Type): void
public "getInventoryOrder"(): $InventoryOrder
set "inventoryOrder"(value: $InventoryOrder$$Type)
get "inventoryOrder"(): $InventoryOrder
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $InceptionUpgradeWrapper$$Type = ($InceptionUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $InceptionUpgradeWrapper$$Original = $InceptionUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeItem" {
import {$RefillUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"
import {$IntSupplier$$Type} from "java.util.function.IntSupplier"

export class $RefillUpgradeItem extends $UpgradeItemBase<($RefillUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $IntSupplier$$Type, arg1: boolean, arg2: boolean)

public "getFilterSlotCount"(): integer
public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "supportsBlockPick"(): boolean
public "allowsTargetSlotSelection"(): boolean
public "getType"(): $UpgradeType<($RefillUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "filterSlotCount"(): integer
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($RefillUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeItem$$Type = ($RefillUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefillUpgradeItem$$Original = $RefillUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterLogic" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$DepositFilterType, $DepositFilterType$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterType"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$FilterAttributes$$Type} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterAttributes"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DepositFilterLogic extends $FilterLogic {
constructor(arg0: $ItemStack$$Type, arg1: $Consumer$$Type<($ItemStack)>, arg2: integer, arg3: $DeferredHolder$$Type<($DataComponentType$$Type<(never)>), ($DataComponentType$$Type<($FilterAttributes$$Type)>)>)

public "setInventory"(arg0: $IItemHandler$$Type): void
public "matchesFilter"(arg0: $ItemStack$$Type): boolean
public "setDepositFilterType"(arg0: $DepositFilterType$$Type): void
public "getDepositFilterType"(): $DepositFilterType
set "inventory"(value: $IItemHandler$$Type)
set "depositFilterType"(value: $DepositFilterType$$Type)
get "depositFilterType"(): $DepositFilterType
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterLogic$$Type = ($DepositFilterLogic);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DepositFilterLogic$$Original = $DepositFilterLogic;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeItem" {
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$AnvilUpgradeWrapper} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.anvil.AnvilUpgradeWrapper"
import {$List} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$IUpgradeItem$UpgradeConflictDefinition} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IUpgradeItem$UpgradeConflictDefinition"
import {$UpgradeType} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeType"
import {$UpgradeItemBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeItemBase"

export class $AnvilUpgradeItem extends $UpgradeItemBase<($AnvilUpgradeWrapper)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "getUpgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
public "getType"(): $UpgradeType<($AnvilUpgradeWrapper)>
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "upgradeConflicts"(): $List<($IUpgradeItem$UpgradeConflictDefinition)>
get "type"(): $UpgradeType<($AnvilUpgradeWrapper)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $AnvilUpgradeItem$$Type = ($AnvilUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $AnvilUpgradeItem$$Original = $AnvilUpgradeItem;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IItemHandlerInteractionUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IItemHandlerInteractionUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$DepositUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositUpgradeItem"
import {$IFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$DepositFilterLogic} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterLogic"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $DepositUpgradeWrapper extends $UpgradeWrapperBase<($DepositUpgradeWrapper), ($DepositUpgradeItem)> implements $IFilteredUpgrade$$Interface, $IItemHandlerInteractionUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $DepositFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void
get "filterLogic"(): $DepositFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositUpgradeWrapper$$Type = ($DepositUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DepositUpgradeWrapper$$Original = $DepositUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$FriendlyByteBuf} from "net.minecraft.network.FriendlyByteBuf"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$IFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IFilteredUpgrade"
import {$ITickableUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ITickableUpgrade"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RefillUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeItem"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$IBlockPickResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockPickResponseUpgrade"
import {$RefillUpgradeWrapper$TargetSlot, $RefillUpgradeWrapper$TargetSlot$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.refill.RefillUpgradeWrapper$TargetSlot"

export class $RefillUpgradeWrapper extends $UpgradeWrapperBase<($RefillUpgradeWrapper), ($RefillUpgradeItem)> implements $IFilteredUpgrade$$Interface, $ITickableUpgrade$$Interface, $IBlockPickResponseUpgrade$$Interface {
static readonly "TARGET_SLOTS_STREAM_CODEC": $StreamCodec<($FriendlyByteBuf), ($Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>)>
static readonly "TARGET_SLOTS_CODEC": $Codec<($Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>)>

constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $FilterLogic
public "allowsTargetSlotSelection"(): boolean
public "setTargetSlot"(arg0: integer, arg1: $RefillUpgradeWrapper$TargetSlot$$Type): void
public "getTargetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
public "tick"(arg0: $Entity$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type): void
public "pickBlock"(arg0: $Player$$Type, arg1: $ItemStack$$Type): boolean
get "filterLogic"(): $FilterLogic
get "targetSlots"(): $Map<(integer), ($RefillUpgradeWrapper$TargetSlot)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RefillUpgradeWrapper$$Type = ($RefillUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RefillUpgradeWrapper$$Original = $RefillUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$ToolSwapMode, $ToolSwapMode$$Type} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapMode"
import {$FilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.FilterLogic"
import {$IBlockClickResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockClickResponseUpgrade"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IBlockToolSwapUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IBlockToolSwapUpgrade"
import {$IEntityToolSwapUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IEntityToolSwapUpgrade"
import {$ToolSwapperUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.toolswapper.ToolSwapperUpgradeItem"
import {$Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$IAttackEntityResponseUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IAttackEntityResponseUpgrade"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $ToolSwapperUpgradeWrapper extends $UpgradeWrapperBase<($ToolSwapperUpgradeWrapper), ($ToolSwapperUpgradeItem)> implements $IBlockClickResponseUpgrade$$Interface, $IAttackEntityResponseUpgrade$$Interface, $IBlockToolSwapUpgrade$$Interface, $IEntityToolSwapUpgrade$$Interface {
public "getFilterLogic"(): $FilterLogic
public "hideSettingsTab"(): boolean
public "onAttackEntity"(arg0: $Player$$Type): boolean
public "onBlockClick"(arg0: $Player$$Type, arg1: $BlockPos$$Type): boolean
public "shouldSwapWeapon"(): boolean
public "setSwapWeapon"(arg0: boolean): void
public "setToolSwapMode"(arg0: $ToolSwapMode$$Type): void
public "getToolSwapMode"(): $ToolSwapMode
public "onEntityInteract"(arg0: $Level$$Type, arg1: $Entity$$Type, arg2: $Player$$Type): boolean
public "onBlockInteract"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $Player$$Type): boolean
public "canProcessBlockInteract"(): boolean
public "canProcessEntityInteract"(): boolean
get "filterLogic"(): $FilterLogic
set "swapWeapon"(value: boolean)
set "toolSwapMode"(value: $ToolSwapMode$$Type)
get "toolSwapMode"(): $ToolSwapMode
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ToolSwapperUpgradeWrapper$$Type = ($ToolSwapperUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ToolSwapperUpgradeWrapper$$Original = $ToolSwapperUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeWrapper" {
import {$UpgradeWrapperBase} from "net.p3pp3rf1y.sophisticatedcore.upgrades.UpgradeWrapperBase"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$IItemHandlerInteractionUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedbackpacks.api.IItemHandlerInteractionUpgrade"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ContentsFilterLogic} from "net.p3pp3rf1y.sophisticatedcore.upgrades.ContentsFilterLogic"
import {$IContentsFilteredUpgrade$$Interface} from "net.p3pp3rf1y.sophisticatedcore.upgrades.IContentsFilteredUpgrade"
import {$RestockUpgradeItem} from "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.restock.RestockUpgradeItem"
import {$IStorageWrapper$$Type} from "net.p3pp3rf1y.sophisticatedcore.api.IStorageWrapper"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $RestockUpgradeWrapper extends $UpgradeWrapperBase<($RestockUpgradeWrapper), ($RestockUpgradeItem)> implements $IContentsFilteredUpgrade$$Interface, $IItemHandlerInteractionUpgrade$$Interface {
constructor(arg0: $IStorageWrapper$$Type, arg1: $ItemStack$$Type, arg2: $Consumer$$Type<($ItemStack)>)

public "getFilterLogic"(): $ContentsFilterLogic
public "onHandlerInteract"(arg0: $IItemHandler$$Type, arg1: $Player$$Type): void
get "filterLogic"(): $ContentsFilterLogic
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RestockUpgradeWrapper$$Type = ($RestockUpgradeWrapper);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RestockUpgradeWrapper$$Original = $RestockUpgradeWrapper;}
declare module "net.p3pp3rf1y.sophisticatedbackpacks.upgrades.deposit.DepositFilterType" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"

export class $DepositFilterType extends $Enum<($DepositFilterType)> implements $StringRepresentable$$Interface {
static readonly "INVENTORY": $DepositFilterType
static readonly "BLOCK": $DepositFilterType
static readonly "ALLOW": $DepositFilterType

public static "fromName"(arg0: StringJS): $DepositFilterType
public static "values"(): ($DepositFilterType)[]
public static "valueOf"(arg0: StringJS): $DepositFilterType
public "next"(): $DepositFilterType
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DepositFilterType$$Type = (("allow") | ("block") | ("inventory"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DepositFilterType$$Original = $DepositFilterType;}
