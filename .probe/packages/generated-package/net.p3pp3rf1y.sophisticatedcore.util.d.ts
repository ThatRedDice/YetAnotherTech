declare module "net.p3pp3rf1y.sophisticatedcore.util.SlotRange" {
import {$Record} from "java.lang.Record"

export class $SlotRange extends $Record {
constructor(firstSlot: integer, numberOfSlots: integer)

public "numberOfSlots"(): integer
public "firstSlot"(): integer
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "isInRange"(arg0: integer): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SlotRange$$Type = ({"numberOfSlots"?: integer, "firstSlot"?: integer}) | ([numberOfSlots?: integer, firstSlot?: integer]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SlotRange$$Original = $SlotRange;}
declare module "net.p3pp3rf1y.sophisticatedcore.util.FilterItemStackHandler" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemStackHandler} from "net.neoforged.neoforge.items.ItemStackHandler"

export class $FilterItemStackHandler extends $ItemStackHandler {
constructor(arg0: integer)

public "hasOnlyEmptyFilters"(): boolean
public "insertItem"(arg0: integer, arg1: $ItemStack$$Type, arg2: boolean): $ItemStack
public "extractItem"(arg0: integer, arg1: integer, arg2: boolean): $ItemStack
public "getSlotLimit"(arg0: integer): integer
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $FilterItemStackHandler$$Type = ($FilterItemStackHandler);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $FilterItemStackHandler$$Original = $FilterItemStackHandler;}
declare module "net.p3pp3rf1y.sophisticatedcore.util.SimpleItemContent" {
import {$StreamCodec} from "net.minecraft.network.codec.StreamCodec"
import {$DataComponentMap} from "net.minecraft.core.component.DataComponentMap"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$DataComponentType$$Type} from "net.minecraft.core.component.DataComponentType"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$DataComponentHolder$$Interface} from "net.minecraft.core.component.DataComponentHolder"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$Holder$$Type} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$Codec} from "com.mojang.serialization.Codec"
import {$RegistryFriendlyByteBuf} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$HolderSet$$Type} from "net.minecraft.core.HolderSet"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$TooltipProvider} from "net.minecraft.world.item.component.TooltipProvider"

export class $SimpleItemContent implements $DataComponentHolder$$Interface {
static readonly "CODEC": $Codec<($SimpleItemContent)>
static readonly "EMPTY": $SimpleItemContent
static readonly "STREAM_CODEC": $StreamCodec<($RegistryFriendlyByteBuf), ($SimpleItemContent)>

public "getItem"(): $Item
public "equals"(arg0: any): boolean
public "hashCode"(): integer
public static "copyOf"(arg0: $ItemStack$$Type): $SimpleItemContent
public "isEmpty"(): boolean
public "matches"(arg0: $ItemStack$$Type): boolean
public "getCount"(): integer
public "copy"(): $ItemStack
public "is"(arg0: $TagKey$$Type<($Item)>): boolean
public "is"(arg0: $Item$$Type): boolean
public "is"(arg0: $Predicate$$Type<($Holder<($Item)>)>): boolean
public "is"(arg0: $Holder$$Type<($Item)>): boolean
public "is"(arg0: $HolderSet$$Type<($Item)>): boolean
public "getComponents"(): $DataComponentMap
public "isSameItemSameComponents"(arg0: $ItemStack$$Type): boolean
public "isSameItemSameComponents"(arg0: $SimpleItemContent$$Type): boolean
public "isSameItem"(arg0: $ItemStack$$Type): boolean
public "has"(arg0: $DataComponentType$$Type<(never)>): boolean
public "get"<T>(arg0: $DataComponentType$$Type<(T)>): T
public "getOrDefault"<T>(arg0: $DataComponentType$$Type<(T)>, arg1: T): T
public "addToTooltip"<T extends $TooltipProvider>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "addToTooltip"<T extends $TooltipProvider>(arg0: $DataComponentType$$Type<(T)>, arg1: $Item$TooltipContext$$Type, arg2: $Consumer$$Type<($Component)>, arg3: $TooltipFlag$$Type): void
public "has"(arg0: $Supplier$$Type<($DataComponentType$$Type<(never)>)>): boolean
public "get"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>): T
public "getOrDefault"<T>(arg0: $Supplier$$Type<($DataComponentType$$Type<(T)>)>, arg1: T): T
get "item"(): $Item
get "empty"(): boolean
get "count"(): integer
get "components"(): $DataComponentMap
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $SimpleItemContent$$Type = ($SimpleItemContent);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $SimpleItemContent$$Original = $SimpleItemContent;}
declare module "net.p3pp3rf1y.sophisticatedcore.util.ITintable" {
export {} // Mark the file as a module, do not remove unless there are other import/exports!
export interface $ITintable$$Interface {
get "mainColor"(): integer
get "accentColor"(): integer
}

export class $ITintable implements $ITintable$$Interface {
 "getMainColor"(): integer
 "getAccentColor"(): integer
 "setColors"(arg0: integer, arg1: integer): void
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ITintable$$Type = ($ITintable);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ITintable$$Original = $ITintable;}
declare module "net.p3pp3rf1y.sophisticatedcore.util.ItemBase" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$Consumer$$Type} from "java.util.function.Consumer"

export class $ItemBase extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "addCreativeTabItems"(arg0: $Consumer$$Type<($ItemStack)>): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBase$$Type = ($ItemBase);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBase$$Original = $ItemBase;}
