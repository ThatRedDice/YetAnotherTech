declare module "com.tterrag.registrate.util.entry.BlockEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$ItemProviderEntry} from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Block, $Block$$Type} from "net.minecraft.world.level.block.Block"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$BlockState, $BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntry<T extends $Block> extends $ItemProviderEntry<($Block), (T)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($Block$$Type), (T)>)

public "getDefaultState"(): $BlockState
public "has"(arg0: $BlockState$$Type): boolean
public static "cast"<T extends $Block>(arg0: $RegistryEntry$$Type<($Block$$Type), (T)>): $BlockEntry<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
get "defaultState"(): $BlockState
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntry$$Type<T> = ($BlockEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntry$$Original<T> = $BlockEntry<(T)>;}
declare module "com.tterrag.registrate.util.entry.BlockEntityEntry" {
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Optional} from "java.util.Optional"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$BlockGetter$$Type} from "net.minecraft.world.level.BlockGetter"
import {$BlockEntityType, $BlockEntityType$$Type} from "net.minecraft.world.level.block.entity.BlockEntityType"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$BlockPos$$Type} from "net.minecraft.core.BlockPos"
import {$BlockEntity, $BlockEntity$$Type} from "net.minecraft.world.level.block.entity.BlockEntity"
import {$BlockState$$Type} from "net.minecraft.world.level.block.state.BlockState"

export class $BlockEntityEntry<T extends $BlockEntity> extends $RegistryEntry<($BlockEntityType<(never)>), ($BlockEntityType<(T)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>)

public "getNullable"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): T
public "get"(arg0: $BlockGetter$$Type, arg1: $BlockPos$$Type): $Optional<(T)>
public static "cast"<T extends $BlockEntity>(arg0: $RegistryEntry$$Type<($BlockEntityType$$Type<(never)>), ($BlockEntityType$$Type<(T)>)>): $BlockEntityEntry<(T)>
public "create"(arg0: $BlockPos$$Type, arg1: $BlockState$$Type): T
public "is"(arg0: $BlockEntity$$Type): boolean
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $BlockEntityEntry$$Type<T> = ($BlockEntityEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $BlockEntityEntry$$Original<T> = $BlockEntityEntry<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullFunction" {
import {$Function, $Function$$Type, $Function$$Interface} from "java.util.function.Function"

export interface $NonNullFunction$$Interface<T, R> extends $Function$$Interface<(T), (R)> {

(arg0: T): R
}

export class $NonNullFunction<T, R> implements $NonNullFunction$$Interface {
 "apply"(arg0: T): R
 "andThen"<V>(arg0: $NonNullFunction$$Type<(R), (V)>): $NonNullFunction<(T), (V)>
static "identity"<T>(): $Function<(T), (T)>
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (R)>
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullFunction$$Type<T, R> = ((arg0: T) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullFunction$$Original<T, R> = $NonNullFunction<(T), (R)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullBiConsumer" {
import {$BiConsumer, $BiConsumer$$Type, $BiConsumer$$Interface} from "java.util.function.BiConsumer"

export interface $NonNullBiConsumer$$Interface<T, U> extends $BiConsumer$$Interface<(T), (U)> {

(arg0: T, arg1: U): void
}

export class $NonNullBiConsumer<T, U> implements $NonNullBiConsumer$$Interface {
 "accept"(arg0: T, arg1: U): void
static "noop"<T, U>(): $NonNullBiConsumer<(T), (U)>
 "andThen"(arg0: $BiConsumer$$Type<(T), (U)>): $BiConsumer<(T), (U)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullBiConsumer$$Type<T, U> = ((arg0: T, arg1: U) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullBiConsumer$$Original<T, U> = $NonNullBiConsumer<(T), (U)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullUnaryOperator" {
import {$Function, $Function$$Type} from "java.util.function.Function"
import {$NonNullFunction, $NonNullFunction$$Type, $NonNullFunction$$Interface} from "com.tterrag.registrate.util.nullness.NonNullFunction"

export interface $NonNullUnaryOperator$$Interface<T> extends $NonNullFunction$$Interface<(T), (T)> {

(arg0: T): T
}

export class $NonNullUnaryOperator<T> implements $NonNullUnaryOperator$$Interface {
static "identity"<T>(): $NonNullUnaryOperator<(T)>
 "andThen"<V>(arg0: $NonNullUnaryOperator$$Type<(T)>): $NonNullUnaryOperator<(T)>
 "apply"(arg0: T): T
 "andThen"<V>(arg0: $NonNullFunction$$Type<(T), (V)>): $NonNullFunction<(T), (V)>
 "compose"<V>(arg0: $Function$$Type<(V), (T)>): $Function<(V), (T)>
 "andThen"<V>(arg0: $Function$$Type<(T), (V)>): $Function<(T), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullUnaryOperator$$Type<T> = ((arg0: T) => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullUnaryOperator$$Original<T> = $NonNullUnaryOperator<(T)>;}
declare module "com.tterrag.registrate.util.DataIngredient" {
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Ingredient, $Ingredient$$Type} from "net.minecraft.world.item.crafting.Ingredient"
import {$Predicate, $Predicate$$Type} from "java.util.function.Predicate"
import {$RegistrateRecipeProvider$$Type} from "com.tterrag.registrate.providers.RegistrateRecipeProvider"
import {$ItemPredicate$$Type} from "net.minecraft.advancements.critereon.ItemPredicate"
import {$InventoryChangeTrigger$TriggerInstance} from "net.minecraft.advancements.critereon.InventoryChangeTrigger$TriggerInstance"
import {$NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Criterion} from "net.minecraft.advancements.Criterion"
import {$ICustomIngredient} from "net.neoforged.neoforge.common.crafting.ICustomIngredient"
import {$ResourceLocation, $ResourceLocation$$Type} from "net.minecraft.resources.ResourceLocation"
import {$ItemLike, $ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$TagKey$$Type} from "net.minecraft.tags.TagKey"
import {$Item$$Type} from "net.minecraft.world.item.Item"
import {$IntList} from "it.unimi.dsi.fastutil.ints.IntList"

export class $DataIngredient {
public "toVanilla"(): $Ingredient
public "getCriterion"(arg0: $RegistrateRecipeProvider$$Type): $Criterion<($InventoryChangeTrigger$TriggerInstance)>
public static "ingredient"(arg0: $Ingredient$$Type, arg1: $ItemLike$$Type): $DataIngredient
public static "ingredient"(arg0: $Ingredient$$Type, arg1: $ResourceLocation$$Type, ...arg2: ($ItemPredicate$$Type)[]): $DataIngredient
public static "ingredient"(arg0: $Ingredient$$Type, arg1: $TagKey$$Type<($Item)>): $DataIngredient
public "getStackingIds"(): $IntList
public "isCustom"(): boolean
public "hasNoItems"(): boolean
public "getCustomIngredient"(): $ICustomIngredient
public static "items"<T extends $ItemLike>(arg0: $NonNullSupplier$$Type<(T)>, ...arg1: ($NonNullSupplier$$Type<(T)>)[]): $DataIngredient
public static "items"<T extends $ItemLike>(arg0: T, ...arg1: (T)[]): $DataIngredient
public static "tag"(arg0: $TagKey$$Type<($Item)>): $DataIngredient
public "negate"(): $Predicate<($ItemStack)>
public "and"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "test"(arg0: $ItemStack$$Type): boolean
public "isEmpty"(): boolean
public "getId"(): $ResourceLocation
public "or"(arg0: $Predicate$$Type<($ItemStack)>): $Predicate<($ItemStack)>
public "isSimple"(): boolean
public static "stacks"(arg0: $ItemStack$$Type, ...arg1: ($ItemStack$$Type)[]): $DataIngredient
get "stackingIds"(): $IntList
get "custom"(): boolean
get "customIngredient"(): $ICustomIngredient
get "empty"(): boolean
get "id"(): $ResourceLocation
get "simple"(): boolean
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $DataIngredient$$Type = ($DataIngredient);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $DataIngredient$$Original = $DataIngredient;}
declare module "com.tterrag.registrate.util.entry.ItemEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$ItemProviderEntry} from "com.tterrag.registrate.util.entry.ItemProviderEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Holder} from "net.minecraft.core.Holder"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"

export class $ItemEntry<T extends $Item> extends $ItemProviderEntry<($Item), (T)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($Item$$Type), (T)>)

public static "cast"<T extends $Item>(arg0: $RegistryEntry$$Type<($Item$$Type), (T)>): $ItemEntry<(T)>
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemEntry$$Type<T> = ($ItemEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemEntry$$Original<T> = $ItemEntry<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullConsumer" {
import {$Consumer, $Consumer$$Type, $Consumer$$Interface} from "java.util.function.Consumer"

export interface $NonNullConsumer$$Interface<T> extends $Consumer$$Interface<(T)> {

(arg0: T): void
}

export class $NonNullConsumer<T> implements $NonNullConsumer$$Interface {
 "accept"(arg0: T): void
 "andThen"(arg0: $NonNullConsumer$$Type<(T)>): $NonNullConsumer<(T)>
static "noop"<T>(): $NonNullConsumer<(T)>
 "andThen"(arg0: $Consumer$$Type<(T)>): $Consumer<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullConsumer$$Type<T> = ((arg0: T) => void);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullConsumer$$Original<T> = $NonNullConsumer<(T)>;}
declare module "com.tterrag.registrate.util.entry.MenuEntry" {
import {$RegistryEntry} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$MenuConstructor, $MenuConstructor$$Type} from "net.minecraft.world.inventory.MenuConstructor"
import {$Component$$Type} from "net.minecraft.network.chat.Component"
import {$Inventory$$Type} from "net.minecraft.world.entity.player.Inventory"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$Consumer$$Type} from "java.util.function.Consumer"
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$AbstractContainerMenu} from "net.minecraft.world.inventory.AbstractContainerMenu"
import {$RegistryFriendlyByteBuf$$Type} from "net.minecraft.network.RegistryFriendlyByteBuf"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$MenuType, $MenuType$$Type} from "net.minecraft.world.inventory.MenuType"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ServerPlayer$$Type} from "net.minecraft.server.level.ServerPlayer"

export class $MenuEntry<T extends $AbstractContainerMenu> extends $RegistryEntry<($MenuType<(never)>), ($MenuType<(T)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($MenuType$$Type<(never)>), ($MenuType$$Type<(T)>)>)

public "open"(arg0: $ServerPlayer$$Type, arg1: $Component$$Type, arg2: $MenuConstructor$$Type, arg3: $Consumer$$Type<($RegistryFriendlyByteBuf)>): void
public "open"(arg0: $ServerPlayer$$Type, arg1: $Component$$Type, arg2: $Consumer$$Type<($RegistryFriendlyByteBuf)>): void
public "open"(arg0: $ServerPlayer$$Type, arg1: $Component$$Type, arg2: $MenuConstructor$$Type): void
public "open"(arg0: $ServerPlayer$$Type, arg1: $Component$$Type): void
public "create"(arg0: integer, arg1: $Inventory$$Type): T
public "asProvider"(): $MenuConstructor
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $MenuEntry$$Type<T> = ($MenuEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $MenuEntry$$Original<T> = $MenuEntry<(T)>;}
declare module "com.tterrag.registrate.util.CreativeModeTabModifier" {
import {$FeatureFlagSet, $FeatureFlagSet$$Type} from "net.minecraft.world.flag.FeatureFlagSet"
import {$ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$Collection$$Type} from "java.util.Collection"
import {$CreativeModeTab$Output$$Interface} from "net.minecraft.world.item.CreativeModeTab$Output"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$ItemLike$$Type} from "net.minecraft.world.level.ItemLike"
import {$BiConsumer$$Type} from "java.util.function.BiConsumer"
import {$CreativeModeTab$TabVisibility$$Type} from "net.minecraft.world.item.CreativeModeTab$TabVisibility"
import {$BooleanSupplier$$Type} from "java.util.function.BooleanSupplier"
import {$CreativeModeTab$ItemDisplayParameters, $CreativeModeTab$ItemDisplayParameters$$Type} from "net.minecraft.world.item.CreativeModeTab$ItemDisplayParameters"

export class $CreativeModeTabModifier implements $CreativeModeTab$Output$$Interface {
constructor(arg0: $Supplier$$Type<($FeatureFlagSet$$Type)>, arg1: $BooleanSupplier$$Type, arg2: $BiConsumer$$Type<($ItemStack), ($CreativeModeTab$TabVisibility)>, arg3: $Supplier$$Type<($CreativeModeTab$ItemDisplayParameters$$Type)>)

public "hasPermissions"(): boolean
public "getFlags"(): $FeatureFlagSet
public "accept"(arg0: $Supplier$$Type<($ItemLike$$Type)>): void
public "accept"(arg0: $ItemStack$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "accept"(arg0: $Supplier$$Type<($ItemLike$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "getParameters"(): $CreativeModeTab$ItemDisplayParameters
public "accept"(arg0: $ItemLike$$Type): void
public "accept"(arg0: $ItemStack$$Type): void
public "accept"(arg0: $ItemLike$$Type, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>, arg1: $CreativeModeTab$TabVisibility$$Type): void
public "acceptAll"(arg0: $Collection$$Type<($ItemStack$$Type)>): void
get "flags"(): $FeatureFlagSet
get "parameters"(): $CreativeModeTab$ItemDisplayParameters
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $CreativeModeTabModifier$$Type = ($CreativeModeTabModifier);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $CreativeModeTabModifier$$Original = $CreativeModeTabModifier;}
declare module "com.tterrag.registrate.util.entry.RegistryEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type, $NonNullSupplier$$Interface} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$Optional} from "java.util.Optional"
import {$Registry$$Type} from "net.minecraft.core.Registry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Predicate$$Type} from "java.util.function.Predicate"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$ResourceKey$$Type} from "net.minecraft.resources.ResourceKey"
import {$DeferredHolder, $DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $RegistryEntry<R, S> extends $DeferredHolder<(R), (S)> implements $NonNullSupplier$$Interface<(S)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<(R), (S)>)

public "getSibling"<X, Y>(arg0: $Registry$$Type<(X)>): $RegistryEntry<(X), (Y)>
public "getSibling"<X, Y>(arg0: $ResourceKey$$Type<($Registry<(X)>)>): $RegistryEntry<(X), (Y)>
public "filter"(arg0: $Predicate$$Type<(R)>): $Optional<($RegistryEntry<(R), (S)>)>
public "is"<X>(arg0: X): boolean
public static "lazy"<T>(arg0: $Supplier$$Type<(S)>): $NonNullSupplier<(S)>
public "lazy"(): $NonNullSupplier<(S)>
public "get"(): S
public static "of"<T>(arg0: $Supplier$$Type<(S)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(S)>
public static "of"<T>(arg0: $Supplier$$Type<(S)>): $NonNullSupplier<(S)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $RegistryEntry$$Type<R, S> = ($RegistryEntry<(R), (S)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $RegistryEntry$$Original<R, S> = $RegistryEntry<(R), (S)>;}
declare module "com.tterrag.registrate.util.entry.ItemProviderEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$ItemStack, $ItemStack$$Type} from "net.minecraft.world.item.ItemStack"
import {$ItemLike, $ItemLike$$Interface} from "net.minecraft.world.level.ItemLike"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Item, $Item$$Type} from "net.minecraft.world.item.Item"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"

export class $ItemProviderEntry<R extends $ItemLike, T extends $ItemLike> extends $RegistryEntry<(R), (T)> implements $ItemLike$$Interface {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<(R), (T)>)

public "asItem"(): $Item
public "asStack"(arg0: integer): $ItemStack
public "asStack"(): $ItemStack
public "is"(arg0: $Item$$Type): boolean
public "isIn"(arg0: $ItemStack$$Type): boolean
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $ItemProviderEntry$$Type<R, T> = ($ItemProviderEntry<(R), (T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $ItemProviderEntry$$Original<R, T> = $ItemProviderEntry<(R), (T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullSupplier" {
import {$Supplier$$Type, $Supplier$$Interface} from "java.util.function.Supplier"

export interface $NonNullSupplier$$Interface<T> extends $Supplier$$Interface<(T)> {

(): T
}

export class $NonNullSupplier<T> implements $NonNullSupplier$$Interface {
static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
 "lazy"(): $NonNullSupplier<(T)>
 "get"(): T
static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullSupplier$$Type<T> = (() => T);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullSupplier$$Original<T> = $NonNullSupplier<(T)>;}
declare module "com.tterrag.registrate.util.entry.EntityEntry" {
import {$NonNullSupplier, $NonNullSupplier$$Type} from "com.tterrag.registrate.util.nullness.NonNullSupplier"
import {$RegistryEntry, $RegistryEntry$$Type} from "com.tterrag.registrate.util.entry.RegistryEntry"
import {$Supplier$$Type} from "java.util.function.Supplier"
import {$Level$$Type} from "net.minecraft.world.level.Level"
import {$AbstractRegistrate$$Type} from "com.tterrag.registrate.AbstractRegistrate"
import {$Entity, $Entity$$Type} from "net.minecraft.world.entity.Entity"
import {$DeferredHolder$$Type} from "net.neoforged.neoforge.registries.DeferredHolder"
import {$Holder} from "net.minecraft.core.Holder"
import {$EntityType, $EntityType$$Type} from "net.minecraft.world.entity.EntityType"

export class $EntityEntry<T extends $Entity> extends $RegistryEntry<($EntityType<(never)>), ($EntityType<(T)>)> {
constructor(arg0: $AbstractRegistrate$$Type<(never)>, arg1: $DeferredHolder$$Type<($EntityType$$Type<(never)>), ($EntityType$$Type<(T)>)>)

public static "cast"<T extends $Entity>(arg0: $RegistryEntry$$Type<($EntityType$$Type<(never)>), ($EntityType$$Type<(T)>)>): $EntityEntry<(T)>
public "create"(arg0: $Level$$Type): T
public "is"(arg0: $Entity$$Type): boolean
public static "lazy"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public "get"(): T
public static "of"<T>(arg0: $Supplier$$Type<(T)>, arg1: $NonNullSupplier$$Type<(StringJS)>): $NonNullSupplier<(T)>
public static "of"<T>(arg0: $Supplier$$Type<(T)>): $NonNullSupplier<(T)>
public static "direct"<T>(arg0: T): $Holder<(T)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $EntityEntry$$Type<T> = ($EntityEntry<(T)>);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $EntityEntry$$Original<T> = $EntityEntry<(T)>;}
declare module "com.tterrag.registrate.util.nullness.NonNullBiFunction" {
import {$BiFunction, $BiFunction$$Interface} from "java.util.function.BiFunction"
import {$Function$$Type} from "java.util.function.Function"

export interface $NonNullBiFunction$$Interface<T, U, R> extends $BiFunction$$Interface<(T), (U), (R)> {

(arg0: T, arg1: U): R
}

export class $NonNullBiFunction<T, U, R> implements $NonNullBiFunction$$Interface {
 "apply"(arg0: T, arg1: U): R
 "andThen"<V>(arg0: $Function$$Type<(R), (V)>): $BiFunction<(T), (U), (V)>
}
/**
 * Class-specific type exported by ProbeJS, use global Type_
 * types for convenience unless there's a naming conflict.
 */
export type $NonNullBiFunction$$Type<T, U, R> = ((arg0: T, arg1: U) => R);
/**
 * Original type to represent the class type itself. Use in JSDoc only.
 */
export type $NonNullBiFunction$$Original<T, U, R> = $NonNullBiFunction<(T), (U), (R)>;}
