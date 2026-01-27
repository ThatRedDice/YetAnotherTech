declare module "owmii.powah.lib.item.ItemBase" {
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$InteractionHand$$Type} from "net.minecraft.world.InteractionHand"
import {$Direction$$Type} from "net.minecraft.core.Direction"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$Player$$Type} from "net.minecraft.world.entity.player.Player"
import {$InteractionResult} from "net.minecraft.world.InteractionResult"
import {$Vec3$$Type} from "net.minecraft.world.phys.Vec3"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$UseOnContext$$Type} from "net.minecraft.world.item.context.UseOnContext"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"

export class $ItemBase extends $Item {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)

public "useOn"(arg0: $UseOnContext$$Type): $InteractionResult
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $Level$$Type, arg2: $BlockPos$$Type, arg3: $Player$$Type, arg4: $InteractionHand$$Type, arg5: $Direction$$Type, arg6: $Vec3$$Type): $InteractionResult
public "onItemUseFirst"(arg0: $ItemStack$$Type, arg1: $UseOnContext$$Type): $InteractionResult
public "onItemUse"(arg0: $Level$$Type, arg1: $BlockPos$$Type, arg2: $Player$$Type, arg3: $InteractionHand$$Type, arg4: $Direction$$Type, arg5: $Vec3$$Type): $InteractionResult
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
declare module "owmii.powah.lib.item.EnergyBlockItem" {
import {$IEnergyItemProvider$$Interface} from "owmii.powah.lib.item.IEnergyItemProvider"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Tier} from "owmii.powah.block.Tier"
import {$IEnergyContainingItem$$Interface} from "owmii.powah.lib.item.IEnergyContainingItem"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$IEnergyConfig} from "owmii.powah.config.IEnergyConfig"
import {$Transfer} from "owmii.powah.lib.logistics.Transfer"
import {$AbstractEnergyBlock, $AbstractEnergyBlock$$Type} from "owmii.powah.lib.block.AbstractEnergyBlock"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$IEnergyContainingItem$Info} from "owmii.powah.lib.item.IEnergyContainingItem$Info"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"
import {$ItemBlock} from "owmii.powah.lib.item.ItemBlock"

export class $EnergyBlockItem<C extends $IEnergyConfig<(object)>, B extends $AbstractEnergyBlock<(object), (object)>> extends $ItemBlock<(B)> implements $IEnergyItemProvider$$Interface, $IEnergyContainingItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: B, arg1: $Item$Properties$$Type, arg2: $ResourceKey$$Type<($CreativeModeTab)>)

public "getTransferType"(): $Transfer
public "isChargeable"(arg0: $ItemStack$$Type): boolean
public "getVariant"(): $Tier
public "getConfig"(): C
public "getEnergyInfo"(): $IEnergyContainingItem$Info
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "transferType"(): $Transfer
get "variant"(): $Tier
get "config"(): C
get "energyInfo"(): $IEnergyContainingItem$Info
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyBlockItem$$Type<C, B> = ($EnergyBlockItem<(C), (B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyBlockItem$$Original<C, B> = $EnergyBlockItem<(C), (B)>;}
declare module "owmii.powah.lib.item.IEnergyItemProvider" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"

export interface $IEnergyItemProvider$$Interface {

(arg0: $ItemStack): boolean
}

export class $IEnergyItemProvider implements $IEnergyItemProvider$$Interface {
 "isChargeable"(arg0: $ItemStack$$Type): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyItemProvider$$Type = ((arg0: $ItemStack) => boolean);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyItemProvider$$Original = $IEnergyItemProvider;}
declare module "owmii.powah.lib.item.VarItem" {
import {$ItemBase} from "owmii.powah.lib.item.ItemBase"
import {$Map} from "java.util.Map"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IVariant} from "owmii.powah.lib.registry.IVariant"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IVariantEntry$$Interface} from "owmii.powah.lib.registry.IVariantEntry"

export class $VarItem<V extends $Enum<(object)>, I extends $VarItem<(object), (object)>> extends $ItemBase implements $IVariantEntry$$Interface<(V), (I)> {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type)
constructor(arg0: $Item$Properties$$Type, arg1: V)

public "getVariant"(): $IVariant
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "variant"(): $IVariant
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $VarItem$$Type<V, I> = ($VarItem<(V), (I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $VarItem$$Original<V, I> = $VarItem<(V), (I)>;}
declare module "owmii.powah.lib.item.Stacks" {
import {$Collection$$Type} from "java.util.Collection"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$SequencedCollection} from "java.util.SequencedCollection"
import {$List} from "java.util.List"
import {$NonNullList, $NonNullList$$Type} from "net.minecraft.core.NonNullList"

export class $Stacks extends $NonNullList<($ItemStack)> {
public static "from"(...arg0: ($ItemStack$$Type)[]): $Stacks
public static "from"(arg0: $NonNullList$$Type<($ItemStack$$Type)>): $Stacks
public "copy"(): $Stacks
public static "create"(): $Stacks
public static "withSize"(arg0: integer, arg1: $ItemStack$$Type): $Stacks
public "remove"(arg0: any): boolean
public "isEmpty"(): boolean
public "toArray"(): (any)[]
public "toArray"<T>(arg0: (T)[]): (T)[]
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E): $List<(E)>
public static "of"<E>(arg0: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E): $List<(E)>
public static "of"<E>(): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E): $List<(E)>
public static "of"<E>(...arg0: (E)[]): $List<(E)>
public static "of"<E>(arg0: E, arg1: E, arg2: E, arg3: E, arg4: E, arg5: E, arg6: E, arg7: E, arg8: E, arg9: E): $List<(E)>
public static "of"<E>(arg0: E, arg1: E): $List<(E)>
public "contains"(arg0: any): boolean
public "addAll"(arg0: $Collection$$Type<(E)>): boolean
public "removeAll"(arg0: $Collection$$Type<(never)>): boolean
public "retainAll"(arg0: $Collection$$Type<(never)>): boolean
public "reversed"(): $SequencedCollection
public "containsAll"(arg0: $Collection$$Type<(never)>): boolean
get "empty"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $Stacks$$Type = ($Stacks);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $Stacks$$Original = $Stacks;}
declare module "owmii.powah.lib.item.ItemBlock" {
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$CreativeModeTab, $CreativeModeTab$$Type} from "net.minecraft.world.item.CreativeModeTab"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$Item} from "net.minecraft.world.item.Item"
import {$ResourceKey, $ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$BlockItem} from "net.minecraft.world.item.BlockItem"
import {$Component} from "net.minecraft.network.chat.Component"
import {$AdditionalItemPlacement, $AdditionalItemPlacement$$Type} from "net.mehvahdjukaar.moonlight.api.item.additional_placements.AdditionalItemPlacement"

export class $ItemBlock<B extends $Block> extends $BlockItem {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: B, arg1: $Item$Properties$$Type, arg2: $ResourceKey$$Type<($CreativeModeTab)>)

public "getCreativeTab"(): $ResourceKey<($CreativeModeTab)>
public "getBlock"(): B
public "getName"(arg0: $ItemStack$$Type): $Component
public "moonlight$getAdditionalBehavior"(): $AdditionalItemPlacement
public "moonlight$setAdditionalBehavior"(arg0: $AdditionalItemPlacement$$Type): void
public "moonlight$getClientAnimationExtension"(): any
public "moonlight$setClientAnimationExtension"(arg0: any): void
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "creativeTab"(): $ResourceKey<($CreativeModeTab)>
get "block"(): B
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemBlock$$Type<B> = ($ItemBlock<(B)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemBlock$$Original<B> = $ItemBlock<(B)>;}
declare module "owmii.powah.lib.item.IEnergyContainingItem$Info" {
import {$Record} from "java.lang.Record"

export class $IEnergyContainingItem$Info extends $Record {
constructor(capacity: long, maxInsert: long, maxExtract: long)

public "maxExtract"(): long
public "maxInsert"(): long
public "equals"(arg0: any): boolean
public "toString"(): StringJS
public "hashCode"(): integer
public "capacity"(): long
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainingItem$Info$$Type = ({"maxInsert"?: long, "capacity"?: long, "maxExtract"?: long}) | ([maxInsert?: long, capacity?: long, maxExtract?: long]);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyContainingItem$Info$$Original = $IEnergyContainingItem$Info;}
declare module "owmii.powah.lib.item.EnergyItem" {
import {$IEnergyItemProvider$$Interface} from "owmii.powah.lib.item.IEnergyItemProvider"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Map} from "java.util.Map"
import {$Enum, $Enum$$Type} from "java.lang.Enum"
import {$IEnergyContainingItem$$Interface} from "owmii.powah.lib.item.IEnergyContainingItem"
import {$List$$Type} from "java.util.List"
import {$Block} from "net.minecraft.world.level.block.Block"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Item$TooltipContext$$Type} from "net.minecraft.world.item.Item$TooltipContext"
import {$TooltipFlag$$Type} from "net.minecraft.world.item.TooltipFlag"
import {$VarItem} from "owmii.powah.lib.item.VarItem"
import {$IEnergyConfig} from "owmii.powah.config.IEnergyConfig"
import {$ResourceLocation} from "net.minecraft.resources.ResourceLocation"
import {$Item$Properties$$Type} from "net.minecraft.world.item.Item$Properties"
import {$Item} from "net.minecraft.world.item.Item"
import {$IEnergyContainingItem$Info} from "owmii.powah.lib.item.IEnergyContainingItem$Info"

export class $EnergyItem<V extends $Enum<(object)>, C extends $IEnergyConfig<(object)>, I extends $EnergyItem<(object), (object), (object)>> extends $VarItem<(V), (I)> implements $IEnergyItemProvider$$Interface, $IEnergyContainingItem$$Interface {
static readonly "BASE_ATTACK_DAMAGE_ID": $ResourceLocation
static readonly "DEFAULT_MAX_STACK_SIZE": integer
static readonly "MAX_BAR_WIDTH": integer
static readonly "BASE_ATTACK_SPEED_ID": $ResourceLocation
static readonly "ABSOLUTE_MAX_STACK_SIZE": integer
static readonly "BY_BLOCK": $Map<($Block), ($Item)>

constructor(arg0: $Item$Properties$$Type, arg1: V)
constructor(arg0: $Item$Properties$$Type)

public "appendHoverText"(arg0: $ItemStack$$Type, arg1: $Item$TooltipContext$$Type, arg2: $List$$Type<($Component$$Type)>, arg3: $TooltipFlag$$Type): void
public "isChargeable"(arg0: $ItemStack$$Type): boolean
public "getConfig"(): $IEnergyConfig<(V)>
public "getEnergyInfo"(): $IEnergyContainingItem$Info
public static "checkSpecialEquality"(arg1: any, arg2: any, arg3: boolean): boolean
get "config"(): $IEnergyConfig<(V)>
get "energyInfo"(): $IEnergyContainingItem$Info
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EnergyItem$$Type<V, C, I> = ($EnergyItem<(V), (C), (I)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EnergyItem$$Original<V, C, I> = $EnergyItem<(V), (C), (I)>;}
declare module "owmii.powah.lib.item.IEnergyContainingItem" {
import {$IEnergyContainingItem$Info, $IEnergyContainingItem$Info$$Type} from "owmii.powah.lib.item.IEnergyContainingItem$Info"

export interface $IEnergyContainingItem$$Interface {

(): $IEnergyContainingItem$Info$$Type
get "energyInfo"(): $IEnergyContainingItem$Info
}

export class $IEnergyContainingItem implements $IEnergyContainingItem$$Interface {
 "getEnergyInfo"(): $IEnergyContainingItem$Info
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $IEnergyContainingItem$$Type = (() => $IEnergyContainingItem$Info$$Type);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $IEnergyContainingItem$$Original = $IEnergyContainingItem;}
