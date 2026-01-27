declare module "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"

export class $ConfigurationToolItem$ConfigurationAction extends $Enum<($ConfigurationToolItem$ConfigurationAction)> implements $StringRepresentable$$Interface {
static readonly "TOGGLE_UPGRADES": $ConfigurationToolItem$ConfigurationAction
static readonly "CODEC": $Codec<($ConfigurationToolItem$ConfigurationAction)>
static readonly "INDICATOR": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_NUMBERS": $ConfigurationToolItem$ConfigurationAction
static readonly "LOCKING": $ConfigurationToolItem$ConfigurationAction
static readonly "TOGGLE_RENDER": $ConfigurationToolItem$ConfigurationAction

public static "values"(): ($ConfigurationToolItem$ConfigurationAction)[]
public static "valueOf"(arg0: StringJS): $ConfigurationToolItem$ConfigurationAction
public "getMax"(): integer
public "getColor"(): $TextColor
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "max"(): integer
get "color"(): $TextColor
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$ConfigurationAction$$Type = (("locking") | ("toggle_numbers") | ("toggle_render") | ("toggle_upgrades") | ("indicator"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurationToolItem$ConfigurationAction$$Original = $ConfigurationToolItem$ConfigurationAction;}
declare module "com.buuz135.functionalstorage.item.FSItem" {
import {$BasicItem} from "com.hrznstudio.titanium.item.BasicItem"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"

export class $FSItem extends $BasicItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FSItem$$Type = ($FSItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FSItem$$Original = $FSItem;}
declare module "com.buuz135.functionalstorage.item.StorageUpgradeItem" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$UpgradeItem} from "com.buuz135.functionalstorage.item.UpgradeItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$StorageUpgradeItem$StorageTier$$Type} from "com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier"
import {$Item} from "net.minecraft.world.item.Item"
import {$Component} from "net.minecraft.network.chat.Component"

export class $StorageUpgradeItem extends $UpgradeItem {
static readonly "MAX_SLOT": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $StorageUpgradeItem$StorageTier$$Type)

public "isFoil"(arg0: $ItemStack$$Type): boolean
public "getName"(arg0: $ItemStack$$Type): $Component
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$$Type = ($StorageUpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageUpgradeItem$$Original = $StorageUpgradeItem;}
declare module "com.buuz135.functionalstorage.item.ConfigurationToolItem" {
import {$ConfigurationToolItem$ConfigurationAction} from "com.buuz135.functionalstorage.item.ConfigurationToolItem$ConfigurationAction"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FSItem} from "com.buuz135.functionalstorage.item.FSItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $ConfigurationToolItem extends $FSItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getAction"(arg0: $ItemStack$$Type): $ConfigurationToolItem$ConfigurationAction
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ConfigurationToolItem$$Type = ($ConfigurationToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ConfigurationToolItem$$Original = $ConfigurationToolItem;}
declare module "com.buuz135.functionalstorage.item.component.FunctionalUpgradeBehavior" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$List} from "java.util.List"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Component} from "net.minecraft.network.chat.Component"
import {$Registry} from "net.minecraft.core.Registry"
import {$Codec} from "com.mojang.serialization.Codec"
import {$ResourceKey} from "net.minecraft.resources.ResourceKey"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$MapCodec, $MapCodec$$Type} from "com.mojang.serialization.MapCodec"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export interface $FunctionalUpgradeBehavior$$Interface {

(): $MapCodec$$Type<($FunctionalUpgradeBehavior$$Type)>
get "tooltip"(): $List<($Component)>
}

export class $FunctionalUpgradeBehavior implements $FunctionalUpgradeBehavior$$Interface {
static readonly "CODEC": $Codec<($FunctionalUpgradeBehavior)>
static readonly "REGISTRY_KEY": $ResourceKey<($Registry<($MapCodec<($FunctionalUpgradeBehavior)>)>)>
static readonly "REGISTRY": $Registry<($MapCodec<($FunctionalUpgradeBehavior)>)>

 "canConnectRedstone"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(never)>, arg4: $Direction$$Type, arg5: $ItemStack$$Type, arg6: integer): boolean
 "getRedstoneSignal"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $BlockState$$Type, arg3: $ControllableDrawerTile$$Type<(never)>, arg4: $Direction$$Type, arg5: $ItemStack$$Type, arg6: integer): integer
 "work"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $ControllableDrawerTile$$Type<(never)>, arg3: $ItemStack$$Type, arg4: integer): void
 "codec"(): $MapCodec<($FunctionalUpgradeBehavior)>
 "getTooltip"(): $List<($Component)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FunctionalUpgradeBehavior$$Type = (() => $MapCodec$$Type<($FunctionalUpgradeBehavior$$Type)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FunctionalUpgradeBehavior$$Original = $FunctionalUpgradeBehavior;}
declare module "com.buuz135.functionalstorage.item.StorageUpgradeItem$StorageTier" {
import {$Enum} from "java.lang.Enum"

export class $StorageUpgradeItem$StorageTier extends $Enum<($StorageUpgradeItem$StorageTier)> {
static readonly "GOLD": $StorageUpgradeItem$StorageTier
static readonly "MAX_STORAGE": $StorageUpgradeItem$StorageTier
static readonly "NETHERITE": $StorageUpgradeItem$StorageTier
static readonly "DIAMOND": $StorageUpgradeItem$StorageTier
static readonly "COPPER": $StorageUpgradeItem$StorageTier
static readonly "IRON": $StorageUpgradeItem$StorageTier

public "getLevel"(): integer
public static "values"(): ($StorageUpgradeItem$StorageTier)[]
public static "valueOf"(arg0: StringJS): $StorageUpgradeItem$StorageTier
public "getColor"(): integer
get "level"(): integer
get "color"(): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $StorageUpgradeItem$StorageTier$$Type = (("copper") | ("gold") | ("diamond") | ("netherite") | ("iron") | ("max_storage"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $StorageUpgradeItem$StorageTier$$Original = $StorageUpgradeItem$StorageTier;}
declare module "com.buuz135.functionalstorage.item.LinkingToolItem$ActionMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"

export class $LinkingToolItem$ActionMode extends $Enum<($LinkingToolItem$ActionMode)> implements $StringRepresentable$$Interface {
static readonly "ADD": $LinkingToolItem$ActionMode
static readonly "CODEC": $Codec<($LinkingToolItem$ActionMode)>
static readonly "REMOVE": $LinkingToolItem$ActionMode

public static "values"(): ($LinkingToolItem$ActionMode)[]
public static "valueOf"(arg0: StringJS): $LinkingToolItem$ActionMode
public "getColor"(): $TextColor
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "color"(): $TextColor
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$ActionMode$$Type = (("add") | ("remove"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkingToolItem$ActionMode$$Original = $LinkingToolItem$ActionMode;}
declare module "com.buuz135.functionalstorage.item.component.SizeProvider" {
import {$BiMap} from "com.google.common.collect.BiMap"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$MapCodec} from "com.mojang.serialization.MapCodec"
import {$IItemHandler$$Type} from "net.neoforged.neoforge.items.IItemHandler"

export interface $SizeProvider$$Interface {
}

export class $SizeProvider implements $SizeProvider$$Interface {
static readonly "CODEC": $Codec<($SizeProvider)>
static readonly "REGISTRY": $BiMap<(StringJS), ($MapCodec<($SizeProvider)>)>

static "calculateAsFactor"(arg0: $IItemHandler$$Type, arg1: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>, arg2: float, arg3: ($ItemStack$$Type)[]): float
static "calculateAsFactor"(arg0: $IItemHandler$$Type, arg1: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>, arg2: float): float
 "applyBaseModifier"(arg0: float): float
 "applyFactorModifier"(arg0: float): float
static "calculate"(arg0: $IItemHandler$$Type, arg1: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>, arg2: integer): integer
static "calculate"(arg0: $IItemHandler$$Type, arg1: $Supplier$$Type<($DataComponentType$$Type<($SizeProvider$$Type)>)>, arg2: integer, arg3: ($ItemStack$$Type)[]): integer
 "codec"(): $MapCodec<($SizeProvider)>
 "getTooltip"(arg0: $Component$$Type): $Component
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SizeProvider$$Type = ($SizeProvider);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SizeProvider$$Original = $SizeProvider;}
declare module "com.buuz135.functionalstorage.item.UpgradeItem" {
import {$Map} from "java.util.Map"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ControllableDrawerTile$$Type} from "com.buuz135.functionalstorage.block.tile.ControllableDrawerTile"
import {$List$$Type} from "java.util.List"
import {$FunctionalUpgradeBehavior$$Type} from "com.buuz135.functionalstorage.item.component.FunctionalUpgradeBehavior"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Direction, $Direction$$Type} from "net.minecraft.core.Direction"
import {$SlotAccess$$Type} from "net.minecraft.world.entity.SlotAccess"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$FSItem} from "com.buuz135.functionalstorage.item.FSItem"
import {$Component, $Component$$Type} from "net.minecraft.network.chat.Component"
import {$Slot$$Type} from "net.minecraft.world.inventory.Slot"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$FacingUtil$Sideness} from "com.hrznstudio.titanium.util.FacingUtil$Sideness"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ClickAction$$Type} from "net.minecraft.world.inventory.ClickAction"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$MutableComponent} from "net.minecraft.network.chat.MutableComponent"
import {$UpgradeItem$Type, $UpgradeItem$Type$$Type} from "com.buuz135.functionalstorage.item.UpgradeItem$Type"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"

export class $UpgradeItem extends $FSItem {
static readonly "MAX_SLOT": integer
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: $UpgradeItem$Type$$Type)
constructor(arg0: $FunctionalUpgradeBehavior$$Type)

public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public static "getRelativeDirectionVertical"(arg0: $Direction$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): $MutableComponent
public static "isDirectionUpgrade"(arg0: $Item$$Type): boolean
public static "getRelativeDirection"(arg0: $Direction$$Type, arg1: $Direction$$Type): $MutableComponent
public static "getFacingRelativeVertical"(arg0: $Direction$$Type, arg1: $Direction$$Type, arg2: $Direction$$Type): $FacingUtil$Sideness
public "overrideOtherStackedOnMe"(arg0: $ItemStack$$Type, arg1: $ItemStack$$Type, arg2: $Slot$$Type, arg3: $ClickAction$$Type, arg4: $Player$$Type, arg5: $SlotAccess$$Type): boolean
public "onCraftedBy"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $Player$$Type): void
public "getDescription"(arg0: $ItemStack$$Type, arg1: $ControllableDrawerTile$$Type<(never)>): $Component
public "getType"(): $UpgradeItem$Type
public static "getDirection"(arg0: $ItemStack$$Type): $Direction
public "verifyComponentsAfterLoad"(arg0: $ItemStack$$Type): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "type"(): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$$Type = ($UpgradeItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeItem$$Original = $UpgradeItem;}
declare module "com.buuz135.functionalstorage.item.UpgradeItem$Type" {
import {$Enum} from "java.lang.Enum"

export class $UpgradeItem$Type extends $Enum<($UpgradeItem$Type)> {
static readonly "STORAGE": $UpgradeItem$Type
static readonly "UTILITY": $UpgradeItem$Type

public static "values"(): ($UpgradeItem$Type)[]
public static "valueOf"(arg0: StringJS): $UpgradeItem$Type
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $UpgradeItem$Type$$Type = (("storage") | ("utility"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $UpgradeItem$Type$$Original = $UpgradeItem$Type;}
declare module "com.buuz135.functionalstorage.item.LinkingToolItem" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$List, $List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$FSItem} from "com.buuz135.functionalstorage.item.FSItem"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$LinkingToolItem$ActionMode} from "com.buuz135.functionalstorage.item.LinkingToolItem$ActionMode"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$InteractionResultHolder} from "net.minecraft.world.InteractionResultHolder"
import {$Item} from "net.minecraft.world.item.Item"
import {$LinkingToolItem$LinkingMode} from "com.buuz135.functionalstorage.item.LinkingToolItem$LinkingMode"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos, $BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$AABB$$Type} from "net.minecraft.world.phys.AABB"
import {$BasicItem$Key$$Type} from "com.hrznstudio.titanium.item.BasicItem$Key"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $LinkingToolItem extends $FSItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor()

public static "getBlockPosInAABB"(arg0: $AABB$$Type): $List<($BlockPos)>
public "hasTooltipDetails"(arg0: $BasicItem$Key$$Type): boolean
public "addTooltipDetails"(arg0: $BasicItem$Key$$Type, arg1: $ItemStack$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: boolean): void
public "canAttackBlock"(arg0: $BlockState$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type): boolean
public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "isFoil"(arg0: $ItemStack$$Type): boolean
public "use"(arg0: $Level$$Type, arg1: $Player$$Type, arg2: $InteractionHand$$Type): $InteractionResultHolder<($ItemStack)>
public static "getLinkingMode"(arg0: $ItemStack$$Type): $LinkingToolItem$LinkingMode
public static "getActionMode"(arg0: $ItemStack$$Type): $LinkingToolItem$ActionMode
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$$Type = ($LinkingToolItem);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkingToolItem$$Original = $LinkingToolItem;}
declare module "com.buuz135.functionalstorage.item.LinkingToolItem$LinkingMode" {
import {$Keyable} from "com.mojang.serialization.Keyable"
import {$StringRepresentable$EnumCodec} from "net.minecraft.util.StringRepresentable$EnumCodec"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$Codec} from "com.mojang.serialization.Codec"
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$StringRepresentable, $StringRepresentable$$Type, $StringRepresentable$$Interface} from "net.minecraft.util.StringRepresentable"
import {$TextColor} from "net.minecraft.network.chat.TextColor"

export class $LinkingToolItem$LinkingMode extends $Enum<($LinkingToolItem$LinkingMode)> implements $StringRepresentable$$Interface {
static readonly "SINGLE": $LinkingToolItem$LinkingMode
static readonly "CODEC": $Codec<($LinkingToolItem$LinkingMode)>
static readonly "MULTIPLE": $LinkingToolItem$LinkingMode

public static "values"(): ($LinkingToolItem$LinkingMode)[]
public static "valueOf"(arg0: StringJS): $LinkingToolItem$LinkingMode
public "getColor"(): $TextColor
public "getSerializedName"(): StringJS
public static "keys"(arg0: ($StringRepresentable$$Type)[]): $Keyable
public static "fromValues"<T extends $StringRepresentable>(arg0: $Supplier$$Type<((T)[])>): $Codec<(T)>
public "getRemappedEnumConstantName"(): StringJS
public static "fromEnumWithMapping"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>, arg1: $Function$$Type<(StringJS), (StringJS)>): $StringRepresentable$EnumCodec<(E)>
public static "createNameLookup"<T extends $StringRepresentable>(arg0: (T)[], arg1: $Function$$Type<(StringJS), (StringJS)>): $Function<(StringJS), (T)>
public static "fromEnum"<E extends $Enum<(object)>>(arg0: $Supplier$$Type<((E)[])>): $StringRepresentable$EnumCodec<(E)>
get "color"(): $TextColor
get "serializedName"(): StringJS
get "remappedEnumConstantName"(): StringJS
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $LinkingToolItem$LinkingMode$$Type = (("single") | ("multiple"));
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $LinkingToolItem$LinkingMode$$Original = $LinkingToolItem$LinkingMode;}
